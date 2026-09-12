import React, { useState } from 'react'
import Glowing_Effect from '../components/ui/Glowing_Effect'

const Effect_Demo = () => {
  const [clickCount, setClickCount] = useState(0)
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText("npm i multi-node-optical-cursor-glow")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      id="hero"
      className="relative w-screen h-screen flex flex-col items-center justify-center bg-[#06070a] text-slate-100 overflow-hidden select-text"
    >
      {/* Dynamic Specular Sheen Layer (Follows cursor via CSS Variables) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(850px circle at var(--sheen-x, 50%) var(--sheen-y, 50%), rgba(255, 210, 110, 0.07), transparent 60%)',
        }}
      />

      {/* Subtle Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
        }}
      />

      {/* Mount Optical Glow Trail Component */}
      <Glowing_Effect heroId="hero" />

      {/* Center Interactive Content Area */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6 pointer-events-auto">
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse-dot" />
          <span>9-Node Optical Physics Engine</span>
        </div>

        {/* Headline - fully selectable */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4 bg-gradient-to-br from-white via-amber-100 to-amber-500 bg-clip-text text-transparent drop-shadow-sm select-text cursor-text">
          Multi-Node Optical Glow
        </h1>

        {/* Subtitle - fully selectable */}
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg mb-8 select-text cursor-text">
          Move your cursor around the screen to experience the real-time optical glow wake, bloom dispersion, and specular lighting.
        </p>

        {/* Interactive Buttons (Fully clickable & testable) */}
        <div className="flex flex-wrap items-center justify-center gap-4 pointer-events-auto z-20">
          <button
            type="button"
            onClick={() => setClickCount((prev) => prev + 1)}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all cursor-pointer active:scale-95"
          >
            ✦ Click Me ({clickCount})
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-md transition-all cursor-pointer active:scale-95"
          >
            {copied ? '✓ Copied!' : 'Copy Install Command'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Effect_Demo