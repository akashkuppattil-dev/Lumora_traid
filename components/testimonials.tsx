"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Testimonials() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4 block">
              Testimonial
            </span>
            <h2 className="text-5xl md:text-7xl mb-12 leading-tight text-foreground">
              Stories of <span className="text-primary italic">impact</span> and growth
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-medium">
              We create connection that drive real-world results. Turning bold ideas into interactive digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card border-2 border-border p-12 rounded-[3rem] shadow-xl relative z-10">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12 italic text-foreground">
                "Working with LuminisDigital has been a game-changer for our brand. Their creative strategies and
                attention to detail helped us achieve a 200% increase in online engagement within six months. They truly
                understood our vision and brought it to life in ways we couldn't have imagined."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-muted overflow-hidden relative">
                  <Image
                    src="/images/whatsapp-20image-202025-12-31-20at-2016.jpeg"
                    alt="Testimonial author"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Mike Morgan</h4>
                  <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider">CEO, Flowrix</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
