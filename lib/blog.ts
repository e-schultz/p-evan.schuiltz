export type BlogPost = {
  title: string
  slug: string
  date: string
  author: string
  excerpt: string
  content: string
  coverImage: string
  tags: string[]
  category: string
}

// In a real application, this would fetch from a database or CMS
export async function getAllPosts(): Promise<BlogPost[]> {
  return [
    {
      title: "Refactor to Hooks, not Classes",
      slug: "refactor-to-react-hooks-not-classes",
      date: "2020-05-15",
      author: "Evan Schultz",
      excerpt: "Learn why React Hooks are a better choice than class components for modern React applications.",
      content: "Full content would go here...",
      coverImage: "/react-hooks-flow.png",
      tags: ["React", "Hooks", "JavaScript"],
      category: "React",
    },
    {
      title: "Simplifying React Forms with Hooks",
      slug: "simplifying-controlled-inputs-with-hooks",
      date: "2020-04-22",
      author: "Evan Schultz",
      excerpt: "A guide to creating simpler, more maintainable form handling in React using hooks.",
      content: "Full content would go here...",
      coverImage: "/react-form-components-concept.png",
      tags: ["React", "Forms", "Hooks"],
      category: "React",
    },
    {
      title: "Improving Your Mental Model of useEffect",
      slug: "improving-your-mental-model-of-useeffect",
      date: "2020-03-10",
      author: "Evan Schultz",
      excerpt: "Develop a better understanding of React's useEffect hook and how to use it effectively.",
      content: "Full content would go here...",
      coverImage: "/react-useeffect-lifecycle.png",
      tags: ["React", "useEffect", "Hooks"],
      category: "React",
    },
    {
      title: "How to Create Data-Driven User Interfaces in Vue",
      slug: "how-to-create-data-driven-user-interfaces-in-vue",
      date: "2019-11-05",
      author: "Evan Schultz",
      excerpt: "Learn techniques for building dynamic, data-driven interfaces with Vue.js.",
      content: "Full content would go here...",
      coverImage: "/vue-data-dashboard.png",
      tags: ["Vue", "JavaScript", "UI"],
      category: "Vue",
    },
    {
      title: "Are Your Unit Tests Failing for the Expected Reasons?",
      slug: "are-your-unit-tests-failing-for-the-expected-reasons",
      date: "2019-09-18",
      author: "Evan Schultz",
      excerpt: "Strategies to ensure your tests are actually testing what you think they are.",
      content: "Full content would go here...",
      coverImage: "/javascript-unit-testing-concept.png",
      tags: ["Testing", "JavaScript", "Best Practices"],
      category: "Testing",
    },
    {
      title: "Quick Start with Angular Modules",
      slug: "quick-start-with-angular-modules",
      date: "2019-07-22",
      author: "Evan Schultz",
      excerpt: "A beginner's guide to understanding and working with Angular modules effectively.",
      content: "Full content would go here...",
      coverImage: "/placeholder.svg?height=300&width=500&query=Angular%20Modules%20Diagram",
      tags: ["Angular", "JavaScript", "Modules"],
      category: "Angular",
    },
    {
      title: "Recipes for Redux",
      slug: "recipes-for-redux",
      date: "2019-05-14",
      author: "Evan Schultz",
      excerpt: "Practical patterns and solutions for common Redux challenges.",
      content: "Full content would go here...",
      coverImage: "/placeholder.svg?height=300&width=500&query=Redux%20State%20Management",
      tags: ["Redux", "React", "State Management"],
      category: "Redux",
    },
    {
      title: "Configurable Services in Angular",
      slug: "configurable-services-in-angular",
      date: "2019-03-20",
      author: "Evan Schultz",
      excerpt: "Learn how to create flexible, configurable services in Angular applications.",
      content: "Full content would go here...",
      coverImage: "/placeholder.svg?height=300&width=500&query=Angular%20Services%20Architecture",
      tags: ["Angular", "Services", "Architecture"],
      category: "Angular",
    },
  ]
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts()
  return posts.find((post) => post.slug === slug) || null
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  const categories = new Set(posts.map((post) => post.category))
  return Array.from(categories)
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tags = new Set(posts.flatMap((post) => post.tags))
  return Array.from(tags)
}

export async function searchPosts(query: string): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  const lowercaseQuery = query.toLowerCase()

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      post.category.toLowerCase().includes(lowercaseQuery),
  )
}
