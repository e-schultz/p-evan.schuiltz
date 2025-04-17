import path from "path"
import fs from "fs"
import { cache } from "react"
import { getCachedJsonContent } from "./content"

const blogDirectory = path.join(process.cwd(), "content/blog")

export type BlogPost = {
  title: string
  slug: string
  date: string
  author: string
  excerpt: string
  content: any[]
  image: string
  tags: string[]
  category: string
}

export const getAllBlogSlugs = cache(async (): Promise<string[]> => {
  try {
    const fileNames = fs.readdirSync(blogDirectory)
    return fileNames.filter((file) => file.endsWith(".json")).map((file) => file.replace(/\.json$/, ""))
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
