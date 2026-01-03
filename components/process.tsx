"use client"

import { Plus } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Process() {
  const steps = [
    {
      name: "Design.",
      desc: "We start by crafting intuitive, user-centered designs that reflect your brand's unique identity.",
      image: "/minimalist-designer-hands-working-with-color-swatc.jpg",
    },
    {
      name: "Build.",
      desc: "We begin with innovative design concepts, focusing on creating user-friendly and engaging experiences.",
      image: "/modern-clean-code-on-a-sleek-monitor.jpg",
    },
    {
      name: "Deliver.",
      desc: "Final handover and post-launch support for your success, ensuring high-performance solutions.",
      image: "/premium-minimalist-product-launch-presentation.jpg",
    },
  ]

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-[10px] font-black tracking-[0.2em] text-muted-foreground uppercase bg-muted/20 border border-border px-4 py-1.5 rounded-full shadow-sm">
            Our Process
          </span>
          <h2 className="text-4xl md:text-7xl font-serif">Working process</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-default"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-10 relative shadow-xl border border-white/50 bg-gradient-to-br from-muted/20 to-transparent">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-xl shadow-primary/40 transform group-hover:rotate-90 transition-transform duration-500 z-10">
                  <Plus className="w-6 h-6" strokeWidth={3} />
                </div>
              </div>
              <h3 className="text-4xl font-serif font-bold mb-5 tracking-tight group-hover:text-primary transition-colors duration-300">
                {step.name}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium text-pretty">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
