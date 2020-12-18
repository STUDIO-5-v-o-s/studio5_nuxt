<template>
  <b-navbar toggleable="lg" class="navbar">
    <b-navbar-brand href="#">
      <Logo class="navbar__logo" secondary />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto navbar__links">
        <div
          v-for="item in data.links.nav"
          :key="item.id"
        >
          <b-nav-item
            :posts="item.title"
            :href="item.url"
          >
            {{ item.title }}
          </b-nav-item>
        </div>
        <CustomButton
          title="Kontaktujte nás"
          :href="data.links.contact"
        />
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import data from '@/content/testapi.json'

export default {
  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  &__logo {
    width: 10rem;
  }

  &__links {
    @include media-breakpoint-down(md) {
      margin-top: 2rem;
      padding: 1rem 2rem;
      background: $light;

      @include border-radius (1rem);
    }

    @include media-breakpoint-down(sm) {
      text-align: center;
    }
  }

  .navbar-nav .nav-link {
    color: #fff !important;
    font-size: .9rem !important;
    font-weight: 700;
    transition: all 300ms ease-in-out;

    &:hover {
      padding-left: 1rem;
      padding-right: 1rem;
      background: $light;
      color: $primary !important;

      @include border-radius (.5rem);
    }
  }

  ::v-deep .custom-button {
    margin-left: 1rem;

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
  }

  ::v-deep .navbar-toggler {
    padding: 1rem 1.25rem;
    background: $light;
    border: none;

    @include border-radius (.5rem);

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
