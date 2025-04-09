import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import prettierPlugin from 'eslint-plugin-prettier'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // ✅ Next.js 및 TypeScript 기본 규칙 불러오기
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // ✅ Prettier + React Hooks 룰 수동 등록
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      prettier: prettierPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
    },

    rules: {
      // Prettier 포맷팅 위반 시 ESLint 오류 처리
      'prettier/prettier': 'error',

      // React Hooks 관련 필수 규칙
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      '@next/next/no-img-element': 'error',
      '@next/next/no-head-element': 'warn',
    },
  },

  // ✅ 마지막에 Prettier 확장 적용 (충돌 해제)
  ...compat.extends('prettier'),
]

export default eslintConfig
