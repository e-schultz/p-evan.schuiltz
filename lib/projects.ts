"use server"

import path from "path"
import { cache } from "react"
import { getCachedJsonContent, getJsonFilesInDirectory } from "./content"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export type Project = {
  title: string
  slug: string
  description: string
  tags: string[]
  github?: string
  link?: string
  v0Link?: string
  image?: string
  featured: boolean
  fullDescription?: any[]
  screenshots?: { image: string; alt: string }[]
}

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
