/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xl": "calc(0.5rem + 0.93vw)",
        "5xl": "calc(1rem + 1.851vw)",
        "sm": "14px",
        "sm-sm": "7px",
        "2xl-sm": "12px",
        "5xl-sm": "24px",
        "xl-sm": "10px",
      },
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
      },
      backgroundColor: {
        loginSection: "#F4F4F4",
        footer: "#000",
      },
      placeholderColor: {
        loginSection: "#636363",
      },
      borderColor: { inputs: "#939393" },
      lineHeight: {
        "2xl": "calc(1.875rem + 1.042vw)",
        "5xl": "calc(1.875rem + 1.302vw)",
        "sm-sm": "15px",
        "2xl-sm": "25px",
        "5xl-sm": "25px",
        "xl-sm": "15px",
        "sm": "30px",
      },
      screens: {
        sm: { max: "480px" },
        md: { max: "768px" },
        lg: { max: "976px" },
        xl: { max: "1440px" },
        xxl: { max: "1700px" },
      },
    },
  },
  plugins: [],
};
