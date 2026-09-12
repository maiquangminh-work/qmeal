/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        warm: {
          bg: '#faf9f6',
          card: '#ffffff',
          dark: '#1c1917',
          muted: '#78716c',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(234, 88, 12, 0.08)',
        'warm-md': '0 8px 24px -4px rgba(234, 88, 12, 0.12)',
        'warm-lg': '0 16px 36px -6px rgba(234, 88, 12, 0.18)',
      }
    },
  },
  plugins: [],
}
