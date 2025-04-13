"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"

// In a real app, this would come from a database or CMS
const getBlogPosts = () => {
  return [
    {
      title: "Refactor to Hooks, not Classes",
      description: "Learn why React Hooks are a better choice than class components for modern React applications.",
      date: "2020-05-15",
      author: "Evan Schultz",
      tags: ["React", "Hooks", "JavaScript"],
      slug: "refactor-to-react-hooks-not-classes",
      image: "/react-hooks-flow.png",
      content: `
## Introduction

When React Hooks were introduced in React 16.8, they provided a new way to use state and other React features without writing a class. This was a game-changer for many developers, as it allowed for more concise and readable code.

In this article, I'll explain why you should consider refactoring your class components to use hooks, and provide some practical examples of how to do so.

## Why Hooks?

Hooks solve several problems that developers have encountered with classes:

1. **Reusing stateful logic between components is difficult**. Hooks allow you to extract stateful logic from a component so it can be tested independently and reused.

2. **Complex components become hard to understand**. Hooks let you split one component into smaller functions based on what pieces are related, rather than forcing a split based on lifecycle methods.

3. **Classes confuse both people and machines**. Hooks let you use more of React's features without classes.

## From Class to Hooks: A Practical Example

Let's look at a simple class component that tracks a counter:

\`\`\`jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.incrementCount}>
          Click me
        </button>
      </div>
    );
  }
}
\`\`\`

Now, let's refactor this to use hooks:

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

Notice how much cleaner and more concise the code is with hooks. We've eliminated the need for a class, constructor, and binding methods.

## Conclusion

Hooks provide a more direct API to React concepts you already know: props, state, context, refs, and lifecycle. They also offer a powerful way to compose behavior that wasn't possible with classes.

If you're starting a new project or component, I recommend using hooks from the beginning. For existing projects, there's no need to rewrite all your components, but consider using hooks for new features and gradually refactoring existing components when it makes sense.
      `,
    },
    {
      title: "Simplifying React Forms with Hooks",
      description: "A guide to creating simpler, more maintainable form handling in React using hooks.",
      date: "2020-04-22",
      author: "Evan Schultz",
      tags: ["React", "Forms", "Hooks"],
      slug: "simplifying-controlled-inputs-with-hooks",
      image: "/react-form-components-concept.png",
      content: `
## Introduction

Forms are a fundamental part of web applications, but they can be cumbersome to implement in React, especially when dealing with multiple inputs. In this article, I'll show you how to simplify form handling using React Hooks.

## The Traditional Approach

In a class component, handling forms typically looks something like this:

\`\`\`jsx
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
\`\`\`

## Simplifying with Hooks

Now, let's see how we can simplify this using hooks:

\`\`\`jsx
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    handleChange: (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    },
    reset: () => setValues(initialValues)
  };
}

function SignupForm() {
  const { values, handleChange, reset } = useForm({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data
    console.log(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
\`\`\`

## Benefits of the Hook Approach

1. **Reusability**: The \`useForm\` hook can be used across multiple forms in your application.
2. **Simplicity**: The component code is cleaner and more focused on rendering.
3. **Separation of Concerns**: Form logic is separated from the component rendering.
4. **Testability**: The form logic can be tested independently of the component.

## Conclusion

By leveraging React Hooks, we can create more maintainable and reusable form handling in our React applications. The \`useForm\` hook is just one example of how hooks can simplify common patterns in React development.

Next time you're building a form in React, consider using hooks to simplify your code and improve maintainability.
      `,
    },
    {
      title: "Improving Your Mental Model of useEffect",
      description: "Develop a better understanding of React's useEffect hook and how to use it effectively.",
      date: "2020-03-10",
      author: "Evan Schultz",
      tags: ["React", "useEffect", "Hooks"],
      slug: "improving-your-mental-model-of-useeffect",
      image: "/react-useeffect-lifecycle.png",
      content: `
## Introduction

The \`useEffect\` hook is one of the most powerful and frequently used hooks in React, but it can also be one of the most confusing for developers new to React Hooks. In this article, I'll help you build a better mental model for understanding and using \`useEffect\` effectively.

## What is useEffect?

At its core, \`useEffect\` allows you to perform side effects in function components. Side effects might include data fetching, subscriptions, or manually changing the DOM.

The basic syntax looks like this:

\`\`\`jsx
useEffect(() => {
  // Side effect code here
  
  return () => {
    // Cleanup code here (optional)
  };
}, [dependencies]);
\`\`\`

## Thinking About Dependencies

One of the most common sources of confusion with \`useEffect\` is the dependency array. Instead of thinking about when the effect should run, think about what values the effect depends on.

Ask yourself: "What values from the component scope does my effect use?"

For example:

\`\`\`jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(data => setUser(data));
  }, [userId]);
  
  // ...
}
\`\`\`

In this example, the effect depends on \`userId\`. If \`userId\` changes, we need to fetch the user data again.

## Common Patterns and Pitfalls

### Running an Effect Once

To run an effect only once when the component mounts, use an empty dependency array:

\`\`\`jsx
useEffect(() => {
  // This runs once on mount
  console.log('Component mounted');
  
  return () => {
    // This runs once on unmount
    console.log('Component unmounted');
  };
}, []);
\`\`\`

### Forgetting Dependencies

A common mistake is forgetting to include all dependencies:

\`\`\`jsx
function Counter({ initial }) {
  const [count, setCount] = useState(initial);
  
  // 🚫 Bug: missing dependency
  useEffect(() => {
    document.title = \`Count: \${count} (started at \${initial})\`;
  }, [count]);
  
  // ✅ Correct: all dependencies included
  useEffect(() => {
    document.title = \`Count: \${count} (started at \${initial})\`;
  }, [count, initial]);
  
  // ...
}
\`\`\`

### Infinite Loops

Be careful with objects and functions as dependencies:

\`\`\`jsx
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  
  // 🚫 Bug: creates a new object every render
  useEffect(() => {
    fetchResults({ query, page: 1 }).then(setResults);
  }, [{ query }]); // This creates an infinite loop!
  
  // ✅ Correct: use primitive values as dependencies
  useEffect(() => {
    fetchResults({ query, page: 1 }).then(setResults);
  }, [query]);
  
  // ...
}
\`\`\`

## Conclusion

Building a solid mental model for \`useEffect\` takes time and practice. Remember these key points:

1. Think about what values your effect depends on, not when it should run.
2. Include all values from the component scope that are used in the effect.
3. Be careful with objects and functions as dependencies.
4. Use the ESLint plugin for React Hooks to catch common mistakes.

With these principles in mind, you'll be able to use \`useEffect\` more effectively and avoid common pitfalls.
      `,
    },
  ]
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const posts = getBlogPosts()
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="container max-w-4xl py-12">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
            </Link>
          </Button>

          <div className="mb-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {post.author}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              } else if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                )
              } else if (paragraph.startsWith("```")) {
                // Skip code block markers, we'll handle them separately
                return null
              } else if (paragraph.trim() === "") {
                return <div key={index} className="my-4"></div>
              } else if (paragraph.includes("```")) {
                // This is a code block
                const parts = post.content.split("```")
                const codeBlocks = []

                for (let i = 1; i < parts.length; i += 2) {
                  const language = parts[i].split("\n")[0]
                  const code = parts[i].split("\n").slice(1).join("\n")

                  codeBlocks.push(
                    <div key={`code-${i}`} className="bg-muted p-4 rounded-md my-6 overflow-x-auto">
                      <pre>
                        <code>{code}</code>
                      </pre>
                    </div>,
                  )
                }

                return codeBlocks
              } else {
                return (
                  <p key={index} className="my-4">
                    {paragraph}
                  </p>
                )
              }
            })}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
