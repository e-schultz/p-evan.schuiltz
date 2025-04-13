import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"

export function BlogPreview() {
  const posts = [
    {
      title: "Refactor to Hooks, not Classes",
      description: "Learn why React Hooks are a better choice than class components for modern React applications.",
      date: "2020-05-15",
      tags: ["React", "Hooks", "JavaScript"],
      slug: "refactor-to-react-hooks-not-classes",
      image: "/react-hooks-flow.png",
    },
    {
      title: "Simplifying React Forms with Hooks",
      description: "A guide to creating simpler, more maintainable form handling in React using hooks.",
      date: "2020-04-22",
      tags: ["React", "Forms", "Hooks"],
      slug: "simplifying-controlled-inputs-with-hooks",
      image: "/placeholder.svg?height=200&width=400&query=React%20Form%20Components",
    },
    {
      title: "Improving Your Mental Model of useEffect",
      description: "Develop a better understanding of React's useEffect hook and how to use it effectively.",
      date: "2020-03-10",
      tags: ["React", "useEffect", "Hooks"],
      slug: "improving-your-mental-model-of-useeffect",
      image: "/placeholder.svg?height=200&width=400&query=React%20useEffect%20Diagram",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background" id="blog">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Thoughts, tutorials, and insights on web development, team leadership, and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
                <CardDescription className="line-clamp-3">{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
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

        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link href="/blog">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
