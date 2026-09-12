# Multi-Node Optical Cursor Glow ✨

> Ultra-smooth, physics-driven cursor illumination and optical wake component for React and Tailwind CSS.

An interactive lighting system featuring 9 chained spring-interpolated nodes, progressive Gaussian bloom dispersion, specular core highlights, and real-time 3D perspective surface response.

---

## 🌟 Features

- **⚡ 9-Node Chained Physics**: Authentic fluid comet wake with non-linear inertia damping.
- **🎨 4 Curated Color Presets**: Electric Cyan & Indigo, Ultraviolet & Magenta, Aurora Emerald, and Pure Starlight.
- **🚀 GPU Hardware Accelerated**: Direct DOM `translate3d` transforms with zero React re-render overhead.
- **📐 3D Dynamic Surface Response**: Exposes CSS variables for mouse coordinates, surface pitch/yaw tilt, and specular reflection.
- **🔋 Battery & CPU Optimized**: Automated pause via `IntersectionObserver` when the target surface is off-screen.
- **🪶 Zero Heavy Dependencies**: Pure React & Tailwind CSS.

---

## 📦 Installation

Copy `Glowing_Effect.jsx` into your components directory (e.g., `src/components/ui/Glowing_Effect.jsx`).

Ensure Tailwind CSS v4 or v3 is configured in your project.

---

## 🚀 Quick Start

```jsx
import Glowing_Effect from './components/ui/Glowing_Effect'

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative w-full min-h-screen bg-[#05070d] flex items-center justify-center overflow-hidden select-text"
    >
      {/* 1. Mount the Optical Glow Component */}
      <Glowing_Effect heroId="hero" preset="cyan" />

      {/* 2. Your Hero Content (remains fully clickable and selectable) */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-5xl font-extrabold text-white">
          Interactive Glowing Surface
        </h1>
        <p className="mt-4 text-slate-400">
          Move your cursor around to experience the optical glow wake.
        </p>
      </div>
    </div>
  )
}
```

---

## 🎛️ Component Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `heroId` | `string` | `'hero'` | HTML element ID of the target surface to attach mouse listeners and dynamic CSS variables to. |
| `preset` | `'cyan' \| 'violet' \| 'emerald' \| 'starlight'` | `'cyan'` | Active color palette for the optical trail and specular highlights. |

---

## 🎨 Color Presets

| Preset | Core Glow | Trailing Wake | Accent Highlight |
| :--- | :--- | :--- | :--- |
| **`cyan`** | Crisp Starlight Cyan | Sky Blue $\rightarrow$ Deep Azure $\rightarrow$ Indigo | `rgba(56, 189, 248)` |
| **`violet`** | Pure Starlight Lavender | Fuchsia $\rightarrow$ Ultraviolet $\rightarrow$ Deep Violet | `rgba(217, 70, 239)` |
| **`emerald`** | Mint Aurora | Emerald $\rightarrow$ Teal $\rightarrow$ Deep Cyan | `rgba(52, 211, 153)` |
| **`starlight`** | Ice White | Ice Blue $\rightarrow$ Soft Cobalt | `rgba(255, 255, 255)` |

---

## 📐 Dynamic CSS Custom Properties

When active on the target container (`heroId`), `Glowing_Effect` continuously updates CSS variables on the container element:

- `--mouse-x`: Pointer X coordinate relative to container (px)
- `--mouse-y`: Pointer Y coordinate relative to container (px)
- `--tilt-x`: Calculated 3D pitch tilt angle (deg)
- `--tilt-y`: Calculated 3D yaw tilt angle (deg)
- `--sheen-x`: Percentage X position for specular reflections (%)
- `--sheen-y`: Percentage Y position for specular reflections (%)

---

## 📄 License

MIT © [Dev-Farrukh](https://github.com/Dev-Farrukh)
