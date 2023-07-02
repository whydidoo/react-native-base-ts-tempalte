module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: '@react-native',
      plugins: ['unused-imports', 'simple-import-sort'],
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react'],
              ['^@'],
              ['^app\\/?(screens|components|routers|theme)?'],
              ['^\\u0000'],
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
  ignorePatterns: [
    '.eslintrc.js',
    '*.config.js',
    'storyLoader.js',
    'platform/scripts/*.js',
    '*.d.ts',
    '*.test.ts',
    '*.test.js',
    '__tests__',
    '*.js',
    'openapi',
    'src/api/template',
  ],
};
