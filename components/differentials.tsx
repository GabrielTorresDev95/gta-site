import Image from "next/image"
import { Award, Shield, Users, Zap } from "lucide-react"

const differentials = [
  {
    icon: Users,
    title: "Atendimento consultivo",
    description: "Entendimento profundo do projeto, alinhamento próximo e decisões guiadas por contexto real.",
  },
  {
    icon: Shield,
    title: "Base segura e escalável",
    description: "Estrutura técnica preparada para crescer com clareza, manutenção organizada e segurança.",
  },
  {
    icon: Zap,
    title: "Velocidade com acabamento",
    description: "Execução ágil sem abrir mão de refinamento visual, consistência e sensação de produto premium.",
  },
  {
    icon: Award,
    title: "Entrega com impacto",
    description: "Foco em resultado, percepção de valor e uma presença digital que transmite autoridade.",
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-300">
              Nossos diferenciais
            </div>
            <h2 className="mt-5 text-3xl font-black text-white md:text-5xl">
              Painéis modernos, efeitos elegantes e uma experiência visual mais viva.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
              O objetivo não é apenas parecer bonito. É transmitir tecnologia, confiança e valor percebido desde o
              primeiro scroll.
            </p>

            <div className="mt-8 grid gap-4">
              {differentials.map((item) => (
                <div
                  key={item.title}
                  className="panel-futuristic group flex gap-4 rounded-[1.6rem] p-5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="glow-ring flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/64">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="panel-futuristic overflow-hidden rounded-[2rem] p-3">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/80">
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                  alt="Dashboard tecnológico futurista"
                  width={1200}
                  height={1200}
                  className="h-[580px] w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute inset-x-6 top-6 grid gap-4 sm:grid-cols-2">
                  <div className="glass-card rounded-3xl p-5">
                    <div className="text-xs uppercase tracking-[0.22em] text-cyan-300/70">Dashboard</div>
                    <div className="mt-3 text-3xl font-black text-white">+47%</div>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Melhoria de presença visual percebida em interfaces com mais profundidade e clareza.
                    </p>
                  </div>
                  <div className="glass-card rounded-3xl p-5">
                    <div className="text-xs uppercase tracking-[0.22em] text-cyan-300/70">Experience score</div>
                    <div className="mt-3 text-3xl font-black text-white">9.4/10</div>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Combinação de design, leitura, contraste e sensação de marca profissional.
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card rounded-[1.8rem] p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="text-sm uppercase tracking-[0.22em] text-cyan-300/70">Vision Layer</div>
                        <div className="mt-2 text-xl font-bold text-white">
                          Seu projeto com estética mais atual e linguagem digital mais forte
                        </div>
                      </div>
                      <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                        Futurista · Limpo · Premium
                      </div>
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