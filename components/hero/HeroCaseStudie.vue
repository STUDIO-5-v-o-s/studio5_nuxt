<template>
  <b-container
    fluid
    class="p-0 m-0 hero"
  >
    <video
      :src="data.hero.headerBackground"
      autoplay
      loop
      playsinline
      muted
    />

    <!--
    <img
      src="~/assets/images/fakeapi/fakeapi.jpg"
      srcset="~/assets/images/fakeapi/fakeapi.jpg 1x, ~/assets/images/fakeapi/fakeapi.jpg 2x"
      alt="fakeapi"
    >
    -->

    <b-row
      cols="1"
      align-v="center"
      class="text-left hero__content overlay"
    >
      <b-col
        class="px-4 text-center"
      >
        <div class="d-flex align-items-center flex-column">
          <h1>
            {{ data.hero.title }}
          </h1>
          <div class="hero__actions d-flex align-items-center flex-md-row flex-column">
            <CustomButton
              :title="data.hero.button"
              href="/contact"
              light
            />
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import data from '~/content/caseStudies.json'

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
  padding: 0;
  position: relative;
  text-align: center;
  width: 100%;
  height: 40vh;
  object-fit: cover;
  z-index: 0;

  @include media-breakpoint-down(sm) {
    width: 100%;
    height: 90vh;
  }

  video,
  img {
    background: $secondary;
    object-fit: cover;
    filter: blur(1px);
    width: 100%;
    height: 40vh;
    position: absolute;
    top: 0;
    left: 0;

    @include media-breakpoint-down(sm) {
      width: 100%;
      height: 100%;
    }
  }

  @include media-breakpoint-down(lg) {
    padding: 0 3rem;
  }

  @include media-breakpoint-down(md) {
    padding: 1rem 3rem 4rem 3rem;
  }

  @include media-breakpoint-down(sm) {
    padding: 2rem 2rem 3rem 2rem;
  }

  .overlay {
    background: rgba(21, 34, 49, .8);
  }

  &__content {
    height: 40vh;

    @include media-breakpoint-down(sm) {
      height: 100%;
    }

    h1 {
      color: #fff;
      font-size: 4rem;

      @include media-breakpoint-down(sm) {
        font-size: 2.25rem;
        line-height: 2.5rem;
        padding-bottom: 2rem;
      }
    }

    p {
      padding-top: 2rem;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: #fff;

      @include media-breakpoint-down(sm) {
        padding-top: 1.5rem;
        font-size: 1.1rem;
        line-height: 1.5rem;
      }
    }
  }

  &__actions {
    padding-top: 2rem;

    ::v-deep .custom-button {
      @include media-breakpoint-down(md) {
        margin-top: 1rem;
        margin-left: 0;
      }

      @include media-breakpoint-down(sm) {
        width: 100%;
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

video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
}
</style>
