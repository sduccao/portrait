'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, FileText } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 lg:py-36 hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">{t.hero.name}</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">{t.hero.title}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.hero.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="gap-2">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" />
                {t.hero.cv}
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 bg-transparent">
              <a href="https://linkedin.com/in/cao-son-duc" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 bg-transparent">
              <a href="https://github.com/prcaoduc" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-300">
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10" />
              <Image
                src="/profile_picture.jpg"
                alt="Duc Cao Son - Software Engineer"
                fill
                className="object-cover object-center"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23333'/%3E%3Ctext x='50' y='50' text-anchor='middle' dominant-baseline='middle' font-family='monospace' font-size='40' fill='%23666'%3EG%3C/text%3E%3C/svg%3E"
              />
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-accent font-medium">{t.hero.techStack}</p>
      </div>
    </section>
  )
}
