<template>
  <div class="caseItem">
    <b-row cols-md="2" cols="1" class="d-flex flex-column flex-md-row flex-column-reverse align-items-center">
      <b-col class="caseItem__content">
        <div class="caseItem__content--heading d-none d-md-block">
          <h3>
            {{ title }}
          </h3>

          <h4 class="pb-2">
            {{ client }}
          </h4>
        </div>

        <p>
          {{ description }}...
        </p>

        <div class="caseItem__content--button">
          <CustomButton
            :title="data.caseStudies.showMore"
            :href="href"
            secondary
          />
        </div>
      </b-col>

      <b-col class="caseItem__image">
        <img
          ref="image"
          :src="image1x"
          :srcset="`${image1x} 1x, ${image2x} 2x`"
          :alt="title"
        >
        <div class="overlay d-block d-md-none">
          <div class="caseItem__content--heading">
            <h3>
              {{ title }}
            </h3>

            <h4 class="pb-2">
              {{ client }}
            </h4>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import data from '@/content/caseStudies.json'

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    client: {
      type: String,
      required: true,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    href: {
      type: String,
      required: false,
      default: ''
    },
    image: {
      type: String,
      required: false,
      default: ''
    }
  },

  data () {
    return {
      data
    }
  },

  computed: {
    image1x () {
      return require(`~/assets/images/presentation/${this.image}.jpg`)
    },
    image2x () {
      return require(`~/assets/images/presentation/${this.image}.jpg`)
    }
  }
}
</script>

<style lang="scss" scoped>
.caseItem {
  padding: 0;

  &__content {
    &--heading {
      @include media-breakpoint-down(sm) {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 1rem;
        z-index: 1;
        color: #fff;
      }

      h3 {
        font-size: 1.4rem;
        line-height: 2rem;
      }

      h4 {
        font-size: 1.2rem;
        color: $primary;
      }
    }

    p {
      @include media-breakpoint-down(sm) {
        padding-top: 1rem;
      }
    }

    &--button {
      margin-top: 1rem;

      ::v-deep .custom-button {
        @include media-breakpoint-down(sm) {
          width: 100%;
        }

        .custom-button__title {
          @include media-breakpoint-down(sm) {
            width: 100%;
          }
        }
      }
    }

    @include media-breakpoint-down(sm) {
      padding: 0 2rem;
    }
  }

  &__image {
    width: 28rem;
    height: 17rem;

    @include border-radius (1rem);

    @include media-breakpoint-down(sm) {
      height: 12rem;
      margin-bottom: 1rem;
      z-index: 0;
    }

    img {
      float: right;
      width: 28rem;
      height: 17rem;
      object-fit: cover;

      @include border-radius (1rem);

      @include media-breakpoint-down(sm) {
        height: 12rem;
      }
    }
  }
}

.overlay {
  position: relative;
  height: 100%;
  width: 100%;
  background: rgb(21, 34, 49, .6);
  background: linear-gradient(0deg, rgba(21, 34, 49, 1) 10%, rgba(255, 255, 255, 0) 100%);

  @include border-radius (1rem);
}
</style>
