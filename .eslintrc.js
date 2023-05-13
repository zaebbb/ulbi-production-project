module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: [
    'react'
  ],
  rules: {
    // отступы 2 пробела
    "react/jsx-indent": [2, 2],
    'react/jsx-indent-props': [2, 2],
    'indent': [2, 2],
    // Инорирование отсутствия jsx в tsx файлах
    // "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }]
    // ошибка на абсолютные пути
    // "import/no-unresolved": 'off',
    // ошибка именованного экспорта
    // "import/prefer-default-export": "off",
    // переменная нигде не используется
    "no-unused-vars": ["warn"],
    'react/require-default-props': 'off',
    // отключение требования импорта react / рекомендуется от 17 версии react
    // 'react/react/in-jsx-scope': 'off',
    // требование включить type у кнопки
    'react/button-has-type': [2],
    // использование spread у props (допустимо для UI компонентов)
    'react/jsx-props-no-spreading': 'warn',
    // использование function declaration для компонентов
    //'react/function-component-definition': 'off',
    'no-shadow': 'off',
    // наименование расширения файла отключить
    'import/extensions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // отключение ошибки использования react в скоупах
    'react/react-in-jsx-scope': 'off',
    // использование camelCase
    '@typescript-eslint/naming-convention': 'warn',
  },
  globals: {
    '__IS_DEV__': true,
  }
}
