import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/content-server"
import { renderContentBlocks } from "@/lib/format-content"
import { ContentError } from "@/components/content-error"

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const slugs = await getAllBlogSlugs()
    return slugs.map((slug) => ({ slug }))
  } catch (error) {
    console.error("Error generating static params for blog posts:", error)
    return []
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await getBlogPostBySlug(params.slug)

    if (!post) {
      notFound()
    }

    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <article className="container max-w-4xl py-12">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
              </Link>
            </Button>

            <div className="mb-8">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  {post.author}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">{renderContentBlocks(post.content)}</div>
          </article>
        </main>
        <SiteFooter />
      </div>
    )
  } catch (error) {
    console.error(`Error loading blog post: ${params.slug}`, error)
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 container py-12">
          <ContentError
            title="Failed to Load Blog Post"
            message="We're having trouble loading this blog post. Please try again later."
            backLink="/blog"
            backText="Back to Blog"
          />
        </main>
        <SiteFooter />
      </div>
    )
  }
}
