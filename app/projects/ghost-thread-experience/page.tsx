import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function GhostThreadExperiencePage() {
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Ghost Thread Experience</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Vite</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>shadcn/ui</Badge>
              </div>
              <div className="flex gap-4 mb-8">
                <Button asChild>
                  <Link href="https://ghost-thread-experience.lovable.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/e-schultz/ghost-thread-experience"
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
            <div className="grid gap-8 mb-12">
              <div className="rounded-lg overflow-hidden border">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-13%20at%202.43.52%E2%80%AFAM-isOLLuh6DMw9oV10KlnaXWtSzxjYDl.png"
                  alt="Ghost Thread Experience interface showing the Scratch Viewer with a notebook page"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden border">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-13%20at%202.44.14%E2%80%AFAM-DUz3RUkUrIMw6DK2agXDIEMkoaKdWz.png"
                  alt="ECHO READER interface showing ghost-trace.init session with entries and timestamps"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden border">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-13%20at%202.44.04%E2%80%AFAM-Xs2cZyB2hnahSHiAL7bkjSLTG7sfL8.png"
                  alt="Scratch Viewer for ID:01 showing split view of handwritten note and parsed text"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden border">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-13%20at%202.40.51%E2%80%AFAM-2n6rI9wDm9i4dUJNmlgyjkVgQXLeAl.png"
                  alt="Scratch Viewer for ID:02 showing continued thoughts with handwritten notes and parsed text"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-8 prose dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                Ghost Thread Experience is an experimental web application that explores the concept of "ghost threads"
                - digital remnants of handwritten notes and thoughts that persist in digital spaces. The project
                simulates a terminal/console interface for viewing and interacting with these digitized thoughts.
              </p>

              <p>
                With its retro-futuristic aesthetic featuring a dark theme with magenta/pink accents, the application
                creates an immersive environment that blurs the line between analog and digital, past and present.
              </p>

              <h2>Key Features</h2>
              <ul>
                <li>
                  <strong>ECHO READER</strong> - A terminal-like interface that displays chronological entries from
                  ghost-trace sessions
                </li>
                <li>
                  <strong>Scratch Viewer</strong> - A split-view interface showing both the original handwritten notes
                  and their AI-parsed text equivalents
                </li>
                <li>
                  <strong>Session Tracking</strong> - Organizes thoughts and notes into discrete sessions with
                  timestamps and confidence scores
                </li>
                <li>
                  <strong>Theme Modes</strong> - Features a distinctive "DUSK" theme (Softer Magenta + Charcoal) for a
                  unique visual experience
                </li>
              </ul>

              <h2>Technical Implementation</h2>
              <p>
                Ghost Thread Experience is built using modern web technologies with a focus on creating an immersive,
                atmospheric interface:
              </p>

              <ul>
                <li>
                  <strong>React + TypeScript</strong> - The application is built with React and TypeScript (95.8% of the
                  codebase) for type-safe component development
                </li>
                <li>
                  <strong>Vite</strong> - Uses Vite as the build tool for fast development and optimized production
                  builds
                </li>
                <li>
                  <strong>Tailwind CSS</strong> - Leverages Tailwind for styling, with custom theme configuration for
                  the unique color palette
                </li>
                <li>
                  <strong>shadcn/ui</strong> - Incorporates shadcn/ui components for consistent UI elements while
                  maintaining the custom aesthetic
                </li>
              </ul>

              <h2>Concept and Inspiration</h2>
              <p>
                The Ghost Thread Experience explores several intriguing questions about the intersection of analog and
                digital thought capture:
              </p>

              <blockquote className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary/50 italic">
                "pen x paper first, if I want to digitally capture, can AI read my scratch?"
              </blockquote>

              <p>
                This project examines how our thoughts transition from handwritten notes to digital formats, and how AI
                can bridge that gap by interpreting and preserving our analog thinking. The term "ghost threads"
                suggests the ethereal nature of these thought remnants - neither fully physical nor fully digital, but
                existing in a liminal space between the two.
              </p>

              <p>
                The terminal-inspired interface creates a sense of accessing an archival system, as if the user is
                excavating digital artifacts from the past. This aesthetic choice reinforces the project's themes of
                memory, preservation, and the evolution of thought capture methods.
              </p>

              <h2>User Experience</h2>
              <p>
                Users can navigate through different "ghost-trace" sessions, viewing both the original handwritten notes
                and their parsed digital equivalents. The interface mimics a command-line environment, creating an
                immersive experience that feels like accessing a specialized system for thought archaeology.
              </p>

              <p>
                The application's distinctive color scheme - primarily dark backgrounds with magenta/pink accents -
                creates a unique visual identity that enhances the otherworldly feeling of accessing thoughts that exist
                between analog and digital realms.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
