<template>
  <div class="caseStudies">
    <HeroCaseStudieDetail :title="data.client" :image="data.headerImage" />

    <b-container class="caseStudies__content overflow-auto">
      <b-row
        cols="1"
      >
        <b-col>
          <h1>
            {{ data.title }}
          </h1>
          <h2>
            {{ data.subtitle }}
          </h2>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import data from '@/content/caseStudies/walteco.json'

export default {
  components: {
    HeroCaseStudieDetail: () => import('~/components/hero/HeroCaseStudieDetail')
  },

  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
.caseStudies {
  padding: 0;

  &__content {
    position: relative;
    padding: 3rem 3rem;
    margin-top: -3rem;
    background: #fff;
    z-index: 100;

    @include shadow (.05);
    @include border-radius (1rem);
  }
}
</style>
