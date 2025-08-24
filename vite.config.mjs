import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    // Output to Hugo's static directory
    outDir: 'static/css',
    // Don't clear the entire static directory
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'assets/css/main.css'),
      },
      output: {
        // Generate hashed CSS files
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return '[name].[hash].css'
          }
          return '[name].[hash].[ext]'
        },
        // Don't create JS files for CSS-only builds
        entryFileNames: () => {
          return '[name].[hash].js'
        }
      }
    },
    // Generate manifest for Hugo to read
    manifest: true,
  },
  // For development hot reloading
  server: {
    port: 5173,
    hmr: {
      port: 5173,
    }
  }
})
