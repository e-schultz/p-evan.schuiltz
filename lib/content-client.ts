"use client"

import { cache } from "react"

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
