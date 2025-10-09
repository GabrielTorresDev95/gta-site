import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-blue-950 to-blue-900"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-bold mb-6 animate-fade-in shadow-lg shadow-blue-500/50">
            <Sparkles size={16} />
            <span>Transformando ideias em realidade digital</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 text-balance leading-tight animate-fade-in-up text-white drop-shadow-lg">
            Soluções Digitais{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">Inteligentes</span> para o Seu
            Negócio
          </h1>

          <p className="text-lg md:text-xl text-white font-bold mb-8 max-w-2xl mx-auto text-pretty animate-fade-in-up delay-200 drop-shadow-md">
            Desenvolvimento de software sob medida, web design e consultoria em TI. Combinamos inovação, performance e
            segurança para criar experiências digitais únicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <Button
              size="lg"
              asChild
              className="group bg-blue-500 text-white hover:bg-blue-600 font-bold text-lg shadow-2xl shadow-blue-500/50"
            >
              <a href="#contato">
                Iniciar Projeto
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-300 font-bold text-lg backdrop-blur-sm bg-black/30"
            >
              <a href="#servicos">
                <Code2 className="mr-2" size={20} />
                Nossos Serviços
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in-up delay-500">
            {[
              { value: "2025", label: "Fundada" },
              { value: "100%", label: "Sob Medida" },
              { value: "24/7", label: "Suporte" },
              { value: "∞", label: "Inovação" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-black/50 backdrop-blur-md rounded-xl p-4 border-2 border-blue-500/50 hover:border-cyan-400 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                  {stat.value}
                </div>
                <div className="text-sm text-white font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
