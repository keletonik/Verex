'use client'

import { motion } from 'framer-motion'

type Props = {
  variant?: 'default' | 'subtle' | 'intense'
  className?: string
}

export default function GradientOrbs({ variant = 'default', className = '' }: Props) {
  const intensity =
    variant === 'intense' ? 0.55 : variant === 'subtle' ? 0.18 : 0.32

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full blur-[120px] mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(249,115,22,1) 0%, rgba(249,115,22,0) 70%)',
          opacity: intensity,
        }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, 40, 80, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 22, ease: 'easeInOut', repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-0 h-[480px] w-[480px] rounded-full blur-[120px] mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(34,211,238,1) 0%, rgba(34,211,238,0) 70%)',
          opacity: intensity * 0.85,
        }}
        animate={{
          x: [0, -80, 30, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{ duration: 28, ease: 'easeInOut', repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/3 h-[560px] w-[560px] rounded-full blur-[140px] mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(251,146,60,1) 0%, rgba(251,146,60,0) 70%)',
          opacity: intensity * 0.7,
        }}
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{ duration: 26, ease: 'easeInOut', repeat: Infinity }}
      />
    </div>
  )
}
