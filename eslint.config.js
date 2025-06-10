import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  {
    // Global settings
    languageOptions: {
      globals: {
        process: 'readonly',
        module: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
        require: 'readonly',
      },
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // React specific settings
    ...reactRecommended,
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: ['.'],
      },
    },
  },
  {
    // Custom rules
    plugins: {
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/no-unknown-property': ['error', { ignore: ['cmdk-input-wrapper'] }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],
      '@typescript-eslint/no-require-imports': 'off',
      'no-dupe-keys': 'error',
      'no-undef': 'off',
    },
  },
  {
    // Ignore patterns
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'build/',
      'dist/',
      '.eslintcache',
      '.env*.local',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      '.vscode/',
      '.idea/',
      '.DS_Store',
      '.DS_Store?',
      '._*',
      '.Spotlight-V100',
      '.Trashes',
      'ehthumbs.db',
      'Thumbs.db',
    ],
  },
];
