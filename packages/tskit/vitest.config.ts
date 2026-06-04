/// <reference types="vitest" />

import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    root: resolve(__dirname),
    include: ['./tests/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'lcov'],
      reportsDirectory: './tests/coverage',
      include: ['src/**/*.ts']
    }
  }
})
