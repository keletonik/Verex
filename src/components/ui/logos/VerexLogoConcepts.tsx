'use client'

import React from 'react'

/**
 * 5 Corporate Logo Concepts for Verex Fire Solutions
 *
 * Inspired by: Pentagram, Wolff Olins, Landor, Sagmeister & Walsh, Paula Scher
 * Design philosophy: Clean geometry, negative space mastery, timeless corporate identity
 */

// ─────────────────────────────────────────────────────────────────────────────
// CONCEPT 1: "The Monolith"
// Inspiration: Pentagram / Michael Bierut — Bold geometric lettermark
// The "V" is constructed from two precision-cut parallelograms forming a
// monolithic mark. The negative space between them creates an upward arrow —
// symbolizing growth, protection, and upward momentum. Pure corporate authority.
// ─────────────────────────────────────────────────────────────────────────────
export function LogoConcept1({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="c1-grad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#E63946" />
        </linearGradient>
        <linearGradient id="c1-mark" x1="30" y1="25" x2="90" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0f0f0" />
        </linearGradient>
      </defs>
      {/* Rounded square container */}
      <rect x="4" y="4" width="112" height="112" rx="24" fill="url(#c1-grad)" />
      {/* "V" monolith — two geometric slabs with negative space arrow */}
      <path d="M36 28L56 92H52L32 28H36Z" fill="url(#c1-mark)" />
      <path d="M84 28L64 92H68L88 28H84Z" fill="url(#c1-mark)" />
      {/* Precision crossbar — anchors the mark with engineered weight */}
      <rect x="48" y="76" width="24" height="4" rx="2" fill="white" opacity="0.7" />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CONCEPT 2: "The Shield"
// Inspiration: Wolff Olins / brand architecture systems
// A hexagonal shield form with an abstracted "V" carved into it via negative
// space. Communicates protection, trust, and structural integrity — core values
// for a fire safety company. The faceted geometry suggests precision engineering.
// ─────────────────────────────────────────────────────────────────────────────
export function LogoConcept2({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="c2-grad" x1="20" y1="10" x2="100" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="50%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#E63946" />
        </linearGradient>
      </defs>
      {/* Rounded container */}
      <rect x="4" y="4" width="112" height="112" rx="24" fill="#0a1628" />
      {/* Shield / hexagonal form */}
      <path
        d="M60 14L102 34V72C102 88 84 104 60 112C36 104 18 88 18 72V34L60 14Z"
        fill="url(#c2-grad)"
        opacity="0.95"
      />
      {/* Negative space V cut into shield */}
      <path
        d="M44 36L60 82L76 36H68L60 64L52 36H44Z"
        fill="#0a1628"
      />
      {/* Subtle inner highlight line */}
      <path
        d="M60 14L102 34"
        stroke="white"
        strokeWidth="1"
        opacity="0.15"
      />
      <path
        d="M60 14L18 34"
        stroke="white"
        strokeWidth="1"
        opacity="0.15"
      />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CONCEPT 3: "The Grid"
// Inspiration: Massimo Vignelli / Swiss International Style
// Constructed entirely from a modular grid system. The "V" is built from
// precisely placed geometric blocks — like pixels but intentional. References
// architectural blueprints and systematic safety. The mathematical precision
// communicates reliability and methodical approach to fire safety.
// ─────────────────────────────────────────────────────────────────────────────
export function LogoConcept3({ size = 40 }: { size?: number }) {
  const blocks = [
    // Left arm of V — descending staircase pattern
    { x: 24, y: 24 }, { x: 30, y: 36 }, { x: 36, y: 48 }, { x: 42, y: 60 }, { x: 48, y: 72 },
    // Right arm of V — descending staircase pattern
    { x: 84, y: 24 }, { x: 78, y: 36 }, { x: 72, y: 48 }, { x: 66, y: 60 }, { x: 60, y: 72 },
    // Base convergence point
    { x: 54, y: 84 },
  ]

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="c3-grad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="112" height="112" rx="24" fill="url(#c3-grad)" />
      {blocks.map((block, i) => (
        <rect
          key={i}
          x={block.x}
          y={block.y}
          width="12"
          height="10"
          rx="2"
          fill="white"
          opacity={0.85 + (i * 0.015)}
        />
      ))}
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CONCEPT 4: "The Apex"
// Inspiration: Landor / Aaron Draplin — Confident, bold, unapologetic
// An inverted triangle (V-shape) with clean beveled edges sits within a
// circular container. The form suggests both a chevron/checkmark (trust,
// verification) and the apex of a structure. The circle-in-square tension
// creates visual dynamism. Heavy, confident, boardroom-ready.
// ─────────────────────────────────────────────────────────────────────────────
export function LogoConcept4({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="c4-grad" x1="60" y1="8" x2="60" y2="112" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E63946" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="c4-vgrad" x1="40" y1="32" x2="80" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e8e8e8" />
        </linearGradient>
      </defs>
      {/* Square container with deep radius */}
      <rect x="4" y="4" width="112" height="112" rx="24" fill="url(#c4-grad)" />
      {/* Inner circle — creates tension with square */}
      <circle cx="60" cy="60" r="42" fill="white" opacity="0.08" />
      {/* Bold V chevron — thick, authoritative strokes */}
      <path
        d="M32 32L60 88L88 32"
        stroke="url(#c4-vgrad)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CONCEPT 5: "The Prism"
// Inspiration: Sagmeister & Walsh / Paula Scher — Dimensional, modern
// A three-dimensional "V" constructed from two intersecting planes, creating
// a prism effect. The overlapping transparency in the center creates a third
// color — depth, dimension, and the idea that Verex operates at the intersection
// of safety and innovation. This is the most contemporary concept — feels like
// it belongs on a tech company's IPO prospectus.
// ─────────────────────────────────────────────────────────────────────────────
export function LogoConcept5({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="c5-bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#162033" />
          <stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
      </defs>
      {/* Dark premium container */}
      <rect x="4" y="4" width="112" height="112" rx="24" fill="url(#c5-bg)" />
      {/* Left plane of the V prism */}
      <path
        d="M32 28L58 92L60 86L38 28H32Z"
        fill="#f97316"
        opacity="0.9"
      />
      <path
        d="M38 28L60 86L62 80L44 28H38Z"
        fill="#fb923c"
        opacity="0.85"
      />
      {/* Right plane of the V prism */}
      <path
        d="M88 28L62 92L60 86L82 28H88Z"
        fill="#E63946"
        opacity="0.9"
      />
      <path
        d="M82 28L60 86L58 80L76 28H82Z"
        fill="#FF6B35"
        opacity="0.85"
      />
      {/* Center overlap — creates the prism intersection */}
      <path
        d="M58 80L60 86L62 80L60 74L58 80Z"
        fill="#FDB44B"
        opacity="0.95"
      />
      {/* Top highlight bar */}
      <rect x="32" y="26" width="56" height="2" rx="1" fill="white" opacity="0.12" />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FULL LOGO LOCKUPS (icon + wordmark)
// ─────────────────────────────────────────────────────────────────────────────

export function LogoLockup1() {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative">
        <div className="transform group-hover:scale-110 transition-transform duration-300">
          <LogoConcept1 size={40} />
        </div>
        <div className="absolute inset-0 rounded-xl bg-fire-500/20 blur-lg group-hover:bg-fire-500/40 transition-all duration-300" />
      </div>
      <div>
        <span className="text-xl font-heading font-bold text-white tracking-tight">Verex</span>
        <span className="block text-[10px] font-heading text-fire-400 tracking-[0.2em] uppercase -mt-1">Fire Solutions</span>
      </div>
    </div>
  )
}

export function LogoLockup2() {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative">
        <div className="transform group-hover:scale-110 transition-transform duration-300">
          <LogoConcept2 size={40} />
        </div>
        <div className="absolute inset-0 rounded-xl bg-fire-500/20 blur-lg group-hover:bg-fire-500/40 transition-all duration-300" />
      </div>
      <div>
        <span className="text-xl font-heading font-bold text-white tracking-tight">Verex</span>
        <span className="block text-[10px] font-heading text-fire-400 tracking-[0.2em] uppercase -mt-1">Fire Solutions</span>
      </div>
    </div>
  )
}

export function LogoLockup3() {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative">
        <div className="transform group-hover:scale-110 transition-transform duration-300">
          <LogoConcept3 size={40} />
        </div>
        <div className="absolute inset-0 rounded-xl bg-fire-500/20 blur-lg group-hover:bg-fire-500/40 transition-all duration-300" />
      </div>
      <div>
        <span className="text-xl font-heading font-bold text-white tracking-tight">Verex</span>
        <span className="block text-[10px] font-heading text-fire-400 tracking-[0.2em] uppercase -mt-1">Fire Solutions</span>
      </div>
    </div>
  )
}

export function LogoLockup4() {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative">
        <div className="transform group-hover:scale-110 transition-transform duration-300">
          <LogoConcept4 size={40} />
        </div>
        <div className="absolute inset-0 rounded-xl bg-fire-500/20 blur-lg group-hover:bg-fire-500/40 transition-all duration-300" />
      </div>
      <div>
        <span className="text-xl font-heading font-bold text-white tracking-tight">Verex</span>
        <span className="block text-[10px] font-heading text-fire-400 tracking-[0.2em] uppercase -mt-1">Fire Solutions</span>
      </div>
    </div>
  )
}

export function LogoLockup5() {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative">
        <div className="transform group-hover:scale-110 transition-transform duration-300">
          <LogoConcept5 size={40} />
        </div>
        <div className="absolute inset-0 rounded-xl bg-fire-500/20 blur-lg group-hover:bg-fire-500/40 transition-all duration-300" />
      </div>
      <div>
        <span className="text-xl font-heading font-bold text-white tracking-tight">Verex</span>
        <span className="block text-[10px] font-heading text-fire-400 tracking-[0.2em] uppercase -mt-1">Fire Solutions</span>
      </div>
    </div>
  )
}
