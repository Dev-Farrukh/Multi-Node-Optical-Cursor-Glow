import React from 'react'
import Glowing_Effect from '../components/ui/Glowing_Effect'

const Effect_Demo = () => {
  return (
    <div id="hero" className="glow-stage">
      {/* Dynamic Specular Sheen Layer driven by CSS variables */}
      <div className="glow-sheen-layer" />

      {/* Subtle Background Grid Pattern */}
      <div className="glow-grid-overlay" />

      {/* Mount 9-Node Optical Glow Component */}
      <Glowing_Effect heroId="hero" />

      {/* Center Interactive Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-pulse"></span>
          <span>9-Node Optical Physics Engine</span>
        </div>

        <h1 className="hero-title">
          Multi-Node Optical Glow
        </h1>

        <p className="hero-subtitle">
          Move your cursor around the screen to experience the real-time optical wake, bloom dispersion, and specular lighting.
        </p>

        <div className="hint-pill">
          <span className="hint-spark">✦</span>
          <span>Interactive Canvas Active</span>
        </div>
      </div>

      {/* Minimal Bottom Info Bar */}
      <div className="stage-footer">
        <div className="footer-metric">
          <span className="metric-label">Nodes</span>
          <span className="metric-val">9 Chained Springs</span>
        </div>
        <div className="footer-divider" />
        <div className="footer-metric">
          <span className="metric-label">Physics</span>
          <span className="metric-val">Inertia Damping</span>
        </div>
        <div className="footer-divider" />
        <div className="footer-metric">
          <span className="metric-label">Rendering</span>
          <span className="metric-val">GPU Hardware Accel</span>
        </div>
      </div>
    </div>
  )
}

export default Effect_Demo