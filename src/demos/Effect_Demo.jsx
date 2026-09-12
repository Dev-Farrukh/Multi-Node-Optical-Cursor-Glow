import { useState } from 'react'
import Glowing_Effect, { GLOW_PRESETS } from '../components/ui/Glowing_Effect'

const Effect_Demo = () => {
  const [activePreset, setActivePreset] = useState('cyan')

  const presetMeta = GLOW_PRESETS[activePreset] || GLOW_PRESETS.cyan

  return (
    <Glowing_Effect
      preset={activePreset}
      size={260}
      intensity={1}
      className="w-screen h-screen flex flex-col items-center justify-center bg-[#05070d] text-slate-100 select-text"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(480px circle at var(--sheen-x, 50%) var(--sheen-y, 50%), ${presetMeta.sheen}, transparent 60%)`,
        }}
      />

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

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6 pointer-events-auto">
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

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4 bg-gradient-to-br from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm select-text cursor-text">
          Multi-Node Optical Glow
        </h1>

        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg mb-8 select-text cursor-text">
          Move your cursor around the screen to experience the real-time optical wake, bloom dispersion, and specular lighting.
        </p>
      </div>
    </Glowing_Effect>
  )
}

export default Effect_Demo