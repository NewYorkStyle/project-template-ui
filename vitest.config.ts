import react from '@vitejs/plugin-react';
import {defineConfig} from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    include: [
      'src/**/__tests__/**/*.{ts,tsx}',
      'src/**/*.{test,spec}.{ts,tsx}',
    ],
    coverage: {
      provider: 'v8',
      include: ['src/components/**/*.{ts,tsx}'],
      exclude: [
        '**/*.d.ts',
        '**/*.stories.{ts,tsx}',
        '**/*.test.{ts,tsx}',
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/index.ts',
      ],
    },
  },
});
