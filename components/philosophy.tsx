import { Card } from "@/components/ui/card"

export function Philosophy() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        <Card className="p-12 text-center bg-gradient-to-br from-card/50 to-accent/5 border-accent/20">
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold">Philosophy</h2>
            <blockquote className="text-xl lg:text-2xl font-medium text-balance leading-relaxed">
              "In the grim darkness of the far future, there is only code."
            </blockquote>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Inspired by the Warhammer 40K universe, I believe in writing robust, battle-tested code that can withstand
              the challenges of production environments and scale with the demands of the future.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
