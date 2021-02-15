<template>
  <div class="case py-5">
    <div id="hero-slides">
      <div id="slides-cont">
        <div class="d-none d-md-block">
          <div id="next" class="button" />

          <div id="prev" class="button" />
        </div>

        <div id="slides">
          <div v-for="item in data.caseStudies.items" :key="item.id" class="d-inline-flex">
            <div class="slide">
              <img
                ref="image"
                :src="require(`~/assets/images/presentation/${item.preview}.jpg`)"
                :alt="item.title"
              >

              <div class="number">
                {{ item.id }}
              </div>
              <div class="body">
                <div class="location">
                  {{ item.client }}
                </div>
                <div class="headline">
                  {{ item.title }}
                </div>
                <a href="https://unsplash.com/photos/EYmhcdGuYmI" target="_blank">
                  <div class="link">
                    Zobrazit studii
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="next-catch" />

        <div id="prev-catch" />
      </div>
    </div>
  </div>
</template>

<script>
import data from '~/locales/cs/caseStudie.json'

export default {

  data () {
    return {
      data
    }
  },
  mounted () {
    this.functionCase()
  },

  methods: {
    functionCase () {
      /* eslint-disable */
      let hero = document.getElementById('hero-slides');
      let slides = document.getElementById('slides');
      let next = [ 'next', 'next-catch' ].map(n => document.getElementById(n));
      let prev = [ 'prev', 'prev-catch' ].map(n => document.getElementById(n));
      let slideCount = slides.children.length;
      let currentPage = 0;
      let slidesPerPage = () => window.innerWidth > 1700 ? 4 : window.innerWidth > 1200 ? 3 : 1;
      let maxPageCount = () => slideCount / slidesPerPage();
      function goToPage(pageNumber = 0) {
        currentPage = Math.min(maxPageCount(), Math.max(0, pageNumber));
        console.log(currentPage);
        hero.style.setProperty('--page', currentPage);
      }
      next.forEach(n => n.addEventListener('click', () => goToPage(currentPage + 1)));
      prev.forEach(n => n.addEventListener('click', () => goToPage(currentPage - 1)));
      window.addEventListener('resize', () => {
        console.log(document.body.style.getPropertyValue('--slide-per-page'));
      });
      /* eslint-enable */
    }
  }
}
</script>

<style lang="scss" scoped>
$curve: cubic-bezier(.7, 0, .3, 1);

