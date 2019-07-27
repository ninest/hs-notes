<template lang="pug">
  div
    nuxt-link(to="/").back < Subjects
    .page-title {{ subject }}
    div.grid
      nuxt-link(v-for="p in pages" v-bind:key="p.attributes.link" :to="'/' + subject + '/' + p.attributes.link").link {{ p.attributes.title }}
    //- div(v-for="p in pages" v-vind:key="p.attributes.link")
      //- nuxt-link(:to="'/' + subject + '/' + p.attributes.link") {{ p.attributes.title }}
</template>

  
</template>

<script>
import { subject_pages } from '~/contents/pages.js'

export default {
  head() {
    return {
      title: this.subject
    }
  },
  data: function() {
    return {
      subject: this.$route.params.subject.toLowerCase()
    }
  },

  async asyncData({params, app}) {
    async function asyncImport (filename) {
      const markdown = await import(`~/contents/pages/${params.subject}/${filename}.md`)
      // console.log(markdown)
      return markdown
    }

    return Promise.all(subject_pages[params.subject].map((filename) => asyncImport(filename)))
    .then((res) => {
      return {
        pages: res
      }
    })

  }
}
</script>

<style>

</style>
