"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cpu, Menu, Sparkles, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`panel-futuristic flex items-center justify-between rounded-full px-4 py-3 transition-all duration-500 lg:px-6 ${
            isScrolled ? "bg-background/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)]" : "bg-background/45"
          }`}
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="glow-ring flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
              <Cpu size={20} />
            </div>
            <div>
              <div className="text-lg font-black tracking-[0.22em] text-white uppercase">GTA</div>
              <div className="text-xs text-white/65">Desenvolvimento de Sistemas</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/75 transition-all duration-300 hover:bg-white/10 hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-primary px-6 text-white shadow-[0_0_30px_rgba(46,123,255,0.35)] hover:scale-[1.02] hover:bg-primary/90"
            >
              <a href="#contato">
                <Sparkles className="mr-2" size={18} />
                Solicitar proposta
              </a>
            </Button>
          </div>

          <button
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="panel-futuristic mt-3 rounded-3xl px-4 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/80 transition-all hover:bg-white/8 hover:text-cyan-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-2 rounded-2xl bg-primary text-white">
                <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                  Solicitar proposta
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}