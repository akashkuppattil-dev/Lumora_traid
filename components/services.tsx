"use client"

import { Palette, Code, Megaphone } from "lucide-react"
import { motion } from "framer-motion"

export function Services() {
  const services = [
    {
      title: "UI/UX design",
      desc: "Crafting intuitive and engaging digital experiences, our UI/UX design services focus on seamless user journeys and visually stunning interfaces.",
      icon: Palette,
    },
    {
      title: "Development",
      desc: "Our development services bring your ideas to life with robust, scalable, and high-performance solutions. we ensure a smooth and secure experience every time.",
      icon: Code,
    },
    {
      title: "Marketing",
      desc: "Our marketing services are designed to boost your brand visibility and drive meaningful engagement. we craft data-driven strategies that connect with your target audience.",
      icon: Megaphone,
    },
  ]

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/3 lg:sticky lg:top-32"
          >
            <span className="text-[10px] font-black tracking-[0.2em] text-muted-foreground uppercase bg-muted/20 border border-border px-4 py-1.5 rounded-full shadow-sm mb-6 inline-block">
              Expertise
            </span>
            <h2 className="text-4xl md:text-6xl mb-8 leading-[1.1] font-serif text-foreground">
              Redefining success in the <span className="text-primary italic font-medium">digital</span> space
            </h2>
          </motion.div>

          <div className="lg:w-2/3 grid gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-12 rounded-[3rem] bg-card border border-border/60 shadow-lg group transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <s.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-medium">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
