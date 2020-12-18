<template>
  <b-button
    :id="id"
    type="submit"
    class="custom-button"
    :class="classes"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <div class="custom-button__title">
      {{ title }}
    </div>
  </b-button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    id: {
      type: String,
      required: false,
      default: ''
    },
    href: {
      type: String,
      required: false,
      default: ''
    },
    wide: {
      type: Boolean,
      required: false,
      default: false
    },
    primary: {
      type: Boolean,
      required: false,
      default: false
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    classes () {
      return {
        'custom-button--wide': this.wide,
        'custom-button': this.primary,
        'custom-button--secondary': this.secondary
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-button {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  height: 2rem;
  line-height: 2rem;
  border: none;
  padding: 0;
  background: $primary;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  @include border-radius (.25rem);

  &:hover {
    background: $secondary;
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    padding: .5rem 1rem;
    color: #fff;
  }

  &--wide {
    margin: .5rem 0 0 0;
    width: 100%;

    .custom-button__title {
      width: 100%;
    }
  }

  &--secondary {
    background: $secondary;

    .custom-button__title {
      color: #fff;
    }

    &:hover {
      background: $primary;
    }
  }
}
</style>
