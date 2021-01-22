<template>
  <div class="home">
    <Hero />
    <h1>Test</h1>
    <h1>Test</h1>
    <h1>Test</h1>
    <h1>Test</h1>
    <h1>Test</h1>
    <h1>Test</h1>
    <h1>Test</h1>
    <h1>Test</h1>
    <h1>Test</h1>
    <h1>Test</h1>
    <h1>Test</h1>
    <h1>Test</h1>
    <h1>Test</h1>
  </div>
</template>

<script>
import data from '@/content/cs.json'

export default {
  components: {
    Hero: () => import('~/components/hero/HeroVideo')
  },

  data () {
    return {
      data,
      title: 'Reklamní agentura v Uherském Hradišti | STUDIO 5'
    }
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
