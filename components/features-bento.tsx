"use client"

import { Compass, Cpu, Layers, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export function FeaturesBento() {
  const features = [
    {
      title: "Web Application Development",
      desc: "High-performance, scalable web applications built for real-world use.",
      icon: Compass,
      bgColor: "bg-white/5",
      iconColor: "text-blue-400",
    },
    {
      title: "AI-Powered Solutions",
      desc: "Intelligent systems that automate workflows and enhance decision-making.",
      icon: Cpu,
      bgColor: "bg-white/5",
      iconColor: "text-yellow-400",
    },
    {
      title: "Product Engineering",
      desc: "Reliable, maintainable products built for long-term scalability.",
      icon: Layers,
      bgColor: "bg-white/5",
      iconColor: "text-purple-400",
    },
    {
      title: "System Automation",
      desc: "Optimized digital processes designed for efficiency and scale.",
      icon: ShieldCheck,
      bgColor: "bg-white/5",
      iconColor: "text-pink-400",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight text-foreground">
              Engineering <br /> digital <br /> <span className="text-primary italic">excellence.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
              From web applications to intelligent systems, we provide the technical foundation for your growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                viewport={{ once: true }}
                className={`p-8 rounded-[2rem] ${f.bgColor} flex flex-col gap-8 h-full border border-border/20 hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="w-12 h-12 rounded-2xl bg-background/80 dark:bg-foreground/10 flex items-center justify-center shadow-sm backdrop-blur-sm">
                  <f.icon className={`w-6 h-6 ${f.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{f.title}</h3>
                  <p className="text-sm text-foreground/70 dark:text-foreground/80 font-medium leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
