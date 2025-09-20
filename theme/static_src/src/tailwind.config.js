// theme/static/src/tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      // Adicione os caminhos para todos os seus arquivos de template
      './templates/**/*.html',
      './**/templates/**/*.html',
      './theme/templates/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}