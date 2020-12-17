<template>
  <b-navbar toggleable="lg" class="navbar">
    <b-navbar-brand href="#">
      <LogoAlternative class="navbar__logo" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto navbar__links">
        <b-nav-item href="#">
          Link
        </b-nav-item>
        <b-nav-item href="#">
          Link
        </b-nav-item>
        <b-nav-item href="#">
          Link
        </b-nav-item>
        <CustomButton title="Kontaktujte nás" class="ml-3" />
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

  &__links {
    @include media-breakpoint-down(sm) {
      margin-top: 2rem;
      padding: 1rem 2rem;
      background: $light;
      border-radius: 1rem;
    }
  }

  .navbar-nav .nav-link {
    color: #fff !important;
    font-size: .9rem !important;
    font-weight: 700;

    &:hover {
      padding-left: 1rem;
      padding-right: 1rem;
      background: $light;
      border-radius: .5rem;
      color: $primary !important;
    }
  }

  ::v-deep .custom-button {
    &:hover {
      background: $light;
    }
  }

  ::v-deep .navbar-toggler {
    padding: 1rem 1.25rem;
    background: $light;
    border: none;
    border-radius: .5rem;

    &:focus,
    &:hover {
      border: none;
      text-decoration: none;
    }

    &-icon {
      display: inline-block;
      width: 1.25rem;
      background-image: url('~assets/images/icons/burger.svg');
      vertical-align: middle;

      &:active {
        background-image: url('~assets/images/icons/primary/burger.svg');
      }
    }
  }
}
</style>
