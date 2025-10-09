import { Code2, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="text-primary" size={28} />
              <div className="font-bold text-xl">
                GTA<span className="font-normal"> Desenvolvimento</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-pretty">
              Gabriel Torres de Almeida Desenvolvimento de Software LTDA
            </p>
            <p className="text-sm text-muted-foreground text-pretty">
              Transformando ideias em soluções digitais inteligentes desde 2025. Especialistas em desenvolvimento de
              software sob medida, web design e consultoria em TI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:contato@gtadev.com.br" className="hover:text-primary transition-colors">
                  contato@gtadev.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <a href="tel:+5511999999999" className="hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} GTA Desenvolvimento de Sistemas. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  )
}
