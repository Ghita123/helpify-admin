module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'register': "url('/src/register.jpg')",
      })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
