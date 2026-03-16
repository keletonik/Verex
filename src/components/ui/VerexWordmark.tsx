'use client'

/**
 * Verex Wordmark Logo — "The Signal" (Concept 3)
 * Typography: Space Grotesk, lowercase
 * Accent: Orange "v" + trailing dot
 *
 * Usage:
 *   <VerexWordmark />                    — default (white text, dark bg)
 *   <VerexWordmark variant="dark" />     — dark text on light bg
 *   <VerexWordmark showTagline={false} /> — wordmark only
 *   <VerexWordmark size="sm" />          — small (navbar)
 *   <VerexWordmark size="lg" />          — large (hero/brand page)
 */

interface VerexWordmarkProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showTagline?: boolean
  className?: string
  animated?: boolean
}

const sizes = {
  sm: { text: 'text-xl', tagline: 'text-[8px]', dot: 'w-1.5 h-1.5', gap: '-mt-0.5', tracking: 'tracking-[0.15em]' },
  md: { text: 'text-2xl', tagline: 'text-[9px]', dot: 'w-2 h-2', gap: '-mt-0.5', tracking: 'tracking-[0.18em]' },
  lg: { text: 'text-4xl', tagline: 'text-[11px]', dot: 'w-2.5 h-2.5', gap: '-mt-1', tracking: 'tracking-[0.2em]' },
  xl: { text: 'text-6xl', tagline: 'text-sm', dot: 'w-3.5 h-3.5', gap: '-mt-1', tracking: 'tracking-[0.25em]' },
}

export default function VerexWordmark({
  variant = 'light',
  size = 'md',
  showTagline = true,
  className = '',
  animated = false,
}: VerexWordmarkProps) {
  const s = sizes[size]
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-DEFAULT'
  const accentColor = 'text-fire-500'
  const taglineColor = variant === 'light' ? 'text-fire-400' : 'text-fire-600'

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className="flex items-baseline">
        {/* The "v" in brand orange */}
        <span
          className={`${s.text} font-heading font-bold ${accentColor} leading-none ${
            animated ? 'transition-colors duration-300' : ''
          }`}
        >
          v
        </span>
        {/* "erex" in primary text color */}
        <span
          className={`${s.text} font-heading font-bold ${textColor} leading-none ${
            animated ? 'transition-colors duration-300' : ''
          }`}
        >
          erex
        </span>
        {/* Accent dot */}
        <span
          className={`inline-block ${s.dot} rounded-full bg-fire-500 ml-1 self-end mb-[0.2em] ${
            animated ? 'animate-pulse-slow' : ''
          }`}
        />
      </div>
      {showTagline && (
        <span
          className={`${s.tagline} font-heading font-medium ${taglineColor} ${s.tracking} uppercase ${s.gap} leading-tight`}
        >
          Fire Solutions
        </span>
      )}
    </div>
  )
}

/**
 * SVG version of the wordmark for use in favicons, exports, print.
 * Renders at a fixed size with precise letter positioning.
 */
export function VerexWordmarkSVG({
  width = 200,
  variant = 'light',
  showTagline = true,
}: {
  width?: number
  variant?: 'light' | 'dark'
  showTagline?: boolean
}) {
  const scale = width / 200
  const textColor = variant === 'light' ? '#ffffff' : '#0a1628'
  const accentColor = '#f97316'
  const taglineColor = variant === 'light' ? '#fb923c' : '#ea580c'
  const h = showTagline ? 52 * scale : 38 * scale

  return (
    <svg
      width={width}
      height={h}
      viewBox={`0 0 200 ${showTagline ? 52 : 38}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="30"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontSize="36"
        fontWeight="700"
        letterSpacing="1"
      >
        <tspan fill={accentColor}>v</tspan>
        <tspan fill={textColor}>erex</tspan>
      </text>
      {/* Accent dot */}
      <circle cx="152" cy="28" r="4" fill={accentColor} />
      {showTagline && (
        <text
          x="1"
          y="46"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontSize="8"
          fontWeight="500"
          letterSpacing="3"
          fill={taglineColor}
        >
          FIRE SOLUTIONS
        </text>
      )}
    </svg>
  )
}
