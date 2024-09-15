/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyBlue: '#007CF0',
        tealGreen: '#00DFD8',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #007CF0, #00DFD8)',
      },
    },
  },
  plugins: [],
}

