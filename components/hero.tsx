"use client"

import { motion } from "framer-motion"
import { NeuralNetwork } from "./neural-network"

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

      {/* Neural Network Background */}
      <NeuralNetwork />

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-muted/50 backdrop-blur px-5 py-2 rounded-full text-[10px] font-black tracking-widest uppercase mb-10 border border-border shadow-sm"
          >
            <span className="text-primary">Reliable</span>
            <span className="text-muted-foreground opacity-30">•</span>
            <span>Premium Development</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-[7rem] mb-10 leading-[0.9] tracking-tighter font-serif font-black text-balance"
          >
            Building digital <br />
            <span className="text-primary italic font-medium">realities with precision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-tight mb-14 font-medium tracking-tight text-pretty"
          >
            Lumora Triad delivers modern, reliable, and thoughtfully designed digital solutions with a focus on
            Technology, Design, and Delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-10"
          >
            <button className="group relative bg-foreground text-background px-12 py-6 rounded-full text-[13px] font-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl uppercase tracking-[0.2em] overflow-hidden">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
