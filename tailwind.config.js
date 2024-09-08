/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSansRegular:['openSansRegular'],
        openSansBold:['openSansBold'],
        openSansExtraBold:['openSansExtraBold'],
        ubuntuMonoBold:['ubuntuMonoBold'],
        ubuntuMonoRegular:['ubuntuMonoRegular']
      },
      colors: {
        'hacker-orange': '#FE7139'
      }

    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

