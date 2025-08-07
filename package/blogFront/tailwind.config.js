// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.vue"
  ],
  theme: {
    extend: {
      colors: {
        gold: { light: '#FFF5D7', dark: '#D4AF37' },
        user: { DEFAULT: '#3B82F6', light: '#60A5FA', font: '#FFFFFF' },
        vip: { DEFAULT: '#F59E0B', light: '#D97706', font: '#4B3621' },
        svip: { DEFAULT: '#8B5CF6', light: '#7C3AED', font: '#FFFFFF' },
        guest: { DEFAULT: '#E5E7EB', light: '#CBD5E1', font: '#6B7280' }
      }
    }
  },
  plugins: []
}