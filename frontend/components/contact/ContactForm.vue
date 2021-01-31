<template>
  <div class="contact-form">
    <b-row cols="2">
      <b-col md="5" cols="12">
        <h4>
          {{ $t('contact.titleAddress') }}
        </h4>

        <ul>
          <div v-for="item in $t('contact.address')" :key="item.id">
            <li>
              {{ item.title }}
            </li>
          </div>
        </ul>

        <h4>
          {{ $t('contact.titleContact') }}
        </h4>

        <ul>
          <div v-for="item in $t('contact.contact')" :key="item.id">
            <li>
              {{ item.title }}
            </li>
          </div>
        </ul>
      </b-col>

      <b-col md="7" cols="12">
        <form
          name="contact"
          method="POST"
          action="form/Success"
          data-netlify="true"
          netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
        >
          <CustomInput
            :label="$t('contact.name')"
            name="name"
            type="name"
            class="contact-form__input"
          />
          <CustomInput
            :label="$t('contact.email')"
            name="email"
            type="email"
            class="contact-form__input"
          />
          <CustomInput
            :label="$t('contact.message')"
            name="message"
            type="message"
            class="contact-form__input"
            textarea
            rows="6"
          />

          <div data-netlify-recaptcha="true" />

          <CustomButton
            :title="$t('contact.send')"
            type="submit"
            class="contact-form__button"
          />
        </form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.contact-form {
  width: 90%;
  padding: 0 5rem;

  @include media-breakpoint-down(sm) {
    padding: 0 2rem;
  }

  &__title {
    text-align: center;
    max-width: 35rem;
    color: $primary;
  }

  &__input {
    padding: .5rem 0;
  }

  &__button {
    margin-top: 1rem;
  }

  ul {
    padding: 1rem 3rem 1rem 0;

    @include media-breakpoint-down(sm) {
      padding: 1rem 0;
    }

    li {
      list-style: none;
      font-size: .8rem;
      line-height: 1.5rem;
    }
  }
}
</style>
