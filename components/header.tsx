"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "OUR WORKS", href: "/works" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6 pointer-events-none">
      <div className="container mx-auto relative h-20 flex items-center justify-between pointer-events-auto">

        {/* Logo Section */}
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group">
          <div className="flex flex-col items-center">
            <img src="/logo.svg" alt="Lumora" className="h-49 w-auto brightness-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
          </div>
        </Link>

        {/* Standalone Nav Pill (Centered) */}
        <nav className="hidden lg:flex items-center gap-1 px-8 h-6 rounded-full border border-white/10 border-t-white/30 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] absolute left-1/2 -translate-x-1/2 pointer-events-auto overflow-hidden">
          {/* Silver Sheen Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

          <div className="flex items-center gap-6 relative z-10 text-[10px] font-bold tracking-[0.2em]">
            {["HOME", "ABOUT", "WORKS", "SERVICES", "CONTACT"].map((item, i) => (
              <Link
                key={item}
                href={i === 0 ? "/" : i === 1 ? "/about" : i === 2 ? "/works" : i === 3 ? "/services" : "/contact"}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="relative group text-white/70 hover:text-white transition-colors duration-300 uppercase py-2"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Actions Section */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Link
            href="https://wa.me/994788418"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 fill-current" strokeWidth={0} />
            <span className="sr-only">WhatsApp</span>
          </Link>

          <Link
            href="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hidden sm:flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-bold text-[10px] uppercase tracking-wider hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Connect Us
          </Link>

          <button className="lg:hidden text-white ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (ADDED – no desktop impact) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/40"
          >
            <nav className="flex flex-col p-8 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="text-2xl font-bold tracking-widest uppercase hover:text-primary transition-colors border-b border-border/20 pb-4 last:border-0"
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex items-center justify-between pt-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Switch Theme
                </span>
                <ThemeToggle />
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 bg-primary text-primary-foreground rounded-xl font-bold uppercase tracking-widest shadow-lg mt-4"
              >
                Connect Us →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
