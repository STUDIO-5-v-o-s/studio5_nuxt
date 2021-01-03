<template>
  <div class="caseItem">
    <b-row cols="2" class="d-flex align-items-center">
      <b-col class="caseItem__content">
        <h3>
          {{ title }}
        </h3>

        <h4 class="pb-2">
          {{ client }}
        </h4>

        <p>
          {{ description }}
        </p>

        <CustomButton
          :title="data.caseStudies.showMore"
          :href="href"
          class="caseItem__content--button"
          secondary
        />
      </b-col>

      <b-col class="caseItem__image">
        <b-img
          :src="image1x"
          :srcset="image2x"
          :alt="title"
        />
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
      return `_nuxt/assets/images/fakeapi/${this.image}.jpg`
    },
    image2x () {
      return `_nuxt/assets/images/fakeapi/${this.image}@2x.jpg`
    }
  }
}
</script>

<style lang="scss" scoped>
.caseItem {
  padding: 0;

  &__content {
    h4 {
      font-size: 1.25rem;
      color: $primary;
    }

    &--button {
      margin-top: 1rem;
    }
  }

  &__image {
    width: 28rem;
    height: 17rem;

    img {
      float: right;
      width: 28rem;
      height: 17rem;
      object-fit: cover;
    }
  }
}
</style>
