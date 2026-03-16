'use client'

import { useEffect, useRef } from 'react'

export default function FireGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.003

      const spacing = 60
      const cols = Math.ceil(canvas.width / spacing)
      const rows = Math.ceil(canvas.height / spacing)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing
          const y = j * spacing
          const dist = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          )
          const wave = Math.sin(dist * 0.004 - time * 2) * 0.5 + 0.5
          const opacity = wave * 0.04

          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(230, 57, 70, ${opacity})`
          ctx.fill()
        }
      }

      // Subtle grid lines
      ctx.strokeStyle = 'rgba(10, 22, 40, 0.02)'
      ctx.lineWidth = 0.5
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath()
        ctx.moveTo(i * spacing, 0)
        ctx.lineTo(i * spacing, canvas.height)
        ctx.stroke()
      }
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath()
        ctx.moveTo(0, j * spacing)
        ctx.lineTo(canvas.width, j * spacing)
        ctx.stroke()
      }

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
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.4 }}
      aria-hidden="true"
    />
  )
}
