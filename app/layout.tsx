import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"        // ✅ Adicione esta importação
import "./globals.css"

export const metadata: Metadata = {
  title: "GTA Desenvolvimento de Sistemas | Soluções Digitais Inteligentes",
  description:
    "Desenvolvimento de software sob medida, web design e consultoria em TI. Transformamos ideias em soluções digitais inteligentes.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* ✅ Forma recomendada pelo Next.js */}
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9143074734471145"
          crossOrigin="anonymous"
          strategy="afterInteractive"  // garante carregamento após renderização
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
