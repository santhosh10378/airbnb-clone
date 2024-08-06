/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#e61e4d", // Main primary color
          800: "#e31c5f", // Primary variant 2
          700: "#d70466", // Primary variant 3
        },
        secondary: {
          900: "#222222", // Darkest secondary color
          800: "#292929", // Next darker
          700: "#3D3D3D", // Next darker
          600: "#6A6A6A", // Lighter secondary color
          500: "#dddddd", // Lightest secondary color
        },
        zinc100: "#F5F5F5", // Alias for lighter background
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to right, #e61e4d, #e31c5f, #d70466)",
        "secondary-gradient":
          "radial-gradient(ellipse at top, #3D3D3D, #222222)",
      },
      boxShadow: {
        "primary-shadow": "rgba(0, 0, 0, 0.12) 0px 4px 10px 2px",
      },
    },
  },
  plugins: [],
};
