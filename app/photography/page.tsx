'use client'

import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Camera, MapPin, Calendar, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Photo {
  id: number
  title: string
  description: string
  location: string
  date: string
  category: string
  imageUrl: string
  aspectRatio: 'square' | 'landscape' | 'portrait'
}

const samplePhotos: Photo[] = [
  {
    id: 1,
    title: "Urban Sunset",
    description: "Golden hour views from the city rooftop, capturing the perfect blend of urban architecture and natural beauty.",
    location: "Tokyo, Japan",
    date: "2024-03-15",
    category: "Urban",
    imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
    aspectRatio: 'landscape'
  },
  {
    id: 2,
    title: "Morning Coffee",
    description: "The perfect start to a peaceful morning with freshly brewed coffee and natural light.",
    location: "Home Studio",
    date: "2024-03-12",
    category: "Lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=600&q=80",
    aspectRatio: 'portrait'
  },
  {
    id: 3,
    title: "Cherry Blossoms",
    description: "Sakura season bringing delicate pink blooms that transform the entire landscape.",
    location: "Kyoto, Japan",
    date: "2024-04-02",
    category: "Nature",
    imageUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80",
    aspectRatio: 'square'
  },
  {
    id: 4,
    title: "Street Photography",
    description: "Candid moments of daily life in the bustling streets, telling stories without words.",
    location: "Shibuya, Tokyo",
    date: "2024-02-28",
    category: "Street",
    imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
    aspectRatio: 'landscape'
  },
  {
    id: 5,
    title: "Minimalist Architecture",
    description: "Clean lines and geometric shapes creating harmony between form and function.",
    location: "Modern Art Museum",
    date: "2024-01-20",
    category: "Architecture",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
    aspectRatio: 'portrait'
  },
  {
    id: 6,
    title: "Ocean Waves",
    description: "The eternal dance of waves against the shore, captured in a moment of perfect motion.",
    location: "Enoshima Beach",
    date: "2024-05-10",
    category: "Nature",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    aspectRatio: 'square'
  }
]

const categories = ["All", "Urban", "Nature", "Street", "Architecture", "Lifestyle"]
const CORRECT_PASSWORD = 'preview2024'

export default function PhotographyPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    // Check if already authenticated in this session
    const auth = sessionStorage.getItem('photo-auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem('photo-auth', 'true')
      setIsAuthenticated(true)
    } else {
      setError(true)
      setPassword('')
      setTimeout(() => setError(false), 3000)
    }
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex justify-start mb-8">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <Card className="p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Photography Gallery</h2>
              <p className="text-muted-foreground">Coming Soon</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Enter access code to preview
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                />
                {error && (
                  <p className="mt-2 text-sm text-destructive">
                    Incorrect access code. Please try again.
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Access Gallery
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              This gallery is currently under development.<br />
              Please check back soon or contact for access.
            </p>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="sm" className="gap-2">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Camera className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">Photography Gallery</h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                A collection of moments captured through my lens - from urban landscapes to quiet moments of daily life.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>

            <div className="grid gap-6 md:gap-8">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
                {samplePhotos.map((photo) => (
                  <Card key={photo.id} className="break-inside-avoid overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="relative">
                      <div className={`relative w-full ${
                        photo.aspectRatio === 'square' ? 'aspect-square' :
                        photo.aspectRatio === 'portrait' ? 'aspect-[3/4]' :
                        'aspect-[4/3]'
                      }`}>
                        <Image
                          src={photo.imageUrl}
                          alt={photo.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <Badge variant="secondary" className="mb-2">
                          {photo.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                          {photo.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {photo.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {photo.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(photo.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center pt-8">
              <p className="text-sm text-muted-foreground">
                "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever." 📸
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}