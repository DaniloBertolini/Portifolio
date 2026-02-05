/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0A0A0F',
        'cyber-dark': '#0D0D1A',
        'cyber-surface': '#12122A',
        'cyber-border': '#1A1A3E',
        'neon-cyan': '#00F0FF',
        'neon-magenta': '#FF00AA',
        'neon-green': '#39FF14',
        'neon-purple': '#B026FF',
        'neon-yellow': '#FFE600',
        'hud-white': '#E0E0FF',
        'hud-gray': '#6B6B8D',
        'hud-dim': '#3A3A5C',
      },
      fontFamily: {
        'display': ['Orbitron', 'sans-serif'],
        'body': ['Rajdhani', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'glitch': 'glitch 3s infinite',
        'flicker': 'flicker 0.15s infinite',
        'border-flow': 'border-flow 3s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00F0FF, 0 0 20px rgba(0, 240, 255, 0.3)',
        'neon-cyan-lg': '0 0 10px #00F0FF, 0 0 40px rgba(0, 240, 255, 0.4), 0 0 80px rgba(0, 240, 255, 0.1)',
        'neon-magenta': '0 0 5px #FF00AA, 0 0 20px rgba(255, 0, 170, 0.3)',
        'neon-green': '0 0 5px #39FF14, 0 0 20px rgba(57, 255, 20, 0.3)',
        'neon-purple': '0 0 5px #B026FF, 0 0 20px rgba(176, 38, 255, 0.3)',
        'inner-glow': 'inset 0 0 30px rgba(0, 240, 255, 0.05)',
      },
      dropShadow: {
        'neon-cyan': '0 0 8px rgba(0, 240, 255, 0.8)',
        'neon-magenta': '0 0 8px rgba(255, 0, 170, 0.8)',
      },
    },
  },
  plugins: [],
}
