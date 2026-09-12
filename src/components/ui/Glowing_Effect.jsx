import React, { useEffect, useRef, useMemo } from 'react'

const TRAIL_COUNT = 9

export const GLOW_PRESETS = {
  cyan: {
    name: 'Electric Cyan',
    sheen: 'rgba(56, 189, 248, 0.08)',
    headCore: 'radial-gradient(circle, rgba(230, 252, 255, 0.95) 0%, rgba(56, 189, 248, 0.65) 40%, rgba(99, 102, 241, 0.25) 70%, transparent 85%)',
    headSparkle: 'bg-cyan-100/95',
    sparkleShadow: '0 0 16px rgba(186, 230, 253, 0.95), 0 0 30px rgba(56, 189, 248, 0.65)',
    trailGradients: [
      'radial-gradient(circle, rgba(224,247,255,0.92) 0%, rgba(56,189,248,0.7) 35%, rgba(59,130,246,0.35) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(186,230,253,0.88) 0%, rgba(14,165,233,0.65) 35%, rgba(79,70,229,0.3) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(125,211,252,0.82) 0%, rgba(2,132,199,0.55) 35%, rgba(99,102,241,0.25) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(96,165,250,0.75) 0%, rgba(59,130,246,0.5) 35%, rgba(139,92,246,0.2) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(129,140,248,0.7) 0%, rgba(99,102,241,0.45) 35%, rgba(168,85,247,0.18) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(147,51,234,0.35) 35%, rgba(126,34,206,0.12) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(192,132,252,0.5) 0%, rgba(168,85,247,0.3) 35%, transparent 70%)',
      'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(139,92,246,0.2) 35%, transparent 70%)',
      'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
    ],
  },
  violet: {
    name: 'Ultraviolet',
    sheen: 'rgba(168, 85, 247, 0.08)',
    headCore: 'radial-gradient(circle, rgba(250, 235, 255, 0.95) 0%, rgba(217, 70, 239, 0.65) 40%, rgba(147, 51, 234, 0.25) 70%, transparent 85%)',
    headSparkle: 'bg-fuchsia-100/95',
    sparkleShadow: '0 0 16px rgba(245, 208, 254, 0.95), 0 0 30px rgba(217, 70, 239, 0.65)',
    trailGradients: [
      'radial-gradient(circle, rgba(250,232,255,0.92) 0%, rgba(217,70,239,0.7) 35%, rgba(147,51,234,0.35) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(245,208,254,0.88) 0%, rgba(192,38,211,0.65) 35%, rgba(126,34,206,0.3) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(232,121,249,0.82) 0%, rgba(162,28,175,0.55) 35%, rgba(107,33,168,0.25) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(216,180,254,0.75) 0%, rgba(168,85,247,0.5) 35%, rgba(88,28,135,0.2) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(192,132,252,0.7) 0%, rgba(147,51,234,0.45) 35%, rgba(76,29,149,0.18) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(126,34,206,0.35) 35%, transparent 75%)',
      'radial-gradient(circle, rgba(147,51,234,0.5) 0%, rgba(107,33,168,0.3) 35%, transparent 70%)',
      'radial-gradient(circle, rgba(126,34,206,0.4) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(107,33,168,0.3) 0%, transparent 70%)',
    ],
  },
  emerald: {
    name: 'Aurora Emerald',
    sheen: 'rgba(20, 184, 166, 0.08)',
    headCore: 'radial-gradient(circle, rgba(230, 255, 245, 0.95) 0%, rgba(52, 211, 153, 0.65) 40%, rgba(20, 184, 166, 0.25) 70%, transparent 85%)',
    headSparkle: 'bg-emerald-100/95',
    sparkleShadow: '0 0 16px rgba(167, 243, 208, 0.95), 0 0 30px rgba(52, 211, 153, 0.65)',
    trailGradients: [
      'radial-gradient(circle, rgba(236,253,245,0.92) 0%, rgba(52,211,153,0.7) 35%, rgba(16,185,129,0.35) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(167,243,208,0.88) 0%, rgba(45,212,191,0.65) 35%, rgba(13,148,136,0.3) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(110,231,183,0.82) 0%, rgba(20,184,166,0.55) 35%, rgba(15,118,110,0.25) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(52,211,153,0.75) 0%, rgba(14,165,233,0.5) 35%, rgba(3,105,161,0.2) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(45,212,191,0.7) 0%, rgba(2,132,199,0.45) 35%, transparent 75%)',
      'radial-gradient(circle, rgba(20,184,166,0.6) 0%, rgba(14,116,144,0.35) 35%, transparent 75%)',
      'radial-gradient(circle, rgba(13,148,136,0.5) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(15,118,110,0.4) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(17,94,89,0.3) 0%, transparent 70%)',
    ],
  },
  starlight: {
    name: 'Pure Starlight',
    sheen: 'rgba(255, 255, 255, 0.08)',
    headCore: 'radial-gradient(circle, rgba(255, 255, 255, 0.98) 0%, rgba(224, 242, 254, 0.7) 40%, rgba(147, 197, 253, 0.25) 70%, transparent 85%)',
    headSparkle: 'bg-white',
    sparkleShadow: '0 0 16px rgba(255, 255, 255, 0.98), 0 0 30px rgba(186, 230, 253, 0.8)',
    trailGradients: [
      'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(224,242,254,0.7) 35%, rgba(186,230,253,0.35) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(240,249,255,0.9) 0%, rgba(186,230,253,0.65) 35%, rgba(147,197,253,0.3) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(224,242,254,0.85) 0%, rgba(147,197,253,0.55) 35%, rgba(96,165,250,0.25) 55%, transparent 75%)',
      'radial-gradient(circle, rgba(186,230,253,0.75) 0%, rgba(96,165,250,0.5) 35%, transparent 75%)',
      'radial-gradient(circle, rgba(147,197,253,0.7) 0%, rgba(59,130,246,0.45) 35%, transparent 75%)',
      'radial-gradient(circle, rgba(96,165,250,0.6) 0%, transparent 75%)',
      'radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(29,78,216,0.3) 0%, transparent 70%)',
    ],
  },
}

