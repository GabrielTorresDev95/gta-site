import { Users, Shield, Zap, Award } from "lucide-react"

export function Differentials() {
  const differentials = [
    {
      icon: Users,
      title: "Atendimento Próximo e Consultivo",
      description:
        "Trabalhamos lado a lado com você, entendendo profundamente suas necessidades e oferecendo orientação estratégica em cada etapa do projeto.",
    },
    {
      icon: Shield,
      title: "Soluções Escaláveis e Seguras",
      description:
        "Desenvolvemos sistemas preparados para crescer com seu negócio, com arquitetura robusta e as melhores práticas de segurança da informação.",
    },
    {
      icon: Zap,
      title: "Tecnologias Modernas",
      description:
        "Utilizamos as ferramentas e frameworks mais atuais do mercado, garantindo performance, manutenibilidade e inovação constante.",
    },
    {
      icon: Award,
      title: "Compromisso com Resultados",
      description:
        "Cumprimento de prazos, transparência na comunicação e foco total em entregar soluções que realmente agregam valor ao seu negócio.",
    },
  ]

  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-balance text-white">
              Nossos Diferenciais
            </h2>
            <p className="text-lg text-gray-300 font-bold max-w-2xl mx-auto text-pretty">
              O que nos torna a escolha ideal para o seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {differentials.map((differential, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <differential.icon className="text-white" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-white mb-2">{differential.title}</h3>
                  <p className="text-gray-300 font-semibold text-pretty">{differential.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
