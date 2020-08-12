<template>
  
    <v-navigation-drawer
      dark
      app
      floating
      right
      temporary
      v-model="drawer"
      @input="navDrawerStatus(drawer)"
    >
      <v-container grid-list-sm>
        <v-layout row justify-center align-center>
          <v-flex xs12>
            <v-card text>
              <v-card-title text>
                <v-container grid-list-sm>
                  <v-layout row wrap>
                    <v-flex xs12
                      align-center justify-center text-xs-center
                    >
                      <v-avatar
                        tile="tile"
                        size="75"
                      >
                        <img src="@/assets/logo_only.png" alt="avatar">
                      </v-avatar>
                    </v-flex>
                    <v-flex xs12
                      align-center justify-center text-xs-center
                      headline
                    >
                        <v-btn
                          text
                          to="/"
                        >
                          Your Blog
                        </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-list>
        <template >
          <v-list-item v-for="(item, i) in items" :key="i"  >
            <v-btn text  @click.stop="executeLink(item.link)">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-btn>
            <v-list-item-action v-if="item.add && user">
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon dark color="primary" v-bind="attrs" v-on="on" @click.stop="executeLink(item.add)">
                      mdi-plus
                    </v-icon>
                  </template>
                   <span>{{item.ttip}}</span>
                </v-tooltip>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-action class="text-center">
              <v-btn v-if="user" center color="accent--text" text @click="signOutUser">
                Sign Out
              </v-btn>
              <v-btn v-else-if="!user" color="accent--text" to="/" text>
                Sign In
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </template>
        <v-spacer />
        <v-list-item >
          <v-list-item-action>
            <v-icon>mdi-copyright</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Copyright {{ year }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    },
    items: {
      type: Array,
      default: () => []
    },
    year: {
      type: Number,
      default: ''
    },
    toggleDrawer: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    signOutUser () {
      this.$emit('sign-out-user', this.user)
    },
    executeLink (link) {
      this.$router.push(link)
      this.drawer = false
    },
    navDrawerStatus (value) {
      if (value === false) {
        this.$emit('close-nav-drawer')
      }
    }
  },
  watch: {
    toggleDrawer () {
      this.drawer = this.$props.toggleDrawer
    }
  }
}
</script>