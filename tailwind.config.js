/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Netflix Sans"
      },
      colors: {
        "main-black": "#141414",
        "main-gray": "#808080",
        "smoke-white": "#E5E5E5",
        "mid-gray": "rgba(109, 109, 110, 0.7)",
        "white-30p": "rgba(255,255,255,0.3)"
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar")]
};
