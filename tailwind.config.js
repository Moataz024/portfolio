/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nebula: {
          bg: '#0d0f1a',
          card: '#1a1c2c',
          purple: '#7e57c2',
          blue: '#42a5f5',
          lavender: '#9c89e2',
          cyan: '#5eead4',
          text: '#cfd8dc'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
};