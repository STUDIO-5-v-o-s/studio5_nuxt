<template>
  <b-navbar toggleable="lg" class="navbar">
    <b-navbar-brand href="#">
      <Logo class="navbar__logo" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">
          Link
        </b-nav-item>
        <b-nav-item href="#">
          Link
        </b-nav-item>
        <b-nav-item href="#">
          Link
        </b-nav-item>
        <b-nav-item href="#" disabled>
          Disabled
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.navbar {
  &__logo {
    width: 10rem;
  }

  .navbar-nav .nav-link {
    color: #fff !important;
    font-size: .9rem !important;
    font-weight: 700;

    &:hover {
      padding-left: 1rem;
      padding-right: 1rem;
      background: #ffffff10;
      border-radius: .5rem;
      color: $primary !important;
    }
  }

  .navbar-dark .navbar-toggler {
    color: #fff !important;
    border: none;
  }

  .navbar-toggler-icon {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    color: #fff !important;
    background-size: 100% 100%;
  }

  ::v-deep .navbar-toggler > .navbar-toggler-icon {
    width: 1.25rem;
    background-image: url('~assets/images/icons/burger.svg');
  }
}
</style>
