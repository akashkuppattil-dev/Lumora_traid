"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Linkedin, MessageCircle } from "lucide-react"

export function ContactForm() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/10 dark:to-primary/5 rounded-[3rem] p-8 md:p-16 border border-primary/10 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
            <div className="space-y-10">
              <div>
                <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter mb-6 text-foreground">
                  Just say <span className="text-primary italic">hello!</span>
                </h2>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                  Want to know more about us, tell us about your project or just to say hello? Drop us a line and we'll
                  get back as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:hello@lumoratriad.com"
                  className="flex items-center gap-4 text-lg font-bold text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  hello@lumoratriad.com
                </a>
                <a
                  href="tel:+91994788418"
                  className="flex items-center gap-4 text-lg font-bold text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  +91 994788418
                </a>
                <a
                  href="https://wa.me/91994788418"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg font-bold text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  WhatsApp Chat
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg font-bold text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  LinkedIn
                </a>
              </div>
            </div>

            <form className="grid gap-6 bg-background/50 backdrop-blur-xl p-8 rounded-3xl border border-border/50">
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.2em] font-black text-muted-foreground ml-2">Full Name</label>
                <input
                  type="text"
                  className="bg-background border-2 border-transparent focus:border-primary/20 rounded-2xl px-6 py-4 outline-none transition-all duration-300 ease-[0.21,0.47,0.32,0.98] font-medium placeholder:text-muted-foreground/30 focus:shadow-lg focus:shadow-primary/5"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.2em] font-black text-muted-foreground ml-2">Email Address</label>
                <input
                  type="email"
                  className="bg-background border-2 border-transparent focus:border-primary/20 rounded-2xl px-6 py-4 outline-none transition-all duration-300 ease-[0.21,0.47,0.32,0.98] font-medium placeholder:text-muted-foreground/30 focus:shadow-lg focus:shadow-primary/5"
                  placeholder="john@example.com"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.2em] font-black text-muted-foreground ml-2">Your Message</label>
                <textarea
                  rows={4}
                  className="bg-background border-2 border-transparent focus:border-primary/20 rounded-2xl px-6 py-4 outline-none transition-all duration-300 ease-[0.21,0.47,0.32,0.98] resize-none font-medium placeholder:text-muted-foreground/30 focus:shadow-lg focus:shadow-primary/5"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button className="bg-primary text-primary-foreground py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-primary/20 mt-2">
                Send Message
              </button>
              <p className="text-xs text-muted-foreground/60 text-center font-medium">
                We'll get back to you within 24 hours.
              </p>
            </form>
          </div>

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
