/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#181c14',
        secondary: '#3c3d37',
        highlight: '#697565',
        background: '#ecdfcc',
      },
    },
  },
  plugins: [],
};

export default config;
  