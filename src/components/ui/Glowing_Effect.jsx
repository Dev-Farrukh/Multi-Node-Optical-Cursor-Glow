import { useEffect, useRef } from 'react'

const TRAIL_COUNT = 9

export const GLOW_PRESETS = {
  cyan: {
    name: 'Electric Cyan & Indigo',
    sheen: 'rgba(56, 189, 248, 0.08)',
    headCore: 'radial-gradient(circle, rgba(230, 252, 255, 0.95) 0%, rgba(56, 189, 248, 0.65) 40%, rgba(99, 102, 241, 0.25) 70%, transparent 85%)',
    headSparkle: 'bg-cyan-100/95',
    sparkleShadow: '0 0 16px rgba(186, 230, 253, 0.95), 0 0 30px rgba(56, 189, 248, 0.65)',
    trail: [
      { size: 260, opacity: 0.9, blur: 32, bg: 'radial-gradient(circle, rgba(224,247,255,0.92) 0%, rgba(56,189,248,0.7) 35%, rgba(59,130,246,0.35) 55%, transparent 75%)' },
      { size: 220, opacity: 0.85, blur: 28, bg: 'radial-gradient(circle, rgba(186,230,253,0.88) 0%, rgba(14,165,233,0.65) 35%, rgba(79,70,229,0.3) 55%, transparent 75%)' },
      { size: 180, opacity: 0.8, blur: 24, bg: 'radial-gradient(circle, rgba(125,211,252,0.82) 0%, rgba(2,132,199,0.55) 35%, rgba(99,102,241,0.25) 55%, transparent 75%)' },
      { size: 150, opacity: 0.72, blur: 20, bg: 'radial-gradient(circle, rgba(96,165,250,0.75) 0%, rgba(59,130,246,0.5) 35%, rgba(139,92,246,0.2) 55%, transparent 75%)' },
      { size: 120, opacity: 0.65, blur: 16, bg: 'radial-gradient(circle, rgba(129,140,248,0.7) 0%, rgba(99,102,241,0.45) 35%, rgba(168,85,247,0.18) 55%, transparent 75%)' },
      { size: 95, opacity: 0.55, blur: 13, bg: 'radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(147,51,234,0.35) 35%, rgba(126,34,206,0.12) 55%, transparent 75%)' },
      { size: 75, opacity: 0.45, blur: 10, bg: 'radial-gradient(circle, rgba(192,132,252,0.5) 0%, rgba(168,85,247,0.3) 35%, transparent 70%)' },
      { size: 55, opacity: 0.35, blur: 8, bg: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(139,92,246,0.2) 35%, transparent 70%)' },
      { size: 40, opacity: 0.22, blur: 6, bg: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)' },
    ],
  },
  violet: {
    name: 'Ultraviolet & Magenta',
    sheen: 'rgba(168, 85, 247, 0.08)',
    headCore: 'radial-gradient(circle, rgba(250, 235, 255, 0.95) 0%, rgba(217, 70, 239, 0.65) 40%, rgba(147, 51, 234, 0.25) 70%, transparent 85%)',
    headSparkle: 'bg-fuchsia-100/95',
    sparkleShadow: '0 0 16px rgba(245, 208, 254, 0.95), 0 0 30px rgba(217, 70, 239, 0.65)',
    trail: [
      { size: 260, opacity: 0.9, blur: 32, bg: 'radial-gradient(circle, rgba(250,232,255,0.92) 0%, rgba(217,70,239,0.7) 35%, rgba(147,51,234,0.35) 55%, transparent 75%)' },
      { size: 220, opacity: 0.85, blur: 28, bg: 'radial-gradient(circle, rgba(245,208,254,0.88) 0%, rgba(192,38,211,0.65) 35%, rgba(126,34,206,0.3) 55%, transparent 75%)' },
      { size: 180, opacity: 0.8, blur: 24, bg: 'radial-gradient(circle, rgba(232,121,249,0.82) 0%, rgba(162,28,175,0.55) 35%, rgba(107,33,168,0.25) 55%, transparent 75%)' },
      { size: 150, opacity: 0.72, blur: 20, bg: 'radial-gradient(circle, rgba(216,180,254,0.75) 0%, rgba(168,85,247,0.5) 35%, rgba(88,28,135,0.2) 55%, transparent 75%)' },
      { size: 120, opacity: 0.65, blur: 16, bg: 'radial-gradient(circle, rgba(192,132,252,0.7) 0%, rgba(147,51,234,0.45) 35%, rgba(76,29,149,0.18) 55%, transparent 75%)' },
      { size: 95, opacity: 0.55, blur: 13, bg: 'radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(126,34,206,0.35) 35%, transparent 75%)' },
      { size: 75, opacity: 0.45, blur: 10, bg: 'radial-gradient(circle, rgba(147,51,234,0.5) 0%, rgba(107,33,168,0.3) 35%, transparent 70%)' },
      { size: 110, opacity: 0.35, blur: 8, bg: 'radial-gradient(circle, rgba(126,34,206,0.4) 0%, transparent 70%)' },
      { size: 40, opacity: 0.22, blur: 6, bg: 'radial-gradient(circle, rgba(107,33,168,0.3) 0%, transparent 70%)' },
    ],
  },
  emerald: {
    name: 'Aurora Emerald & Teal',
    sheen: 'rgba(20, 184, 166, 0.08)',
    headCore: 'radial-gradient(circle, rgba(230, 255, 245, 0.95) 0%, rgba(52, 211, 153, 0.65) 40%, rgba(20, 184, 166, 0.25) 70%, transparent 85%)',
    headSparkle: 'bg-emerald-100/95',
    sparkleShadow: '0 0 16px rgba(167, 243, 208, 0.95), 0 0 30px rgba(52, 211, 153, 0.65)',
    trail: [
      { size: 260, opacity: 0.9, blur: 32, bg: 'radial-gradient(circle, rgba(236,253,245,0.92) 0%, rgba(52,211,153,0.7) 35%, rgba(16,185,129,0.35) 55%, transparent 75%)' },
      { size: 220, opacity: 0.85, blur: 28, bg: 'radial-gradient(circle, rgba(167,243,208,0.88) 0%, rgba(45,212,191,0.65) 35%, rgba(13,148,136,0.3) 55%, transparent 75%)' },
      { size: 180, opacity: 0.8, blur: 24, bg: 'radial-gradient(circle, rgba(110,231,183,0.82) 0%, rgba(20,184,166,0.55) 35%, rgba(15,118,110,0.25) 55%, transparent 75%)' },
      { size: 150, opacity: 0.72, blur: 20, bg: 'radial-gradient(circle, rgba(52,211,153,0.75) 0%, rgba(14,165,233,0.5) 35%, rgba(3,105,161,0.2) 55%, transparent 75%)' },
      { size: 120, opacity: 0.65, blur: 16, bg: 'radial-gradient(circle, rgba(45,212,191,0.7) 0%, rgba(2,132,199,0.45) 35%, transparent 75%)' },
      { size: 95, opacity: 0.55, blur: 13, bg: 'radial-gradient(circle, rgba(20,184,166,0.6) 0%, rgba(14,116,144,0.35) 35%, transparent 75%)' },
      { size: 75, opacity: 0.45, blur: 10, bg: 'radial-gradient(circle, rgba(13,148,136,0.5) 0%, transparent 70%)' },
      { size: 55, opacity: 0.35, blur: 8, bg: 'radial-gradient(circle, rgba(15,118,110,0.4) 0%, transparent 70%)' },
      { size: 40, opacity: 0.22, blur: 6, bg: 'radial-gradient(circle, rgba(17,94,89,0.3) 0%, transparent 70%)' },
    ],
  },
  starlight: {
    name: 'Pure Starlight & Ice Blue',
    sheen: 'rgba(255, 255, 255, 0.08)',
    headCore: 'radial-gradient(circle, rgba(255, 255, 255, 0.98) 0%, rgba(224, 242, 254, 0.7) 40%, rgba(147, 197, 253, 0.25) 70%, transparent 85%)',
    headSparkle: 'bg-white',
    sparkleShadow: '0 0 16px rgba(255, 255, 255, 0.98), 0 0 30px rgba(186, 230, 253, 0.8)',
    trail: [
      { size: 260, opacity: 0.9, blur: 32, bg: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(224,242,254,0.7) 35%, rgba(186,230,253,0.35) 55%, transparent 75%)' },
      { size: 220, opacity: 0.85, blur: 28, bg: 'radial-gradient(circle, rgba(240,249,255,0.9) 0%, rgba(186,230,253,0.65) 35%, rgba(147,197,253,0.3) 55%, transparent 75%)' },
      { size: 180, opacity: 0.8, blur: 24, bg: 'radial-gradient(circle, rgba(224,242,254,0.85) 0%, rgba(147,197,253,0.55) 35%, rgba(96,165,250,0.25) 55%, transparent 75%)' },
      { size: 150, opacity: 0.72, blur: 20, bg: 'radial-gradient(circle, rgba(186,230,253,0.75) 0%, rgba(96,165,250,0.5) 35%, transparent 75%)' },
      { size: 120, opacity: 0.65, blur: 16, bg: 'radial-gradient(circle, rgba(147,197,253,0.7) 0%, rgba(59,130,246,0.45) 35%, transparent 75%)' },
      { size: 95, opacity: 0.55, blur: 13, bg: 'radial-gradient(circle, rgba(96,165,250,0.6) 0%, transparent 75%)' },
      { size: 75, opacity: 0.45, blur: 10, bg: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)' },
      { size: 55, opacity: 0.35, blur: 8, bg: 'radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)' },
      { size: 40, opacity: 0.22, blur: 6, bg: 'radial-gradient(circle, rgba(29,78,216,0.3) 0%, transparent 70%)' },
    ],
  },
}

