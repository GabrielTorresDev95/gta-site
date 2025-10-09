import { Code, Palette, Settings, Layers } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Sob Encomenda",
      description:
        "Sistemas personalizados desenvolvidos especificamente para atender as necessidades únicas do seu negócio.",
      features: [
        "Análise de requisitos",
        "Arquitetura escalável",
        "Código limpo e documentado",
        "Testes automatizados",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Layers,
      title: "Softwares Customizáveis",
      description: "Soluções licenciáveis e adaptáveis que crescem junto com sua empresa.",
      features: ["Módulos flexíveis", "Integrações facilitadas", "Atualizações contínuas", "Suporte técnico"],
      color: "from-cyan-500 to-blue-400",
    },
    {
      icon: Settings,
      title: "Consultoria em TI",
      description: "Orientação estratégica para otimizar seus processos e infraestrutura tecnológica.",
      features: ["Análise de processos", "Planejamento estratégico", "Otimização de recursos", "Melhores práticas"],
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Palette,
      title: "Web Design & UX",
      description: "Interfaces modernas e intuitivas que proporcionam experiências memoráveis aos usuários.",
      features: ["Design responsivo", "Prototipagem", "Testes de usabilidade", "Identidade visual"],
      color: "from-cyan-400 to-blue-500",
    },
  ]

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-balance bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              O Que Fazemos
            </h2>
            <p className="text-lg text-white font-bold max-w-2xl mx-auto text-pretty">
              Soluções completas em tecnologia para impulsionar seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-2xl hover:shadow-blue-500/30 transition-all border-2 hover:border-cyan-400 hover:scale-105 bg-gradient-to-br ${service.color} p-[3px] group`}
              >
                <div className="bg-gray-950 rounded-[calc(0.75rem-3px)] h-full">
                  <CardHeader>
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl font-black text-white">{service.title}</CardTitle>
                    <CardDescription className="text-pretty font-bold text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-bold text-gray-200">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400 font-bold mb-4">
              CNAE 62.01-5-01 - Desenvolvimento de programas de computador sob encomenda
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
