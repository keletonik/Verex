'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  items: ReactNode[]
  speed?: number
  className?: string
  reverse?: boolean
}

export default function Marquee({
  items,
  speed = 40,
  className = '',
  reverse = false,
}: Props) {
  const sequence = [...items, ...items, ...items]

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden>
      <motion.div
        className="flex gap-12 whitespace-nowrap will-change-transform"
        animate={{ x: reverse ? ['-33.333%', '0%'] : ['0%', '-33.333%'] }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {sequence.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
