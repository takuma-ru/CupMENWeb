module.exports = {
  manifest: {
    name: 'testApp',
    short_name: 'shortName',
    title: 'test',
    'og:title': 'ogtest',
    description: 'appDescription',
    'og:description': 'ogDescription',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  build: {
    vendor: ['element-ui']
  },
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  plugins: [
    '@/plugins/element-ui'
  ],
  generate: {
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      minifyCSS: true,
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