import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Differentials } from "@/components/differentials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import AdBanner from "@/components/AdBanner"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <CTA />
      <Footer />
      <AdBanner/>
      
  
    </main>
  )
}
