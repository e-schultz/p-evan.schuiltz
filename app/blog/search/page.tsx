"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Search } from "lucide-react"

// Define the BlogPost type here to avoid importing from server-only module
type BlogPost = {
  title: string
  slug: string
  date: string
  author: string
  excerpt: string
  content: any[]
  image: string
  tags: string[]
  category: string
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults([])
        return
      }

      setIsLoading(true)
      try {
        // Use the API route to search posts
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const data = await response.json()
        setResults(data)
      } catch (error) {
        console.error("Error searching posts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchResults()
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (searchQuery) {
      params.set("q", searchQuery)
    }
    window.history.pushState(null, "", `/blog/search?${params.toString()}`)

    const fetchResults = async () => {
      setIsLoading(true)
      try {
        // Use the API route to search posts
        const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
        const data = await response.json()
        setResults(data)
      } catch (error) {
        console.error("Error searching posts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchResults()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Search Results</h1>
              <p className="text-xl text-muted-foreground mb-8">
                {query ? `Showing results for "${query}"` : "Search for articles"}
              </p>
              <form onSubmit={handleSearch} className="flex max-w-lg mx-auto">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="rounded-r-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="rounded-l-none">
                  <Search className="h-4 w-4 mr-2" /> Search
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                <p className="mt-4 text-muted-foreground">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((post, index) => (
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
                      <Badge variant="outline" className="mb-2">
                        <Link href={`/blog/category/${encodeURIComponent(post.category.toLowerCase())}`}>
                          {post.category}
                        </Link>
                      </Badge>
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
            ) : query ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">No results found</h2>
                <p className="text-muted-foreground mb-6">No articles match your search for "{query}".</p>
                <Button asChild>
                  <Link href="/blog">Browse all articles</Link>
                </Button>
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Enter a search term</h2>
                <p className="text-muted-foreground mb-6">Type in the search box above to find articles.</p>
                <Button asChild>
                  <Link href="/blog">Browse all articles</Link>
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
