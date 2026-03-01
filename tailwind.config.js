/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#A89080",
        secondary: "#D4A5A5",
        accent: "#9CAF88",
        bg: "#FBF8F4",
        dark: "#4A3728",
        light: "#F5F0EA",
        pattern: "#C8B8A8",
      },
      fontFamily: {
        sacramento: ['Sacramento', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      animation: {
        'float-1': 'float 8s ease-in-out infinite',
        'float-2': 'float 10s ease-in-out infinite 2s',
        'float-3': 'float 12s ease-in-out infinite 4s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.2' },
          '50%': { transform: 'translateY(-20px) translateX(10px)', opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}