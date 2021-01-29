<template>
  <div class="noPage">
    <div>
      <h1>
        {{ $t('global.error.title') }}
      </h1>

      <div class="noPage__background" />

      <div class="noPage__content">
        <h3>
          {{ $t('global.error.subtitle') }}
        </h3>

        <div class="noPage__content--action">
          <CustomButton
            :title="$t('global.error.goBack')"
            secondary
            onclick="history.back(-1)"
          />

          <CustomButton
            :title="$t('global.error.goHome')"
            :href="localePath('/')"
            class="mt-1 mt-md-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
