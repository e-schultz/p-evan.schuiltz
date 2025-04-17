import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { getPostsByCategory, getAllCategories } from "@/lib/content-server"

export async function generateStaticParams() {
  try {
    const categories = await getAllCategories()
    return categories.map((category) => ({ category: category.toLowerCase() }))
  } catch (error) {
    console.error("Error generating static params for categories:", error)
    return []
  }
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const decodedCategory = decodeURIComponent(params.category)
  const posts = await getPostsByCategory(decodedCategory)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Category: {decodedCategory}</h1>
              <p className="text-xl text-muted-foreground">Browse all articles in the {decodedCategory} category</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <Card key={index} className="flex flex-col h-full">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.coverImage || post.image || "/placeholder.svg"}
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
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">No posts found</h2>
                <p className="text-muted-foreground mb-6">There are no posts in the {decodedCategory} category yet.</p>
                <Button asChild>
                  <Link href="/blog">Back to all posts</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
