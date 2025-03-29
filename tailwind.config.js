/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-minus-80": "calc(100vh - 80px)",
      },

      fontWeight: { 4: "400", 5: "500", 6: "600", 7: "700" },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },

      colors: {
        black: "#140000",
        white: "#fff",

        gray1: "#666666",
        gray2: "#e5e5e5",

        green1: "#64a05f",
        green2: "#327e50",
        green3: "#265338",

        red1: "#863739",
      },

      fontSize: {
        10: "10px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        20: "20px",
        66: "66px",
        26: "26px",
        32: "32px",
        52: "52px",
        24: "24px",
        48: "48px",
        28: "28px",
        30: "30px",
        34: "34px",
        36: "36px",
        40: "40px",
        42: "42px",
        22: "22px",
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out forwards",
        slideSide: "slideSide 0.3s ease-out forwards",
        slideUp: "slideUp 0.3s ease-out forwards",
      },
      keyframes: {
        slideSide: {
          "0%": { transform: "translateX(40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
