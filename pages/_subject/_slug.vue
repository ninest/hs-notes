<template lang="pug">
  div
    nuxt-link(:to="'/' + subject").back < {{ subject }}
    .page-title {{ page.attributes.title }}
    div.content(v-html='page.html')
    nuxt-link(:to="'/' + subject").back < {{ subject }}
    //- ResponsiveAd
</template>

<script>
// import ResponsiveAd from '~/components/ResponsiveAd.vue'

export default {
  head() {
    return {
      title: `${this.pageTitle} - ${this.subject}`
    }
  },
  components: {
    // ResponsiveAd
  },
  data: function() {
    return {
      subject: this.$route.params.subject.toLowerCase(),
      slug: this.$route.params.slug.toLowerCase(),
      pageTitle: this.$route.params.slug.replace("-", " ")
    }
  },

  async asyncData({params, app}) {
    async function asyncImport() {
      const markdown = await import(`~/contents/pages/${params.subject}/${params.slug}.md`)
      // console.log(markdown)
      return markdown
    }

    return asyncImport().then((res) => {
      return {
        page: res
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.page-title {
  border-bottom: var(--main-border);
}

.content {
  border-bottom: var(--main-border);
  margin-bottom: var(--dense-padding);
}

</style>
