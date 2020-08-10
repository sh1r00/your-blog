<template>
  <v-app
    id="inspire"
    style="background-color: #ffffff !important;"
  >
    <v-navigation-drawer
      dark
      app
      floating
      right
      temporary
      v-model="drawer"
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
                        <img src="./assets/logo_only.png" alt="avatar">
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
            <v-list-item-action v-if="item.add">
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

    <v-app-bar dark class="primary">
      <v-toolbar-title class="mr-5 align-center">
        <v-btn text to="/"> Your Blog </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-layout class="hidden-sm-and-down" row justify-center>
        <v-flex xs12 sm10 style="max-width: 750px">
          <nav-bar />
        </v-flex>
      </v-layout>
      <v-spacer />
      <v-btn dark icon v-if="isList" @click.stop="listView()">
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn dark icon v-else @click.stop="listView()">
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-container fluid fill-height class="pa-0">
      <v-layout row wrap>
        <v-flex xs12>
          <router-view>
          </router-view>
        </v-flex>
      </v-layout>
    </v-container>
    
    <v-btn class="hidden-md-and-up navDrawer-toggle" height="75px" width="75px" color="primary" fab @click.stop="drawer = !drawer" >
      <v-icon> mdi-menu </v-icon>
    </v-btn>
  </v-app>
</template>


<script>
  import NavBar from './components/navBar.vue'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      NavBar
    },
    created () {
      this.$store.dispatch('checkAuth')
      this.$store.dispatch('setTopics')
      this.$store.dispatch('filterCards')
    },
    data: () => ({
      fav: true,
      menu: true,
      message: false,
      hints: true,
      fixed: true,
      drawer: false,
      theme: false,
      isList: false
    }),
    props: {
      source: String
    },
    computed: {
      items () {
        let menu = [
          { icon: 'mdi-view-dashboard', text: 'Home', link: '/', add: 'create_article', ttip: 'Add Article' },
          { icon: 'mdi-book', text: 'Topics', link: '/topics' },
          { icon: 'mdi-account', text: 'About', link: '/about' }
        ]
        return menu
      },
      year () {
        return new Date().getFullYear()
      },
      ...mapGetters(['user'])
    },
    methods: {
      toRoute (rname, rparams = {}, query = {}) {
        this.dialog = true
        this.drawer = false
        this.$router.push({name: rname, params: rparams, query: query})
      },
      listView () {
        this.isList = !this.isList
        var eventName = 'emitListView'
        window.bus.$emit(eventName, {
          isList: this.isList
        })
      },
      executeLink (link) {
        this.$router.push(link)
        this.drawer = false
      },
      signOutUser () {
        this.$store.dispatch('signOutUser', this.user)
        this.drawer = false
      }
    }
  }
</script>

<style>
.navDrawer-toggle {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 1.25em 1.25em 0;
}
.article-content {
  font-size: 21px !important;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.80px;
  line-height: 35px;
}
.markdown {
  box-sizing: border-box;
  margin: 15px 0px;
  outline: none;
  font-family: inherit;
  font-size: 18px;
  white-space: normal;
  word-wrap: break-word;
}

.markdown code {
  width: 100% !important;
  padding: 15px;
  /*background: #272822 !important; // monokai */
  /*background: #f8f8f8 !important; // github */
  background: #23241f !important; /* monokai-sublime */
}

.code {
  width: 100% !important;
  padding: 15px;
  /*background: #272822 !important; // monokai */
  /*background: #f8f8f8 !important; // github */
  background: #23241f !important; /* monokai-sublime */
}
</style>