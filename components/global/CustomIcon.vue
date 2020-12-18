<template>
  <img
    :src="require(`~/assets/images/icons${color}/${name}.svg`)"
    title=""
    :alt="name"
    :width="width"
    class="custom-icon lazyload"
    :class="{ 'custom-icon--background': background }"
  >
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    shadow: {
      type: Boolean,
      required: false,
      default: false
    },
    background: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: ''
    },
    width: {
      type: String,
      required: false,
      default: '24'
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-icon {
  display: inline-flex;

  &--background {
    width: 2rem;
    background: $secondary;
    border-radius: .5rem;
    padding: .5rem;
  }
}
</style>
