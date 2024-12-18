/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0A337A",
        selected: "#FF5151"
      },
      fontFamily:{
        poppins: ["Poppins"]
      },
      screens:{
        tablet: {
          raw: "screen and (min-width: 500px)",
        },
      }
    },
  },
  plugins: [],
};
