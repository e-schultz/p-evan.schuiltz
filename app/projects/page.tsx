import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Promptpods Universe",
      description:
        "A containerized environment for organizing thoughts, prompts, and contexts. PromptPods helps you create isolated containers for different thinking contexts, making it easier to manage complex projects and ideas.",
      tags: ["Next.js", "TypeScript", "AI", "Knowledge Management"],
      github: "https://github.com/e-schultz/promptpods-universe",
      link: "https://promptpods-universe.lovable.app",
      image: "/promptpods-universe.png",
      featured: true,
    },
    {
      title: "Floating Digital Grimoire",
      description:
        "A digital knowledge repository inspired by ancient grimoires. This interactive application allows users to collect, organize, and explore knowledge in a visually rich environment with magical aesthetics.",
      tags: ["React", "WebGL", "Knowledge Management", "Interactive Design"],
      github: "https://github.com/e-schultz/floating-digital-grimoire",
      link: "https://floating-digital-grimoire.lovable.app",
      image: "/floating-digital-grimoire.png",
      featured: true,
    },
    {
      title: "Floating Epistemic Nexus",
      description:
        "An interconnected knowledge graph visualization tool that helps users explore relationships between concepts, ideas, and information. Creates a dynamic, navigable network of knowledge.",
      tags: ["D3.js", "Graph Visualization", "Knowledge Management", "React"],
      github: "https://github.com/e-schultz/floating-epistemic-nexus",
      link: "https://floating-epistemic-nexus.lovable.app",
      image: "/floating-epistemic-nexus.png",
      featured: true,
    },
    {
      title: "FLOAT.K8s - Playful Hallucination Canvas",
      description:
        "An experimental platform combining Kubernetes (K8s) with interactive visual hallucinations. FLOAT.K8s creates a playful canvas where infrastructure management meets generative art, visualizing cluster states as dynamic, evolving patterns.",
      tags: ["Kubernetes", "Canvas API", "WebGL", "Generative Art", "DevOps Visualization"],
      github: "https://github.com/e-schultz/playful-hallucination-canvas",
      link: "https://playful-hallucination-canvas.lovable.app",
      image: "/playful-hallucination-canvas.png",
      featured: false,
    },
    {
      title: "Geometric Harmony Generator",
      description:
        "A tool that generates harmonious geometric patterns based on mathematical principles. Users can create and explore beautiful, symmetric designs with interactive controls for parameters like symmetry, complexity, and color.",
      tags: ["Canvas API", "Mathematics", "Generative Art", "Interactive Design"],
      github: "https://github.com/e-schultz/geometric-harmony-generator",
      link: "https://geometric-harmony-generator.lovable.app",
      image: "/geometric-harmony-generator.png",
      featured: false,
    },
    {
      title: "Outliner Meets ChatGPT",
      description:
        "A hybrid note-taking application that combines traditional outlining capabilities with AI assistance. Helps users organize thoughts while leveraging AI to expand ideas, suggest connections, and enhance creativity.",
      tags: ["AI", "Productivity", "Note-taking", "React"],
      github: "https://github.com/e-schultz/outliner-meets-chatgpt",
      link: "https://v0-hybrid-note-taking-app.vercel.app",
      image: "/outliner-meets-chatgpt.png",
      featured: false,
    },
    {
      title: "Endless Designs",
      description:
        "A generative design tool that creates infinite variations of design elements. Perfect for exploring design possibilities, generating inspiration, and discovering unexpected creative directions.",
      tags: ["Generative Design", "Creative Tools", "React", "Canvas API", "v0"],
      github: null,
      link: "https://v0-endless-designs.vercel.app",
      image: "/endless-designs-main.png",
      v0Link: "https://v0.dev/chat/projects/IESm6pp4Au1",
      featured: false,
    },
    {
      title: "FLOAT PKM Setup",
      description:
        "A starter kit for setting up a Personal Knowledge Management (PKM) system using the FLOAT methodology. Helps users quickly establish a framework for capturing, organizing, and connecting information.",
      tags: ["PKM", "Next.js", "Knowledge Management", "Productivity"],
      github: null,
      link: "https://v0-next-js-float-setup.vercel.app",
      image: "/float-pkm-setup.png",
      featured: false,
    },
    {
      title: "Ghost Thread Experience",
      description:
        "An experimental web application that explores the concept of 'ghost threads' - digital remnants of conversations and interactions that persist in digital spaces. Built with React, TypeScript, and Vite.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
      github: "https://github.com/e-schultz/ghost-thread-experience",
      link: null,
      image: "/ghost-thread-experience.png",
      featured: false,
    },
    {
      title: "V0 Whisperdraft",
      description:
        "An experimental tool that uses AI to help draft and refine creative writing. Whispers suggestions and alternative phrasings as you write, creating a collaborative experience between human and machine.",
      tags: ["AI", "Creative Writing", "React", "Natural Language Processing"],
      github: "https://github.com/e-schultz/v0-whisperdraft",
      link: null,
      image: "/v0-whisperdraft.png",
      featured: false,
    },
    {
      title: "V0 Sacred Voxel Recursion",
      description:
        "A 3D voxel-based exploration of recursive sacred geometry patterns. Creates mesmerizing visual experiences through procedurally generated structures that evolve and transform.",
      tags: ["Three.js", "WebGL", "Procedural Generation", "3D Graphics"],
      github: "https://github.com/e-schultz/v0-sacred-voxel-recursion",
      link: null,
      image: "/v0-sacred-voxel-recursion.png",
      featured: false,
    },
    {
      title: "Sonic Geometry Explorer",
      description:
        "An interactive tool for exploring the relationships between geometry and sound. Visualize mathematical patterns and their corresponding audio representations in real-time.",
      tags: ["WebAudio API", "Three.js", "JavaScript", "Data Visualization"],
      github: "https://github.com/e-schultz/sonic-geometry-explorer",
      link: null,
      image: "/sonic-geometry-explorer.png",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h1>
              <p className="text-xl text-muted-foreground">
                A collection of my work, including open source contributions, experiments, and educational resources.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} featured />
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">More Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Open Source Contributions */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Open Source Contributions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm passionate about contributing to open source projects and giving back to the developer community.
                Check out my GitHub profile to see more of my work.
              </p>
              <Button asChild size="lg">
                <Link href="https://github.com/e-schultz" target="_blank" rel="noopener noreferrer">
                  View GitHub Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
