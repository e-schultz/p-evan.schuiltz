import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function SonicGeometryExplorerPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Sonic Geometry Explorer</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>WebAudio API</Badge>
                <Badge>Three.js</Badge>
                <Badge>JavaScript</Badge>
                <Badge>Data Visualization</Badge>
              </div>
              <div className="flex gap-4 mb-8">
                <Button asChild>
                  <Link href="https://sonic-geometry-explorer.lovable.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/e-schultz/sonic-geometry-explorer"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-13%20at%202.54.44%E2%80%AFAM-jm1mA2tbz6TwBd4eGf3FlxQH2wc1ce.png"
                  alt="Sonic Geometry Explorer main interface showing a radial pattern with colorful lines emanating from the center"
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden border">
                  <img
                    src="/sonic-frequency-waveform.png"
                    alt="Frequency visualization with waveform display showing sound patterns"
                    className="w-full"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <img
                    src="/sonic-geometry-panel.png"
                    alt="Parameter controls panel with sliders and knobs for adjusting sound and visualization"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden border">
                  <img
                    src="/sonic-geometry-mobile.png"
                    alt="Mobile responsive view of the application with compact controls"
                    className="w-full"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <img
                    src="/sonic-geometry-3d.png"
                    alt="3D mode with interactive geometric patterns that respond to audio input"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8 prose dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                Sonic Geometry Explorer is an interactive tool that visualizes the relationship between geometry and
                sound. It transforms mathematical patterns into both visual representations and corresponding audio,
                allowing users to explore the fascinating connections between these domains in real-time.
              </p>

              <p>
                The application creates mesmerizing visual patterns that directly correspond to audio frequencies,
                harmonics, and rhythms, making abstract mathematical concepts tangible through both sight and sound.
              </p>

              <h2>Key Features</h2>
              <ul>
                <li>
                  <strong>Interactive Visualizations</strong> - Dynamic geometric patterns that respond to audio input
                  and user interaction
                </li>
                <li>
                  <strong>Real-time Audio Synthesis</strong> - Generate sounds based on geometric relationships and
                  mathematical principles
                </li>
                <li>
                  <strong>Parameter Controls</strong> - Adjust frequencies, harmonics, amplitudes, and visual elements
                  with intuitive controls
                </li>
                <li>
                  <strong>Multiple Visualization Modes</strong> - Switch between 2D and 3D representations of sound
                  patterns
                </li>
                <li>
                  <strong>Parameter Automation</strong> - Create evolving soundscapes and visuals with automated
                  parameter changes
                </li>
                <li>
                  <strong>Responsive Design</strong> - Optimized for both desktop and mobile experiences
                </li>
              </ul>

              <h2>Technical Implementation</h2>
              <p>
                Sonic Geometry Explorer is built using modern web technologies with a focus on audio processing and
                visual rendering:
              </p>

              <ul>
                <li>
                  <strong>WebAudio API</strong> - For high-performance audio processing, synthesis, and analysis
                </li>
                <li>
                  <strong>Three.js</strong> - Powers the 3D visualizations and geometric rendering
                </li>
                <li>
                  <strong>Canvas API</strong> - Used for 2D visualizations and waveform displays
                </li>
                <li>
                  <strong>JavaScript</strong> - Core programming language for application logic and user interactions
                </li>
              </ul>

              <h2>Mathematical Foundations</h2>
              <p>The project explores several mathematical concepts and their relationship to sound:</p>

              <ul>
                <li>
                  <strong>Harmonic Series</strong> - Visualizing how frequencies relate to one another in musical scales
                </li>
                <li>
                  <strong>Cymatics</strong> - The study of visible sound and vibration patterns
                </li>
                <li>
                  <strong>Fourier Transforms</strong> - Breaking down complex waveforms into component frequencies
                </li>
                <li>
                  <strong>Sacred Geometry</strong> - Exploring patterns and ratios found throughout nature and music
                </li>
              </ul>

              <h2>User Experience</h2>
              <p>
                The application offers an intuitive interface that allows both novices and experts to explore the
                connections between sound and geometry:
              </p>

              <ul>
                <li>
                  <strong>Interactive Canvas</strong> - The main visualization area responds to clicks, drags, and other
                  user interactions
                </li>
                <li>
                  <strong>Parameter Panel</strong> - Adjustable controls for fine-tuning both visual and audio elements
                </li>
                <li>
                  <strong>Preset System</strong> - Save and recall favorite configurations
                </li>
                <li>
                  <strong>Theme Options</strong> - Toggle between light and dark modes for different visual experiences
                </li>
                <li>
                  <strong>Responsive Controls</strong> - Interface adapts to different screen sizes while maintaining
                  functionality
                </li>
              </ul>

              <h2>Educational Value</h2>
              <p>
                Beyond its artistic merits, Sonic Geometry Explorer serves as an educational tool that helps users
                understand complex mathematical and acoustic principles through interactive exploration. It makes
                abstract concepts tangible by connecting them to sensory experiences of sight and sound.
              </p>

              <p>
                The project demonstrates how web technologies can be used to create immersive, educational experiences
                that bridge multiple disciplines including mathematics, physics, music theory, and visual arts.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
