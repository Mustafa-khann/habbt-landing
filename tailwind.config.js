/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Habbt Mobile App Palette (Dark Mode)
        background: '#0a0e1a',
        surface: '#151a2e',
        surfaceLight: '#1e2439',
        primary: {
          DEFAULT: '#06b6d4', // Cyan-500
          dark: '#0891b2',    // Cyan-600
          light: '#22d3ee',   // Cyan-400
        },
        secondary: {
          DEFAULT: '#8b5cf6', // Purple-500
          dark: '#7c3aed',    // Purple-600
        },
        text: {
          DEFAULT: '#ffffff',
          secondary: '#cbd5e1',
          muted: '#64748b',
        },
        accent: {
          blue: '#3b82f6', // Blue-500 (for gradients)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

