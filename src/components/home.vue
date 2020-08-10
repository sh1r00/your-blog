<template>
  <v-layout>
    <sign-in v-if="user === null" />
    <v-col v-else-if="user">
      <v-spacer />
      <v-btn width="120px" style="margin-left: calc(100% - 100px);" to="/article/create">
        Create
        <v-icon>
          mdi-plus
        </v-icon>
      </v-btn>
      <v-row>
        <v-flex xs10 sm9 v-if="!isList" >
          <v-card>
            <grid-cards :cards="userCards" :edit="true" />
          </v-card>
        </v-flex>
        <v-flex xs10 sm9 v-else>
          <v-card>
            <list-cards :cards="userCards" :edit="true" />
          </v-card>
        </v-flex>
      </v-row>
    </v-col>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import SignIn from '@/components/user/signIn.vue'
export default {
  name: 'Home',
  created () {
    window.bus.$on('emitListView', (args) => {
      this.isList = args.isList
    })
  },
  data: () => ({
    userInfo: {
      username: '',
      password: ''
    },
    show: false,
    isList: false
  }),
  components: {
    SignIn
  },
  computed: {
    ...mapGetters(['user', 'userCards'])
  },
  methods: {
    toRoute (rname, rparams = {}, query = {}) {
      this.dialog = true
      this.$router.push({name: rname, params: rparams, query: query})
    },
    toExtRoute (rname) {
      window.location = rname
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Archivo');

.article {
  /*font-family: 'Archivo', sans-serif, Helvetica;*/
  list-style-type: none;
  font-size: 18px !important;
  font-weight: 400;
  cursor: pointer;
}

.title-font {
  /*Google fonts: Archivo*/
  font-family: 'Archivo', sans-serif, Helvetica;
  font-size: 16px !important;
  font-weight: 400;
  cursor: pointer;
  color: #616161;
  line-height: 1.8;
}

.content-font {
  /*Google fonts: Work Sans*/
}

.note-font {
  /*Google fonts: playfair display*/
}

</style>
`