<template>
  <img
    :src="require(`~/assets/images/icons${color}/${name}.svg`)"
    title=""
    :alt="name"
    :width="width"
    class="custom-icon lazyload"
    :class="{ 'custom-icon--shadow': shadow, 'custom-icon--background': background }"
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

  &--shadow {
    box-shadow: 0 .25rem .5rem 0 rgba(0, 0, 0, .16);
    border-radius: .6rem;
  }

  &--background {
    width: 3rem;
    background: #efefef;
    border-radius: .6rem;
    padding: .75rem;
  }
}
</style>
