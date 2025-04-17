"use client"

import { ErrorBoundary } from "@/components/error-boundary"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 container py-12">
            <ErrorBoundary error={error} reset={reset} />
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
