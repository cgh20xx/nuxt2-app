export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',
  target: 'server',

  // hank加的
  // env: {
  //   baseUrl: 'abc',
  //   // baseUrl: process.env.BASE_URL || baseUrl,
  //   // baseUrl: process.env.NODE_ENV === 'production' ? '' : '/',
  // },
  router: {
    base: '/han/nuxt2/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt2-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // i18n head no title keyword desc
  // head() {
  //   return this.$nuxtI18nHead({ addSeoAttributes: true })
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org/setup
    '@nuxtjs/i18n',
  ],

  // https://i18n.nuxtjs.org/basic-usage
  i18n: {
    locales: [
      {
        code: 'zh-TW',
        file: 'zh-TW.json',
      },
      {
        code: 'en',
        file: 'en.json',
      },
    ],
    langDir: '~/locales/',
    defaultLocale: 'en',
    lazy: true,
    // vueI18n: {
    //   fallbackLocale: 'zh',
    //   messages: {
    //     zh: {
    //       home: '首頁',
    //       about: '關於頁',
    //       homeH1: '這是首頁。',
    //       aboutH1: '這是關於頁。',
    //     },
    //     en: {
    //       home: 'Home',
    //       about: 'About',
    //       homeH1: 'This is home page.',
    //       aboutH1: 'This is about page.',
    //     },
    //   },
    // },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
