/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'OpenSans': ['OpenSans'],
        'openSans-variable': ['openSans-variable', 'sans-serif'],
        'sans-Bold': ['sans-Bold'],
        'sans-Regular': ['sans-Regular', 'sans-serif'],
        'Serif-Bold': ['Serif-Bold', 'sans-serif'],
        'Serif-Regular': ['Serif-Regular', 'sans-serif'],
        'Sans-italic': ['Sans-italic', 'sans-serif'],
        'OpenSans-italic': ['OpenSans-italic', 'sans-serif'],
        'Serif-italic': ['Serif-italic', 'sans-serif'],
        'inter': ['inter'],
        'inter-italic': ['inter-italic'],

      }
    },
  },
  plugins: [],
}
