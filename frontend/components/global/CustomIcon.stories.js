export default {
  title: 'CustomIcon'
}

export const Primary = () => '<CustomIcon name="add-file" />'

export const Background = () => '<CustomIcon name="add-file" color="/white" background />'

export const Bootstrap = ({ name }) => ({
  template: '<CustomIcon :name="name" :color="color" bootstrap />',
  props: {
    name: {
      default: 'envelope-fill'
    },
    color: {
      default: '#000000'
    }
  }
})

Bootstrap.argTypes = {
  name: {
    type: { name: 'string' },
    defaultValue: 'envelope-fill'
  },
  color: { control: 'color' }
}
