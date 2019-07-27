const path = require('path')


import { subject_pages } from './contents/pages.js'

let subjects = ['french', 'chemistry', 'computer-science', 'english-literature', 'english-language', 'geography']
let routes = []

subjects.forEach((subject) => {
  routes.push(`/${subject}`)
  subject_pages[subject].forEach((page) => {
    routes.push(`/${subject}/${page}`)
  })
})


export default {
  mode: 'universal',
  generate: {
    dir: 'docs'
  },
  build: {
    publicPath: 'docs'
  },
  router: {
    base: '/ib-notes/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'theme-color', content: '#ebebeb'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // Google Ads
      // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      // <script>
      //     (adsbygoogle = window.adsbygoogle || []).push({
      //           google_ad_client: "ca-pub-3633803003049248",
      //           enable_page_level_ads: true
      //     });
      // (adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-3633803003049248",enable_page_level_ads: true});
      // </script>
      // { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', defer: true },
      // { innerHTML: '(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-3633803003049248",enable_page_level_ads: true})'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          vue: {
            root: "dynamicMarkdown"
          }
        }
      })
    }
  },

  router: {
    linkActiveClass: 'active-link'
  },

  generate: {
    routes: routes
  }
}