const Glowing_Effect = ({ heroId = 'hero', preset = 'cyan' }) => {
  const containerRef = useRef(null)
  const nodeRefs = useRef([])
  const headCoreRef = useRef(null)
  const headSparkleRef = useRef(null)

  const activePreset = GLOW_PRESETS[preset] || GLOW_PRESETS.cyan
  const trailConfig = activePreset.trail

  useEffect(() => {
    const isTouchOrReduced = window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches
    if (isTouchOrReduced) return

    const hero = document.getElementById(heroId)
    const container = containerRef.current
    if (!hero || !container) return

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2

    const points = Array.from({ length: TRAIL_COUNT }, () => ({
      x: targetX,
      y: targetY,
    }))

    let targetOpacity = 0
    let currentOpacity = 0
    let isInside = false
    let isIntersecting = true
    let animationFrame = null

    const handleMouseEnter = () => {
      isInside = true
      targetOpacity = 1
      if (isIntersecting && !animationFrame) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top

      const percentX = (targetX / rect.width - 0.5) * 2
      const percentY = (targetY / rect.height - 0.5) * 2

      hero.style.setProperty('--mouse-x', `${targetX}px`)
      hero.style.setProperty('--mouse-y', `${targetY}px`)
      hero.style.setProperty('--tilt-x', `${-percentY * 6}deg`)
      hero.style.setProperty('--tilt-y', `${percentX * 6}deg`)
      hero.style.setProperty('--sheen-x', `${(targetX / rect.width) * 100}%`)
      hero.style.setProperty('--sheen-y', `${(targetY / rect.height) * 100}%`)

      if (!isInside) {
        isInside = true
        targetOpacity = 1
        if (isIntersecting && !animationFrame) {
          animationFrame = requestAnimationFrame(animate)
        }
      }
    }

    const handleMouseLeave = () => {
      isInside = false
      targetOpacity = 0
      hero.style.setProperty('--tilt-x', '0deg')
      hero.style.setProperty('--tilt-y', '0deg')
    }

    const animate = () => {
      if (!isIntersecting) {
        animationFrame = null
        return
      }

      points[0].x += (targetX - points[0].x) * 0.22
      points[0].y += (targetY - points[0].y) * 0.22

      for (let i = 1; i < TRAIL_COUNT; i++) {
        const factor = Math.max(0.12, 0.26 - i * 0.016)
        points[i].x += (points[i - 1].x - points[i].x) * factor
        points[i].y += (points[i - 1].y - points[i].y) * factor
      }

      currentOpacity += (targetOpacity - currentOpacity) * 0.08
      if (container) {
        container.style.opacity = currentOpacity.toFixed(3)
      }

      for (let i = 0; i < TRAIL_COUNT; i++) {
        const node = nodeRefs.current[i]
        if (node) {
          const cfg = trailConfig[i]
          const halfSize = cfg.size / 2
          node.style.transform = `translate3d(${points[i].x - halfSize}px, ${points[i].y - halfSize}px, 0)`
        }
      }

      if (headCoreRef.current) {
        headCoreRef.current.style.transform = `translate3d(${points[0].x - 55}px, ${points[0].y - 55}px, 0)`
      }
      if (headSparkleRef.current) {
        headSparkleRef.current.style.transform = `translate3d(${points[0].x - 10}px, ${points[0].y - 10}px, 0)`
      }

      if (!isInside && currentOpacity < 0.01) {
        animationFrame = null
        return
      }

      animationFrame = requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting = entry.isIntersecting
          if (isIntersecting && isInside && !animationFrame) {
            animationFrame = requestAnimationFrame(animate)
          } else if (!isIntersecting && animationFrame) {
            cancelAnimationFrame(animationFrame)
            animationFrame = null
          }
        })
      },
      { threshold: 0.05 }
    )

    observer.observe(hero)
    hero.addEventListener('mouseenter', handleMouseEnter)
    hero.addEventListener('mousemove', handleMouseMove, { passive: true })
    hero.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      observer.disconnect()
      hero.removeEventListener('mouseenter', handleMouseEnter)
      hero.removeEventListener('mousemove', handleMouseMove)
      hero.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [heroId, preset, trailConfig])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 select-none opacity-0 mix-blend-screen transition-opacity duration-300 will-change-transform"
      aria-hidden="true"
    >
      {trailConfig.map((cfg, idx) => (
        <div
          key={`${preset}-${idx}`}
          ref={(el) => (nodeRefs.current[idx] = el)}
          className="pointer-events-none absolute left-0 top-0 rounded-full will-change-transform"
          style={{
            width: `${cfg.size}px`,
            height: `${cfg.size}px`,
            background: cfg.bg,
            filter: `blur(${cfg.blur}px)`,
            opacity: cfg.opacity,
          }}
        />
      ))}

      <div
        ref={headCoreRef}
        className="pointer-events-none absolute left-0 top-0 h-[110px] w-[110px] rounded-full will-change-transform"
        style={{
          background: activePreset.headCore,
          filter: 'blur(12px)',
        }}
      />

      <div
        ref={headSparkleRef}
        className={`pointer-events-none absolute left-0 top-0 h-5 w-5 rounded-full ${activePreset.headSparkle} blur-[3px] will-change-transform`}
        style={{
          boxShadow: activePreset.sparkleShadow,
        }}
      />
    </div>
  )
}

export default Glowing_Effect