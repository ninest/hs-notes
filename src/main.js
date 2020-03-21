// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),


  head.meta.push({
    name: 'theme-color',
    content: '#4600ff'
  }),

  // INter UI font
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
  }),

  // Poppins font
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?&family=Poppins:wght@400;700&display=swap'
  }),

  // mathjax
  head.script.push({
    src: 'https://polyfill.io/v3/polyfill.min.js?features=es6',
    body: true,
  }),
  head.script.push({
    src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
    body: true,
  })
}
