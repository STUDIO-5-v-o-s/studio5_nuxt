<template>
  <div v-if="error.statusCode === 404">
    <Error />
  </div>
  <div v-else>
    An error occurred
  </div>
</template>

<script>

export default {
  components: {
    Error: () => import('~/components/error/NoPage')
  },
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
