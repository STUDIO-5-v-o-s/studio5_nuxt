<template>
  <div class="custom-input">
    <label v-if="label" :for="name" class="custom-input__label">
      {{ label }}
    </label>

    <div class="custom-input__input" :class="classes">
      <input
        :id="name"
        :name="name"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{ 'no-label': !label }"
        @input="$emit('input', $event.target.value)"
        @focus="focused = true"
        @blur="focused = false"
        @keyup="$emit('keyup', $event)"
        @click="$emit('click', $event)"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    wide: {
      type: Boolean,
      required: false,
      default: false
    },
    height: {
      type: Boolean,
      required: false,
      default: false
    },
    rules: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      focused: false
    }
  },
  computed: {
    classes () {
      return {
        'custom-input__input--disabled': this.disabled,
        'custom-input__input--focused': this.focused,
        'custom-input__input--wide': this.wide,
        'custom-input__input--height': this.height
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-input {
  &__label {
    display: block;
    text-align: left;
    font-size: 1rem;
    margin-left: 1rem;
  }

  &__input {
    display: flex;
    border-radius: .5rem;
    height: 2rem;
    overflow: hidden;
    background: white;
    transition: all 3ms;

    @include shadow (.1);

    input {
      height: 2rem;
      line-height: 2rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1rem;
      color: #000;
      padding: 0 1.25rem;
      border: 0;
      background: transparent;
    }

    &--focused {
      border: 2px solid $primary;

      input::-webkit-input-placeholder {
        opacity: .7;
        color: #fff;
      }

      input {
        border: 0;
        box-shadow: none;
        outline: 0;
        color: #fff;
      }
    }

    &--error {
      background: red;
    }

    &--wide {
      width: 100%;

      input {
        width: 100%;
      }
    }

    &--height {
      height: 10rem;
      width: 100%;

      input {
        height: 100%;
        width: 100%;
      }
    }
  }

  &__error-message {
    color: $primary;
    margin-top: .5rem;
  }
}

input::-webkit-input-placeholder {
  color: #373a3c;
}
</style>
