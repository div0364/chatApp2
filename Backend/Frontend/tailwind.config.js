import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include your source files
  ],
  theme: {
    extend: {}, // Extend the default Tailwind theme if needed
  },
  plugins: [daisyui], // Use the imported plugin
};
