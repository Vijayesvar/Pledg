import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';

const reactRules = {
  // React rules
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 'off',
  'react/display-name': 'off',
  'react/no-unescaped-entities': 'off',
  'react/no-unknown-property': 'off',
  'react/no-redeclare': 'off',
};

const typescriptRules = {
  // TypeScript rules
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/no-require-imports': 'off',
};

const hooksRules = {
  // React Hooks rules
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
};

const baseRules = {
  // Other rules
  'no-undef': 'off',
};

export default [
  // Global ignores
  {
    ignores: [
      'node_modules',
      '.next',
      'out',
      'build',
      'dist',
      'public',
      '*.d.ts',
      'next-sitemap.config.js',
      'scripts/**',
      'src/image-loader.js',
    ],
  },
  
  // Base JavaScript config
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...reactRules,
      ...hooksRules,
      ...baseRules,
    },
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: ['.'],
      },
    },
  },
  
  // TypeScript config
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        JSX: 'readonly',
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescriptEslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...reactRules,
      ...typescriptRules,
      ...hooksRules,
      ...baseRules,
    },
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: ['.'],
      },
    },
  },
];
