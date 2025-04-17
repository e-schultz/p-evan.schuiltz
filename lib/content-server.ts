"use server"

import fs from "fs"
import path from "path"
import { cache } from "react"
import type { BlogPost, Project } from "./content-types"

// Base directory for content
const contentDirectory = path.join(process.cwd(), "content")

// Ensure content directories exist in development mode only
async function ensureContentDirectories() {
  const directories = ["blog", "projects", "home", "pages"]

  try {
    await fs.promises.access(contentDirectory)
  } catch {
    await fs.promises.mkdir(contentDirectory, { recursive: true })
  }

  for (const dir of directories) {
    const dirPath = path.join(contentDirectory, dir)
    try {
      await fs.promises.access(dirPath)
    } catch {
      await fs.promises.mkdir(dirPath, { recursive: true })
    }
  }
}

// Initialize directories - but only in development
if (process.env.NODE_ENV === "development") {
  ensureContentDirectories().catch((error) => {
    console.error("Error creating content directories:", error)
  })
}

// Read JSON content
export async function getJsonContent(contentPath: string) {
  const fullPath = path.join(contentDirectory, `${contentPath}.json`)
  try {
    const fileContents = await fs.promises.readFile(fullPath, "utf8")
    return JSON.parse(fileContents)
  } catch (error) {
    console.error(`Error reading JSON file: ${fullPath}`, error)
    return null
  }
}

// Cache the content loading to improve performance
export const getCachedJsonContent = cache(getJsonContent)

// Function to get all files in a directory with a specific extension
export async function getFilesInDirectory(directory: string, extension: string) {
  const fullPath = path.join(contentDirectory, directory)
  try {
    try {
      await fs.promises.access(fullPath)
    } catch {
      return []
    }
    const files = await fs.promises.readdir(fullPath)
    return files.filter((file) => file.endsWith(extension))
  } catch (error) {
    console.error(`Error reading directory: ${fullPath}`, error)
    return []
  }
}

// Get all JSON files in a directory
export async function getJsonFilesInDirectory(directory: string) {
  return await getFilesInDirectory(directory, ".json")
}

// Blog-specific functions
export const getAllBlogSlugs = cache(async (): Promise<string[]> => {
  try {
    const fileNames = await getJsonFilesInDirectory("blog")
    return fileNames.map((file) => file.replace(/\.json$/, ""))
  } catch (error) {
    console.error("Error reading blog directory:", error)
    return []
  }
})

export const getAllBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const slugs = await getAllBlogSlugs()

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getCachedJsonContent(`blog/${slug}`)
      return post as BlogPost
    }),
  )

  // Sort by date, newest first
  return posts.filter(Boolean).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

export const getLatestBlogPosts = cache(async (count: number): Promise<BlogPost[]> => {
  const allPosts = await getAllBlogPosts()
  return allPosts.slice(0, count)
})

export const getBlogPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  try {
    return (await getCachedJsonContent(`blog/${slug}`)) as BlogPost
  } catch (error) {
    console.error(`Error reading blog post with slug: ${slug}`, error)
    return null
  }
})

export const getPostsByCategory = cache(async (category: string): Promise<BlogPost[]> => {
  const allPosts = await getAllBlogPosts()
  return allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
})

export const getPostsByTag = cache(async (tag: string): Promise<BlogPost[]> => {
  const allPosts = await getAllBlogPosts()
  return allPosts.filter((post) => post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
})

export const getAllCategories = cache(async (): Promise<string[]> => {
  const allPosts = await getAllBlogPosts()
  const categoriesSet = new Set(allPosts.map((post) => post.category))
  return Array.from(categoriesSet)
})

export const getAllTags = cache(async (): Promise<string[]> => {
  const allPosts = await getAllBlogPosts()
  const tagsSet = new Set(allPosts.flatMap((post) => post.tags))
  return Array.from(tagsSet)
})

export const searchPosts = cache(async (query: string): Promise<BlogPost[]> => {
  const allPosts = await getAllBlogPosts()
  const lowercaseQuery = query.toLowerCase()

  return allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      post.category.toLowerCase().includes(lowercaseQuery),
  )
})

// Project-specific functions
export const getAllProjects = cache(async (): Promise<Project[]> => {
  try {
    // Get all JSON files in the projects directory
    const fileNames = await getJsonFilesInDirectory("projects")

    // Load each project
    const projects = await Promise.all(
      fileNames.map(async (fileName) => {
        const slug = fileName.replace(/\.json$/, "")
        return await getProjectBySlug(slug)
      }),
    )

    // Filter out any null values and return
    return projects.filter(Boolean) as Project[]
  } catch (error) {
    console.error("Error reading projects directory:", error)
    return []
  }
})

export const getFeaturedProjects = cache(async (): Promise<Project[]> => {
  const allProjects = await getAllProjects()
  return allProjects.filter((project) => project.featured)
})

export const getProjectBySlug = cache(async (slug: string): Promise<Project | null> => {
  try {
    const project = await getCachedJsonContent(`projects/${slug}`)
    if (!project) {
      console.error(`Project not found: ${slug}`)
      return null
    }
    return project as Project
  } catch (error) {
    console.error(`Error reading project with slug: ${slug}`, error)
    return null
  }
})
