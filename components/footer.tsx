import { Code2, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="glow-ring flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                <Code2 size={24} />
              </div>
              <div>
                <div className="text-lg font-black tracking-[0.22em] text-white uppercase">GTA</div>
                <div className="text-sm text-white/50">Desenvolvimento de Sistemas</div>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/62">
              Gabriel Torres de Almeida Desenvolvimento de Software LTDA. Criando experiências digitais modernas com
              estética premium, arquitetura limpa e foco em percepção de valor.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/90">Navegação</h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/58 transition-colors hover:text-cyan-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/90">Contato</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/62">
                <Mail size={16} className="mt-1 shrink-0 text-cyan-300" />
                <a href="mailto:gabrielprofessor802@gmail.com" className="transition-colors hover:text-cyan-300">
                  gabrielprofessor802@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/62">
                <MapPin size={16} className="mt-1 shrink-0 text-cyan-300" />
                <span>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} GTA Desenvolvimento de Sistemas. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  )
}