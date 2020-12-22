<template>
  <div class="caseStudies">
    <HeroCaseStudie />

    <b-container>
      <b-row>
        ----test----
      </b-row>
    </b-container>
  </div>
</template>

<script>
import data from '@/content/cs.json'

export default {
  components: {
    HeroCaseStudie: () => import('~/components/hero/HeroCaseStudie')
  },

  data () {
    return {
      data
    }
  }
}
</script>

<style scoped>
.caseStudies {
  padding: 0;
}
</style>
