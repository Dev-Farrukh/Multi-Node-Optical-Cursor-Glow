# Multi-Node Optical Cursor Glow ✨

> Ultra-smooth, physics-driven cursor illumination and optical wake component for React and Tailwind CSS.

An interactive lighting system featuring 9 chained spring-interpolated nodes, progressive Gaussian bloom dispersion, specular core highlights, and real-time 3D perspective surface response.

---

## 🌟 Features

- **⚡ 9-Node Chained Physics**: Authentic fluid comet wake with non-linear inertia damping.
- **📦 Wrapper Component**: Wrap any card, hero section, pricing block, or panel via `{children}`.
- **🎨 4 Curated Color Presets**: Electric Cyan, Ultraviolet, Aurora Emerald, and Pure Starlight.
- **🎛️ Fully Configurable**: Custom `size`, `preset`, `intensity`, and `blur` props.
- **🚀 GPU Hardware Accelerated**: Direct DOM `translate3d` transforms with zero React re-render overhead.
- **📐 3D Dynamic Surface Response**: Exposes CSS variables for mouse coordinates, surface pitch/yaw tilt, and specular reflection.
- **♿ Accessible & Respects Reduced Motion**: `aria-hidden="true"` glow layer and automatic motion reduction fallback.
- **🔋 Battery & CPU Optimized**: Automated pause via `IntersectionObserver` when the target surface is off-screen.
- **🪶 Zero External Dependencies**: React only.

---

## 📦 Installation

Copy `Glowing_Effect.jsx` into your components directory (e.g., `src/components/ui/Glowing_Effect.jsx`).

Ensure Tailwind CSS is configured in your project.

---

## 🚀 Quick Start

### 1. Wrapping Any Card or Hero (Recommended)

```jsx
import Glowing_Effect from './components/ui/Glowing_Effect'

export default function PricingCard() {
  return (
    <Glowing_Effect
      preset="cyan"
      size={260}
      intensity={1}
      className="rounded-3xl bg-slate-950 p-8 border border-slate-800"
    >
      <h3 className="text-2xl font-bold text-white">Pro Plan</h3>
      <p className="mt-2 text-slate-400">Everything you need to ship modern apps.</p>
      <button className="mt-6 px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold">
        Get Started
      </button>
    </Glowing_Effect>
  )
}
```

---

## 🎛️ Component Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | `undefined` | Elements to render inside the interactive glowing container. |
| `className` | `string` | `''` | Additional Tailwind or CSS classes for the container. |
| `preset` | `'cyan' \| 'violet' \| 'emerald' \| 'starlight'` | `'cyan'` | Active color palette for the optical trail and specular highlights. |
| `size` | `number` | `260` | Base head glow radius in pixels (scales all 9 trail nodes accordingly). |
| `intensity` | `number` | `1` | Opacity/intensity multiplier (0 to 1). |
| `blur` | `number` | `1` | Gaussian blur multiplier. |
| `disabled` | `boolean` | `false` | Disable the glow effect entirely. |
| `heroId` | `string` | `undefined` | Optional external container ID if using the effect as an overlay instead of a wrapper. |

---

## 🎨 Color Presets

| Preset | Core Glow | Trailing Wake | Accent Highlight |
| :--- | :--- | :--- | :--- |
| **`cyan`** | Crisp Starlight Cyan | Sky Blue $\rightarrow$ Rose $\rightarrow$ Radiant Crimson Red | `rgba(56, 189, 248)` |
| **`violet`** | Pure Starlight Lavender | Fuchsia $\rightarrow$ Ultraviolet $\rightarrow$ Deep Violet | `rgba(217, 70, 239)` |
| **`emerald`** | Mint Aurora | Emerald $\rightarrow$ Teal $\rightarrow$ Deep Cyan | `rgba(52, 211, 153)` |
| **`starlight`** | Ice White | Ice Blue $\rightarrow$ Soft Cobalt | `rgba(255, 255, 255)` |

---

## 📐 Dynamic CSS Custom Properties

When active on the target container, `Glowing_Effect` continuously updates CSS variables on the container element:

- `--mouse-x`: Pointer X coordinate relative to container (px)
- `--mouse-y`: Pointer Y coordinate relative to container (px)
- `--tilt-x`: Calculated 3D pitch tilt angle (deg)
- `--tilt-y`: Calculated 3D yaw tilt angle (deg)
- `--sheen-x`: Percentage X position for specular reflections (%)
- `--sheen-y`: Percentage Y position for specular reflections (%)

---

## 📄 License

MIT © [Dev-Farrukh](https://github.com/Dev-Farrukh)
