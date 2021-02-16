export default {
  title: 'CustomImage'
}

export const DefaultImage = ({ image }) => ({
  template: '<CustomImage :image="image" :folder="folder" :grayscale="grayscale" :width="width" />',
  props: {
    image: {
      default: 'EuroNaradi_katalog_MG_5622'
    },
    folder: {
      default: 'presentation/design'
    },
    grayscale: {
      default: 'false'
    },
    width: {
      default: '400'
    }
  }
})

DefaultImage.argTypes = {
  image: {
    type: { name: 'string' },
    defaultValue: 'EuroNaradi_katalog_MG_5622'
  },
  folder: {
    type: { name: 'string' },
    defaultValue: 'presentation/design'
  },
  grayscale: {
    type: { name: 'boolean' },
    defaultValue: 'false'
  },
  width: {
    type: { name: 'string' },
    defaultValue: '400'
  }
}
