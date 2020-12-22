<template>
  <img
    :src="require(`~/assets/images${folder}/${image}.jpg`)"
    :srcset="`~/assets/images${folder}/${image}.jpg 1x, ~/assets/images${folder}/${image}@2x.jpg 2x`"
    :alt="image"
    :width="width"
    :height="height"
    :class="classes"
  >
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false,
      default: ''
    },
    folder: {
      type: String,
      required: false,
      default: '/fakeapi'
    },
    href: {
      type: String,
      required: false,
      default: ''
    },
    width: {
      type: String,
      required: false,
      default: '100%'
    },
    height: {
      type: String,
      required: false,
      default: '100%'
    },
    grayscale: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    classes () {
      return {
        'effect--grayscale': this.grayscale
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
}

.effect {
  &--grayscale {
    filter: grayscale(1);
  }
}
</style>
