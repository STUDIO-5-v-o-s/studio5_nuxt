export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page metadata (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Reklamní agentura v Uherském Hradišti | STUDIO 5',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Poskytujeme komplexní reklamní servis. Našim krédem je spokojený zákazník, proto dbáme na dodržování termínů a svým klientům jdeme vždy vstříct.'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@assets/scss/style.scss'
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_vars.scss'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/GlobalComponents',
    '~plugins/bootstrap-vue',
    '~/plugins/components'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    // Doc: https://github.com/storyblok/storyblok-nuxt
    ['storyblok-nuxt',
      {
        accessToken: 'MJrgsxkYkXiDgLSekjBKIgtt',
        cacheProvider: 'memory'
      }
    ]
  ],

  bootstrapVue: {
    icons: true
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
