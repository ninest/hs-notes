const path = require('path')


function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/packages/normalize.css'),
        path.resolve(__dirname, './src/assets/styles/variables.scss'),
        path.resolve(__dirname, './src/assets/styles/main.scss'),
        path.resolve(__dirname, './src/assets/mizins/*.sass'),
      ],
    })
}



module.exports = {
  siteName: 'Notes',
  // desc: 'Useful notes for high school.',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        baseDir: './subs',
        // pathPrefix: '/subs',
        typeName: 'SubPage',
        template: './src/templates/SubPage.vue'
      }
    }
  ],

  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
  }
}
