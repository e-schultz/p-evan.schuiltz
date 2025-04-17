import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <div className="flex justify-center items-center min-h-[400px]">
          <LoadingSpinner size="large" />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
