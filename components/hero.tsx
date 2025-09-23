import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, FileText } from "lucide-react"

export function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">Cao Son Duc</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">Backend Engineer</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build scalable, high-performance backend systems with Golang, PHP, and AWS. Passionate about search
              technologies and distributed systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="gap-2">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" />
                CV (PDF)
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 bg-transparent">
              <a href="https://linkedin.com/in/caosonduc" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 bg-transparent">
              <a href="https://github.com/caosonduc" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-accent/30 flex items-center justify-center text-4xl lg:text-5xl font-bold text-accent-foreground">
                CSD
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-accent font-medium">Golang · PHP · AWS · OpenSearch</p>
      </div>
    </section>
  )
}
