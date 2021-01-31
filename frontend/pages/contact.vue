<template>
  <div>
    <HeroBasic
      image="fakeApi"
      :title="$t('contact.title')"
    />

    <b-container class="contact d-flex justify-content-center">
      <ContactForm />
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    ContactForm: () => import('~/components/contact/ContactForm'),
    HeroBasic: () => import('~/components/hero/HeroBasic')
  },

  data () {
    return {
      title: 'Kontakt | STUDIO 5'
    }
  },

  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Máte otázky na členy našeho týmu, nebo si chcete domluvit nezávaznou schůzku u šálku kávy? Napište nám, zavolejte nbeo se stavte přímo za námi do studia.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.contact {
  padding: 4rem 0;
}
</style>
