module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env'),
    require('cssnano')
  ]
  }