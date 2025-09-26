'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, FileText } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      ...t.projects.project1,
      stack: t.projects.project1.technologies,
    },
    {
      ...t.projects.project2,
      stack: t.projects.project2.technologies,
    },
    {
      ...t.projects.project3,
      stack: t.projects.project3.technologies,
    },
  ]

  return (
    <section className="py-24 section-divider">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">{t.projects.title}</h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 space-y-6 project-card card-hover ${
                index === 0 ? 'xl:col-span-2 xl:row-span-1' : ''
              }`}
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
