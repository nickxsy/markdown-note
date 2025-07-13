// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  [
    globalIgnores(['dist']),
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        'react-refresh/only-export-components': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-restricted-syntax': [
          'error',
          {
            selector: 'VariableDeclarator > ObjectPattern',
            message: 'Деструктуризация объектов запрещена'
          }
        ]
      },

      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs['recommended-latest'],
        reactRefresh.configs.vite
      ],

      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser
      }
    },
    {
      files: ['src/shared/**'],
      rules: {
        'no-restricted-syntax': 'off'
      }
    }
  ],

  storybook.configs['flat/recommended'],
  storybook.configs['flat/recommended']
);
