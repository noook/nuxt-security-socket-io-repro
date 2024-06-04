// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    'nuxt-security',
  ],
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  security: {
    // This works
    xssValidator: false,

    // this also works
    // xssValidator: {
    //   methods: ['GET'],
    // },

    // omitting `xssValidator` makes post request hanging
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
      permissionsPolicy: {
        'local-fonts': ['self'],
        'autoplay': ['self'],
        'microphone': ['self'],
      },
      contentSecurityPolicy: {
        'connect-src': [
          '\'self\'',
          'ws:',
          'wss:',
        ],
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
