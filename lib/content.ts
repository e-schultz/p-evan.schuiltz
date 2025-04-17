import fs from "fs"
import path from "path"
import { cache } from "react"

// Base directory for content
const contentDirectory = path.join(process.cwd(), "content")

// Ensure content directories exist
function ensureContentDirectories() {
  const directories = ["blog", "projects", "home", "pages"]

  // Create content directory if it doesn't exist
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory)
  }

  // Create subdirectories if they don't exist
  directories.forEach((dir) => {
    const dirPath = path.join(contentDirectory, dir)
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath)
    }
  })
}

// Try to ensure directories exist
try {
  ensureContentDirectories()
} catch (error) {
  console.error("Error creating content directories:", error)
}

// Read JSON content
export async function getJsonContent(contentPath: string) {
  const fullPath = path.join(contentDirectory, `${contentPath}.json`)
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8")
    return JSON.parse(fileContents)
  } catch (error) {
    console.error(`Error reading JSON file: ${fullPath}`, error)
    return null
  }
}

// Cache the content loading to improve performance
export const getCachedJsonContent = cache(getJsonContent)

// Function to get all files in a directory with a specific extension
export function getFilesInDirectory(directory: string, extension: string) {
  const fullPath = path.join(contentDirectory, directory)
  try {
    if (!fs.existsSync(fullPath)) {
      return []
    }
    const files = fs.readdirSync(fullPath)
    return files.filter((file) => file.endsWith(extension))
  } catch (error) {
    console.error(`Error reading directory: ${fullPath}`, error)
    return []
  }
}

// Get all JSON files in a directory
export function getJsonFilesInDirectory(directory: string) {
  return getFilesInDirectory(directory, ".json")
}
