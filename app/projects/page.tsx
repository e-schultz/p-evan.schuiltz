import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getAllProjects } from "@/lib/content-server"

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h1>
              <p className="text-xl text-muted-foreground">
                A collection of my work, including open source contributions, experiments, and educational resources.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} featured />
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">More Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Open Source Contributions */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Open Source Contributions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm passionate about contributing to open source projects and giving back to the developer community.
                Check out my GitHub profile to see more of my work.
              </p>
              <Button asChild size="lg">
                <Link href="https://github.com/e-schultz" target="_blank" rel="noopener noreferrer">
                  View GitHub Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
