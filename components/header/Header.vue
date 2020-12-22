<template>
  <b-container fluid class="header d-flex justify-content-center">
    <b-col>
      <Navbar />
    </b-col>
  </b-container>
</template>

<script>
import data from '~/content/cs.json'

export default {
  components: {
    Navbar: () => import('~/components/header/Navbar')
  },

  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 1.5rem 3rem;
  background: $secondary;

  @include media-breakpoint-down(sm) {
    padding: 1rem 0 1rem 0;
  }
}
</style>
