<template>
  <div class="caseStudies">
    <HeroCaseStudie />

    <b-container class="caseStudies__content overflow-auto">
      <b-row
        v-for="item in data.caseStudies.items"
        id="case"
        :key="item.id"
        :items="item in data.caseStudies.items"
        :per-page="perPage"
        :current-page="currentPage"
        cols="1"
        class="caseStudies__item"
      >
        <b-col>
          <CaseItem
            :title="item.title"
            :client="item.client"
            :description="item.description"
            :image="item.image"
            :href="item.href"
          />
        </b-col>
      </b-row>
    </b-container>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="case"
      first-number
      last-number
      align="center"
      class="pagination"
    />
  </div>
</template>

<script>
import data from '@/content/caseStudies.json'

export default {
  components: {
    HeroCaseStudie: () => import('~/components/hero/HeroCaseStudie'),
    CaseItem: () => import('@/components/caseStudies/caseItem')
  },

  data () {
    return {
      data,
      perPage: 2,
      currentPage: 1,
      title: 'Případové studie | STUDIO 5'
    }
  },

  computed: {
    rows () {
      return this.data.caseStudies.items.length
    }
  },

  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Prohlédněte si ukázky našich prací v přehledně zpracovaných případových studiích a poznejte kvalitu a důkladnost našich referencí.'
        }
      ]
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

.pagination {
  padding: 3rem 0;
}
</style>
