import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Send } from "lucide-react"

export function CTA() {
  return (
    <section id="contato" className="pb-20 pt-8 lg:pb-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="panel-futuristic relative overflow-hidden rounded-[2.4rem] p-8 lg:p-12">
            <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                  <Send size={16} />
                  Vamos criar algo forte para sua marca
                </div>
                <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
                  Seu projeto pode ter uma presença digital mais premium, moderna e memorável.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  Entre em contato para estruturar uma landing page, site, sistema ou painel com aparência mais
                  futurista, limpa e profissional.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl bg-primary px-7 text-white shadow-[0_0_30px_rgba(46,123,255,0.25)] hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  <a href="mailto:contato@gtadev.com.br">
                    <Mail className="mr-2" size={18} />
                    Enviar e-mail
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-cyan-300/30 bg-white/5 px-7 text-cyan-200 backdrop-blur hover:bg-cyan-300/10 hover:text-cyan-100"
                >
                  <a href="https://wa.me/5561993968292" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2" size={18} />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}