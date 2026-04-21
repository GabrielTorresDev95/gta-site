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
        isScrolled ? "pt-2" : "pt-3"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div
          className={`
            flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 lg:rounded-full lg:px-6
            ${
              isScrolled
                ? "bg-slate-950/95 border border-cyan-400/20 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                : "bg-slate-950/88 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            }
          `}
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="glow-ring flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white sm:h-11 sm:w-11">
              <Cpu size={20} />
            </div>

            <div className="min-w-0">
              <div className="truncate text-sm font-black tracking-[0.18em] text-white uppercase sm:text-lg">
                GTA
              </div>
              <div className="hidden text-xs text-white/70 sm:block">
                Desenvolvimento de Sistemas
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-cyan-300 active:bg-cyan-400/15 active:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-primary px-6 text-white shadow-[0_0_30px_rgba(46,123,255,0.35)] transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98] active:bg-blue-700"
            >
              <a href="#contato">
                <Sparkles className="mr-2" size={18} />
                Solicitar proposta
              </a>
            </Button>
          </div>

          <button
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-slate-900 text-white shadow-[0_0_20px_rgba(34,211,238,0.08)] transition-all duration-200 hover:bg-slate-800 active:scale-95 active:bg-cyan-400/15 active:text-cyan-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="mt-3 md:hidden overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/98 shadow-[0_18px_45px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
            <div className="flex flex-col p-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-white/90 transition-all duration-200 hover:bg-slate-800 hover:text-cyan-300 active:scale-[0.98] active:bg-cyan-400/15 active:text-cyan-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <Button
                asChild
                className="mt-3 h-12 rounded-xl bg-primary text-white transition-all duration-200 hover:bg-primary/90 active:scale-[0.98] active:bg-blue-700"
              >
                <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                  <Sparkles className="mr-2" size={18} />
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