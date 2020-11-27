module.exports = {
  target: 'static',
  
  head: {
    titleTemplate: 'カップラーメン',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // `hid` は一意の識別子として使用されます。`vmid` は動作しないので使わないでください
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' } // ここを変更する
    ]
  },

  build: {
    extend (config, { isDev, isClient }) {
      if (!isDev) {
        config.output.publicPath = './_nuxt/'
      }
    },
    vendor: ['element-ui']
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
    'element-ui/lib/theme-chalk/index.css'
  ],

  plugins: [
    '@/plugins/element-ui'
  ],

  generate: {
    subFolders: false,
    routes: [
      '/About',
      '/Acecook',
      '/Area',
      '/Conveni',
      '/Meisei',
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