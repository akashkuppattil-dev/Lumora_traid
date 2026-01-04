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
            <h2 className="text-3xl sm:text-5xl md:text-7xl mb-8 md:mb-12 leading-tight text-foreground">
              Stories of <span className="text-primary italic font-medium">impact</span> and growth
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg font-medium">
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
            <div className="bg-[#F4F7FB] dark:bg-card border-2 border-[#C7D3E5] dark:border-border p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] shadow-xl relative z-10">
              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-10 md:mb-12 italic text-[#053678] dark:text-foreground">
                "Lumora Triad started with a vision between friends to build our own digital kingdom.
                Our advice to those starting their own journey: Stay bold, focus on the user, and never
                compromise on quality. We are here to turn your boldest ideas into a legacy."
              </p>
              <div className="flex items-center gap-5">
                <div>
                  <h4 className="font-serif font-black text-lg sm:text-xl text-[#053678] dark:text-foreground uppercase tracking-tight">Lumora Triad</h4>
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
