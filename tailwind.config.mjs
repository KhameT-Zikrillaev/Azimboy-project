/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'gradient-pan': 'gradient-pan 8s linear infinite',
         moveParticles: 'moveParticles 20s linear infinite',
      },
      keyframes: {
        'gradient-pan': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '200% 50%' },
        },
        moveParticles: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20%) translateX(20%)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
      }
    },
  },
  plugins: [],
};
