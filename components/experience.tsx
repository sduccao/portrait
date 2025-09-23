'use client'

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function Experience() {
  const { t } = useLanguage()

  return (
    <section className="py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">{t.experience.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-2">
                <p className="text-sm font-medium text-accent">{t.experience.job1.period}</p>
                <h3 className="text-xl font-semibold">{t.experience.job1.company}</h3>
                <p className="text-muted-foreground">{t.experience.job1.location}</p>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">{t.experience.job1.role}</h4>
                  <p className="text-muted-foreground leading-relaxed">{t.experience.job1.description}</p>
                </div>

                <div className="space-y-6">
                  {t.experience.job1.projects.map((project, index) => (
                    <div key={index} className="border-l-2 border-accent/30 pl-6 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h5 className="font-semibold">{project.title}</h5>
                        <span className="text-sm text-muted-foreground">{project.period}</span>
                      </div>

                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {(project.blogUrl || project.blogUrls) && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.blogUrl && (
                            <a
                              href={project.blogUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:text-accent/80 text-xs underline flex items-center gap-1"
                            >
                              📝 Read Blog Post
                            </a>
                          )}
                          {project.blogUrls && project.blogUrls.map((url, i) => (
                            <a
                              key={i}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:text-accent/80 text-xs underline flex items-center gap-1"
                            >
                              📝 Blog {i + 1}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}