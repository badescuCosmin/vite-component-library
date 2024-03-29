import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
// for not splitting css chunks amd inject them in the files they are used in case it needs
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({
    include: ['src/components']
  })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/components'),
      name: 'Testi Components Library',
      fileName: 'TCL',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', '@mui/material', '@emotion/react', '@emotion/styled'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          '@emotion/styled': 'emStyled',
          '@emotion/react': 'react'
        }
      }
    }
  }
})
