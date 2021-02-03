<template>
  <div class="caseStudies">
    <HeroCaseStudieDetail
      :title="$t('global.caseStudies.walteco.client')"
      :image="studie.acf.feature.url"
    />

    <b-container class="caseStudies__box overflow-auto">
      <b-row
        cols="1"
      >
        <b-col class="caseStudies__perex">
          {{ studie.acf.perex }}
        </b-col>

        <b-col class="caseStudies__content">
          <p>
            {{ studie.acf.content }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    HeroCaseStudieDetail: () => import('~/components/hero/HeroCaseStudieDetail')
  },
  async fetch () {
    this.studie = await fetch(
      'http://studio5api.local/wp-json/acf/v3/posts/1'
    ).then(res => res.json())
  },
  data () {
    return {
      studie: []
    }
  }
}
</script>

<style lang="scss" scoped>
.caseStudies {
  padding: 0;

  &__box {
    position: relative;
    padding: 3rem 3rem;
    margin-top: -3rem;
    background: #fff;
    z-index: 100;

    @include shadow (.05);
    @include border-radius (1rem);
  }

  &__perex {
    font-size: 1.2rem;
    color: $primary;
  }

  &__content {
    padding-top: 3rem;
  }
}
</style>
