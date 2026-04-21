import Image from "next/image"
import { Building2, Calendar, Radar, Target } from "lucide-react"

const cards = [
  {
    icon: Building2,
    title: "Empresa",
    text: "Gabriel Torres de Almeida Desenvolvimento de Software LTDA, atuando como GTA Desenvolvimento de Sistemas.",
  },
  {
    icon: Calendar,
    title: "Fundação",
    text: "Desde 23 de setembro de 2025, conectando estratégia, design e tecnologia em entregas premium.",
  },
  {
    icon: Target,
    title: "Foco",
    text: "Criar soluções digitais com impacto visual, performance e inteligência aplicada ao negócio.",
  },
]

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="panel-futuristic relative overflow-hidden rounded-[2rem] p-3">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="Ambiente moderno de desenvolvimento"
                width={1200}
                height={1200}
                className="h-[560px] w-full rounded-[1.6rem] object-cover"
              />
              <div className="absolute inset-3 rounded-[1.6rem] bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="glass-card absolute bottom-8 left-8 right-8 rounded-3xl p-6">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Radar size={20} />
                  <span className="text-sm font-semibold uppercase tracking-[0.24em]">Visão de produto</span>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/72">
                  Cada interface é pensada para gerar valor de negócio, transmitir confiança e destacar sua marca com
                  um acabamento visual mais premium.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-300">
              Sobre a GTA
            </div>
            <h2 className="mt-5 text-3xl font-black text-white md:text-5xl">
              Design tecnológico com presença forte, limpa e memorável.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              A GTA Desenvolvimento combina software sob medida, UX refinada e comunicação visual de alto impacto para
              construir produtos digitais que parecem modernos hoje e continuam relevantes amanhã.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="panel-futuristic rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,211,238,0.08)]"
                >
                  <div className="glow-ring flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                    <card.icon size={22} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.8rem] border border-cyan-400/15 bg-gradient-to-r from-primary/15 via-transparent to-cyan-400/10 p-6">
              <p className="text-base leading-8 text-white/72">
                Nossa missão é transformar briefing em produto real com visual sofisticado, painéis modernos,
                navegação intuitiva e estrutura pronta para crescer com integrações, automações e novas features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}