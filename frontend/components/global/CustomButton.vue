<template>
  <b-button
    :id="id"
    :href="href"
    type="submit"
    class="custom-button"
    :class="classes"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <template v-if="icon">
      <div class="custom-button__box">
        <template v-if="bootstrap">
          <b-icon
            class="custom-button__box--bicon"
            :icon="icon"
            :style="{ color: `#fff` }"
          />
        </template>

        <template v-else>
          <img
            :src="require(`~/assets/images/icons/white/${icon}.svg`)"
            title=""
            :alt="icon"
            class="custom-button__box--icon"
          >
        </template>

        <div class="custom-button__box--title">
          {{ title }}
        </div>
      </div>
    </template>

    <template v-else>
      <div class="custom-button__title">
        {{ title }}
      </div>
    </template>
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
    icon: {
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
    light: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    bootstrap: {
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
        'custom-button--secondary': this.secondary,
        'custom-button--disabled': this.disabled,
        'custom-button--light': this.light
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

  @include border-radius (.5rem);

  &:hover {
    background: $secondary;
  }

  &__box {
    padding: .5rem 1rem;
    display: inline-flex;

    &--icon {
      display: inline-flex;
      width: 1rem;
    }

    &--bicon {
      margin-top: .3rem;
      display: inline-flex;
      width: 1rem;
    }

    &--title {
      font-size: 1rem;
      font-weight: 600;
      text-align: center;
      padding-left: .5rem;
      color: #fff;
    }
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

    .custom-button__box--title {
      color: #fff;
    }

    &:hover {
      background: $primary;
    }
  }

  &--light {
    background: $light;

    .custom-button__title {
      color: #fff;

      &:hover {
        color: $secondary;
      }
    }

    .custom-button__box--title {
      color: #fff;

      &:hover {
        color: $secondary;
      }
    }

    &:hover {
      background: #fff;
    }
  }

  &--disbaled {
    pointer-events: none;
    background: rgba(0, 0, 0, .05);

    .custom-button__title {
      color: rgba(0, 0, 0, .3);

      &:hover {
        color: rgba(0, 0, 0, .3);
      }
    }

    .custom-button__box--title {
      color: rgba(0, 0, 0, .3);

      &:hover {
        color: rgba(0, 0, 0, .3);
      }
    }

    &:hover {
      background: rgba(0, 0, 0, .05);
    }
  }
}
</style>
