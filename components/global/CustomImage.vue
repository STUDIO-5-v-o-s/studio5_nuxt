<template>
  <img
    ref="image"
    :src="image1x"
    :srcset="`${image1x} 1x, ${image2x} 2x`"
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
      default: 'fakeapi'
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
    },

    image1x () {
      return require(`~/assets/images/${this.folder}/${this.image}.jpg`)
    },
    image2x () {
      return require(`~/assets/images/${this.folder}/${this.image}@2x.jpg`)
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
