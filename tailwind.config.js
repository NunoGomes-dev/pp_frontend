module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#DDBA92",
        secondary: "#727272",
        terciary: "#210203",
        primaryLight: "rgba(221, 186, 146, 0.2)",
        title: "#04080F",
        text: "#292929",
        transparent: "transparent",
        black: "#000",
        white: "#FFFFFF",
        light: "#FAFAFA",
        error: "#E53E3E",
      },
      keyframes: {
        toast: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
        skeleton: {
          from: { opacity: 0.3 },
          to: { opacity: 0.5 },
        },
        spinner: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        toast: "toast 0.7s ease",
        skeleton: "skeleton 0.5s linear alternate infinite",
        spinner: "spinner 0.5s linear infinite",
      },
    },
  },
  plugins: [],
};
