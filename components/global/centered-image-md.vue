<template>
  <div class="d-flex flex-column justify-space-between align-center">
    <img :src="source" :alt="description" />
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  img{
    max-width: 98%;
  }
</style>
