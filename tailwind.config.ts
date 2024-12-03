import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { //---  

      colors: {
        background: "#2117d4",
        foreground: "var(--foreground)",
        link:'#60c5db'
      },

      backgroundImage: { // -- bg class
        custom_1:'radial-gradient(#080363,#000)'
      }

    },
  },
  plugins: [],
};
export default config;
