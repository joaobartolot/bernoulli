/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'hsl(var(--color-primary) / <alpha-value>)',
          secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
          accent: 'hsl(var(--color-accent) / <alpha-value>)',
          surface: 'hsl(var(--color-surface) / <alpha-value>)',
          text: 'hsl(var(--color-text) / <alpha-value>)',
          muted: 'hsl(var(--color-muted) / <alpha-value>)'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
};
