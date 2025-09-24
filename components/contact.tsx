import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  return (
    <section className="py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or discussing backend engineering opportunities? Let's connect.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a
                    href="mailto:sonduc2210@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    sonduc2210@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-accent" />
                  <a
                    href="https://github.com/sduccao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    github.com/sduccao
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-accent" />
                  <a
                    href="https://linkedin.com/in/cao-son-duc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    linkedin.com/in/cao-son-duc
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Currently Open To:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Backend engineering opportunities
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Open source collaborations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
