import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { IntroSection } from "@/components/intro-section"
import { FeaturesBento } from "@/components/features-bento"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <div className="relative bg-[url('/theme4.jpg')] bg-fixed bg-cover bg-center">
        {/* Subtle overlay to ensure readability and blend with hero */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

        <div className="relative z-10">
          <FeaturesBento />
          <Services />
          <Process />
          <Testimonials />
        </div>
      </div>
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  )
}
