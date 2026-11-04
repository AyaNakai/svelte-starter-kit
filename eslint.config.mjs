
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default defineConfig([
  {
    ignores: ['dist/**', 'coverage/**'],
  },

  // JavaScript / TypeScript
  js.configs.recommended,
  ts.configs.recommended,

  // Svelte
  svelte.configs.recommended,
  svelte.configs.prettier,

  // ブラウザ環境
  {
    files: ['src/**/*.{js,ts,svelte}'],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // Svelte内のTypeScript
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },

  // Node.js側の設定ファイル
  {
    files: ['vite.config.ts', 'eslint.config.mjs'],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
