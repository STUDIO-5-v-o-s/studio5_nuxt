<template>
  <b-container fluid class="hero">
    <b-row cols-md="2" cols="1" align-v="center" class="text-left">
      <b-col
        class="px-4 text-center text-md-left"
      >
        <div class="hero__content">
          <h1>
            {{ data.hero.title }}
          </h1>
          <p>
            {{ data.hero.description }}
          </p>
          <div class="hero__actions">
            <CustomButton
              :title="data.hero.button_1"
              href="/portfolio"
            />
            <CustomButton
              :title="data.hero.button_2"
              href="/casestudies"
              icon="cinema"
              class="ml-1"
              light
            />
          </div>
        </div>
      </b-col>

      <b-col
        class="px-3 text-center"
      >
        <img
          src="~/assets/images/fakeapi/fakeApi.jpg"
          alt=""
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import data from '~/content/cs.json'

export default {
  components: {
  },

  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 1rem 3rem 3rem 3rem;
  background: $secondary;

  @include media-breakpoint-down(lg) {
    padding: 0 3rem;
  }

  @include media-breakpoint-down(md) {
    padding: 1rem 3rem 4rem 3rem;
  }

  @include media-breakpoint-down(sm) {
    padding: 2rem 3rem 3rem 3rem;
  }

  &__content {
    h1 {
      color: #fff;
      font-size: 4rem;

      @include media-breakpoint-down(sm) {
        font-size: 3rem;
        padding-bottom: 2rem;
      }
    }

    p {
      padding-top: 2rem;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: #fff;
    }
  }

  &__actions {
    padding-top: 2rem;

    ::v-deep .custom-button {
      @include media-breakpoint-down(md) {
        margin-top: 1rem;
        margin-left: 0;
      }

      .custom-button__title {
        @include media-breakpoint-down(md) {
          width: 100%;
        }
      }

      &:hover {
        background: $light;
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
    }
  }
}
</style>
