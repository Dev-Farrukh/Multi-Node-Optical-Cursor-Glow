import React, { useState } from 'react'
import Glowing_Effect, { GLOW_PRESETS } from '../components/ui/Glowing_Effect'

const Effect_Demo = () => {
  const [activePreset, setActivePreset] = useState('cyan')
  const [clickCount, setClickCount] = useState(0)
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText('npm i multi-node-optical-cursor-glow')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const presetMeta = GLOW_PRESETS[activePreset] || GLOW_PRESETS.cyan

  return (
    <div
      id="hero"
      className="relative w-screen h-screen flex flex-col items-center justify-center bg-[#05070d] text-slate-100 overflow-hidden select-text"
    >
      {/* Dynamic Specular Sheen Layer (Follows cursor via CSS Variables) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(850px circle at var(--sheen-x, 50%) var(--sheen-y, 50%), ${presetMeta.sheen}, transparent 60%)`,
        }}
      />

      {/* Subtle Background Grid Overlay */}
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
      <Glowing_Effect heroId="hero" preset={activePreset} />

      {/* Center Interactive Content Area */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6 pointer-events-auto">
        {/* Glow Theme Selector Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-6 shadow-2xl">
          {Object.keys(GLOW_PRESETS).map((key) => {
            const isSelected = activePreset === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActivePreset(key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                {key}
              </button>
            )
          })}
        </div>

        {/* Headline - crisp modern gradient */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4 bg-gradient-to-br from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm select-text cursor-text">
          Multi-Node Optical Glow
        </h1>

        {/* Subtitle - fully selectable */}
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg mb-8 select-text cursor-text">
          Move your cursor around the screen to experience the real-time optical wake, bloom dispersion, and specular lighting.
        </p>

        {/* Interactive Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pointer-events-auto z-20">
          <button
            type="button"
            onClick={() => setClickCount((prev) => prev + 1)}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all cursor-pointer active:scale-95"
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