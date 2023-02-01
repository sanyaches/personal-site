import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/global-required.scss";',
        },
      },
    },
  },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content',
    'nuxt-svgo',
    '@unocss/nuxt',
  ],

  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },

  // @nuxt/content options
  content: {},

  typescript: {
    shim: false,
  },

  css: [
    '@unocss/reset/sanitize/sanitize.css',
    '~/assets/styles/main.scss',
  ],
})
