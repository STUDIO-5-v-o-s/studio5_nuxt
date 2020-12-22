<template>
  <div class="header">
    <b-container
      id="scroll"
      fluid
      class="header-scroll d-flex justify-content-center is-fixed-top"
    >
      <b-col>
        <Navbar />
      </b-col>
    </b-container>
  </div>
</template>

<script>
import data from '~/content/cs.json'

export default {
  components: {
    Navbar: () => import('~/components/header/Navbar')
  },

  data () {
    return {
      data
    }
  },

  mounted () {
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
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 5.5rem;
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
  }
}

.resize {
  padding: .75rem 3rem;
}
</style>
