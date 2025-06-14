/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Enable class-based dark mode toggling
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Scan all relevant frontend files
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here, for example:
        // primary: '#7c3aed',
        // secondary: '#ec4899',
      },
      // You can extend fonts, spacing, etc. here as well
    },
  },
  plugins: [
    // Add Tailwind plugins here if needed
  ],
};
