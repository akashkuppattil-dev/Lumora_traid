"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent`}
    >
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group">
          <div className="flex flex-col items-center">
            <img src="/lumora2.svg" alt="Lumora" className="h-49 w-auto" />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-[0.15em]">
          {["HOME", "ABOUT US", "OUR WORKS", "SERVICES", "CONTACT"].map((item, i) => (
            <Link
              key={item}
              href={i === 0 ? "/" : i === 1 ? "/about" : i === 2 ? "/works" : i === 3 ? "/services" : "/contact"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative group hover:text-primary transition-colors duration-300 uppercase"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Link
            href="https://wa.me/994788418"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:scale-110 active:scale-95 transition-transform duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
          >
            <MessageCircle className="w-5 h-5 fill-current" strokeWidth={0} />
            <span className="sr-only">WhatsApp</span>
          </Link>

          <Link
            href="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hidden sm:flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-bold text-[11px] uppercase tracking-wider hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            Get a Quote
          </Link>
        </div>

        <button className="lg:hidden text-foreground">
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
    </header>
  )
}
