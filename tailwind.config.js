/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Dune Rise: Bold, thick headings and display text
        'dune': ['Dune Rise', 'serif'],
        // Anton: Long and squeezed body and navigation text
        'anton': ['Anton', 'sans-serif'],
        'mono': ['Space Mono', 'JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'gamma': {
          'dark': '#121212',
          'darker': '#0a0a0a',
          'bg': '#eef0eb', // Off-white/cream metallic
          'surface': 'rgba(255, 255, 255, 0.45)', // Glass surface
          'border': 'rgba(255, 255, 255, 0.35)',
          'text': '#1f2421', // Dark text
          'blue': {
            DEFAULT: '#2563eb',
            light: '#60a5fa',
            dark: '#1d4ed8',
          },
          'pink': '#f472b6',
          'grey': '#78716c',
          'gray': '#78716c',
          'sage': {
            'light': '#d5d9c9',
            'DEFAULT': '#93a18a',
            'dark': '#4a5444'
          },
          'glass': {
            'light': 'rgba(255, 255, 255, 0.5)',
            'dark': 'rgba(0, 0, 0, 0.1)'
          },
          'cassette': {
            'cream': '#f5f4ed',
            'yellow': '#ffd84d',
            'pink': '#f472b6',
            'dark': '#18181b',
            'silver': '#d1d5db',
            'panel': '#e7e8e2'
          }
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-gamma': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0066ff15 100%)',
        'metallic-shimmer': 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(240,240,235,0.4) 50%, rgba(255,255,255,0.9) 100%)',
      },
      keyframes: {
        'wave': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(244, 114, 182, 0.4)' },
          '50%': { boxShadow: '0 0 35px rgba(244, 114, 182, 0.8)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'wave': 'wave 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 6s linear infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
