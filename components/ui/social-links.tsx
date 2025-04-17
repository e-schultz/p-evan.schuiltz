import Link from "next/link"
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react"

interface SocialLink {
  platform: string
  url: string
  label: string
}

interface SocialLinksProps {
  links: SocialLink[]
  size?: "sm" | "md" | "lg"
  className?: string
}

export function SocialLinks({ links, size = "md", className = "" }: SocialLinksProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className={sizeClasses[size]} />
      case "linkedin":
        return <Linkedin className={sizeClasses[size]} />
      case "twitter":
        return <Twitter className={sizeClasses[size]} />
      default:
        return <ExternalLink className={sizeClasses[size]} />
    }
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary"
          aria-label={link.label}
        >
          {getSocialIcon(link.platform)}
          <span className="sr-only">{link.label}</span>
        </Link>
      ))}
    </div>
  )
}
