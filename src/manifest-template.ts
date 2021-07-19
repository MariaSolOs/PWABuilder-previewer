import type { Manifest } from './models';

export default {
  name: 'PWA App',
  background_color: '#FFF',
  theme_color: '#E3CEF6',
  categories: [],
  shortcuts: [],
  display: 'standalone',
  description: 'An amazing progressive web app!',
  icons: [
    {
      src: '/assets/icons/icon_512.png',
      sizes: '512x512',
      type: 'image/png'
    }
  ]
} as Manifest;