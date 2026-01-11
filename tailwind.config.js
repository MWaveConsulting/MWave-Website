/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#070813",
        background: "#f1f2fa",
        primary: "#00167a",
        secondary: "#0891b2",
        accent: "#ef4444",
        // Legacy names for compatibility
        "primary-dark": "#00167a",
        "bg-light": "#f1f2fa",
        "bg-rustic": "#f1f2fa",
        "text-gray": "#070813",
        "border-gray": "#e5e7eb",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
