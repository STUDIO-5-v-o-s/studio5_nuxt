<template>
  <div class="header d-flex justify-content-center">
    <b-container fluid="lg">
      <b-col>
        <Navbar />
      </b-col>
    </b-container>
  </div>
</template>

<script>
import data from '~/content/cs.json'

export default {
  components: {
    Navbar: () => import('@/components/Navbar')
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
  padding: 3rem 0 3rem 0;
  background: $secondary;

  @include media-breakpoint-down(sm) {
    padding: 1rem 0 1rem 0;
  }
}
</style>
