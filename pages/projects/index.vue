<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <v-card>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Filters
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list three-line>
                <v-list-item>
                  <v-select
                    v-model="filter.lang"
                    :items="langs"
                    label="Language"
                    outlined
                  />
                </v-list-item>
                <v-list-item>
                  <v-select
                    v-model="filter.platform"
                    :items="platforms"
                    label="Platform"
                    outlined
                  />
                </v-list-item>
                <v-list-item>
                  <v-select
                    v-model="filter.status"
                    :items="statuses"
                    label="Status"
                    outlined
                  />
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>

      <nuxt-link
        v-for="project in filteredProjects"
        :key="project.path"
        :to="'/projects/'+project.slug"
        exact
        router
        no-prefetch
      >
        <ProjectLabel
          :project="project"
        />
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
import ProjectLabel from '@/components/ProjectLabel'
export default {
  components: {
    ProjectLabel
  },
  async asyncData ({ $content }) {
    const projects = await $content('projects').only(['title', 'description', 'icon', 'version', 'platform', 'lang', 'status', 'slug']).sortBy('status').fetch()
    return {
      projects
    }
  },
  data () {
    return {
      pageTitle: 'My projects',
      filter: {
        platform: 'All',
        status: 'All',
        lang: 'All'
      },
      platforms: ['All', 'Web', 'Android', 'Windows', 'Linux'],
      statuses: ['All', 'Active', 'Development', 'Frozen', 'Support', 'Archived'],
      langs: ['All', 'English', 'Russian', 'Multilanguage']
    }
  },
  computed: {
    filteredProjects () {
      let result = this.projects
      if (this.filter.platform !== 'All') {
        result = result.filter(project => project.platform === this.filter.platform.toUpperCase())
      }
      if (this.filter.status !== 'All') {
        result = result.filter(project => project.status === this.filter.status.toUpperCase())
      }
      if (this.filter.lang !== 'All') {
        result = result.filter(project => project.lang === this.filter.lang.toUpperCase())
      }
      return result
    }
  },
  mounted () {
    this.$store.dispatch('layout/updateTitle', this.pageTitle)
  },
  head () {
    return {
      title: 'My Projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Projects of NEK-RA. Here you can see status, locale and platform of projects'
        }
      ]
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
