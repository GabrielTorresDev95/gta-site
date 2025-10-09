import { Building2, Calendar, Target } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-balance text-white">Quem Somos</h2>
            <p className="text-lg text-gray-300 font-bold max-w-2xl mx-auto text-pretty">
              Uma empresa de tecnologia dedicada a transformar desafios em oportunidades digitais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900 p-8 rounded-lg border-2 border-blue-500/50 hover:border-cyan-400 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Nossa Empresa</h3>
              <p className="text-gray-300 font-semibold text-pretty">
                Gabriel Torres de Almeida Desenvolvimento de Software LTDA, operando como GTA Desenvolvimento de
                Sistemas
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border-2 border-blue-500/50 hover:border-cyan-400 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Fundação</h3>
              <p className="text-gray-300 font-semibold text-pretty">
                Fundada em 23 de setembro de 2025, trazendo inovação e expertise em desenvolvimento de software
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border-2 border-blue-500/50 hover:border-cyan-400 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Nosso Propósito</h3>
              <p className="text-gray-300 font-semibold text-pretty">
                Ajudar empresas a transformar ideias em soluções digitais inteligentes com inovação e segurança
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 lg:p-12 rounded-2xl shadow-2xl shadow-blue-500/30">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-balance">
                Transformando Ideias em Realidade Digital
              </h3>
              <p className="text-lg text-white font-bold text-pretty">
                Trabalhamos com sistemas personalizados, plataformas web, aplicativos e integrações tecnológicas, sempre
                focados nas necessidades específicas de cada cliente. Nossa missão é combinar inovação, performance e
                segurança para entregar soluções que realmente fazem a diferença.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
