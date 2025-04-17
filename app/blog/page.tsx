import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

// This page should be updated to use the JSON content instead of hardcoded blog posts

// Replace the hardcoded posts array with data fetched from JSON files
import { getAllBlogPosts, getAllTags } from "@/lib/blog"
import { BlogSearch } from "@/components/blog-search"

export default async function BlogPage() {
  const posts = await getAllBlogPosts()
  const allTags = await getAllTags()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog</h1>
              <p className="text-xl text-muted-foreground">
                Thoughts, tutorials, and insights on web development, team leadership, and technology.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="md:col-span-1 space-y-8">
                {/* Search */}
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">Search</h3>
                  <BlogSearch />
                </div>

                {/* Categories */}
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-muted">
                        <Link href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}>{tag}</Link>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">Recent Posts</h3>
                  <ul className="space-y-2">
                    {posts.slice(0, 3).map((post, index) => (
                      <li key={index}>
                        <Link href={`/blog/${post.slug}`} className="text-sm hover:text-primary">
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Blog Posts */}
              <div className="md:col-span-3 space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {posts.map((post, index) => (
                    <Card key={index} className="flex flex-col h-full">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <Calendar className="mr-2 h-4 w-4" />
                          {post.date}
                        </div>
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary">
                              <Link href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}>{tag}</Link>
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" asChild className="w-full">
                          <Link href={`/blog/${post.slug}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
