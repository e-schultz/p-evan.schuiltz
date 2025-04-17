// Shared type definitions for content structures
// This file can be imported by both client and server components

export interface BlogPost {
  title: string
  slug: string
  date: string
  author: string
  excerpt: string
  content: ContentBlock[]
  image: string
  tags: string[]
  category: string
}

export interface Project {
  title: string
  slug: string
  description: string
  tags: string[]
  github?: string
  link?: string
  v0Link?: string
  image?: string
  featured: boolean
  fullDescription?: ContentBlock[]
  screenshots?: { image: string; alt: string }[]
}

export interface ContentBlock {
  type: string
  level?: number
  content?: string
  items?: (string | { type: string; title?: string; content?: string })[]
  language?: string
}

export interface HeroContent {
  title: string
  subtitle: string
  description: string
  primaryButton: {
    text: string
    url: string
  }
  secondaryButton: {
    text: string
    url: string
  }
  socialLinks: {
    platform: string
    url: string
    label: string
  }[]
  image: string
}

export interface AboutContent {
  title: string
  description: string
  sections: {
    title: string
    content?: string[]
    items?: string[]
  }[]
  resumeButton: {
    text: string
    url: string
  }
  experience: {
    title: string
    company: string
    period: string
  }[]
}

export interface ContactFormContent {
  title: string
  description: string
  fields: {
    name: string
    label: string
    type: string
    placeholder: string
    required: boolean
    rows?: number
  }[]
  submitButton: {
    text: string
    icon: string
  }
}
