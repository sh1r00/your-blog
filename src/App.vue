<template>
  <v-app
    id="inspire"
    style="background-color: #ffffff !important;"
  >
    <nav-drawer :user="user" :toggleDrawer="drawer" :items="menuItems" :year="year" @sign-out-user="signOutUser" @close-nav-drawer="closeNavDrawer" />
    <v-app-bar dark class="primary">
      <v-toolbar-title class="mr-5 align-center">
        <v-btn text to="/"> Your Blog </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-layout class="hidden-sm-and-down" row justify-center>
        <v-flex xs12 sm10 style="max-width: 750px">
          <nav-bar :user="user" :menuItems="menuItems" @sign-out-user="signOutUser" />
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
  import NavBar from '@/components/nav/NavBar.vue'
  import NavDrawer from '@/components/nav/NavDrawer.vue'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      NavBar,
      NavDrawer
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
      menuItems () {
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
      signOutUser () {
        this.$store.dispatch('signOutUser', false)
        this.drawer = false
      },
      closeNavDrawer () {
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