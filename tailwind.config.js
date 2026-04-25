/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        accent: "#22D3EE",
        dark: "#0B0F19",
        card: "#111827"
      }
    },
  },
  plugins: [],
}