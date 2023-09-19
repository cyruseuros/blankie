import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'blankie',
        description: 'zzz',
        theme_color: '#f2d5cf',
        background_color: '#f2d5cf',
        icons: [
          {
            src: 'icon.png',
            type: 'image/png',
            sizes: "512x512",
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,mp3,png}'],
        maximumFileSizeToCacheInBytes: 10_000_000,
      }
    })
  ]
})
