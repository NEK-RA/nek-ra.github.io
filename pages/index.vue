<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <PersonLabel :user="user" />
      <v-card>
        <v-card-title class="headline">
          That's about me:
        </v-card-title>
        <v-card-text>
          <h2>Nickname</h2>
          My nickname "NEK-RA" built from initials of my real name and my previous nickname, that's why it's strange
          <br><br>
          <h2>Languages</h2>
          I'm beginner developer from Russia. I'm newbie in next languages now:
          <ul>
            <li
              v-for="lang in langs"
              :key="lang"
            >
              <v-chip
                small
                class="mb-1 mt-1"
              >
                {{ lang }}
              </v-chip>
            </li>
          </ul>
          I'm a little bit everything, but more familiar with
          <v-chip small>
            Java
          </v-chip>
          and
          <v-chip small>
            JavaScript
          </v-chip>
          <br><br>
          <h2>Achivements</h2>
          Nothing serious yet :c But may be there will be something cool in future :)
        </v-card-text>
      </v-card>
      <v-card
        class="mt-2"
      >
        <v-card-title>
          Contact information
        </v-card-title>
        <v-card-text>
          You can contact me at:
          <v-row
            justify="center"
            class="mr-2"
          >
            <v-col
              v-for="contact in contacts"
              :key="contact.name"
              cols="12"
              :sm="12 / contacts.length"
              :md="12 / contacts.length"
            >
              <v-btn
                block
                class="ml-1 mr-1 mt-1 mb-1 accent"
                target="_blank"
                :href="contact.link"
              >
                <v-icon
                  class="mr-2"
                >
                  {{ contact.icon }}
                </v-icon>
                {{ contact.name }} ({{ contact.rarity }})
              </v-btn>
            </v-col>
          </v-row>
          If you need we can contact using other ways, i.e. Discord, Twitter, Facebook and etc. But first use any contact way above and say me about your desicion through it.
          If you need more contact ways here, write about that via e-mail or
          <v-chip
            href="https://github.com/NEK-RA/nek-ra.github.io/discussions"
            target="_blank"
          >
            discussions
            <v-icon>
              mdi-open-in-new
            </v-icon>
          </v-chip>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import PersonLabel from '@/components/PersonLabel'
export default {
  components: {
    PersonLabel
  },
  data () {
    return {
      pageTitle: 'About me',
      user: {
        name: 'NEK-RA',
        avatar: {
          url: '/avatars/nekra64.jpg',
          type: 'asset'
        },
        shortly: 'Beginner developer, a little bit everything',
        tags: [
          'Russian',
          'English',
          'Java',
          'VueJS'
        ]
      },
      langs: [
        'C++',
        'C#',
        'Java',
        'Python',
        'JavaScript',
        'PHP'
      ],
      contacts: [
        {
          name: 'E-mail',
          link: 'mailto:ryoidenshiaokigahara@gmail.com',
          icon: 'mdi-email',
          rarity: 'Often'
        },
        {
          name: 'Telegram',
          link: 'https://t.me/ryoidenshiaokigahara',
          icon: 'mdi-telegram',
          rarity: 'Often'
        },
        {
          name: '4PDA.ru Forum',
          link: 'http://4pda.ru/forum/index.php?showuser=4796618',
          icon: 'mdi-forum',
          rarity: 'Rare'
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
          content: 'Welcome. Here is some info about me'
        }
      ]
    }
  }
}
</script>
