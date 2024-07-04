/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx,html}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1B73E8",
        secondary: "rgb(115, 115, 115)",
        "primary-background": "#FFFFFF",
        "button-primary": "rgb(0, 149, 246)",
        separator: "rgb(219, 219, 219)",
        facebook: "#385185",
        link: "rgb(0, 55, 107)",
        "primary-text": "rgb(0, 0, 0)",
      },
      fontSize: {
        "primary-size": "14px",
        "primary-small": "12px",
      },
      keyframes: {
        "login-image": {
          "0%": { opacity: 0 },
          "20%": { opacity: 1 },
          "25%": { opacity: 1 },
          "45%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        screenshot1: "login-image 16s infinite",
        screenshot2: "login-image 16s infinite 4s",
        screenshot3: "login-image 16s infinite 8s",
        screenshot4: "login-image 16s infinite 12s",
      },
    },
  },
  plugins: [],
};
