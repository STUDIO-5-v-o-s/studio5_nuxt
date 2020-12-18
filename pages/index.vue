<template>
  <div class="page">
    <h1 class="title">
      {{ data.header.title }}
    </h1>
    <p>
      {{ data.header.desc }}
    </p>
    <CustomButton title="Button" href="" primary />
    <CustomButton title="Button" href="" secondary />
    <br><br>
    <CustomButtonIcon title="Button" href="" icon="add-file" primary />
    <CustomButtonIcon title="Button" href="" icon="add-file" secondary />
    <br><br>
    <CustomButtonIcon title="Button" href="" icon="add-file" wide secondary />
    <br><br>
    <CustomButton title="Button" href="" wide secondary />
    <CustomIcon name="add-file" />
    <CustomIcon name="add-file" width="64" />
    <CustomIcon name="add-file" color="/primary" />
    <CustomIcon name="add-file" color="/white" background />
  </div>
</template>

<script>
import data from '@/content/cs.json'

export default {
  components: {
  },

  data () {
    return {
      data
    }
  },

  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.pageImage
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://www.patrikvadura.cz/${this.id}`
        },
        {
          hide: 'twitter:card',
          name: 'twitter:card',
          content: this.pageImage ? 'summary_large_image' : 'summary'
        }
      ].filter(x => x.content)
    }
  }
}
</script>

<style lang="scss">
.page {
  padding: 2rem 2rem;
  text-align: center;
}

.title {
  display: block;
  font-weight: 800;
  font-size: 2rem;
  line-height: 3rem;
  color: rgb(0, 197, 142);
}
</style>
