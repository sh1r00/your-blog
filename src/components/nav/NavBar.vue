<template>
  <div height="100px">
    <span v-for="item in menuItems" :key="item.text">
      <v-btn :to="item.link" text>
        {{ item.text }}
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
export default {
  props: {
    menuItems: {
      type: Array,
      default: () => []
    },
    user: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    signOutUser () {
      return this.$emit('sign-out-user')
    }
  }
}
</script>