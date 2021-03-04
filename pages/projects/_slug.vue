<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <ProjectLabel
        :project="labelData"
      />

      <v-card
        class="mt-2"
      >
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Changelog
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card-text>
                <nuxt-content :document="log" />
              </v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>

      <v-card
        class="mt-2"
      >
        <v-card-text>
          <nuxt-content :document="project" />
        </v-card-text>
      </v-card>
      <v-card
        v-if="project.require"
        class="mt-2"
      >
        <v-alert
          outlined
          border="left"
          type="warning"
          text
        >
          Requirements:
          <ul>
            <li
              v-for="(req,index) in project.require"
              :key="index"
            >
              {{ req }}
            </li>
          </ul>
        </v-alert>
      </v-card>

      <v-card
        v-if="project.links"
      >
        <v-card-text>
          <v-row
            justify="center"
            class="mr-2"
          >
            <v-col
              v-for="link in project.links"
              :key="link.url"
              cols="12"
              :sm="12 / project.links.length"
              :md="12 / project.links.length"
            >
              <v-btn
                block
                class="ml-2 mr-2 mt-1 mb-1"
                target="_blank"
                :href="link.url"
              >
                <v-icon
                  class="mr-2"
                >
                  {{ dlIcon(link.label) }}
                </v-icon>
                {{ link.label }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ProjectLabel from '@/components/ProjectLabel'
export default {
  components: {
    ProjectLabel
  },
  async asyncData ({ params, $content }) {
    const page = await $content(`projects/${params.slug}`).fetch()
    const changes = await $content(`changelogs/${params.slug}`).fetch()
    const kwdsGlobal = ['NEK-RA', 'Ryoidenshi Aokigahara', 'blog', 'peronal blog']
    page.keywords.push(...kwdsGlobal)
    return {
      project: page,
      log: changes
    }
  },
  computed: {
    labelData () {
      return {
        title: this.project.title,
        description: this.project.description,
        icon: this.project.icon,
        version: this.project.version,
        status: this.project.status,
        lang: this.project.lang,
        platform: this.project.platform
      }
    }
  },
  mounted () {
    this.$store.dispatch('layout/updateTitle', this.project.title)
  },
  methods: {
    dlIcon (label) {
      let icon = 'mdi-cloud-download'
      if (this.includes(label, 'google')) {
        icon = 'mdi-google-play'
      }
      if (this.includes(label, '4pda')) {
        icon = 'mdi-forum'
      }
      return icon
    },
    includes (str, sub) {
      let rst = false
      if (str.toLowerCase().includes(sub)) {
        rst = true
      }
      return rst
    }
  },
  head () {
    return {
      title: this.project.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.post.keywords
        }
      ]
    }
  }
}
</script>
