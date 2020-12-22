<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>

export default {
  components: {
    Header: () => import('~/components/header/Header')
  }
}
</script>
