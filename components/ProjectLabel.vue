<template>
  <v-card class="mx-auto mb-1 mt-1">
    <v-row>
      <v-col cols="12" sm="8" md="8">
        <v-list three-line>
          <v-list-item>
            <v-list-item-avatar size="64">
              <v-img
                :src="project.icon.type === 'asset'
                  ? require('@/assets'+project.icon.url)
                  : project.icon.url"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                {{ project.title }}
                <span
                  v-if="specified(project.version)"
                  class="ml-1"
                >
                  v{{ project.version }}
                </span>
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ project.description }}
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
          v-if="specified(project.status)"
          small
          label
          class="ml-1 mt-1 mb-1 mr-1"
          :color="statusColor"
        >
          <v-icon
            small
            class="mr-2"
          >
            {{ statusIcon }}
          </v-icon>
          {{ project.status }}
        </v-chip>
        <v-chip
          v-if="specified(project.lang)"
          small
          label
          class="ml-1 mt-1 mb-1 mr-1"
          :color="langColor"
        >
          <v-icon
            small
            class="mr-2"
          >
            mdi-flag
          </v-icon>
          {{ project.lang }}
        </v-chip>
        <v-chip
          v-if="specified(project.platform)"
          small
          label
          class="ml-1 mt-1 mb-1 mr-1"
          :color="platformColor"
        >
          <v-icon
            small
            class="mr-2"
          >
            {{ platformIcon }}
          </v-icon>
          {{ project.platform }}
        </v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    platformIcon () {
      let icon = ''
      switch (this.project.platform) {
        case 'ANDROID':
          icon = 'mdi-tablet-cellphone'
          break
        case 'WEB':
          icon = 'mdi-web'
          break
        case 'WINDOWS':
          icon = 'mdi-laptop'
          break
        case 'LINUX':
          icon = 'mdi-linux'
      }
      return icon
    },
    statusIcon () {
      let icon = ''
      switch (this.project.status) {
        case 'ARCHIVED':
          icon = 'mdi-archive'
          break
        case 'ACTIVE':
          icon = 'mdi-check'
          break
        case 'FROZEN':
          icon = 'mdi-snowflake'
          break
        case 'SUPPORT':
          icon = 'mdi-bug'
          break
        case 'DEVELOPMENT':
          icon = 'mdi-trello'
          break
      }
      return icon
    },
    statusColor () {
      let color = ''
      switch (this.project.status) {
        case 'ARCHIVED':
          color = 'brown'
          break
        case 'ACTIVE':
          color = 'green darken-4'
          break
        case 'FROZEN':
          color = 'blue lighten-3'
          break
        case 'SUPPORT':
          color = 'orange darken-2'
          break
        case 'DEVELOPMENT':
          color = 'blue-grey'
          break
      }
      return color
    },
    langColor () {
      let color = ''
      switch (this.project.lang) {
        case 'MULTILANGUAGE':
          color = 'green darken-4'
          break
        default:
          color = 'blue darken-4'
          break
      }
      return color
    },
    platformColor () {
      let color = ''
      switch (this.project.platform) {
        case 'CROSSPLATFORM':
          color = 'green darken-4'
          break
        default:
          color = 'blue darken-4'
          break
      }
      return color
    }
  },
  methods: {
    specified (smth) {
      let result = false
      if (smth !== '' && smth !== null && smth !== undefined) {
        result = true
      }
      return result
    }
  }
}
</script>
