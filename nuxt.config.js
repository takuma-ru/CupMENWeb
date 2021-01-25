/*
  Nuxtの設定
  ここを変更するときはブランチがmainしかないときにやること(コンフリクト対策)
*/
module.exports = {
  target: 'static',
  
  head: {
    titleTemplate: 'カップ麺サイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.svg' }
    ]
  },

  build: {
    extend (config, { isDev, isClient }) {
      if (!isDev) {
        config.output.publicPath = './_nuxt/'
      }
    },
  },

  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },

  css: [
  ],

  plugins: [
  ],

  generate: {
    subFolders: false,
    routes: [
      '/About',
      '/Acecook',
      '/Area',
      '/Conveni',
      '/Myojo',
      '/Nissin',
      '/Overseas',
      '/Sanyoo',
      '/Toyo',
    ],
      minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      minifyCSS: false,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: false,
      removeComments: false,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortAttributes: true,
      sortClassName: true,
      trimCustomFragments: true,
      useShortDoctype: true
    }
  }
}