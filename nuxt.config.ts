// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
