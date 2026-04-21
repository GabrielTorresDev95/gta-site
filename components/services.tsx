import { Code, Layers, Palette, Settings } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Desenvolvimento sob encomenda",
    description: "Sistemas, plataformas e páginas de alta conversão construídos de forma totalmente personalizada.",
    features: ["Arquitetura escalável", "Código limpo", "Integrações futuras", "Entrega sob medida"],
  },
  {
    icon: Layers,
    title: "Softwares customizáveis",
    description: "Produtos digitais flexíveis com base sólida para expansão, novos módulos e novos fluxos.",
    features: ["Módulos reaproveitáveis", "Painéis elegantes", "Licenciamento adaptável", "Crescimento organizado"],
  },
  {
    icon: Settings,
    title: "Consultoria em TI",
    description: "Direção técnica para escolher melhor stack, processos, estrutura de projeto e estratégia digital.",
    features: ["Planejamento técnico", "Otimização de processos", "Validação de ideias", "Direção de produto"],
  },
  {
    icon: Palette,
    title: "Web design & UX",
    description: "Experiências visuais modernas, imersivas e responsivas, com visual premium e linguagem atual.",
    features: ["Microinterações", "Layout premium", "Jornada clara", "Identidade forte"],
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-300">
              O que fazemos
            </div>
            <h2 className="mt-5 bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-3xl font-black text-transparent md:text-5xl">
              Soluções com aparência premium e engenharia de verdade.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/68">
              Cada entrega une design de alto nível, usabilidade clara e base técnica pensada para performance e
              crescimento.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="panel-futuristic group relative overflow-hidden rounded-[2rem] p-6 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-cyan-300 to-secondary opacity-80" />
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-500 group-hover:scale-150" />
                <div className="flex items-start justify-between gap-4">
                  <div className="glow-ring flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-[0_0_25px_rgba(34,211,238,0.15)]">
                    <service.icon size={28} />
                  </div>
                  <div className="text-sm font-semibold text-cyan-300/70">0{index + 1}</div>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-white/65">{service.description}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-medium text-white/75 backdrop-blur-sm"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center text-sm font-semibold tracking-[0.18em] text-white/35 uppercase">
            CNAE 62.01-5-01 · desenvolvimento de programas de computador sob encomenda
          </div>
        </div>
      </div>
    </section>
  )
}