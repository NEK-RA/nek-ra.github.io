<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <v-card class="mx-auto mb-1 mt-1">
        <v-card-title>
          {{ post.title }}
        </v-card-title>
        <v-card-text>
          Author: {{ post.author }} <br>
          Posted: {{ new Date(post.posted).toLocaleString() }} <br>
          <span
            v-if="post.updated"
          >
            Updated: {{ new Date(post.updated).toLocaleString() }} <br>
          </span>
          Tags:
          <v-chip
            v-for="(tag,index) in post.tags"
            :key="index"
            small
            class="ml-1"
          >
            {{ tag }}
          </v-chip>
        </v-card-text>
      </v-card>
      <v-card class="mx-auto mb-1 mt-1">
        <v-card-text>
          <nuxt-content :document="post" />
        </v-card-text>
      </v-card>

      <v-card>
        <v-card-title>
          Comments by Disqus
          <v-spacer />
          <template
            v-if="!loadCommentsRequested"
          >
            <v-tooltip left max-width="300px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="accent"
                  v-bind="attrs"
                  v-on="on"
                  @click="loadCommentsBtn"
                >
                  Load
                </v-btn>
              </template>
              <span class="tooltip">
                By default comments are not loading to avoid unnecesary cookies and traffic usage.
                If you press this button - comments will be loaded.
              </span>
            </v-tooltip>
          </template>
          <noscript>JavaScript required</noscript>
        </v-card-title>
        <v-card-text>
          <div id="disqus_thread" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  components: {
  },
  async asyncData ({ params, $content }) {
    const post = await $content(`blog/${params.slug}`).fetch()
    const kwdsGlobal = ['NEK-RA', 'Ryoidenshi Aokigahara', 'blog', 'peronal blog']
    post.keywords.push(...kwdsGlobal)
    return {
      post
    }
  },
  data () {
    return {
      loadCommentsRequested: false
    }
  },
  mounted () {
    this.$store.dispatch('layout/updateTitle', this.post.title)
  },
  methods: {
    loadCommentsBtn () {
      if (!this.loadCommentsRequested) {
        this.loadCommentsRequested = true
        // Trying to move disqus loading to button pressed by user
        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
        // eslint-disable-next-line no-unused-vars, camelcase
        const disqus_config = function () {
          this.page.url = 'https://nek-ra.github.io/blog/' + this.post.slug // Replace PAGE_URL with your page's canonical URL variable
          this.page.identifier = this.post.slug // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        (function () { // DON'T EDIT BELOW THIS LINE
          const d = document; const s = d.createElement('script')
          s.src = 'https://nek-ra.disqus.com/embed.js'
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s)
        })()
      }
    }
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
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

<style>

</style>
