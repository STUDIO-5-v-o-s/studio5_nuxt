<template>
  <div class="custom-input">
    <template v-if="textarea">
      <label v-if="label" :for="name" class="custom-input__label">
        {{ label }}
      </label>

      <div class="custom-input__textarea" :class="classes">
        <b-form-textarea
          :id="name"
          :type="name"
          :placeholder="placeholder"
          :rows="rows"
          :max-rows="rows + 3"
          :disabled="disabled"
          :class="{ 'no-label': !label }"
          @focus="focused = true"
          @blur="focused = false"
          @keyup="$emit('keyup', $event)"
          @click="$emit('click', $event)"
        />
      </div>
    </template>

    <template v-else>
      <label v-if="label" :for="name" class="custom-input__label">
        {{ label }}
      </label>

      <div class="custom-input__input" :class="classes">
        <input
          :id="name"
          :name="name"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :class="{ 'no-label': !label }"
          @focus="focused = true"
          @blur="focused = false"
          @keyup="$emit('keyup', $event)"
          @click="$emit('click', $event)"
        >
      </div>
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
    height: {
      type: Boolean,
      required: false,
      default: false
    },
    textarea: {
      type: Boolean,
      required: false,
      default: false
    },
    rows: {
      type: String,
      required: false,
      default: '3'
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
    font-size: .9rem;
    font-weight: 300;
    margin-left: .75rem;
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
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1rem;
      color: #495057;
      padding: 0 1.25rem;
      border: 0;
      background: transparent;
    }

    &--focused {
      border: 2px solid $primary;

      input::-webkit-input-placeholder {
        opacity: .7;
        color: #495057;
      }

      input {
        border: 0;
        box-shadow: none;
        outline: 0;
        color: #495057;
      }
    }

    &--error {
      background: red;
    }

    &--height {
      height: 4rem;
      width: 100%;

      input {
        height: 100%;
        width: 100%;
      }
    }
  }

  &__textarea {
    display: flex;
    border-radius: .5rem;
    overflow: hidden;
    background: white;
    transition: all 3ms;

    @include shadow(.1);

    textarea {
      white-space: nowrap;
      font-size: 1rem;
      color: #495057;
      padding: 1rem 1.25rem;
      border: 0;
      background: transparent;
    }

    &--focused {
      border: 2px solid $primary;

      input::-webkit-input-placeholder {
        opacity: .7;
        color: #495057;
      }

      input {
        border: 0;
        box-shadow: none;
        outline: 0;
        color: #495057;
      }
    }

    &--error {
      background: red;
    }
  }

  &__error-message {
    color: $primary;
    margin-top: .5rem;
  }
}

input::-webkit-input-placeholder {
  color: #495057;
}
</style>
