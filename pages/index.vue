<template>
  <div class="home">
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </div>
</template>

<script>
import data from '@/content/cs.json'

export default {
  components: {
    Hero: () => import('~/components/hero/HeroVideo')
  },

  asyncData (context) {
    // // This what would we do in real project
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path

    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi.get('cdn/stories/home', {
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  },

  data () {
    return {
      story: { content: {} },
      data,
      title: 'Reklamní agentura v Uherském Hradišti | STUDIO 5'
    }
  },

  mounted () {
    // Use the input event for instant update of content
    this.$storybridge.on('input', (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content
      }
    })
    // Use the bridge to listen the events
    this.$storybridge.on(['published', 'change'], (event) => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true
      })
    })
  },

  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Poskytujeme komplexní reklamní servis. Našim krédem je spokojený zákazník, proto dbáme na dodržování termínů a svým klientům jdeme vždy vstříct.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.home {
  padding: 0;
}
</style>
