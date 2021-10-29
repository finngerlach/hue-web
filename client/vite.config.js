import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import config from 'config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: config.get('port'),
    host: config.get('host')
  }
})
