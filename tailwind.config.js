/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "black",
        accent: {
          DEFAULT: "white",
          hover: "white/50",
        },
        neon: "#da4e4e", // Fallback color if needed
      },
      backgroundImage: {
        "gradient-text":
          "linear-gradient(45deg, rgba(142,34,195,1) 0%, rgba(202,0,246,1) 25%, rgba(255,116,180,1) 63%, rgba(253,187,45,1) 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
