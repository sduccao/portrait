import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Optimizing OpenSearch Performance for Large-Scale Applications",
    excerpt:
      "Deep dive into OpenSearch optimization techniques, indexing strategies, and query performance improvements.",
    date: "2024-01-15",
    tags: ["OpenSearch", "Performance", "AWS"],
    readTime: "8 min read",
  },
  {
    title: "Building Microservices with Golang: Lessons Learned",
    excerpt: "Practical insights from building and scaling microservices architecture using Go in production.",
    date: "2023-12-10",
    tags: ["Golang", "Microservices", "Architecture"],
    readTime: "12 min read",
  },
  {
    title: "Infrastructure as Code with Terraform and AWS",
    excerpt:
      "Best practices for managing cloud infrastructure using Terraform, including multi-environment strategies.",
    date: "2023-11-22",
    tags: ["Terraform", "AWS", "DevOps"],
    readTime: "10 min read",
  },
]

export function Blog() {
  return (
    <section className="py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Technical Writing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights from backend engineering experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold leading-tight">{post.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button variant="ghost" className="w-full justify-between group">
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
