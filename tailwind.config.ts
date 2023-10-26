import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      // 'text-color':"#FFFFFF",
      // 'background-color': '#1A232E',
      // 'secondary': '#25618B',
    },
    screens: {
      sm: '479.98px',
      md: '768px',
      lg: '976px',
      xl: '1170px',
    },
  },
  plugins: [],
}
export default config
