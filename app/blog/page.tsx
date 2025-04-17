import { MainLayout } from "@/components/layouts/main-layout"
import { PageHeader } from "@/components/ui/page-header"
import { ContentContainer } from "@/components/ui/content-container"
import { BlogPostGrid } from "@/components/blog/blog-post-grid"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { getAllBlogPosts, getAllTags } from "@/lib/content-api"

export default async function BlogPage() {
  // Use direct server functions instead of API routes
  const posts = await getAllBlogPosts()
  const allTags = await getAllTags()

  return (
    <MainLayout>
      <PageHeader
        title="Blog"
        description="Thoughts, tutorials, and insights on web development, team leadership, and technology."
      />

      <section className="py-12">
        <ContentContainer>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <BlogSidebar tags={allTags} recentPosts={posts.slice(0, 3)} />
            </div>

            {/* Blog Posts */}
            <div className="md:col-span-3 space-y-8">
              <BlogPostGrid posts={posts} columns={2} />
            </div>
          </div>
        </ContentContainer>
      </section>
    </MainLayout>
  )
}
