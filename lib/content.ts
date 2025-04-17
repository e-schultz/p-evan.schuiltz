"use server"

import fs from "fs"
import path from "path"
import { cache } from "react"
import { headers } from "next/headers"

// Base directory for content
const contentDirectory = path.join(process.cwd(), "content")

// Ensure content directories exist
async function ensureContentDirectories() {
  const directories = ["blog", "projects", "home", "pages"]

  // Create content directory if it doesn't exist
  try {
    await fs.promises.access(contentDirectory)
  } catch {
    await fs.promises.mkdir(contentDirectory, { recursive: true })
  }

  // Create subdirectories if they don't exist
  for (const dir of directories) {
    const dirPath = path.join(contentDirectory, dir)
    try {
      await fs.promises.access(dirPath)
    } catch {
      await fs.promises.mkdir(dirPath, { recursive: true })
    }
  }
}

// Initialize directories
try {
  // We can't use await at the top level in a module, so we use a regular Promise
  ensureContentDirectories().catch((error) => {
    console.error("Error creating content directories:", error)
  })
} catch (error) {
  console.error("Error initializing content directories:", error)
}

// Read JSON content
export async function getJsonContent(contentPath: string) {
  // This function is only called on the server
  headers() // This will throw an error if called on the client

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
  // This function is only called on the server
  headers() // This will throw an error if called on the client

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
