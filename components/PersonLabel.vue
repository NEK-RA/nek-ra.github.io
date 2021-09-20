<template>
  <v-card class="mx-auto my-2">
    <v-row no-gutters>
      <v-col cols="12" sm="8" md="8">
        <v-list three-line>
          <v-list-item>
            <v-list-item-avatar size="64">
              <v-img
                :src="user.avatar.type === 'asset'
                  ? require('@/assets'+user.avatar.url)
                  : user.avatar.url"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="user.name" />
              <v-list-item-subtitle>
                {{ user.shortly }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="4"
        align-self="center"
      >
        <v-chip
          v-for="tag in user.tags"
          :key="tag"
          small
          class="ml-2 mr-2 mt-2 mb-2"
        >
          {{ tag.toUpperCase() }}
        </v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
