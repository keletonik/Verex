'use client'

interface GridPatternProps {
  className?: string
}

export default function GridPattern({ className }: GridPatternProps) {
  const patternId = 'grid-pattern-bg'
  const dotId = 'grid-dot-bg'

  return (
    <svg
      className={className}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <defs>
        {/* Main grid lines */}
        <pattern
          id={patternId}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          {/* Vertical line */}
          <line
            x1="40"
            y1="0"
            x2="40"
            y2="40"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-navy-200"
            opacity="0.12"
          />
          {/* Horizontal line */}
          <line
            x1="0"
            y1="40"
            x2="40"
            y2="40"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-navy-200"
            opacity="0.12"
          />
        </pattern>
        {/* Intersection dots for a technical/blueprint feel */}
        <pattern
          id={dotId}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="40"
            cy="40"
            r="0.75"
            fill="currentColor"
            className="text-navy-300"
            opacity="0.18"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      <rect width="100%" height="100%" fill={`url(#${dotId})`} />
    </svg>
  )
}
