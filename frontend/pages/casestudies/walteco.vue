<template>
  <div class="caseStudies">
    <div v-for="item in Array.from({...data.caseStudies.items, length: 1})" :key="item.id">
      <HeroCaseStudieDetail
        :title="item.title"
        :image="item.preview"
      />

      <b-container class="caseStudies__content overflow-auto">
        <b-row
          cols="1"
        >
          <b-col>
            <b-row class="caseStudies__content--title">
              <b-col lg="3" md="3" cols="12">
                <div>
                  <span>
                    {{ $t('global.caseStudie.client') }}
                  </span>
                  {{ item.client }}
                </div>
              </b-col>

              <b-col lg="6" md="6" cols="12">
                <div>
                  <span>
                    {{ $t('global.caseStudie.designed') }}
                  </span>
                  {{ item.designer }}
                </div>
              </b-col>

              <b-col lg="3" md="3" cols="12">
                <div>
                  <span>
                    {{ $t('global.caseStudie.date') }}
                  </span>
                  {{ item.date }}
                </div>
              </b-col>
            </b-row>

            <b-row cols-lg="2" cols-md="1" cols="1">
              <b-col class="d-flex flex-column justify-content-center align-items-center">
                <p>
                  {{ item.description.substring(0,500) }}
                </p>

                <div class="py-3 d-flex flex-row justify-content-center align-items-center">
                  <div class="d-flex flex-column align-items-center">
                    <CustomIcon name="basket3-fill" scale="2" color="#e91e63" bootstrap />

                    <div class="caseStudies__content--icon">
                      E-shop na míru
                    </div>
                  </div>

                  <div class="px-5 d-flex flex-column align-items-center">
                    <CustomIcon name="bar-chart" scale="2" color="#152231" bootstrap />

                    <div class="caseStudies__content--icon">
                      Hlídáme statistiky a zdokonalujeme chod e-shopu
                    </div>
                  </div>

                  <div class="d-flex flex-column align-items-center">
                    <CustomIcon name="emoji-smile-fill" scale="2" color="#e91e63" bootstrap />

                    <div class="caseStudies__content--icon">
                      Přehledné prostředí pro zákazníka
                    </div>
                  </div>
                </div>
              </b-col>

              <b-col class="d-flex justify-content-center align-items-center">
                <img
                  ref="image"
                  :src="require(`~/assets/images/presentation/${item.image01}.jpg`)"
                  :alt="item.title"
                  class="caseStudies__content--image"
                >
              </b-col>

              <b-col class="d-flex justify-content-center align-items-center">
                <img
                  ref="image"
                  :src="require(`~/assets/images/presentation/${item.image02}.jpg`)"
                  :alt="item.title"
                  class="caseStudies__content--image"
                >
              </b-col>

              <b-col class="d-flex justify-content-center align-items-center">
                <p>
                  {{ item.description.substring(500,1250) }}
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import data from '~/locales/cs/caseStudie.json'

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

    &--title {
      padding-bottom: 1rem;
      margin-bottom: 2rem;
      font-size: 1rem;
      border-bottom: 1px solid rgba(0, 0, 0, .1);

      span {
        font-weight: 800;
        padding-right: .5rem;
        margin-right: .5rem;
        border-right: 1px solid rgba(0, 0, 0, .1);
      }
    }

    &--icon {
      max-width: 9rem;
      text-align: center;
      font-size: .8rem;
      font-weight: 700;
      white-space: pre-line;
    }

    &--image {
      width: 90%;
      height: 80%;
      object-fit: cover;
    }
  }
}
</style>
