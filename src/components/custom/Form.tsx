
import { useState } from 'react'
import { Facebook, Instagram, MessageCircle, Mail, User, Phone, Send, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    })
    
    handleClear()
    setIsSubmitting(false)
  }

  const handleClear = () => {
    const form = document.getElementById('contactForm') as HTMLFormElement
    form.reset()
  }

  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      label: "Connect on Facebook",
      href: "#"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Follow on Instagram",
      href: "#"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Chat on WhatsApp",
      href: "#"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Send an Email",
      href: "#"
    }
  ]

  return (
    <div className="h-screen w-screen flex items-center justify-center p-4 md:p-8 ">
      <Card className="w-screen ">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Get in Touch</CardTitle>
          <CardDescription className="text-lg">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-[1fr_2px_2fr] gap-8 p-8">
          {/* Social Media Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-all duration-200"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted group-hover:bg-background transition-colors duration-200">
                    {link.icon}
                  </div>
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[2px] bg-border" />

          {/* Contact Form */}
          <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Send a Message</h3>
            
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <Input 
                  id="name" 
                  required
                  className="pl-10"
                  placeholder="John Doe"
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <div className="relative">
                <Input 
                  id="mobile" 
                  type="tel" 
                  required
                  className="pl-10"
                  placeholder="+1 (555) 000-0000"
                />
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                required
                placeholder="Your message here..."
                className="min-h-[120px]"
              />
            </div>

            <div className="flex gap-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleClear}
                disabled={isSubmitting}
                className="w-1/3"
              >
                <X className="mr-2 h-4 w-4" />
                Clear
              </Button>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-1/3"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
