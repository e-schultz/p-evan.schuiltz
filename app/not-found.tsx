import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md text-center py-20">
          <div className="bg-muted p-4 rounded-full inline-flex mb-6">
            <FileQuestion className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
