import { searchPosts } from "@/lib/content-api"
import { type NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic" // Ensure this is always a dynamic route

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("q") || ""

  if (!query) {
    return NextResponse.json([])
  }

  try {
    const results = await searchPosts(query)
    return NextResponse.json(results)
  } catch (error) {
    console.error("Error searching posts:", error)
    return NextResponse.json({ error: "Failed to search posts" }, { status: 500 })
  }
}