#hero-slides {
  --page: 0;

  height: 30rem;
  padding: 1.5rem 0;
  width: 100%;
  overflow: hidden;

  @include media-breakpoint-down(sm) {
    height: 22rem;
    padding: 1.5rem 0;
  }

  #slides-cont {
    padding: 0;
    position: relative;
    // overflow: hidden;
    --button-height: 3rem;
    --button-spacing: .5rem;

    .button {
      width: var(--button-height);
      height: var(--button-height);
      color: #fff;
      background: $primary;
      position: absolute;
      left: 4rem;
      top: 12rem;
      z-index: 50;
      cursor: pointer;

      @include border-radius ($spacer);

      &::before,
      &::after {
        line-height: var(--button-height);
        position: absolute;
        margin-left: -.25rem;
        pointer-events: none;
        transform: scale(.75, 1.5);
        transition: 125ms ease-in-out;
      }

      &::before {
        left: 50%;
      }

      &::after {
        opacity: 0;
      }

      &:hover {
        &::before,
        &::after {
          transition: 250ms ease-in-out;
        }

        &::before {
          opacity: 0;
        }

        &::after {
          left: 50% !important;
          opacity: 1;
        }
      }
    }

    #next {
      margin-top: calc(-1 * (var(--button-height) + var(--button-spacing)));

      &::before,
      &::after {
        content: '>';
      }

      &::after {
        left: 30%;
      }

      &:hover::before {
        left: 70%;
      }
    }

    #prev {
      margin-top: var(--button-spacing);
      opacity: calc(var(--page) + .2);
      transition: 500ms opacity;

      &::before,
      &::after {
        content: '<';
      }

      &::after {
        left: 70%;
      }

      &:hover::before {
        left: 30%;
      }
    }

    #next-catch,
    #prev-catch {
      width: 10rem;
      height: 25rem;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 90;

      @include media-breakpoint-down(sm) {
        width: 10rem;
      }
    }

    #next-catch {
      right: -5rem;
    }

    #prev-catch {
      left: -5rem;
    }
  }

  #slides {
    --slides-height: 25rem;

    width: auto;
    height: var(--slides-height);
    padding: 0 2rem;
    white-space: nowrap;
    position: absolute;
    transform: translate3d(calc(var(--page) * -50rem), 0, 0);
    transition: 1500ms transform $curve;

    @include media-breakpoint-down(sm) {
      --slides-height: 18rem;

      left: -2rem;
      transform: translate3d(calc(var(--page) * -30rem), 0, 0);
    }

    .slide {
      display: inline-flex;
      position: relative;
      margin: 0 1rem;
      width: 20rem;
      height: var(--slides-height);
      color: white;
      background: $secondary;
      white-space: normal;
      word-break: break-word;
      object-fit: cover;

      &:nth-child(odd),
      &:nth-child(even) {
        transform: translateX(35%);

        @include media-breakpoint-down(sm) {
          transform: translateX(20%);
        }
      }

      @include border-radius ($spacer);
      @include shadow (.75);

      @include media-breakpoint-down(sm) {
        width: 15rem;
      }

      img {
        object-fit: cover;

        @include border-radius ($spacer);
      }

      &::before {
        content: '';
        display: block;
        background: linear-gradient(180deg, rgba($secondary, 0) 0%, rgba($secondary, 1) 100%);
        opacity: .5;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        @include border-radius ($spacer);
      }

      .number {
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;

        &,
        &::before,
        &::after {
          vertical-align: middle;
        }

        &::before,
        &::after {
          display: inline-block;
          content: '';
          height: 1px;
          margin-top: -.25rem;
          background: #fff;
        }

        &::before {
          width: 0;
          margin-left: 0;
        }

        &::after {
          width: 2rem;
          margin-left: 1rem;
        }
      }

      .body {
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        right: 2rem;

        @include media-breakpoint-down(sm) {
          bottom: 2rem;
          left: 1.5rem;
          right: 1.5rem;
        }
      }

      .location,
      .headline {
        position: relative;
        bottom: 0;
        cursor: default;

        @include media-breakpoint-down(sm) {
          bottom: 3rem;
        }
      }

      &::before,
      .number::before,
      .number::after,
      .location,
      .headline,
      .link {
        transition: 375ms $curve;
      }

      .location {
        font-size: 1rem;
        font-weight: 100;
        margin-bottom: .5rem;
        transition-delay: 60ms;

        @include media-breakpoint-down(sm) {
          display: none;
        }
      }

      .headline {
        font-size: 2rem;
        font-weight: 900;
        transition-delay: 50ms;

        @include media-breakpoint-down(sm) {
          font-size: 1.5rem;
        }
      }

      .link {
        display: inline-block;
        background: #fff;
        padding: .5rem 2rem;
        color: $typo;
        font-size: 1rem;
        opacity: 0;
        position: absolute;
        left: 2rem;
        bottom: 2rem;
        pointer-events: none;
        transition-delay: 25ms;

        @include border-radius ($spacer);

        @include media-breakpoint-down(sm) {
          left: 1rem;
          bottom: 0;
          opacity: 1;
          padding: .5rem 1.5rem;
          font-size: 1rem;
          pointer-events: auto;
        }
      }

      &.hover,
      &:hover {
        &::before {
          opacity: 1;
        }

        &::before,
        .number::before,
        .number::after,
        .location,
        .headline,
        .link {
          transition: 500ms $curve;
        }

        .number::before {
          width: 2rem;
          margin-right: 1rem;
        }

        .number::after {
          width: 0;
          margin-right: 0;
        }

        .location {
          transition-delay: 0;
          bottom: 3.5rem;
        }

        .headline {
          transition-delay: 100ms;
          bottom: 3.5rem;
        }

        .link {
          bottom: 0;
          opacity: 1;
          transition-delay: 250ms;
          pointer-events: auto;
        }
      }
    }
  }
}
</style>
