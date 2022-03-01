module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Human Nature', 'serif'],
        sans: ['Century Gothic', 'serif'],
      },
      backgroundImage: {
        'circle-pattern': "url('./assets/round.png')",
        'foto-comunidad': "url('./assets/foto-comunidad.jpg')",
      },
    },
    textColor: {
      primary: '#4dc1b7',
      accent: '#ffbf00',
      black: '#0d2624',
      grey: '#706969',
      white: '#fff',
    },
    backgroundColor: {
      primary: '#4dc1b7',
      accent: '#ffbf00',
      white: '#fff',
      black: '#0d2624',
    },
    borderColor: {
      primary: '#4dc1b7',
      accent: '#ffbf00',
      black: '#0d2624',
      white: '#fff',
    },
  },
  variants: {
    extend: {
      fill: ['hover'],
    },
  },
  plugins: [],
}
