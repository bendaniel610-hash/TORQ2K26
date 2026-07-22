/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tva: {
          black: "#000000",
          nearblack: "#0a0a0c",
          orange: "#F5A524",
          amber: "#FF8C00",
          glow: "rgba(245, 165, 36, 0.4)",
          bg: "#040406",
        }
      },
      fontFamily: {
        mono: ["'Share Tech Mono'", "Space Mono", "Courier New", "monospace"],
      },
      animation: {
        'flicker': 'flicker 0.15s infinite alternate',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'crt-turn-on': 'crtTurnOn 0.5s ease-out forwards',
        'scanline-anim': 'scanline 6s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%': { opacity: 0.97 },
          '100%': { opacity: 1.0 },
        },
        pulseGlow: {
          '0%, 100%': { textShadow: '0 0 4px rgba(245,165,36,0.3), 0 0 10px rgba(245,165,36,0.2)' },
          '50%': { textShadow: '0 0 8px rgba(245,165,36,0.6), 0 0 20px rgba(245,165,36,0.4)' },
        },
        crtTurnOn: {
          '0%': { transform: 'scaleY(0.005) scaleX(0); filter: brightness(3); opacity: 0;' },
          '50%': { transform: 'scaleY(0.005) scaleX(1); filter: brightness(3); opacity: 1;' },
          '100%': { transform: 'scaleY(1) scaleX(1); filter: brightness(1); opacity: 1;' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}
