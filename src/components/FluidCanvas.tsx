'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  hue: number
  size: number
}

type Props = {
  className?: string
  density?: number
  interactive?: boolean
}

export default function FluidCanvas({
  className,
  density = 1,
  interactive = true,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mouse = useRef({ x: -9999, y: -9999, active: false })
  const raf = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = window.devicePixelRatio || 1

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
      mouse.current.active = true
    }
    const onLeave = () => {
      mouse.current.active = false
      mouse.current.x = -9999
      mouse.current.y = -9999
    }

    if (interactive) {
      window.addEventListener('mousemove', onMove)
      canvas.addEventListener('mouseleave', onLeave)
    }

    const spawn = (x?: number, y?: number) => {
      const angle = Math.random() * Math.PI * 2
      const speed = 0.15 + Math.random() * 0.7
      const maxLife = 240 + Math.random() * 320
      particles.current.push({
        x: x ?? Math.random() * width,
        y: y ?? Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: maxLife,
        maxLife,
        hue: 18 + Math.random() * 22,
        size: 0.6 + Math.random() * 2.4,
      })
    }

    const target = Math.floor(160 * density)
    for (let i = 0; i < target; i++) spawn()

    const flow = (x: number, y: number, t: number) => {
      const s = 0.0024
      const angle =
        Math.sin(x * s + t * 0.0003) * Math.cos(y * s - t * 0.0004) * Math.PI * 2
      return angle
    }

    const tick = (time: number) => {
      ctx.fillStyle = 'rgba(6, 14, 26, 0.18)'
      ctx.fillRect(0, 0, width, height)

      const ps = particles.current
      const m = mouse.current

      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i]
        const a = flow(p.x, p.y, time)
        p.vx += Math.cos(a) * 0.04
        p.vy += Math.sin(a) * 0.04

        if (interactive && m.active) {
          const dx = p.x - m.x
          const dy = p.y - m.y
          const d2 = dx * dx + dy * dy
          if (d2 < 22500) {
            const f = (1 - d2 / 22500) * 0.9
            const inv = 1 / Math.sqrt(d2 + 0.001)
            p.vx += dx * inv * f
            p.vy += dy * inv * f
          }
        }

        p.vx *= 0.96
        p.vy *= 0.96
        p.x += p.vx
        p.y += p.vy
        p.life -= 1

        if (
          p.life <= 0 ||
          p.x < -20 ||
          p.x > width + 20 ||
          p.y < -20 ||
          p.y > height + 20
        ) {
          ps.splice(i, 1)
          spawn()
          continue
        }

        const lifeRatio = p.life / p.maxLife
        const alpha = Math.sin(lifeRatio * Math.PI) * 0.85

        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 6
        )
        grad.addColorStop(0, `hsla(${p.hue}, 95%, 60%, ${alpha * 0.55})`)
        grad.addColorStop(0.4, `hsla(${p.hue + 10}, 90%, 55%, ${alpha * 0.18})`)
        grad.addColorStop(1, `hsla(${p.hue}, 90%, 50%, 0)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reduce) raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', resize)
      if (interactive) {
        window.removeEventListener('mousemove', onMove)
        canvas.removeEventListener('mouseleave', onLeave)
      }
      particles.current = []
    }
  }, [density, interactive])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block' }}
      aria-hidden
    />
  )
}