const BASE_RATIOS = [
  { sizeRatio: 1.0, blurRatio: 0.12, opacity: 0.9 },
  { sizeRatio: 0.84, blurRatio: 0.11, opacity: 0.85 },
  { sizeRatio: 0.69, blurRatio: 0.09, opacity: 0.8 },
  { sizeRatio: 0.57, blurRatio: 0.08, opacity: 0.72 },
  { sizeRatio: 0.46, blurRatio: 0.06, opacity: 0.65 },
  { sizeRatio: 0.36, blurRatio: 0.05, opacity: 0.55 },
  { sizeRatio: 0.28, blurRatio: 0.04, opacity: 0.45 },
  { sizeRatio: 0.21, blurRatio: 0.03, opacity: 0.35 },
  { sizeRatio: 0.15, blurRatio: 0.025, opacity: 0.22 },
]

/**
 * Glowing_Effect Component
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.children] - Nested content to wrap inside the interactive glowing container
 * @param {string} [props.className] - Additional class names for the container
 * @param {string} [props.preset='cyan'] - Color palette preset: 'cyan' | 'violet' | 'emerald' | 'starlight'
 * @param {number} [props.size=260] - Base head glow radius in pixels (scales all 9 trail nodes accordingly)
 * @param {number} [props.intensity=1] - Intensity/opacity multiplier (0 to 1+)
 * @param {number} [props.blur=1] - Blur multiplier for the glow diffusion
 * @param {boolean} [props.disabled=false] - Disable the effect entirely
 * @param {string} [props.heroId] - Optional external container ID to attach listeners to if not wrapping children
 */
