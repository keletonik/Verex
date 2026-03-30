'use client'

import { useRef, useEffect, useCallback } from 'react'

interface NeuralCanvasProps {
  className?: string
  nodeCount?: number
  pulseInterval?: number
}

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseOpacity: number
  opacity: number
  pulseIntensity: number
}

interface Pulse {
  sourceIndex: number
  progress: number
  speed: number
}

export default function NeuralCanvas({
  className,
  nodeCount = 60,
  pulseInterval = 2500,
}: NeuralCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const nodesRef = useRef<Node[]>([])
  const pulsesRef = useRef<Pulse[]>([])
  const lastPulseRef = useRef<number>(0)
  const reducedMotionRef = useRef(false)

  const CONNECTION_DISTANCE = 150
  const ORANGE = { r: 249, g: 115, b: 22 } // #F97316

  const initNodes = useCallback(
    (width: number, height: number) => {
      const nodes: Node[] = []
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 1,
          baseOpacity: Math.random() * 0.5 + 0.1,
          opacity: 0,
          pulseIntensity: 0,
        })
      }
      return nodes
    },
    [nodeCount]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Check reduced motion preference
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotionRef.current = mql.matches
    const motionHandler = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches
    }
    mql.addEventListener('change', motionHandler)

    // Size canvas to parent
    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = window.devicePixelRatio || 1
      const rect = parent.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Reinit nodes if needed or on first load
      if (nodesRef.current.length === 0) {
        nodesRef.current = initNodes(rect.width, rect.height)
      } else {
        // Clamp existing nodes to new bounds
        for (const node of nodesRef.current) {
          node.x = Math.min(node.x, rect.width)
          node.y = Math.min(node.y, rect.height)
        }
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = (time: number) => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const nodes = nodesRef.current
      const pulses = pulsesRef.current

      ctx.clearRect(0, 0, width, height)

      if (reducedMotionRef.current) {
        // Static render -- draw nodes and connections once, no animation
        for (const node of nodes) {
          node.opacity = node.baseOpacity
        }
        drawConnections(ctx, nodes, width, height)
        drawNodes(ctx, nodes)
        // Don't request another frame
        return
      }

      // Trigger a pulse periodically
      if (time - lastPulseRef.current > pulseInterval) {
        lastPulseRef.current = time
        const sourceIndex = Math.floor(Math.random() * nodes.length)
        pulses.push({
          sourceIndex,
          progress: 0,
          speed: 0.015 + Math.random() * 0.01,
        })
        nodes[sourceIndex].pulseIntensity = 1
      }

      // Update pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i]
        pulse.progress += pulse.speed
        if (pulse.progress >= 1) {
          pulses.splice(i, 1)
        }
      }

      // Update nodes
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges softly
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        node.x = Math.max(0, Math.min(width, node.x))
        node.y = Math.max(0, Math.min(height, node.y))

        // Decay pulse intensity
        node.pulseIntensity *= 0.96
        if (node.pulseIntensity < 0.01) node.pulseIntensity = 0

        node.opacity = node.baseOpacity + node.pulseIntensity * (1 - node.baseOpacity)
      }

      drawConnections(ctx, nodes, width, height)
      drawPulses(ctx, nodes, pulses)
      drawNodes(ctx, nodes)

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
      mql.removeEventListener('change', motionHandler)
    }
  }, [nodeCount, pulseInterval, initNodes])

  function drawConnections(
    ctx: CanvasRenderingContext2D,
    nodes: Node[],
    _width: number,
    _height: number
  ) {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < CONNECTION_DISTANCE) {
          const opacity =
            (1 - dist / CONNECTION_DISTANCE) * 0.05 + 0.03
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(nodes[j].x, nodes[j].y)
          ctx.strokeStyle = `rgba(${ORANGE.r}, ${ORANGE.g}, ${ORANGE.b}, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }
  }

  function drawPulses(
    ctx: CanvasRenderingContext2D,
    nodes: Node[],
    pulses: Pulse[]
  ) {
    for (const pulse of pulses) {
      const source = nodes[pulse.sourceIndex]

      for (let j = 0; j < nodes.length; j++) {
        if (j === pulse.sourceIndex) continue
        const target = nodes[j]
        const dx = target.x - source.x
        const dy = target.y - source.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < CONNECTION_DISTANCE) {
          // Draw pulse traveling along the connection
          const px = source.x + dx * pulse.progress
          const py = source.y + dy * pulse.progress

          const pulseOpacity = (1 - pulse.progress) * 0.6
          const gradient = ctx.createRadialGradient(px, py, 0, px, py, 6)
          gradient.addColorStop(
            0,
            `rgba(${ORANGE.r}, ${ORANGE.g}, ${ORANGE.b}, ${pulseOpacity})`
          )
          gradient.addColorStop(1, `rgba(${ORANGE.r}, ${ORANGE.g}, ${ORANGE.b}, 0)`)

          ctx.beginPath()
          ctx.arc(px, py, 6, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()

          // Brighten connection line during pulse
          const lineOpacity = (1 - pulse.progress) * 0.25
          ctx.beginPath()
          ctx.moveTo(source.x, source.y)
          ctx.lineTo(target.x, target.y)
          ctx.strokeStyle = `rgba(${ORANGE.r}, ${ORANGE.g}, ${ORANGE.b}, ${lineOpacity})`
          ctx.lineWidth = 1
          ctx.stroke()

          // Light up the target node when pulse reaches it
          if (pulse.progress > 0.8) {
            target.pulseIntensity = Math.max(
              target.pulseIntensity,
              (pulse.progress - 0.8) * 5 * 0.5
            )
          }
        }
      }
    }
  }

  function drawNodes(ctx: CanvasRenderingContext2D, nodes: Node[]) {
    for (const node of nodes) {
      // Glow effect for pulsing nodes
      if (node.pulseIntensity > 0.05) {
        const glowRadius = node.radius + 8 * node.pulseIntensity
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          glowRadius
        )
        gradient.addColorStop(
          0,
          `rgba(${ORANGE.r}, ${ORANGE.g}, ${ORANGE.b}, ${node.pulseIntensity * 0.4})`
        )
        gradient.addColorStop(1, `rgba(${ORANGE.r}, ${ORANGE.g}, ${ORANGE.b}, 0)`)
        ctx.beginPath()
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      // Node dot
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${ORANGE.r}, ${ORANGE.g}, ${ORANGE.b}, ${node.opacity})`
      ctx.fill()
    }
  }

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  )
}
