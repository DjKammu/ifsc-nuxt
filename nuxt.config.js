export default {

  env: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes:"180x180",
      href: process.env.ASSET_URL+'/favicon/apple-touch-icon.png' },
      { rel: 'icon', sizes:"32x32", type: 'image/png', 
      href: process.env.ASSET_URL+'/favicon/favicon-32x32.png' },
      { rel: 'icon', sizes:"16x16", type: 'image/png', 
      href: process.env.ASSET_URL+'/favicon/favicon-16x16.png' },
      { rel: 'manifest', sizes:"180x180", 
      href: process.env.ASSET_URL+'/favicon/site.webmanifest' }
    ],
     script: [
      {src: process.env.ASSET_URL+'/js/jquery-3.2.1.min.js'},
      {src: process.env.ASSET_URL+'/js/bootstrap.min.js'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/style.css',
    '@/assets/bootstrap.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/router'
  ],
  routerModule: {
    /* module options */
  },
  /*
  ** Nuxt.js modules
  */
   modules: [
      '@nuxtjs/axios',
      '@nuxtjs/proxy'
    ],
    axios: {
      proxyHeaders: true,
      proxy: true
    },
    proxy: {
      '/api/': { target: 'http://127.0.0.1:8000' , pathRewrite: {'^/api/': ''}, changeOrigin: true }
    },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
