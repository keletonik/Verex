'use client'

import Link, { type LinkProps } from 'next/link'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type ReactNode, type ComponentProps } from 'react'

type Props = LinkProps &
  Omit<ComponentProps<'a'>, keyof LinkProps> & {
    children: ReactNode
    strength?: number
    className?: string
  }

export default function MagneticLink({
  children,
  strength = 0.3,
  className,
  ...linkProps
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.3 })

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * strength)
    y.set(dy * strength)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span style={{ x: sx, y: sy }} className="inline-block">
      <Link
        ref={ref}
        {...linkProps}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={className}
      >
        {children}
      </Link>
    </motion.span>
  )
}
