'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  life: number
  maxLife: number
}

export default function EmberParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: -(Math.random() * 1.5 + 0.3),
      opacity: Math.random() * 0.3 + 0.1,
      life: 0,
      maxLife: Math.random() * 200 + 100,
    })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (particles.length < 25 && Math.random() > 0.92) {
        particles.push(createParticle())
      }

      particles = particles.filter(p => {
        p.x += p.speedX + Math.sin(p.life * 0.015) * 0.3
        p.y += p.speedY
        p.life++
        p.opacity = Math.max(0, p.opacity - 0.002)
        p.size = Math.max(0.1, p.size - 0.003)

        if (p.life > p.maxLife || p.opacity <= 0) return false

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
        gradient.addColorStop(0, `rgba(249, 115, 22, ${p.opacity})`)
        gradient.addColorStop(0.5, `rgba(230, 57, 70, ${p.opacity * 0.4})`)
        gradient.addColorStop(1, `rgba(230, 57, 70, 0)`)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        return true
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.3 }}
      aria-hidden="true"
    />
  )
}
