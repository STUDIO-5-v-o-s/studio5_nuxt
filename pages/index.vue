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
      data
    }
  }
}
</script>

<style lang="scss">
.home {
  padding: 0;
}
</style>
