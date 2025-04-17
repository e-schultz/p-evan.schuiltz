import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MessageSquare, Github, Linkedin, Twitter } from "lucide-react"
import { getCachedJsonContent } from "@/lib/content-server"

export default async function ContactPage() {
  const contactContent = await getCachedJsonContent("pages/contact")

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{contactContent.title}</h1>
              <p className="text-xl text-muted-foreground">{contactContent.description}</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{contactContent.email.title}</h3>
                    <p className="text-muted-foreground">
                      <a href={`mailto:${contactContent.email.address}`} className="hover:text-primary">
                        {contactContent.email.address}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{contactContent.social.title}</h3>
                    <div className="space-y-2">
                      {contactContent.social.platforms.map((platform, index) => (
                        <p key={index} className="text-muted-foreground flex items-center">
                          {platform.icon === "github" && <Github className="h-4 w-4 mr-2" />}
                          {platform.icon === "linkedin" && <Linkedin className="h-4 w-4 mr-2" />}
                          {platform.icon === "twitter" && <Twitter className="h-4 w-4 mr-2" />}
                          <a
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {platform.url.replace(/^https?:\/\//, "")}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-lg border aspect-square md:aspect-auto md:h-[400px]">
                  <img
                    src={contactContent.image.src || "/placeholder.svg"}
                    alt={contactContent.image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{contactContent.image.caption}</h3>
                      <p className="text-white/80">{contactContent.image.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm formContent={contactContent.form} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
