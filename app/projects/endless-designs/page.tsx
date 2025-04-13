import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function EndlessDesignsPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Endless Designs</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Generative Design</Badge>
                <Badge>Creative Tools</Badge>
                <Badge>React</Badge>
                <Badge>Canvas API</Badge>
                <Badge>v0</Badge>
              </div>
              <div className="flex gap-4 mb-8">
                <Button asChild>
                  <Link href="https://v0-endless-designs.vercel.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/e-schultz/v0-endless-designs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> View Source
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://v0.dev/chat/projects/IESm6pp4Au1" target="_blank" rel="noopener noreferrer">
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-13%20at%2012.19.21%E2%80%AFAM-WZWUXguoj0njRnbITnrxvs6f9PYNZs.png"
                  alt="Endless Designs main interface showing a geometric pattern of diamonds with the title 'Infinite Tessellation'"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden border">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-13%20at%2012.19.45%E2%80%AFAM-EzGinekJlbQY7XArxEifxnk0TBxX9j.png"
                  alt="Endless Designs gallery view showing multiple geometric pattern variations including tessellations, spirals, and fractals"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-8 prose dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                Endless Designs is a generative design tool that creates infinite variations of geometric patterns and
                compositions. With a minimalist black and white aesthetic, it generates beautiful tessellations,
                spirals, fractals, and abstract compositions that can be used for inspiration, backgrounds, or as
                starting points for more complex designs.
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
                  , Vercel's AI-powered design tool. The entire application was designed and generated through
                  conversational prompts, showcasing the power of AI in creative design workflows.
                </p>
                <p className="text-muted-foreground mt-2">
                  View the original project at:{" "}
                  <a
                    href="https://v0.dev/chat/projects/IESm6pp4Au1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    v0.dev/chat/projects/IESm6pp4Au1
                  </a>
                </p>
              </div>

              <h2>Key Features</h2>
              <p>Endless Designs offers a range of powerful features for creative exploration:</p>

              <ul>
                <li>
                  <strong>Infinite Variations</strong> - Generate unlimited design variations with a single click
                </li>
                <li>
                  <strong>Parameter Controls</strong> - Fine-tune the generation process with adjustable parameters
                </li>
                <li>
                  <strong>Export Options</strong> - Save your favorite designs in various formats for use in other
                  applications
                </li>
                <li>
                  <strong>Design History</strong> - Keep track of your generation history to revisit previous designs
                </li>
                <li>
                  <strong>Pattern Recognition</strong> - The system learns from your preferences to suggest better
                  designs over time
                </li>
              </ul>

              <h2>Technical Implementation</h2>
              <p>
                The application is built using React and leverages the Canvas API for high-performance rendering of
                complex visual elements. The generative algorithms are implemented in TypeScript and use a combination
                of mathematical principles and randomization to create unique designs.
              </p>

              <p>
                The source code is available on{" "}
                <a
                  href="https://github.com/e-schultz/v0-endless-designs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
                , where you can see the implementation details including the minimalist animations for geometric
                patterns. The project is structured as a Next.js application with TypeScript, featuring components like
                background-tessellation, design-card, and various design components that work together to create the
                infinite variations.
              </p>

              <p>
                What makes Endless Designs special is its approach to generative design - rather than using predefined
                templates, it employs algorithmic systems that can produce truly novel outputs based on underlying
                principles of visual harmony and balance.
              </p>

              <h2>Use Cases</h2>
              <p>Endless Designs is valuable for a variety of creative professionals:</p>

              <ul>
                <li>
                  <strong>Graphic Designers</strong> - Quickly generate ideas and inspiration for client projects
                </li>
                <li>
                  <strong>UI/UX Designers</strong> - Explore pattern and color combinations for digital interfaces
                </li>
                <li>
                  <strong>Artists</strong> - Discover new visual directions and overcome creative blocks
                </li>
                <li>
                  <strong>Educators</strong> - Demonstrate principles of generative design and algorithmic creativity
                </li>
                <li>
                  <strong>Brand Strategists</strong> - Generate visual explorations for brand identity development
                </li>
              </ul>

              <h2>The Power of AI-Generated Design Tools</h2>
              <p>
                As a project built entirely with v0.dev, Endless Designs represents an interesting meta-concept: an
                AI-generated tool that itself generates designs. This recursive relationship between AI creation and
                generative design showcases the potential for AI to not just create static outputs, but to create
                systems that enable ongoing creativity and exploration.
              </p>

              <p>
                The project demonstrates how AI can be used to rapidly prototype and develop functional creative tools,
                potentially changing how we approach the design and development of design software itself.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
