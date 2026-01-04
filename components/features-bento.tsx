"use client"

import { Compass, Cpu, Layers, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export function FeaturesBento() {
  const features = [
    {
      title: "UX Research & Analysis",
      desc: "Deep diving into user needs to ensure every design decision has a data-driven purpose.",
      icon: Compass,
      bgColor: "bg-[#053678] dark:bg-muted/10",
      textColor: "text-white dark:text-foreground",
      iconColor: "text-white",
    },
    {
      title: "UI Design & Prototyping",
      desc: "Crafting wireframes and high-fidelity interactive prototypes that feel real.",
      icon: Layers,
      bgColor: "bg-[#6A3A8F] dark:bg-muted/10",
      textColor: "text-white dark:text-foreground",
      iconColor: "text-white",
    },
    {
      title: "Website & App Development",
      desc: "From complex web platforms to sleek mobile apps, we build for performance and scale.",
      icon: Cpu,
      bgColor: "bg-[#F4F7FB] dark:bg-muted/10",
      textColor: "text-[#053678] dark:text-foreground",
      iconColor: "text-[#053678] dark:text-white",
    },
    {
      title: "Branding & Poster Design",
      desc: "Building a unique visual identity through logos, posters, and creative assets.",
      icon: ShieldCheck,
      bgColor: "bg-white dark:bg-muted/10",
      textColor: "text-[#053678] dark:text-foreground",
      iconColor: "text-[#6A3A8F] dark:text-white",
      borderColor: "border-[#C7D3E5]",
    },
    {
      title: "Figma Design & Creative Assets",
      desc: "Professional assets and systems designed within Figma for seamless handovers.",
      icon: Compass,
      bgColor: "bg-[#F4F7FB] dark:bg-muted/10",
      textColor: "text-[#053678] dark:text-foreground",
      iconColor: "text-[#053678] dark:text-white",
    },
    {
      title: "Animations & Visual Storytelling",
      desc: "Bringing products to life with custom motion graphics and storytelling animations.",
      icon: Layers,
      bgColor: "bg-[#6A3A8F] dark:bg-muted/10",
      textColor: "text-white dark:text-foreground",
      iconColor: "text-white",
    },
    {
      title: "Database Management",
      desc: "Designing secure, high-performance database architectures and optimizations.",
      icon: Cpu,
      bgColor: "bg-[#053678] dark:bg-muted/10",
      textColor: "text-white dark:text-foreground",
      iconColor: "text-white",
    },
    {
      title: "Academic & Personal Projects",
      desc: "Reliable support for final year academic projects and personal developer portfolios.",
      icon: ShieldCheck,
      bgColor: "bg-white dark:bg-muted/10",
      textColor: "text-[#053678] dark:text-foreground",
      iconColor: "text-[#053678] dark:text-white",
      borderColor: "border-[#C7D3E5]",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[10px] font-black tracking-[0.2em] text-muted-foreground uppercase bg-muted/20 border border-border px-4 py-1.5 rounded-full shadow-sm mb-6 inline-block">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl mb-8 leading-tight font-serif font-black">
            Engineering <span className="text-primary italic font-medium">Digital Excellence.</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium px-4">
            From UX research to full-stack development, we provide the technical foundation and creative vision for your growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true }}
              className={`p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] ${f.bgColor} flex flex-col gap-6 sm:gap-8 h-full border ${f.borderColor || "border-border/20"} dark:border-border/20 hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/20 dark:bg-foreground/10 flex items-center justify-center shadow-sm backdrop-blur-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <f.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${f.iconColor} group-hover:text-white transition-colors`} />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className={`text-lg sm:text-xl font-black mb-2 sm:mb-3 ${f.textColor} leading-tight`}>{f.title}</h3>
                <p className={`text-[13px] sm:text-sm ${f.textColor} opacity-80 dark:opacity-80 font-medium leading-relaxed mt-auto`}>
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
