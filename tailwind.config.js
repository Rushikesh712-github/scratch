module.exports = {
  // Update from purge to content
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths as per your project structure
    './public/index.html',
  ],

  theme: {
    extend: {},
  },
  // Remove or set darkMode to 'media' based on your preference
  darkMode: 'media', // or 'class' or remove this line
  plugins: [],
};