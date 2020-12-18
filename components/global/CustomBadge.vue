<template>
  <div
    class="custom-badge"
    :class="classes"
  >
    <span>
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false
    },
    white: {
      type: Boolean,
      required: false,
      default: false
    },
    green: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'custom-badge--secondary': this.secondary,
        'custom-badge--white': this.white,
        'custom-badge--green': this.green
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-badge {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  border: none;
  padding: 0;
  background: $primary;

  @include border-radius (.5rem);

  span {
    padding: .25rem .5rem;
    font-size: .75rem;
    color: #fff;
  }

  &--secondary {
    background: $secondary;
  }

  &--white {
    background: #fff;

    @include shadow (.1);

    span {
      color: rgba(0, 0, 0, .3);
    }
  }

  &--green {
    background: #6fb528;

    .custom-badge span {
      color: $secondary;
    }
  }
}
</style>