const Glowing_Effect = ({
  children,
  className = '',
  preset = 'cyan',
  size = 260,
  intensity = 1,
  blur = 1,
  disabled = false,
  heroId,
  ...rest
}) => {
  const localContainerRef = useRef(null)
  const glowLayerRef = useRef(null)
  const nodeRefs = useRef([])
  const headCoreRef = useRef(null)
  const headSparkleRef = useRef(null)

  const activePreset = GLOW_PRESETS[preset] || GLOW_PRESETS.cyan

  const trailNodes = useMemo(() => {
    return BASE_RATIOS.map((item, idx) => {
      const nodeSize = Math.round(size * item.sizeRatio)
      const nodeBlur = Math.max(2, Math.round(size * item.blurRatio * blur))
      const nodeOpacity = Math.min(1, Math.max(0, item.opacity * intensity))
      return {
        size: nodeSize,
        blur: nodeBlur,
        opacity: nodeOpacity,
        bg: activePreset.trailGradients[idx] || activePreset.trailGradients[0],
      }
    })
  }, [size, intensity, blur, activePreset])

  const coreSize = Math.round(size * 0.42)
  const coreBlur = Math.max(2, Math.round(size * 0.05 * blur))
  const sparkleSize = Math.max(12, Math.round(size * 0.08))

  useEffect(() => {
    if (disabled) return

    const isTouchOrReduced = window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches
    if (isTouchOrReduced) return

    const targetElement = heroId
      ? document.getElementById(heroId)
      : localContainerRef.current

    const glowLayer = glowLayerRef.current
    if (!targetElement || !glowLayer) return

    let targetX = targetElement.clientWidth / 2 || window.innerWidth / 2
    let targetY = targetElement.clientHeight / 2 || window.innerHeight / 2

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
      const rect = targetElement.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top

      const percentX = (targetX / rect.width - 0.5) * 2
      const percentY = (targetY / rect.height - 0.5) * 2

      targetElement.style.setProperty('--mouse-x', `${targetX}px`)
      targetElement.style.setProperty('--mouse-y', `${targetY}px`)
      targetElement.style.setProperty('--tilt-x', `${-percentY * 5}deg`)
      targetElement.style.setProperty('--tilt-y', `${percentX * 5}deg`)
      targetElement.style.setProperty('--sheen-x', `${(targetX / rect.width) * 100}%`)
      targetElement.style.setProperty('--sheen-y', `${(targetY / rect.height) * 100}%`)

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
      targetElement.style.setProperty('--tilt-x', '0deg')
      targetElement.style.setProperty('--tilt-y', '0deg')
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
      if (glowLayer) {
        glowLayer.style.opacity = currentOpacity.toFixed(3)
      }

      for (let i = 0; i < TRAIL_COUNT; i++) {
        const node = nodeRefs.current[i]
        if (node) {
          const cfg = trailNodes[i]
          const halfSize = cfg.size / 2
          node.style.transform = `translate3d(${points[i].x - halfSize}px, ${points[i].y - halfSize}px, 0)`
        }
      }

      if (headCoreRef.current) {
        const halfCore = coreSize / 2
        headCoreRef.current.style.transform = `translate3d(${points[0].x - halfCore}px, ${points[0].y - halfCore}px, 0)`
      }
      if (headSparkleRef.current) {
        const halfSparkle = sparkleSize / 2
        headSparkleRef.current.style.transform = `translate3d(${points[0].x - halfSparkle}px, ${points[0].y - halfSparkle}px, 0)`
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

    observer.observe(targetElement)
    targetElement.addEventListener('mouseenter', handleMouseEnter)
    targetElement.addEventListener('mousemove', handleMouseMove, { passive: true })
    targetElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      observer.disconnect()
      targetElement.removeEventListener('mouseenter', handleMouseEnter)
      targetElement.removeEventListener('mousemove', handleMouseMove)
      targetElement.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [disabled, heroId, trailNodes, coreSize, sparkleSize])

  const glowElements = (
    <div
      ref={glowLayerRef}
      className="pointer-events-none absolute inset-0 z-0 select-none opacity-0 mix-blend-screen transition-opacity duration-300 will-change-transform"
      aria-hidden="true"
    >
      {trailNodes.map((cfg, idx) => (
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
        className="pointer-events-none absolute left-0 top-0 rounded-full will-change-transform"
        style={{
          width: `${coreSize}px`,
          height: `${coreSize}px`,
          background: activePreset.headCore,
          filter: `blur(${coreBlur}px)`,
          opacity: intensity,
        }}
      />

      <div
        ref={headSparkleRef}
        className={`pointer-events-none absolute left-0 top-0 rounded-full ${activePreset.headSparkle} blur-[3px] will-change-transform`}
        style={{
          width: `${sparkleSize}px`,
          height: `${sparkleSize}px`,
          boxShadow: activePreset.sparkleShadow,
        }}
      />
    </div>
  )

  if (children) {
    return (
      <div
        ref={localContainerRef}
        className={`relative overflow-hidden ${className}`}
        {...rest}
      >
        {glowElements}
        <div className="relative z-10 select-text">
          {children}
        </div>
      </div>
    )
  }

  return glowElements
}

export default Glowing_Effect