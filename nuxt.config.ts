// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  srcDir: 'src/',
  css: [
    '~/assets/css/main.css',
    '~/assets/css/style.css',
    // '@/assets/styles/main.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
});
