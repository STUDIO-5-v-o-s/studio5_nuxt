<template>
  <div class="header">
    <b-container
      id="scroll"
      fluid
      class="header-scroll d-flex justify-content-center is-fixed-top"
      :class="{ 'header__hidden': !showNavbar }"
    >
      <b-col>
        <Navbar />
      </b-col>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('~/components/header/Navbar')
  },

  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },

  mounted () {
    window.addEventListener('scroll', this.onScroll)

    this.$nextTick(function () {
      window.addEventListener('scroll', function () {
        const navbar = document.getElementById('scroll')
        const navClasses = navbar.classList
        if (document.documentElement.scrollTop >= 150) {
          if (navClasses.contains('resize') === false) {
            navClasses.toggle('resize')
          }
        } else if (navClasses.contains('resize') === true) {
          navClasses.toggle('resize')
        }
      })
    })
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll () {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }
      // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition
    }
  },

  onScroll () {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    if (currentScrollPosition < 0) {
      return
    }
    // Stop executing this function if the difference between
    // current scroll position and last scroll position is less than some offset
    if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
      return
    }
    this.showNavbar = currentScrollPosition < this.lastScrollPosition
    this.lastScrollPosition = currentScrollPosition
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 5.5rem;

  @include media-breakpoint-down(sm) {
    overflow: hidden;
  }

  &__hidden {
    transform: translate3d(0, -100%, 0);
  }
}

.header-scroll {
  position: fixed;
  padding: 1.5rem 3rem;
  background: $secondary;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  @include scrollHeader(.6s);

  @include media-breakpoint-down(md) {
    padding: 1.5rem 2rem;
  }

  @include media-breakpoint-down(sm) {
    padding: 1rem 1rem;
    overflow: hidden;
  }
}

.resize {
  padding: .75rem 3rem;

  @include media-breakpoint-down(sm) {
    padding: .75rem 1rem;
  }
}
</style>
