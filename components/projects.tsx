import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Reddit-like SNS Platform",
    description:
      "Built a scalable social networking service with real-time features, user authentication, and content management using Golang and PostgreSQL.",
    stack: ["Golang", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/caosonduc/golang-sns",
    demo: null,
  },
  {
    title: "OpenSearch Engine Optimization",
    description:
      "Led search performance improvements achieving 40% faster query response times and enhanced relevance scoring for press release distribution.",
    stack: ["OpenSearch", "Elasticsearch", "AWS", "Python"],
    github: null,
    demo: null,
  },
  {
    title: "Terraform AWS Infrastructure",
    description:
      "Designed and implemented Infrastructure as Code for multi-environment deployments with Fastly CDN integration and automated scaling.",
    stack: ["Terraform", "AWS", "Fastly", "CloudFormation"],
    github: "https://github.com/caosonduc/terraform-aws-infra",
    demo: null,
  },
]

export function Projects() {
  return (
    <section className="py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highlighting key projects that demonstrate my backend engineering expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="p-6 space-y-6 hover:shadow-lg transition-shadow">
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

              <div className="flex gap-3 pt-2">
                {project.github && (
                  <Button variant="outline" size="sm" asChild className="gap-2 bg-transparent">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild className="gap-2">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
