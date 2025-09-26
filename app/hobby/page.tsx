'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Briefcase, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HobbyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative py-24 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          <div className="text-center space-y-12">
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20 border-4 border-accent/20">
                  <Image
                    src="/profile_picture.jpg"
                    alt="Duc Cao Son"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                  Hey, I'm Duc! 👋
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Welcome to my personal space! When I'm not building software,
                  I love capturing moments through photography and exploring creative pursuits.
                </p>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  This is where I share my hobbies, adventures, and the things that inspire me outside of work.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="p-8 space-y-6 hover:shadow-lg transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Professional Work</h3>
                    <p className="text-muted-foreground">
                      Check out my software engineering portfolio, projects, and technical expertise.
                    </p>
                  </div>
                </div>
                <Button asChild className="w-full gap-2 group-hover:gap-3 transition-all">
                  <Link href="/">
                    View Portfolio
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-lg transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Camera className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Photography Gallery</h3>
                    <p className="text-muted-foreground">
                      Explore my photo collection capturing life's beautiful moments and adventures.
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full gap-2 group-hover:gap-3 transition-all">
                  <Link href="/hobby/photography">
                    View Gallery
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </Card>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground">
                "Life is a beautiful collection of moments - both in code and in captures." ✨
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}