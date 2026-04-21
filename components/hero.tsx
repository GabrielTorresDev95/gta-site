import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Code2, ShieldCheck, Sparkles } from "lucide-react"

const metrics = [
  { value: "100%", label: "Projetos sob medida" },
  { value: "UI+DX", label: "Experiência premium" },
  { value: "Cloud", label: "Escalabilidade real" },
  { value: "24/7", label: "Visão estratégica" },
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
              Tecnologia, design e performance na mesma entrega
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Interfaces modernas, software inteligente e uma presença digital com
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-primary bg-clip-text text-transparent">
                {" "}
                estética futurista.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/72 lg:text-xl">
              A GTA Desenvolvimento cria experiências digitais com identidade visual forte, painéis modernos,
              automações e arquitetura preparada para escalar seu negócio.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary px-7 text-white shadow-[0_0_40px_rgba(46,123,255,0.32)] hover:translate-y-[-2px] hover:bg-primary/90"
              >
                <a href="#contato">
                  Iniciar projeto
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-cyan-400/30 bg-white/5 px-7 text-cyan-300 backdrop-blur hover:bg-cyan-400/10 hover:text-cyan-200"
              >
                <a href="#servicos">
                  <Code2 className="mr-2" size={18} />
                  Ver soluções
                </a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="panel-futuristic rounded-3xl p-4 text-center transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="text-2xl font-black text-cyan-300 md:text-3xl">{metric.value}</div>
                  <div className="mt-1 text-sm text-white/60">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="panel-futuristic relative overflow-hidden rounded-[2rem] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-400/10 to-transparent" />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/90">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                  alt="Equipe de tecnologia trabalhando em painel moderno"
                  width={1200}
                  height={900}
                  className="h-[520px] w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />

                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <div className="absolute inset-x-5 bottom-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="glass-card rounded-3xl p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">Control Center</div>
                        <div className="mt-2 text-2xl font-bold text-white">Experiência digital de alto impacto</div>
                      </div>
                      <BarChart3 className="text-cyan-300" size={28} />
                    </div>
                    <div className="mt-5 space-y-3">
                      <div>
                        <div className="mb-2 flex justify-between text-xs text-white/55">
                          <span>Performance visual</span>
                          <span>94%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/8">
                          <div className="h-2 w-[94%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 flex justify-between text-xs text-white/55">
                          <span>Escalabilidade</span>
                          <span>88%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/8">
                          <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card rounded-3xl p-5">
                    <div className="flex items-center gap-3 text-white">
                      <ShieldCheck className="text-cyan-300" size={22} />
                      <span className="font-semibold">Arquitetura segura e orientada a resultados</span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/68">
                      Sites, sistemas, landing pages e experiências visuais com alto padrão estético, animações
                      inteligentes e base sólida para integrações futuras.
                    </p>
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