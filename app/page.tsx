import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(0, 212, 255, 0.05), transparent)",
        }}
      />
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  )
}
