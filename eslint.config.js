// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Configuración para que ESLint conozca la versión de React
  settings: { react: { version: '18.3' } },
  plugins: {
    react, // Agrega el plugin de React
  },
  rules: {
    // Integra las reglas recomendadas para React
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
