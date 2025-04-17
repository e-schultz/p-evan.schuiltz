import { getAllCategories } from "@/lib/content-api"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic" // Ensure this is always a dynamic route

export async function GET() {
  try {
    const categories = await getAllCategories()
    return NextResponse.json(categories)
  } catch (error) {
    console.error("Error fetching categories:", error)
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}
