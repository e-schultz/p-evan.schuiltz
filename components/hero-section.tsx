import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-muted/50">
      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Evan Schultz</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">Technical Director & Software Engineer</p>
            <p className="text-lg text-muted-foreground max-w-md">
              Building high performing teams and the environment that enables them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://github.com/e-schultz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/evanschultz1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="http://twitter.com/e_p82"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/50 mix-blend-multiply z-10"></div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evan.just.evan__Title_Techno_Ruins_on_the_Ominous_Shore_Fragmen_731f5629-e5a1-46ea-a258-b64f470e5995-7AvHbOgQTduSAehAjWOajxR7hAJx3Q.png"
              alt="Tech-inspired illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
