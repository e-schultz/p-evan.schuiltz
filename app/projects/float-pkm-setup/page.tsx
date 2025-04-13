import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function FloatPkmSetupPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">FLOAT PKM Setup</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>PKM</Badge>
                <Badge>Next.js</Badge>
                <Badge>Knowledge Management</Badge>
                <Badge>Productivity</Badge>
                <Badge>v0</Badge>
              </div>
              <div className="flex gap-4 mb-8">
                <Button asChild>
                  <Link href="https://v0-next-js-float-setup.vercel.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/e-schultz/float-pkm-ideas-v0-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> View Source
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://v0.dev/chat/projects/IEt9SykcYxk" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View on v0.dev
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-13%20at%202.18.29%E2%80%AFAM-kQSWLGHzny9DYTriYMupxoBU3uJUpX.png"
                  alt="FLOAT PKM interface showing the thought map with Consciousness Core and AI assistant welcome message"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden border">
                <img
                  src="https://sjc.microlink.io/dFrukd8zQYV1upJlQ0_aPd93Bx1lgocAWWLZkQiEFA0Ly8eryHjeDrsztCeiFO6DWMKEEB9Gv36T9gDGZi-tJA.jpeg"
                  alt="GitHub repository for FLOAT PKM showing the project structure and files"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-8 prose dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                FLOAT PKM Setup is a starter kit for setting up a Personal Knowledge Management (PKM) system using the
                FLOAT methodology. It helps users quickly establish a framework for capturing, organizing, and
                connecting information in a thoughtful, structured way.
              </p>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Built with v0</h3>
                <p className="text-muted-foreground">
                  This project was created using{" "}
                  <a
                    href="https://v0.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    v0.dev
                  </a>
                  , Vercel's AI-powered design tool. The application was designed and generated through conversational
                  prompts, then extended with custom functionality.
                </p>
                <p className="text-muted-foreground mt-2">
                  View the original project at:{" "}
                  <a
                    href="https://v0.dev/chat/projects/IEt9SykcYxk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    v0.dev/chat/projects/IEt9SykcYxk
                  </a>
                </p>
              </div>

              <h2>What is FLOAT?</h2>
              <p>
                FLOAT (Floating Linked Ontological Associative Thinking) is a methodology for organizing knowledge and
                thoughts. It's designed to create a more fluid, interconnected system for managing information compared
                to traditional hierarchical systems.
              </p>

              <p>The FLOAT system is built around several key concepts:</p>

              <ul>
                <li>
                  <strong>Thought Spaces</strong> - Dedicated areas for different types of thinking (Main Consciousness,
                  Creative Ideation, Critical Analysis)
                </li>
                <li>
                  <strong>Time Echoes</strong> - Temporal organization of thoughts (Today, Yesterday, Last Week)
                </li>
                <li>
                  <strong>Thought Maps</strong> - Visual representations of connected ideas and concepts
                </li>
                <li>
                  <strong>AI Analysis</strong> - Intelligent assistance for discovering patterns and insights in your
                  thoughts
                </li>
              </ul>

              <h2>Technical Implementation</h2>
              <p>
                FLOAT PKM Setup is built using Next.js and TypeScript, providing a solid foundation for a modern web
                application. The project structure follows best practices for Next.js development, with clear separation
                of components, hooks, and utilities.
              </p>

              <p>Key technical features include:</p>

              <ul>
                <li>
                  <strong>Dark Mode UI</strong> - A sleek, dark-themed interface designed for extended use and reduced
                  eye strain
                </li>
                <li>
                  <strong>Interactive Thought Map</strong> - A visual graph for exploring connections between ideas
                </li>
                <li>
                  <strong>Local Storage</strong> - Persistent storage of thoughts and connections
                </li>
                <li>
                  <strong>Responsive Design</strong> - Works across devices from desktop to mobile
                </li>
                <li>
                  <strong>AI Integration</strong> - Framework for connecting with AI services for thought analysis
                </li>
              </ul>

              <h2>Getting Started</h2>
              <p>
                To use FLOAT PKM Setup, you can either visit the deployed version or clone the repository to customize
                it for your needs:
              </p>

              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>git clone https://github.com/e-schultz/float-pkm-ideas-v0-1.git</code>
              </pre>

              <p>After cloning, install dependencies and run the development server:</p>

              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>
                  npm install
                  <br />
                  npm run dev
                </code>
              </pre>

              <h2>Use Cases</h2>
              <p>FLOAT PKM Setup is ideal for:</p>

              <ul>
                <li>
                  <strong>Knowledge Workers</strong> - Organize research, notes, and ideas in a connected system
                </li>
                <li>
                  <strong>Writers</strong> - Map out narratives, characters, and plot points
                </li>
                <li>
                  <strong>Researchers</strong> - Connect findings and discover patterns across different sources
                </li>
                <li>
                  <strong>Students</strong> - Create a personal learning system that connects concepts across subjects
                </li>
                <li>
                  <strong>Creatives</strong> - Capture inspiration and develop ideas in a structured but flexible
                  environment
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
