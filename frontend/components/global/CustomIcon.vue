<template>
  <div
    class="custom-icon"
    :class="{ 'custom-icon--background': background }"
  >
    <template v-if="bootstrap">
      <b-icon
        :icon="name"
        :font-scale="scale"
        :style="{ color: `${color}` }"
      />
    </template>

    <template v-else>
      <img
        :src="require(`~/assets/images/icons${color}/${name}.svg`)"
        :alt="name"
        :width="width"
      >
    </template>
  </div>
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
    },
    scale: {
      type: String,
      required: false,
      default: '1'
    },
    bootstrap: {
      type: Boolean,
      required: false,
      default: false
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
