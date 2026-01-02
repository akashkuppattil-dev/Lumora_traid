"use client"

import { useEffect, useRef } from "react"

export function NeuralNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []
        const particleCount = 80 // Increased count
        const connectionDistance = 150
        const mouseDistance = 200 // Interaction radius

        const mouse = {
            x: -1000,
            y: -1000,
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouse.x = e.clientX - rect.left
            mouse.y = e.clientY - rect.top
        }

        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            baseSize: number

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.vx = (Math.random() - 0.5) * 0.8 // Slightly faster
                this.vy = (Math.random() - 0.5) * 0.8
                this.baseSize = 2.5
            }

            update() {
                this.x += this.vx
                this.y += this.vy

                // Bounce off edges
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1
            }

            draw() {
                if (!ctx) return
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.baseSize, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const init = () => {
            resizeCanvas()
            particles = []
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Get primary color from CSS variable
            const computedStyle = getComputedStyle(document.documentElement)
            const primaryColor = computedStyle.getPropertyValue("--primary").trim() || "#000000"

            particles.forEach((particle) => {
                particle.update()
                ctx.save()
                ctx.fillStyle = primaryColor
                ctx.globalAlpha = 0.8
                particle.draw()
                ctx.restore()
            })

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                // Connect to other particles
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.strokeStyle = primaryColor
                        ctx.globalAlpha = 1 - distance / connectionDistance
                        ctx.lineWidth = 1
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }

                // Connect to mouse
                const dx = particles[i].x - mouse.x
                const dy = particles[i].y - mouse.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < mouseDistance) {
                    ctx.beginPath()
                    ctx.strokeStyle = primaryColor
                    ctx.globalAlpha = 1 - distance / mouseDistance
                    ctx.lineWidth = 1.5 // Thicker line for user interaction
                    ctx.moveTo(particles[i].x, particles[i].y)
                    ctx.lineTo(mouse.x, mouse.y)
                    ctx.stroke()
                }
            }
            // Reset alpha
            ctx.globalAlpha = 1


            animationFrameId = requestAnimationFrame(animate)
        }

        window.addEventListener("resize", resizeCanvas)
        window.addEventListener("mousemove", handleMouseMove)
        init()
        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 opacity-100"
        />
    )
}
