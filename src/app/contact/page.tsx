"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ name, email, message })
    // Reset form fields
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-4">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Have questions or feedback? We'd love to hear from you. Fill out the form below or reach out to us directly.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <Button type="submit" size="lg">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>123 Learning Street, Education City, 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>support@learnhub.com</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">How do I enroll in a course?</h3>
                <p className="text-muted-foreground">
                  To enroll in a course, simply navigate to the course page and click the "Enroll" button. Follow the
                  prompts to complete your registration and payment.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept major credit cards, PayPal, and bank transfers for course payments. Some courses may also
                  offer financing options.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Do you offer refunds?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 30-day money-back guarantee for most of our courses. Please refer to our refund policy
                  for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

