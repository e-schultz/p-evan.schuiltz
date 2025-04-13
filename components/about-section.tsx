import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background" id="about">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            I'm a Technical Director and Software Engineer with extensive experience in building high-performing teams
            and creating effective development environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground">
                With over a decade of experience in software development and team leadership, I've worked with companies
                ranging from small startups to large enterprises. My focus has been on identifying opportunities and
                challenges on project teams, and working with stakeholders to implement effective solutions.
              </p>
              <p className="text-muted-foreground">
                I've influenced the multi-year evolution of multiple enterprise products which are in production today,
                and I've collaborated with CTOs and other technical directors to identify trends in technology and
                develop plans to enable engineering teams to meet current and future needs.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">What I Do</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Technical leadership and team management</li>
                <li>• Full-stack development and consulting</li>
                <li>• Training and education in modern web technologies</li>
                <li>• Open source contribution and maintenance</li>
                <li>• Technical writing and public speaking</li>
              </ul>
            </div>

            <Button asChild>
              <Link href="/resume">
                View Full Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-bold mb-2">Technical Director</h4>
                <p className="text-sm text-muted-foreground">Rangle.io</p>
                <p className="text-sm text-muted-foreground">2014 - 2022</p>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-bold mb-2">Software Engineering Manager</h4>
                <p className="text-sm text-muted-foreground">PartnerStack</p>
                <p className="text-sm text-muted-foreground">2020 - 2021</p>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-bold mb-2">Director of Frontend Education</h4>
                <p className="text-sm text-muted-foreground">Bridge School</p>
                <p className="text-sm text-muted-foreground">2019 - 2020</p>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-bold mb-2">Open Source</h4>
                <p className="text-sm text-muted-foreground">Angular-Redux</p>
                <p className="text-sm text-muted-foreground">Redux-Beacon</p>
                <p className="text-sm text-muted-foreground">Augury</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
