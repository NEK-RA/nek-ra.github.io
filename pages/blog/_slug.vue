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
        </v-card-title>
        <v-card-text>
          <div id="disqus_thread" />
          <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
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
    return {
      post
    }
  },
  mounted () {
    this.$store.dispatch('layout/updateTitle', this.post.title)
    // Trying to move disqus loading to mounted hook
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    // eslint-disable-next-line no-unused-vars, camelcase
    const disqus_config = function () {
      this.page.url = 'https://nek-ra.vercel.app/blog/' + this.post.slug // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = this.post.slug // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function () { // DON'T EDIT BELOW THIS LINE
      const d = document; const s = d.createElement('script')
      s.src = 'https://nek-ra.disqus.com/embed.js'
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s)
    })()
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        }
      ]
    }
  }
}
</script>

<style>
blockquote>p {
  border-radius:10px;
  background-color: rgb(134, 134, 134);
  padding:5px 15px;
}
</style>
