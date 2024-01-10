import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        "registerType": 'autoUpdate',
        "name":"Aquila Enterprise",
        "short_name":"Aquila",
        "display": "standalone",
        "background_color": "#141E46",
        "theme_color": "#141E46",
        "icons":[
          {
            src: "Business/Aquila/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Aquila/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
    })
  ],
 
  resolve: {
    alias: {
      src: "/src",
    },
  },
})
