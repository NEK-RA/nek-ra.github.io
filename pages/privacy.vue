<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <v-card>
        <v-card-title>
          Privacy Information
        </v-card-title>
        <v-card-text>
          This is a static site generated with NuxtJS. I don't use cookies at all.
          But there are used few external services and they're listed below.
        </v-card-text>
      </v-card>

      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Comments (provided by Disqus)
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card-text>
              <v-alert
                type="info"
                outlined
                text
              >
                Disqus is used to provide abilities to comment posts in
                <v-btn
                  to="/blog"
                  small
                  class="accent"
                >
                  <v-icon small class="mr-2">
                    mdi-newspaper-variant
                  </v-icon>
                  Blog / News
                </v-btn>
                section. <br>
                This means, that Disqus can use/store some cookies in your browser, when you visit my posts. <br>
                I <v-btn small class="accent" to="/blog/disqus-personal-free-plus">
                  got free/non-commercial plus on disqus
                </v-btn> and disabled ads, so no additionals cookies (like disqus ads identifier) should be used as I hope
              </v-alert>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Web Analytics (provided by Cloudflare)
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card-text>
              <v-alert
                type="info"
                outlined
                text
              >
                From June 23, 2021 this site started to use

                <v-btn
                  href="https://www.cloudflare.com/web-analytics/"
                  small
                  class="accent"
                >
                  <v-icon small class="mr-2">
                    mdi-open-in-new
                  </v-icon>
                  Cloudflare Web Analytics
                </v-btn>
                <br>
                At this moment it's used in experimental mode - if it will work as expected, then it will stay on this site. If any problems appear, it probably will be removed. There is
                <v-btn small class="accent" to="/blog/disqus-personal-free-plus">
                  <v-icon small class="mr-2">
                    mdi-newspaper-variant
                  </v-icon>
                  corresponding post in blog
                </v-btn> about that.
              </v-alert>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      pageTitle: 'Privacy information',
      pageKeywords: ['NEK-RA', 'Ryoidenshi Aokigahara', 'blog', 'peronal blog', 'projects', 'RJ-Leisure', 'newbie developer', 'privacy', 'disqus', 'cookies']
    }
  },
  head () {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Information about any external services used, which use cookies'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.pageKeywords
        }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('layout/updateTitle', this.pageTitle)
  }
}
</script>
