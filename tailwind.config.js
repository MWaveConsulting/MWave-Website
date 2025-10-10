/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#5f6f52",
        "cta-blue": "#a68a64",
        "primary-light": "#8f9779",
        "text-gray": "#6b6a66",
        "border-gray": "#e4ddd3",
        "bg-light": "#efeae2",
        "bg-rustic": "#f3efe7",
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
