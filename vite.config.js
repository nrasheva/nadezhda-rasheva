import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compress from 'vite-plugin-compress';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Enable the compress plugin for Gzip or Brotli compression
    compress({
      verbose: true, // Enable verbose output for compression details
      disable: false, // Set to true to disable compression
      threshold: 10240, // Minimum file size (in bytes) for compression (default is 10240 bytes)
      algorithm: 'brotli', // You can choose 'gzip', 'brotli', or 'deflate' (use 'brotli' for better compression)
      ext: '.br', // Extension for Brotli compressed files, can be '.gz' for gzip
    }),
  ],
  assetsInclude: ['**/*.bmp'], // This includes the BMP file format as assets
});
