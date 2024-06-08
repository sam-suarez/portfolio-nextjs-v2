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
        black: {
          DEFAULT: '#313131',
          100: '#696969',
        },
        yellow: {
          DEFAULT: '#FFD60A',
        },
        blue: {
          DEFAULT: '#2c6dfc',
          100: '#092F51',
          200: '#142C44',
          300: '#061829',
        },
      },
    },
  },
  plugins: [],
}
export default config
