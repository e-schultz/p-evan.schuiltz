import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function FloatingDigitalGrimoirePage() {
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Floating Digital Grimoire</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>React</Badge>
                <Badge>WebGL</Badge>
                <Badge>Knowledge Management</Badge>
                <Badge>Interactive Design</Badge>
              </div>
              <div className="flex gap-4 mb-8">
                <Button asChild>
                  <Link href="https://floating-digital-grimoire.lovable.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/e-schultz/floating-digital-grimoire"
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
                src="/floating-digital-grimoire.png"
                alt="Floating Digital Grimoire interface showing code fragments and glyph constellations"
                className="w-full"
              />
            </div>

            <div className="space-y-8 prose dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                The Floating Digital Grimoire is a digital knowledge repository inspired by ancient grimoires. This
                interactive application allows users to collect, organize, and explore knowledge in a visually rich
                environment with magical aesthetics.
              </p>

              <blockquote className="italic">
                "A digital tapestry of fragmented poetry, broken code, and forgotten commands."
              </blockquote>

              <h2>Concept & Design</h2>
              <p>
                Drawing inspiration from ancient magical texts and modern programming paradigms, the Floating Digital
                Grimoire creates a unique space where code becomes incantation and knowledge becomes magic. The project
                explores the intersection of technology and mysticism, treating programming as a form of modern magic.
              </p>

              <p>The interface is divided into three main sections:</p>

              <ul>
                <li>
                  <strong>Code Fragments</strong> - A collection of recursive functions and poetic code snippets that
                  blur the line between programming and incantation
                </li>
                <li>
                  <strong>Central Activation</strong> - The core of the grimoire that "transcends interface boundaries,
                  awakening dormant connections"
                </li>
                <li>
                  <strong>Glyph Constellation</strong> - A visual representation of interconnected symbols and concepts
                  that form a navigable knowledge space
                </li>
              </ul>

              <h2>Technical Implementation</h2>
              <p>
                The Floating Digital Grimoire is built using React for the component structure and WebGL for the
                interactive visual elements. The application features:
              </p>

              <ul>
                <li>Custom shader effects for the glowing symbols and atmospheric background</li>
                <li>Interactive code fragments that respond to user interaction</li>
                <li>A knowledge management system disguised as magical rituals</li>
                <li>Responsive design that maintains the mystical aesthetic across devices</li>
              </ul>

              <h2>User Experience</h2>
              <p>
                Users interact with the grimoire through a combination of traditional interface elements and more
                experimental interactions. The experience is designed to feel both familiar and otherworldly,
                encouraging exploration and discovery.
              </p>

              <p>As users navigate the grimoire, they can:</p>

              <ul>
                <li>Collect and organize fragments of knowledge</li>
                <li>Discover connections between seemingly unrelated concepts</li>
                <li>Create their own "spells" by combining different elements</li>
                <li>Share their discoveries with other users</li>
              </ul>

              <p className="text-muted-foreground text-sm italic mt-8">
                "The digital grimoire archives are constantly shifting and reforming."
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
