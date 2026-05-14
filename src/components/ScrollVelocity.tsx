'use client'

import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  children: string
  className?: string
  baseVelocity?: number
}

export default function ScrollVelocity({
  children,
  className = '',
  baseVelocity = 4,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })
  const skew = useTransform(velocityFactor, (v) => `${Math.max(-12, Math.min(12, v * 2))}deg`)

  return (
    <div ref={ref} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        style={{ skewX: skew }}
        className="flex gap-12"
      >
        <motion.span
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 60 / Math.max(1, baseVelocity), ease: 'linear', repeat: Infinity }}
          className="flex gap-12 whitespace-nowrap"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>{children}</span>
          ))}
        </motion.span>
      </motion.div>
    </div>
  )
}
