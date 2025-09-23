'use client'

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t.skills.categories.languages,
      skills: t.skills.items.languages,
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      title: t.skills.categories.backend,
      skills: t.skills.items.backend,
      color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
    },
    {
      title: t.skills.categories.frontend,
      skills: t.skills.items.frontend,
      color: "bg-chart-5/10 text-chart-5 border-chart-5/20",
    },
    {
      title: t.skills.categories.search,
      skills: t.skills.items.search,
      color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    },
    {
      title: t.skills.categories.infrastructure,
      skills: t.skills.items.infrastructure,
      color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    },
  ]

  return (
    <section className="py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">{t.skills.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className={category.color}>
                    {skill}
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