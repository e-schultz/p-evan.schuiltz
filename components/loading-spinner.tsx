export function LoadingSpinner({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "h-4 w-4",
    default: "h-8 w-8",
    large: "h-12 w-12",
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        className={`inline-block animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${sizeClasses[size]}`}
      ></div>
      <p className="mt-4 text-muted-foreground">Loading...</p>
    </div>
  )
}
