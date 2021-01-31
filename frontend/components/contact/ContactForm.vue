<template>
  <div class="contact-form">
    <b-row cols="1">
      <b-col cols="12">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <CustomInput
            label="Vaše jméno"
            name="name"
            type="name"
            class="contact-form__input"
          />
          <p>
            <CustomInput
              label="Váš email"
              name="email"
              type="email"
              class="contact-form__input"
            />
          </p>
          <p>
            <CustomInput
              label="Zpráva"
              name="message"
              type="message"
              class="contact-form__input"
              textarea
              rows="6"
            />
          </p>
          <p>
            <CustomButton
              title="Odeslat"
              type="submit"
              class="contact-form__button"
            />
          </p>
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
  width: 80%;
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
}
</style>
