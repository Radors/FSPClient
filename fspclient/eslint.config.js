import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
        js.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
        reactHooks.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    plugins: {
        'react': react,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh
    },
    languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        }
    },
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true }
        ]
    }
  }
)
