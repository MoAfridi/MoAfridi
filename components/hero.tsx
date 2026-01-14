"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#333] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mdafridihossainyasin@gmail.com"
                className="text-muted-foreground hover:text-[#EA4335] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/8801865999820"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/MoAfridi24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/moafridi24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#E4405F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/MoAfridi24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#1DA1F2] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.threads.net/@moafridi24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#000000] transition-colors"
                aria-label="Threads"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3c-1.2 0-2.4.2-3.5.6C6.3 4.5 5 6 4.4 7.8c-.3.9-.4 1.8-.4 2.7 0 2.1.8 4.1 2.2 5.6 1.4 1.5 3.3 2.4 5.3 2.7.5.1 1 .1 1.5.1s1-.1 1.5-.1c2-.3 3.9-1.2 5.3-2.7 1.4-1.5 2.2-3.5 2.2-5.6 0-.9-.1-1.8-.4-2.7C20.9 6 19.7 4.5 17.5 3.6 16.4 3.2 15.2 3 12 3z" />
                  <path d="M15.5 10.5c-.3-.6-.7-1-1.2-1.4-.8-.6-1.8-.9-2.8-.9-1.6 0-3 .8-3.9 2.1" />
                  <path d="M8.5 13.5c.3.6.7 1 1.2 1.4.8.6 1.8.9 2.8.9 1.6 0 3-.8 3.9-2.1" />
                </svg>
              </a>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Software Engineer
              <br />
              <span className="text-muted-foreground">& Problem Solver</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Crafting elegant solutions to complex problems. Building scalable applications with modern technologies.
              Passionate about clean code and continuous learning.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="group">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
            </div>
          </div>

          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden border-2 border-border/50 shadow-2xl animate-fade-in">
            <Image
              src="/images/whatsapp-20image-202025-01-20-20at-203.jpeg"
              alt="Professional profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
