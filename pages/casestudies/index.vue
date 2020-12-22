<template>
  <div class="caseStudies">
    <HeroCaseStudie />

    <b-container class="caseStudies__content">
      <b-row
        v-for="item in data.caseStudies.items"
        :key="item.id"
        cols="1"
        class="caseStudies__item"
      >
        <b-col>
          <CaseStudiesItem
            :title="item.title"
            :client="item.client"
            :description="item.description"
            :image="item.image"
            :href="item.href"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import data from '@/content/caseStudies.json'

export default {
  components: {
    HeroCaseStudie: () => import('~/components/hero/HeroCaseStudie'),
    CaseStudiesItem: () => import('~/components/caseStudies/CaseStudiesItem')
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

  &__item {
    padding: 1rem 1rem 3rem 1rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid #dedede;

    &:first-child {
      padding: 2rem 1rem;
      background: rgba(21, 34, 49, .075);
      border: none;

      @include border-radius (1rem);
    }

    &:last-child {
      padding: 1rem 1rem 0 1rem;
      margin-bottom: 0;
      border: none;
    }
  }
}
</style>
