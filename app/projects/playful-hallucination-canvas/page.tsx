import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function PlayfulHallucinationCanvasPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                FLOAT.K8s - Playful Hallucination Canvas
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Kubernetes</Badge>
                <Badge>Canvas API</Badge>
                <Badge>WebGL</Badge>
                <Badge>Generative Art</Badge>
                <Badge>DevOps Visualization</Badge>
              </div>
              <div className="flex gap-4 mb-8">
                <Button asChild>
                  <Link
                    href="https://playful-hallucination-canvas.lovable.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/e-schultz/playful-hallucination-canvas"
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
                  src="/playful-hallucination-canvas.png"
                  alt="Playful Hallucination Canvas interface showing the FLOAT.K8s concept map with nodes for AIReinforcedBias, ChaoticPlay, and more"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden border">
                <img
                  src="/playful-hallucination-canvas-full.jpeg"
                  alt="Full view of the Playful Hallucination Canvas showing the interactive concept map"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-8 prose dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                FLOAT.K8s - Playful Hallucination Canvas is an experimental platform combining Kubernetes (K8s) concepts
                with interactive visual hallucinations. It creates a playful canvas where infrastructure management
                meets generative art, visualizing complex cognitive structures as dynamic, evolving patterns.
              </p>

              <blockquote className="italic">
                "Explore the evolution from chaotic play to FLOAT.K8s, a framework for managing meta-meta cognitive
                overwhelm"
              </blockquote>

              <h2>Concept & Design</h2>
              <p>
                The Playful Hallucination Canvas represents a conceptual framework that maps the relationships between
                different cognitive structures and technological concepts. At its core is FLOAT.K8s, a metaphorical
                extension of Kubernetes that manages not containers, but cognitive processes and meta-cognitive
                structures.
              </p>

              <p>The canvas visualizes several key concepts:</p>

              <ul>
                <li>
                  <strong>FLOAT.K8s</strong> - The central framework represented as a hexagon, managing meta-cognitive
                  processes
                </li>
                <li>
                  <strong>AIReinforcedBias</strong> - Representing "LLMs amplifying cognitive overload and reinforcing
                  existing thought patterns"
                </li>
                <li>
                  <strong>ChaoticPlay</strong> - The genesis or starting point of the framework
                </li>
                <li>
                  <strong>RitualisticShell</strong> - The Kubernetes-inspired core of the system
                </li>
                <li>
                  <strong>PersonalPhilosophy</strong> - Guiding principles for the framework
                </li>
                <li>
                  <strong>Meta-Meta Cognition</strong> - The recursive thinking about thinking about thinking
                </li>
                <li>
                  <strong>EldritchConnections</strong> - Mysterious links between seemingly unrelated concepts
                </li>
              </ul>

              <h2>Technical Implementation</h2>
              <p>
                The Playful Hallucination Canvas is built using modern web technologies with a focus on interactive
                visualization:
              </p>

              <ul>
                <li>Canvas API and WebGL for the fluid, dynamic visualizations</li>
                <li>Force-directed graph layout for the relationship mapping</li>
                <li>Real-time interaction allowing users to explore and manipulate the concept map</li>
                <li>
                  "Drift Mode" that enables autonomous movement and evolution of the nodes, creating a living, breathing
                  visualization
                </li>
              </ul>

              <h2>Philosophical Underpinnings</h2>
              <p>
                At its heart, this project explores the intersection of technology, cognition, and philosophy. It poses
                questions about how we organize and manage our thoughts in an increasingly complex digital landscape,
                using Kubernetes as a metaphor for cognitive orchestration.
              </p>

              <p>
                The recursive nature of the project is captured in its self-referential elements, such as the quote
                "what if i am eating my own hallucinations?" - suggesting a system that contemplates its own existence
                and processes.
              </p>

              <h2>User Experience</h2>
              <p>Users can interact with the canvas in multiple ways:</p>

              <ul>
                <li>Exploring the relationships between different concepts by navigating the visual space</li>
                <li>Examining individual nodes to understand their role in the overall framework</li>
                <li>Toggling "Drift Mode" to observe the autonomous evolution of the system</li>
                <li>Adding new thoughts or prompts through the input field at the bottom</li>
                <li>
                  Switching between different views (Logic View and Ritual View) to understand concepts from different
                  perspectives
                </li>
              </ul>

              <p className="text-muted-foreground text-sm italic mt-8">
                "recursion - what if i am eating my own hallucinations?"
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
