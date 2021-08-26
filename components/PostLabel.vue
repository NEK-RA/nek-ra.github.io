<template>
  <v-card class="mx-auto my-1">
    <v-card-title>
      {{ post.title }}
    </v-card-title>
    <v-card-text>
      {{ new Date(post.posted).toLocaleString() }}
      <v-chip
        v-for="(tag,index) in post.tags"
        :key="index"
        small
        class="ml-1 mr-1"
      >
        {{ tag }}
      </v-chip><br>
      {{ post.description }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
