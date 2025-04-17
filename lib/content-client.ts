"use client"

import { cache } from "react"
import type { BlogPost } from "./content-types"

// Client-side content fetching
export async function fetchJsonContent(contentPath: string) {
  try {
    const response = await fetch(`/api/content/${contentPath}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch content: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Error fetching content: ${contentPath}`, error)
    return null
  }
}

// Cache the content loading to improve performance
export const getCachedClientContent = cache(fetchJsonContent)

// Client-side search function
export async function searchClientPosts(query: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
    if (!response.ok) {
      throw new Error(`Search failed: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error("Error searching posts:", error)
    return []
  }
}
