import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "JavaScript/React Training",
      description:
        "A multi-day JavaScript/React workshop that has been taught to over 200 students in Toronto, Ottawa and Glasgow.",
      tags: ["React", "JavaScript", "TypeScript", "Education"],
      github: "https://github.com/e-schultz/ts-js-react-training",
      link: null,
      image: "/coding-collaboration.png",
    },
    {
      title: "Angular Training Book",
      description: "Contributed to Rangle's Angular Training book, a comprehensive guide to learning Angular.",
      tags: ["Angular", "Education", "Documentation"],
      github: null,
      link: "https://angular-2-training-book.rangle.io/",
      image: "/angular-learning-journey.png",
    },
    {
      title: "Angular-Redux",
      description:
        "Maintained bindings for Redux to Angular which was used on several projects at Rangle, and saw adoption outside of Rangle.",
      tags: ["Angular", "Redux", "Open Source"],
      github: "https://github.com/angular-redux/store",
      link: null,
      image: "/angular-redux-flow.png",
    },
    {
      title: "Redux-Beacon",
      description: "Contributed to redux-beacon, analytics integration for redux and co-presented at React Europe.",
      tags: ["Redux", "Analytics", "Open Source"],
      github: "https://github.com/rangle/redux-beacon",
      link: null,
      image: "/redux-analytics-flow.png",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/50" id="projects">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A selection of my work, including open source contributions, training materials, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {project.link && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Visit
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
