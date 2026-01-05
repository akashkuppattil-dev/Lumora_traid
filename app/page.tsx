import { ContactForm } from "@/components/contact-form"
import { FeaturesBento } from "@/components/features-bento"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Process } from "@/components/process"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative bg-[url('/theme4.jpg')] bg-fixed bg-cover bg-center">
        {/* Subtle overlay to ensure readability and blend with hero */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

        <div className="relative z-10">
          <FeaturesBento />
          <Services />
          <Process />
          <Testimonials />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
