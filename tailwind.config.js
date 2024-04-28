/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url(/Home-img.jpeg)",
        'home-pc': "url(/home-pc.png)",
        'gradient': "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%)",
        
        'header': "linear-gradient(to bottom, rgba(0,0,0,0.98) 0%,rgba(0,0,0, 0.98) 100%)",
        'suport': "url(/suport.jpeg)",
        'thanks': "url(/thankyou.jpeg)",
      },
      
    },
  },
  plugins: [],
}