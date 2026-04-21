import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const highlights = [
  "Sites modernos e responsivos",
  "Landing pages para captação de clientes",
  "Sistemas sob medida para o seu negócio",
  "Visual premium com foco em conversão",
]

const trustItems = [
  { value: "100%", label: "Projetos personalizados" },
  { value: "Rápido", label: "Atendimento consultivo" },
  { value: "Premium", label: "Design de alto impacto" },
]

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-32 lg:pt-40">
      <div className="hero-grid absolute inset-0 opacity-60" />
      <div className="hero-orb absolute left-[10%] top-32 h-72 w-72" />
      <div className="hero-orb hero-orb-secondary absolute bottom-10 right-[8%] h-80 w-80" />

      <div className="container relative z-10 mx-auto px-4 pb-20 lg:px-8 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
              <Sparkles size={16} />
              Soluções digitais para atrair, apresentar e converter clientes
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Seu negócio precisa de uma presença digital que
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-primary bg-clip-text text-transparent">
                {" "}
                impressiona, explica e faz o cliente entrar em contato.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/72 lg:text-xl">
              Criamos sites, landing pages e sistemas com visual moderno, estrutura profissional e foco total em
              transformar visitantes em oportunidades reais de negócio.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/85 backdrop-blur-sm"
                >
                  <BadgeCheck size={18} className="shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary px-7 text-white shadow-[0_0_40px_rgba(46,123,255,0.32)] hover:translate-y-[-2px] hover:bg-primary/90"
              >
                <a href="#contato">
                  Solicitar orçamento
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-cyan-400/30 bg-white/5 px-7 text-cyan-300 backdrop-blur hover:bg-cyan-400/10 hover:text-cyan-200"
              >
                <a href="https://wa.me/5561993968292" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2" size={18} />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-cyan-300" />
                <span>Atendimento profissional</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock3 size={16} className="text-cyan-300" />
                <span>Resposta rápida</span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="panel-futuristic rounded-3xl p-4 text-center transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="text-2xl font-black text-cyan-300 md:text-3xl">{item.value}</div>
                  <div className="mt-1 text-sm text-white/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="panel-futuristic relative overflow-hidden rounded-[2rem] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-400/10 to-transparent" />

              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/90">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                  alt="Ambiente moderno de negócios e tecnologia"
                  width={1200}
                  height={900}
                  className="h-[520px] w-full object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <div className="absolute inset-x-5 bottom-5 grid gap-4">
                  <div className="glass-card rounded-3xl p-5">
                    <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
                      Primeira impressão conta
                    </div>
                    <div className="mt-2 text-2xl font-bold text-white">
                      Um site bonito sozinho não basta.
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/68">
                      A estrutura precisa mostrar valor, organizar sua oferta e facilitar o contato. É isso que
                      transforma visita em conversa comercial.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="glass-card rounded-3xl p-5">
                      <div className="text-base font-semibold text-white">Captação</div>
                      <p className="mt-2 text-sm leading-6 text-white/65">
                        Landing pages e páginas comerciais pensadas para gerar mensagens, leads e pedidos de orçamento.
                      </p>
                    </div>

                    <div className="glass-card rounded-3xl p-5">
                      <div className="text-base font-semibold text-white">Posicionamento</div>
                      <p className="mt-2 text-sm leading-6 text-white/65">
                        Visual moderno e profissional para sua marca transmitir mais autoridade e confiança.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}