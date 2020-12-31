<template>
  <v-app dark>
    <v-row>
      <v-col
        cols="12"
        sm="8"
        md="8"
        class="mx-auto"
      >
        <v-card>
          <v-card-title>
            {{ errorInfo.title }} — {{ errorInfo.message }}
          </v-card-title>
          <v-card-text>
            {{ errorInfo.description }}
          </v-card-text>
          <v-row
            justify="center"
            class="mr-2"
          >
            <v-col
              cols="12"
              :sm="4"
              :md="4"
            >
              <v-btn
                block
                class="ml-2 mr-2 mt-1 mb-1 accent"
                to="/"
              >
                <v-icon
                  class="mr-2"
                >
                  mdi-home
                </v-icon>
                Home page
              </v-btn>
            </v-col>
            <v-col
              cols="12"
              :sm="8"
              :md="8"
            >
              <v-btn
                block
                class="ml-2 mr-2 mt-1 mb-1 accent"
                @click="reportError"
              >
                <v-icon
                  class="mr-2"
                >
                  mdi-alert
                </v-icon>
                Report error via E-mail
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    errorInfo () {
      const errTitle = 'Error ' + this.error.statusCode
      const errMessage = this.error.message
      const errDescription = this.error.statusCode === 404
        ? 'Error called "Page not found" usually rises when you make mistakes in URL, and as result it points to a page that doesn\'t exist. Check if you made any mistakes and if you sure that entered URL shouldn\'t give you "Page not found" report that via any contact way on main page. Otherwise just open menu and try to find what you need through site navigation :)'
        : 'This is a placeholder for others unexpected errors. This site is fully static and hosted on Github Pages. Site has no any backend, so I\'m not sure which reason for these errors are possible. Title here contain next template: Error code - Error message. This data is provided by NuxtJS'
      return {
        title: errTitle,
        message: errMessage,
        description: errDescription
      }
    }
  },
  mounted () {
    const errorTitle = 'Error ' + this.error.statusCode
    this.$store.dispatch('layout/updateTitle', errorTitle)
  },
  methods: {
    reportError () {
      const report = {
        info: this.error,
        path: document.location.href
      }
      const encoded = encodeURIComponent(JSON.stringify(report))
      const url = 'mailto:ryoidenshiaokigahara@gmail.com?subject=Reporting%20problem%20at%20Github%20Pages%20site&body=Write%20any%20comment%20here%0D%0A%0D%0A----------------------%0D%0A' + encoded
      window.open(url, '_blank').focus()
    }
  },
  head () {
    return {
      title: 'Error ' + this.error.statusCode,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Error ' + this.error.statusCode + ': ' + this.error.message
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
