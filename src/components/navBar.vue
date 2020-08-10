<template>
  <div height="100px">
    <span v-for="item in menuItems" :key="item.name">
      <v-btn :to="item.link" text>
        {{ item.name }}
      </v-btn>
    </span>
    
    <v-btn v-if="user" color="accent--text" text @click="signOutUser">
      Sign Out
    </v-btn>
    <v-btn v-else-if="!user" color="accent--text" to="/" text>
      Sign In
    </v-btn>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      menuItems: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Topics',
          link: '/topics'
        },
        {
          name: 'About',
          link: '/about'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    signOutUser () {
      return this.$store.dispatch('signOutUser')
    }
  }
}
</script>