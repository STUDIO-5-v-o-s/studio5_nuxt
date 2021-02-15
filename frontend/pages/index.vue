<template>
  <div class="home">
    <Hero />

    <CaseStudieSlider />

    <div>
      <p>{{ $tc('global.apple', 10, { count: 10 }) }}</p>
      <p>{{ $tc('global.apple', 10) }}</p>
      <p>{{ $tc('global.apple') }}</p>
      <p>{{ $tc('global.apple', 0) }}</p>

      <p>{{ $tc('global.banana') }}</p>
      <p>{{ $tc('global.banana', 0) }}</p>
      <p>{{ $tc('global.banana', 1, { n: 1 }) }}</p>
      <p>{{ $tc('global.banana', 1) }}</p>
      <p>{{ $tc('global.banana', 100, { n: 'too many' }) }}</p>

      <p>{{ $n(1000000, 'currency') }}</p>
      <p>{{ $n(7000000, 'currency', 'cs-CZ') }}</p>
      <p>{{ $n(7000000, 'currency', 'sk') }}</p>

      <p>{{ $d(new Date(), 'short') }}</p>
    </div>

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
export default {
  components: {
    Hero: () => import('~/components/hero/HeroVideo'),
    CaseStudieSlider: () => import('~/components/homepage/CaseStudieSlider')
  },

  data () {
    return {
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
