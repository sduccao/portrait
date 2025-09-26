'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Blog() {
  const { t } = useLanguage()

  const blogPosts = [
    {
      ...t.blog.post1,
      tags: ["AWS OpenSearch", "ElasticSearch", "Zero Downtime", "Performance"],
    },
    {
      ...t.blog.post2,
      tags: ["Golang", "Analytics", "Performance", "CDN Logs"],
    },
    {
      ...t.blog.post3,
      tags: ["AWS Glue", "ETL", "PySpark", "Data Pipeline"],
    },
    {
      ...t.blog.post4,
      tags: ["BigQuery", "Google Analytics", "Data Analytics"],
    },
  ]

  return (
    <section className="py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">{t.blog.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="p-0 hover:shadow-lg transition-shadow cursor-pointer group">
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="block p-6 space-y-4 h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>

                  <h3 className="text-lg font-semibold leading-tight group-hover:text-accent transition-colors">{post.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>

                  {post.url && post.url.includes('developers.prtimes.jp') && (
                    <p className="text-xs text-muted-foreground">
                      Published on{" "}
                      <span className="text-accent hover:text-accent/80 transition-colors underline">
                        PR TIMES Developer Blog
                      </span>
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                  <span>{t.blog.readMore}</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}