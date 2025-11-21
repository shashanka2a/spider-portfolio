/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic': ['var(--font-bangers)', 'cursive'],
        'mono': ['var(--font-space-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

