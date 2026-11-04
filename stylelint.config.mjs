/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/svelte',
  ],
  ignoreFiles: [
    'dist/**',
    'coverage/**',
    'node_modules/**',
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['global'],
          },
        ],
      },
    },
  ],
};