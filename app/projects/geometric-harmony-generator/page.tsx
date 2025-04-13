import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function GeometricHarmonyGeneratorPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Geometric Harmony Generator</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Canvas API</Badge>
                <Badge>Mathematics</Badge>
                <Badge>Generative Art</Badge>
                <Badge>Interactive Design</Badge>
              </div>
              <div className="flex gap-4 mb-8">
                <Button asChild>
                  <Link
                    href="https://geometric-harmony-generator.lovable.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/e-schultz/geometric-harmony-generator"
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
                src="/geometric-harmony-generator.png"
                alt="Geometric Harmony Generator showing a minimal visualization of nested wireframe cubes"
                className="w-full"
              />
            </div>

            <div className="space-y-8 prose dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                Geometric Harmony Generator is a tool that creates harmonious geometric patterns based on mathematical
                principles. Users can explore beautiful, symmetric designs with interactive controls for parameters like
                symmetry, complexity, and color.
              </p>

              <blockquote className="italic">
                GEOMETRIC HARMONY GENERATOR
                <br />
                MINIMAL VISUALIZATION
              </blockquote>

              <h2>Concept & Design</h2>
              <p>
                The Geometric Harmony Generator explores the intersection of mathematics, design, and mindfulness. It
                creates visual representations of mathematical harmony through geometric forms, encouraging a meditative
                state through observation of evolving patterns.
              </p>

              <p>
                The minimalist aesthetic emphasizes the beauty of pure geometry, using simple wireframe structures to
                create complex visual experiences. The current visualization showcases nested cubes that create a sense
                of depth and recursion, drawing the viewer into an exploration of space and form.
              </p>

              <h2>Technical Implementation</h2>
              <p>The application is built using modern web technologies with a focus on performance and precision:</p>

              <ul>
                <li>Canvas API for high-performance rendering of geometric shapes</li>
                <li>Mathematical algorithms that generate harmonious proportions and relationships</li>
                <li>Real-time rendering that allows shapes to evolve and transform based on mathematical principles</li>
                <li>Timer functionality that can be used for focused observation or meditation sessions</li>
              </ul>

              <h2>Features</h2>
              <p>The Geometric Harmony Generator includes several key features:</p>

              <ul>
                <li>
                  <strong>Minimal Visualization Mode</strong> - A clean, wireframe aesthetic that focuses on form and
                  structure
                </li>
                <li>
                  <strong>Integrated Timer</strong> - Set sessions of 25 minutes (or custom durations) for focused
                  observation
                </li>
                <li>
                  <strong>Testing Mode</strong> - Accelerated visualization (5x speed) for rapid exploration of pattern
                  evolution
                </li>
                <li>
                  <strong>Pause and Reset Controls</strong> - Allows users to control the flow of the visualization
                </li>
              </ul>

              <h2>Applications</h2>
              <p>The Geometric Harmony Generator can be used in various contexts:</p>

              <ul>
                <li>
                  <strong>Meditation Aid</strong> - The evolving patterns provide a focal point for mindfulness practice
                </li>
                <li>
                  <strong>Design Inspiration</strong> - Artists and designers can use the generated forms as starting
                  points for creative work
                </li>
                <li>
                  <strong>Mathematical Exploration</strong> - Visualize complex mathematical relationships in an
                  accessible way
                </li>
                <li>
                  <strong>Focus Timer</strong> - The integrated timer makes it useful as a productivity tool similar to
                  the Pomodoro Technique
                </li>
              </ul>

              <h2>Future Development</h2>
              <p>
                Future versions of the Geometric Harmony Generator will include additional visualization modes, more
                complex mathematical relationships, and interactive controls that allow users to manipulate the
                parameters in real-time.
              </p>

              <p className="text-muted-foreground text-sm italic mt-8">geometric.harmony</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
