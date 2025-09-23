import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2021 — Present",
    company: "PR TIMES",
    location: "Japan",
    role: "Backend Engineer",
    description:
      "Leading backend development for press release distribution service serving millions of users. Architected search infrastructure improvements and managed AWS cloud operations.",
    achievements: [
      "Led OpenSearch migration project improving search performance by 40%",
      "Designed and implemented microservices architecture with Golang",
      "Managed BigQuery data pipeline processing 10M+ daily events",
      "Mentored junior developers and established code review processes",
    ],
    technologies: ["Golang", "PHP", "AWS", "OpenSearch", "BigQuery", "PostgreSQL"],
  },
]

export function Experience() {
  return (
    <section className="py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            3+ years of backend engineering experience in high-scale production environments
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8">
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1 space-y-2">
                  <p className="text-sm font-medium text-accent">{exp.period}</p>
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-muted-foreground">{exp.location}</p>
                </div>

                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{exp.role}</h4>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-medium">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
