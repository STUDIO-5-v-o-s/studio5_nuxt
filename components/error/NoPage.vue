<template>
  <div class="noPage">
    <div>
      <h1>
        {{ data.error.title }}
      </h1>
      <div class="noPage__background" />

      <div class="noPage__content">
        <h3>
          {{ data.error.subtitle }}
        </h3>

        <div class="noPage__content--action">
          <CustomButton :title="data.error.goBack" secondary onclick="history.back(-1)" />
          <CustomButton :title="data.error.goHome" href="/" class="mt-1 mt-md-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/content/cs.json'

export default {
  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
.noPage {
  padding: 5rem 0;
  text-align: center;
  width: 100%;
  height: 100vh;

  h1 {
    font-size: 5rem;
  }

  &__content {
    padding: 0;

    &--action {
      padding-top: 2rem;
      display: block;

      @include media-breakpoint-down(sm) {
        display: flex;
        flex-direction: column;
        padding: 2rem 3rem;
      }

      ::v-deep .custom-button {
        .custom-button__title {
          @include media-breakpoint-down(sm) {
            width: 100%;
          }
        }
      }
    }
  }

  &__background {
    background-image: url("~assets/images/error/404-error.gif");
    height: 23rem;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
