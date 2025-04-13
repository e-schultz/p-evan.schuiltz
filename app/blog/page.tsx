import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Search } from "lucide-react"

export default function BlogPage() {
  // In a real app, this would come from a database or CMS
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
    {
      title: "How to Create Data-Driven User Interfaces in Vue",
      description: "Learn techniques for building dynamic, data-driven interfaces with Vue.js.",
      date: "2019-11-05",
      tags: ["Vue", "JavaScript", "UI"],
      slug: "how-to-create-data-driven-user-interfaces-in-vue",
      image: "/placeholder.svg?height=200&width=400&query=Vue.js%20Data%20Visualization",
    },
    {
      title: "Are Your Unit Tests Failing for the Expected Reasons?",
      description: "Strategies to ensure your tests are actually testing what you think they are.",
      date: "2019-09-18",
      tags: ["Testing", "JavaScript", "Best Practices"],
      slug: "are-your-unit-tests-failing-for-the-expected-reasons",
      image: "/placeholder.svg?height=200&width=400&query=JavaScript%20Unit%20Testing",
    },
    {
      title: "Quick Start with Angular Modules",
      description: "A beginner's guide to understanding and working with Angular modules effectively.",
      date: "2019-07-22",
      tags: ["Angular", "JavaScript", "Modules"],
      slug: "quick-start-with-angular-modules",
      image: "/placeholder.svg?height=200&width=400&query=Angular%20Modules%20Diagram",
    },
  ]

  // Get all unique tags
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))

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
                  <div className="flex">
                    <Input placeholder="Search articles..." className="rounded-r-none" />
                    <Button variant="default" size="icon" className="rounded-l-none">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-muted">
                        {tag}
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
