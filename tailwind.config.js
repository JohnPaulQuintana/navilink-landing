/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0077b6",
        secondary: "#16D9FF",

        background: {
          DEFAULT: "#f8fafc",
          soft: "#eef2ff",
        },

        text: {
          primary: "#0f172a",
          muted: "#64748b",
        },
      },

      boxShadow: {
        glass: "0 8px 30px rgba(0, 0, 0, 0.06)",
      },

      backdropBlur: {
        xs: "2px",
      },

      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
