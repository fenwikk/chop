import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        "ts-blue": "#283683",
        "ts-red": "#a8254cff",
      },
    },
  },
  plugins: [],
} satisfies Config;
