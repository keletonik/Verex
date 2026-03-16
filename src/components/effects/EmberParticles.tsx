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
  hue: number
}

export default function EmberParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
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
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: -(Math.random() * 2 + 0.5),
      opacity: Math.random() * 0.8 + 0.2,
      life: 0,
      maxLife: Math.random() * 200 + 100,
      hue: Math.random() * 40 + 10, // 10-50 range for fire colours
    })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Spawn new particles
      if (particles.length < 50 && Math.random() > 0.85) {
        particles.push(createParticle())
      }

      particles = particles.filter(p => {
        p.x += p.speedX + Math.sin(p.life * 0.02) * 0.5
        p.y += p.speedY
        p.life++
        p.opacity = Math.max(0, p.opacity - 0.003)
        p.size = Math.max(0.1, p.size - 0.005)

        if (p.life > p.maxLife || p.opacity <= 0) return false

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
        gradient.addColorStop(0, `hsla(${p.hue}, 100%, 60%, ${p.opacity})`)
        gradient.addColorStop(0.4, `hsla(${p.hue}, 90%, 50%, ${p.opacity * 0.6})`)
        gradient.addColorStop(1, `hsla(${p.hue}, 80%, 40%, 0)`)

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
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  )
}
