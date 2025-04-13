import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function FloatingEpistemicNexusPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Floating Epistemic Nexus</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>D3.js</Badge>
                <Badge>Graph Visualization</Badge>
                <Badge>Knowledge Management</Badge>
                <Badge>React</Badge>
              </div>
              <div className="flex gap-4 mb-8">
                <Button asChild>
                  <Link href="https://floating-epistemic-nexus.lovable.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/e-schultz/floating-epistemic-nexus"
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
            <div className="grid gap-8">
              <div className="rounded-lg overflow-hidden border">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-12%20at%2011.30.45%E2%80%AFPM-UeDapuCHxuF9qCT4CgLW0Qmizoh5NT.png"
                  alt="The Seven Elements interface showing the foundational concepts of FLOAT"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden border">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-12%20at%2011.31.02%E2%80%AFPM-2RZik1PDrQPFLDW8hNbBCkLFMHzxMB.png"
                  alt="Memory as a Live System concept page"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden border">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-12%20at%2011.30.35%E2%80%AFPM-5C05oeI7zLsTHBlWvRgjOOu3ettrTb.png"
                  alt="FLOAT Origin welcome page"
                  className="w-full"
                />
              </div>
            </div>

            <div className="mt-12 space-y-8 prose dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                Floating Epistemic Nexus is an interconnected knowledge graph visualization tool that helps users
                explore relationships between concepts, ideas, and information. It creates a dynamic, navigable network
                of knowledge based on the FLOAT philosophy.
              </p>

              <h2>The FLOAT System</h2>
              <p>
                At its core, FLOAT (Floating Linked Ontological Associative Thinking) is a philosophical and visual
                framework for organizing knowledge. The system is built around seven key elements:
              </p>

              <ul>
                <li>
                  <strong>Heresy as Interface</strong> - A visual exploration of heresy as an unauthorized protocol—an
                  interface with forbidden truths.
                </li>
                <li>
                  <strong>Identity as Wayfinding</strong> - You are not the self—you are the compass forged in
                  wandering.
                </li>
                <li>
                  <strong>Knowledge as Recursive Ritual</strong> - Nothing is truly known unless it can be called
                  again—ritually, structurally, reverently.
                </li>
                <li>
                  <strong>Horror as Unstable Epistemology</strong> - The monster is not the unknown—it is what breaks
                  your model of knowing.
                </li>
                <li>
                  <strong>Liberation Through Breakdown</strong> - Control systems collapse under recursive
                  self-awareness. Liberation comes not by repair, but by reassembly.
                </li>
                <li>
                  <strong>Memory as a Live System</strong> - Memory is not recall. It is a ritual
                  architecture—responsive, co-evolving, alive.
                </li>
                <li>
                  <strong>FLOAT Itself</strong> - FLOAT is not a tool. It is a way of surviving the archive. A rebellion
                  staged in notation.
                </li>
              </ul>

              <h2>Technical Implementation</h2>
              <p>
                The Floating Epistemic Nexus is built using React for the UI components and D3.js for the interactive
                graph visualizations. The knowledge graph is dynamically generated and allows for exploration through an
                intuitive interface that encourages discovery and connection-making.
              </p>

              <h2>Key Features</h2>
              <ul>
                <li>Interactive knowledge graph visualization</li>
                <li>Concept exploration through connected nodes</li>
                <li>Philosophical framework based on the seven FLOAT elements</li>
                <li>Dark-themed, minimalist interface for focused exploration</li>
                <li>Responsive design that works across devices</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
