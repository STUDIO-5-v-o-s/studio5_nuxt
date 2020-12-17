<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>

export default {
  components: {
    Header: () => import('@/components/Header')
  }
}
</script>
