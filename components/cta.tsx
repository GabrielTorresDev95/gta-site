import { Button } from "@/components/ui/button"
import { Mail, MessageSquare } from "lucide-react"

export function CTA() {
  return (
    <section id="contato" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground p-8 lg:p-16 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Pronto para Transformar Sua Ideia em Realidade?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
              Entre em contato conosco e descubra como podemos ajudar seu negócio a alcançar novos patamares com
              tecnologia de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="group">
                <a href="mailto:contato@gtadev.com.br">
                  <Mail className="mr-2" size={20} />
                  Enviar E-mail
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground"
              >
                <a href="https://wa.me/5561993968292" target="_blank" rel="Gabriel">
                  <MessageSquare className="mr-2" size={20} />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
