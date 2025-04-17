import { getJsonContent } from "@/lib/content"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const contentPath = params.path.join("/")
    const content = await getJsonContent(contentPath)

    if (!content) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 })
    }

    return NextResponse.json(content)
  } catch (error) {
    console.error(`Error fetching content: ${error}`)
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 })
  }
}
