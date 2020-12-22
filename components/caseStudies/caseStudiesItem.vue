<template>
  <div class="caseStudiesItem">
    <b-row cols="2">
      <b-col class="caseStudiesItem__content">
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
          class="caseStudiesItem__button"
          secondary
        />
      </b-col>

      <b-col class="caseStudiesItem__image">
        <img
          :src="image"
          :alt="title"
        >
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
  }
}
</script>

<style lang="scss" scoped>
.caseStudiesItem {
  padding: 0;

  &__content {
    h4 {
      font-size: 1.25rem;
      color: $primary;
    }
  }

  &__image {
    width: 100%;
  }

  &__button {
    margin-top: 1rem;
  }
}
</style>
