# Evan Schultz Portfolio

A modern, content-driven portfolio website built with Next.js, featuring projects, blog posts, and resume information.

## Architecture Overview

This portfolio site uses a content-driven architecture where all content is stored as JSON files separate from the codebase. This approach offers several benefits:

- **Content separation**: All content is decoupled from the presentation layer
- **Easy updates**: Content can be modified without changing code
- **CMS-ready**: The structure is designed for easy migration to a headless CMS
- **Version control**: Content changes can be tracked in git alongside code

## Directory Structure

\`\`\`
├── app/                      # Next.js App Router
│   ├── blog/                 # Blog routes
│   │   ├── [slug]/           # Dynamic blog post route
│   │   ├── category/         # Blog category routes
│   │   ├── tag/              # Blog tag routes
│   │   └── search/           # Blog search functionality
│   ├── projects/             # Projects routes
│   │   └── [slug]/           # Dynamic project route
│   └── ...                   # Other app routes
├── components/               # React components
├── content/                  # Content files (JSON)
│   ├── blog/                 # Blog post content
│   ├── home/                 # Homepage section content
│   ├── pages/                # Static page content
│   └── projects/             # Project content
├── lib/                      # Utility functions
│   ├── blog.ts               # Blog content utilities
│   ├── content.ts            # Content loading utilities
│   ├── format-content.tsx    # Content formatting utilities
│   └── projects.ts           # Project content utilities
└── public/                   # Static assets
\`\`\`

## Content Structure

### JSON Content Files

All content is stored as JSON files in the `content` directory. The structure is organized by content type:

- `content/blog/`: Blog post content files
- `content/projects/`: Project content files
- `content/home/`: Homepage section content
- `content/pages/`: Static page content

### Dynamic Routing

The application uses Next.js dynamic routes to generate pages from content files:

- `/projects/[slug]`: Renders project pages based on JSON files in `content/projects/`
- `/blog/[slug]`: Renders blog posts based on JSON files in `content/blog/`

## Content Format

### Project Files

Project content files follow this structure:

\`\`\`json
{
  "title": "Project Title",
  "slug": "project-slug",
  "description": "A brief description of the project.",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "github": "https://github.com/username/project",
  "link": "https://project-demo.com",
  "image": "/path/to/image.jpg",
  "featured": true,
  "fullDescription": [
    {
      "type": "paragraph",
      "content": "A longer description of the project."
    },
    {
      "type": "heading",
      "level": 2,
      "content": "Features"
    },
    {
      "type": "list",
      "items": [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ]
    }
  ],
  "screenshots": [
    {
      "image": "/path/to/screenshot1.jpg",
      "alt": "Description of screenshot 1"
    }
  ]
}
\`\`\`

### Blog Post Files

Blog post content files follow this structure:

\`\`\`json
{
  "title": "Blog Post Title",
  "slug": "blog-post-slug",
  "date": "2023-01-01",
  "author": "Author Name",
  "excerpt": "A brief summary of the blog post content.",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "category": "Category",
  "image": "/path/to/image.jpg",
  "content": [
    {
      "type": "heading",
      "level": 2,
      "content": "Introduction"
    },
    {
      "type": "paragraph",
      "content": "Your paragraph text goes here."
    },
    {
      "type": "list",
      "items": [
        "List item 1",
        "List item 2",
        "List item 3"
      ]
    },
    {
      "type": "code",
      "language": "javascript",
      "content": "function example() {\n  return 'Hello, world!';\n}"
    }
  ]
}
\`\`\`

## Adding New Content

### Adding a Project

1. Create a new JSON file in the `content/projects` directory with the project's slug as the filename (e.g., `my-new-project.json`)
2. Fill in all the required fields following the structure above
3. The project will automatically appear in the projects list and a page will be generated for it

### Adding a Blog Post

1. Create a new JSON file in the `content/blog` directory with the post's slug as the filename (e.g., `my-new-post.json`)
2. Fill in all the required fields following the structure above
3. The post will automatically appear in the blog list and a page will be generated for it

## Content Formatting

The application supports a rich content format with various block types:

- **Paragraphs**: Simple text blocks
- **Headings**: Section headers with different levels
- **Lists**: Bulleted or numbered lists
- **Code blocks**: Syntax-highlighted code snippets
- **Blockquotes**: Quoted text blocks

Within text content, you can use a limited set of Markdown-style formatting:

- `**bold text**` - For bold text
- `*italic text*` - For italic text
- `[link text](https://example.com)` - For links

## Content Utilities

The application includes several utility functions for working with content:

- `lib/content.ts`: Core functions for loading and caching JSON content
- `lib/blog.ts`: Functions for working with blog content
- `lib/projects.ts`: Functions for working with project content
- `lib/format-content.tsx`: Utilities for rendering formatted content

## Recent Changes

The project has recently undergone a significant refactoring:

1. **Content Externalization**: All content has been moved from hardcoded components to JSON files
2. **Removal of Dedicated Pages**: Dedicated TSX pages for individual projects and blog posts have been removed in favor of dynamic routes
3. **Content Formatting System**: A new system for rendering rich content from JSON has been implemented
4. **Caching Layer**: Content loading now includes caching for better performance

## Future Enhancements

The current architecture is designed to make future enhancements easier:

1. **Content Validation**: Add schema validation for content files
2. **Admin Interface**: Create a simple admin interface for managing content
3. **CMS Integration**: Migrate to a headless CMS like Sanity
4. **Search Functionality**: Implement full-text search across all content
5. **Content Previews**: Add preview functionality for draft content

## Migrating to a CMS

The content structure is designed to make it easy to migrate to a headless CMS like Sanity in the future. When migrating:

1. Create a schema in Sanity that matches the structure of your content files
2. Import your content from these files to Sanity
3. Update the content fetching functions in `lib/content.ts` to fetch from Sanity instead of local files

The components that consume the content will continue to work without changes as long as the data structure remains consistent.

## Development

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
\`\`\`

### Building for Production

\`\`\`bash
# Build the application
npm run build

# Start the production server
npm start
\`\`\`

## License

MIT
