<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <v-card>
        <v-card-title>
          About supporting me
        </v-card-title>
        <v-card-text>
          While I'm a beginner and I haven't any big/popular projects your help is welcome at next places:
          <v-list>
            <template
              v-for="(link, index) in links"
            >
              <v-list-item
                :key="link.title"
                :href="link.href"
                target="_blank"
                three-line
              >
                <v-list-item-action>
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="link.title" />
                  <v-list-item-subtitle v-text="link.subtitle" />
                </v-list-item-content>
              </v-list-item>
              <v-divider
                v-if="index < links.length - 1"
                :key="index"
              />
            </template>
          </v-list>
          <v-alert
            type="info"
            outlined
            text
          >
            More links will be added in future.
          </v-alert>
          If you think there should be anything else, please write a message to me via contact ways shown at
          <v-btn
            to="/"
            class="accent"
            small
          >
            about me
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      pageTitle: 'Support me',
      links: [
        {
          icon: 'mdi-help-box',
          title: 'Site improvements',
          subtitle: 'Advices how to improve any part of this site',
          href: 'https://github.com/nek-ra/nek-ra.github.io/issues'
        },
        {
          icon: 'mdi-github',
          title: 'Check for issues at my Github',
          subtitle: 'Probably you can help or give an advice somewhere',
          href: 'https://github.com/nek-ra'
        },
        {
          icon: 'mdi-stack-overflow',
          title: 'Visit my Stack Overflow.',
          subtitle: 'May be you have answers for some questions',
          href: 'https://stackoverflow.com/users/11928561/ryoidenshi-aokigahara?tab=questions'
        }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('layout/updateTitle', this.pageTitle)
  },
  head () {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The ways to support me'
        }
      ]
    }
  }
}
</script>
