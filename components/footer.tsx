"use client"

import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="pt-32 pb-12 overflow-hidden border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32"
        >
          <div className="space-y-8">
            <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">Contact</h5>
            <div className="space-y-5 md:space-y-4 font-bold text-base md:text-sm">
              <a href="mailto:hello@lumoratriad.com" className="block hover:text-primary transition-colors duration-300">
                hello@lumoratriad.com
              </a>
              <a href="tel:+91994788418" className="block hover:text-primary transition-colors duration-300">
                +91 994788418
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">Services</h5>
            <ul className="space-y-5 md:space-y-4 font-bold text-base md:text-sm">
              {["Web Development", "AI & Automation", "Product Engineering"].map((item) => (
                <li key={item} className="hover:text-primary transition-colors duration-300 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">Navigation</h5>
            <ul className="space-y-5 md:space-y-4 font-bold text-base md:text-sm">
              {["Home", "About", "Works", "Services", "Contact"].map((item) => (
                <li key={item} className="hover:text-primary transition-colors duration-300 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 flex flex-col items-start md:items-end">
            <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">Social</h5>
            <div className="flex gap-6 md:gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-primary transition-colors duration-300">
                  <Icon className="w-6 h-6 md:w-5 md:h-5 hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mb-20 overflow-hidden"
        >
          <span className="text-[10vw] font-black tracking-[-0.05em] leading-none text-foreground/[0.08] dark:text-foreground/[0.15] select-none block uppercase text-center font-sans">
            LUMORA TRIAD
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-border/50 text-[10px] font-black text-muted-foreground tracking-[0.2em] uppercase">
          <p>© Lumora Triad. All rights reserved.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link key={item} href="#" className="hover:text-primary transition-colors duration-300">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
