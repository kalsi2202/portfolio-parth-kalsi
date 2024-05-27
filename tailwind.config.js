/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    
    extend: {
      colors: {
        'dark-blue': '#1a365d',
        // 'ice-blue': '#4299e1',
        'ice-blue': '#69abe0',
        'trans': 'rgba(255, 255, 255, 0.2)'
      },
    },
  },
  plugins: [],
}