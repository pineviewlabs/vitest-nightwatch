/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nightwatchPlugin from 'vite-plugin-nightwatch'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // testTimeout: 60_000,
    // hookTimeout: 60_000,
  },
  
  plugins: [
    vue(),
    nightwatchPlugin()
  ],
})
