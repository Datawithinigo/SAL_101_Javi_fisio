/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#f0f9f0',
          700: '#2c7a2c',
          800: '#236823',
          900: '#1a501a',
        },
      },
    },
  },
  plugins: [],
}