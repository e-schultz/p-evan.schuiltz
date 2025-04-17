import { MainLayout } from "@/components/layouts/main-layout"
import { PageHeader } from "@/components/ui/page-header"
import { ContentContainer } from "@/components/ui/content-container"
import { ContactForm } from "@/components/contact-form"
import { Mail, MessageSquare } from "lucide-react"
import { SocialLinks } from "@/components/ui/social-links"
import { getGenericContent } from "@/lib/content-api"

export default async function ContactPage() {
  const contactContent = await getGenericContent("pages/contact")

  return (
    <MainLayout>
      <PageHeader title={contactContent.title} description={contactContent.description} />

      <section className="py-16">
        <ContentContainer>
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
                    <SocialLinks links={contactContent.social.platforms} size="sm" />
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
        </ContentContainer>
      </section>
    </MainLayout>
  )
}
