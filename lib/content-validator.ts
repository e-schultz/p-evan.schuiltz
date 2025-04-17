import type { BlogPost, Project } from "./content-types"

// Simple validation function for blog posts
export function validateBlogPost(post: BlogPost): string[] {
  const errors: string[] = []

  if (!post.title) errors.push("Blog post is missing a title")
  if (!post.content || post.content.length === 0) errors.push("Blog post has no content")
  if (!post.date) errors.push("Blog post is missing a date")
  if (!post.author) errors.push("Blog post is missing an author")

  // Check for content blocks with missing required fields
  post.content?.forEach((block, index) => {
    if (block.type === "heading" && !block.content) {
      errors.push(`Heading at index ${index} has no content`)
    }
    if (block.type === "paragraph" && !block.content) {
      errors.push(`Paragraph at index ${index} has no content`)
    }
    if (block.type === "list" && (!block.items || block.items.length === 0)) {
      errors.push(`List at index ${index} has no items`)
    }
  })

  return errors
}

// Simple validation function for projects
export function validateProject(project: Project): string[] {
  const errors: string[] = []

  if (!project.title) errors.push("Project is missing a title")
  if (!project.description) errors.push("Project is missing a description")
  if (!project.tags || project.tags.length === 0) errors.push("Project has no tags")

  // Check for content blocks with missing required fields
  project.fullDescription?.forEach((block, index) => {
    if (block.type === "heading" && !block.content) {
      errors.push(`Heading at index ${index} has no content`)
    }
    if (block.type === "paragraph" && !block.content) {
      errors.push(`Paragraph at index ${index} has no content`)
    }
    if (block.type === "list" && (!block.items || block.items.length === 0)) {
      errors.push(`List at index ${index} has no items`)
    }
  })

  return errors
}
