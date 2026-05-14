'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ElementType } from 'react'

type Props = {
  text: string
  as?: ElementType
  className?: string
  delay?: number
  stagger?: number
}

export default function SplitHeading({
  text,
  as: Tag = 'h1',
  className,
  delay = 0,
  stagger = 0.06,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const words = text.split(' ')

  return (
    <Tag className={className}>
      <span ref={ref} className="inline-block">
        {words.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="inline-block overflow-hidden align-bottom mr-[0.25em] last:mr-0"
            style={{ paddingBottom: '0.08em' }}
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: '110%', opacity: 0 }}
              animate={inView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
              transition={{
                duration: 0.85,
                delay: delay + i * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  )
}
