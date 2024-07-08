import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#f3f3f3',
          100: '#e7e7e7',
          200: '#dadada',
        },
        black: {
          DEFAULT: '#323232',
          100: '#505050',
        },
        green: {
          DEFAULT: '#415D5C',
          100: '#BCFDFA',
        },
      },
    },
  },
  plugins: [],
}
export default config
