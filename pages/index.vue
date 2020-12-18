<template>
  <div class="home">
    <h1>
      {{ data.header.title }}
    </h1>
    <p>
      {{ data.header.desc }}
    </p>
  </div>
</template>

<script>
import data from '@/content/cs.json'

export default {
  components: {
  },

  data () {
    return {
      data
    }
  },

  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.pageImage
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://www.patrikvadura.cz/${this.id}`
        },
        {
          hide: 'twitter:card',
          name: 'twitter:card',
          content: this.pageImage ? 'summary_large_image' : 'summary'
        }
      ].filter(x => x.content)
    }
  }
}
</script>

<style lang="scss">
.home {
  padding: 2rem 2rem;
  text-align: center;
}
</style>
