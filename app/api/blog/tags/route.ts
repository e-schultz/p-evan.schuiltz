import { getAllTags } from "@/lib/content-api"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic" // Ensure this is always a dynamic route

export async function GET() {
  try {
    const tags = await getAllTags()
    return NextResponse.json(tags)
  } catch (error) {
    console.error("Error fetching tags:", error)
    return NextResponse.json({ error: "Failed to fetch tags" }, { status: 500 })
  }
}
