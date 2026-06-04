import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

export default tseslint.config(
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**', '**/*.d.ts']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { unicorn },
    rules: {
      'unicorn/prefer-number-properties': 'off'
    }
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      // TypeScript already reports undefined identifiers; the core rule produces
      // false positives for DOM/Node globals used throughout this library.
      'no-undef': 'off',
      // Utility signatures intentionally accept `any` for maximum flexibility.
      '@typescript-eslint/no-explicit-any': 'off',
      // `Function` is used deliberately in the isFunction type guard.
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ]
    }
  }
)
