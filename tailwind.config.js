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
          navy: '#0B2545',       // Deep Royal / Oxford Blue (matches AmigoWebster logo dark blue)
          dark: '#061529',       // Midnight Sapphire Blue
          blue: '#134074',       // Corporate Sapphire Blue
          accent: '#0284C7',     // Vibrant Sky / Electric Blue (sky-600)
          accentHover: '#0369A1',// Deep Sky Blue Hover (sky-700)
          cyan: '#38BDF8',       // Luminous Cyan Highlight
          surface: '#F0F7FF',    // Soft Ice Blue Surface
          light: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
