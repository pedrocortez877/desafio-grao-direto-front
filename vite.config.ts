import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@themes': path.resolve(__dirname, './src/themes'),
        '@types': path.resolve(__dirname, './src/@types'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@services': path.resolve(__dirname, './src/services'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@containers': path.resolve(__dirname, './src/containers'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@schemas': path.resolve(__dirname, './src/schemas'),
        '@stores': path.resolve(__dirname, './src/stores'),
      },
    },
    base: env.VITE_BASE_URL || '/',
  };
});
