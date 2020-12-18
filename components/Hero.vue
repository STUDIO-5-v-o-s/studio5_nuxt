<template>
  <b-container fluid class="hero">
    <video
      src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4"
      autoplay
      loop
      playsinline
      muted
    />
    <b-row cols="1" align-v="center" class="text-left hero__content">
      <b-col
        class="px-4 text-center"
      >
        <div class="d-flex align-items-center flex-column">
          <h1>
            {{ data.hero.title }}
          </h1>
          <p>
            {{ data.hero.description }}
          </p>
          <div class="hero__actions d-flex align-items-center flex-column">
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
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100vh;
  top: 3rem;

  video {
    background: $secondary;
    object-fit: cover;
    filter: blur(3px);

    @include coverer (100%, 60vh, 3rem);

    @include media-breakpoint-down(sm) {
      @include coverer (100%, 100%, 3rem);
    }
  }

  .viewport-header {
    display: flex;
    align-items: center;
    justify-content: center;
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

  &__content {
    margin-top: 3rem;
    height: 60vh;

    @include media-breakpoint-down(sm) {
      margin-top: 0;
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
