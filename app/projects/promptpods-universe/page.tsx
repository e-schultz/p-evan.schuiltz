import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function PromptpodsUniversePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Button variant="ghost" asChild className="mb-8">
                <Link href="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to all projects
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Promptpods Universe</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>AI</Badge>
                <Badge>Knowledge Management</Badge>
              </div>
              <div className="flex gap-4 mb-8">
                <Button asChild>
                  <Link href="https://promptpods-universe.lovable.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/e-schultz/promptpods-universe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> View Source
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-4xl">
            <div className="rounded-lg overflow-hidden border mb-12">
              <img
                src="/promptpods-universe.png"
                alt="Promptpods Universe interface showing the ritual manager and pod system"
                className="w-full"
              />
            </div>

            <div className="space-y-8 prose dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                Promptpods Universe is a containerized environment for organizing thoughts, prompts, and contexts. It
                helps users create isolated containers for different thinking contexts, making it easier to manage
                complex projects and ideas.
              </p>

              <h2>The Pod System</h2>
              <p>
                At the core of Promptpods Universe is the concept of "pods" - isolated containers that encapsulate
                specific contexts, workflows, or projects. Each pod can contain:
              </p>

              <ul>
                <li>
                  <strong>Identities</strong> - Different personas or thinking modes that can be activated within a pod
                </li>
                <li>
                  <strong>Rituals</strong> - Structured workflows or processes that guide thinking and creation
                </li>
                <li>
                  <strong>Files</strong> - Documents, notes, and resources specific to the pod's context
                </li>
              </ul>

              <p>
                This containerization approach allows users to switch between different contexts cleanly, without the
                mental overhead of context-switching or the confusion of mixing unrelated ideas.
              </p>

              <h2>Ritual Manager</h2>
              <p>
                The Ritual Manager is a key feature of Promptpods Universe that allows users to create, edit, and
                activate structured workflows. Rituals consist of:
              </p>

              <ul>
                <li>A name and description that defines the ritual's purpose</li>
                <li>A series of steps that guide the user through the process</li>
                <li>Activation controls that determine when and how the ritual is triggered</li>
              </ul>

              <p>
                Rituals can be as simple as a daily reflection practice or as complex as a multi-stage creative process.
                The system is designed to be flexible while providing enough structure to make complex thinking
                processes more manageable.
              </p>

              <h2>Technical Implementation</h2>
              <p>
                Promptpods Universe is built using Next.js and TypeScript, with a focus on creating a responsive,
                intuitive interface for knowledge management. The application features:
              </p>

              <ul>
                <li>A dark-themed interface optimized for extended use</li>
                <li>Real-time updates and synchronization across devices</li>
                <li>Integration capabilities with AI tools and services</li>
                <li>Extensible architecture that allows for custom plugins and extensions</li>
              </ul>

              <h2>Use Cases</h2>
              <p>Promptpods Universe is particularly useful for:</p>

              <ul>
                <li>Writers managing multiple projects or storylines</li>
                <li>Researchers organizing different areas of investigation</li>
                <li>Knowledge workers who need to switch between different clients or projects</li>
                <li>AI prompt engineers working with different models or domains</li>
                <li>Anyone who needs to maintain clear boundaries between different thinking contexts</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
