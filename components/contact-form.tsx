"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"
import type { ContactFormContent } from "@/lib/content-types"

interface ContactFormProps {
  formContent?: ContactFormContent
}

export function ContactForm({ formContent }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError("")

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitError("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Default content if none is provided
  const content = formContent || {
    title: "Send Me a Message",
    description: "Fill out the form below and I'll get back to you as soon as possible.",
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Your name",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Your email address",
        required: true,
      },
      {
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "What is this regarding?",
        required: true,
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Your message",
        required: true,
        rows: 5,
      },
    ],
    submitButton: {
      text: "Send Message",
      icon: "send",
    },
  }

  return (
    <Card className="border-primary/10">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{content.title}</CardTitle>
        <CardDescription>{content.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {submitSuccess ? (
          <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
            Thank you for your message! I'll get back to you as soon as possible.
          </div>
        ) : null}

        {submitError ? (
          <div className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-4 rounded-lg mb-6">
            {submitError}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.fields.slice(0, 2).map((field) => (
              <div key={field.name} className="space-y-2">
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formState[field.name as keyof typeof formState] || ""}
                  onChange={handleChange}
                  required={field.required}
                />
              </div>
            ))}
          </div>

          {content.fields.slice(2).map((field) => (
            <div key={field.name} className="space-y-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              {field.type === "textarea" ? (
                <Textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  rows={field.rows || 5}
                  value={formState[field.name as keyof typeof formState] || ""}
                  onChange={handleChange}
                  required={field.required}
                  className="resize-none"
                />
              ) : (
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formState[field.name as keyof typeof formState] || ""}
                  onChange={handleChange}
                  required={field.required}
                />
              )}
            </div>
          ))}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>Sending...</>
            ) : (
              <>
                {content.submitButton.text} <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
