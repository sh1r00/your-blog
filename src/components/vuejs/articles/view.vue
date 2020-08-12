<template>
  <v-layout column class="pa-4">
      <v-col>
      <v-flex xs12>
        <v-flex xs10 offset-xs1 class="pb-3">
          <div class="display-4"> {{article.title}} </div>
        </v-flex>
      </v-flex>
    </v-col>
    <v-col>
      <v-flex xs12>
        <v-flex justify="center" xs10 offset-xs1 class="pb-3">
          <div class="display-1"> {{article.subtitle}} </div>
        </v-flex>
      </v-flex>
    </v-col>
    <v-col row wrap v-for="(item, idx) in article.items" :key="idx" my-3>
      <p
        v-bind="{ [`xs${item.flex}`]: true, [`offset-xs${item.offset}`]: true }"
        v-html="item.template">
        {{ item.template }}
      </p>
    </v-col>
  </v-layout>
</template>
<script>

export default {
  name: 'Article',
  created () {
    return this.$store.dispatch('getArticle', this.$route.params.id)
  },
  mounted () {
    return this.$store.getters.currentCard
    // console.log(this.$route.params)
  },
  data: () => ({
    show: false,
    article: {
      title: 'Lorum ipsum title',
      subtitle: 'Some more Lorem',
      items: [
        {
          template: "<div class='article-content'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>",
          flex: 10,
          offset: 1
        },
        {
          template: "<img src='http://via.placeholder.com/900x300' style='width: 100%; height: 100%'/>",
          flex: 12,
          offset: 0
        },
        {
          template: "<div class='title'> <b> 1. Subheading </b> </div> <br> <div class='article-content'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>",
          flex: 10,
          offset: 1
        },
        {
          template: "<div class='article-content'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>",
          flex: 10,
          offset: 1
        },
        {
          template: "<img src='http://via.placeholder.com/600x300' style='width: 100%; height: 100%'/>",
          flex: 10,
          offset: 1
        },
        {
          template: "<div class='title'> <b> 2. Subheading </b> </div> <br> <div class='article-content'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>",
          flex: 10,
          offset: 1
        },
        {
          template: "<img src='http://via.placeholder.com/400x100' style='width: 100%; height: 100%'/>",
          flex: 10,
          offset: 1
        }
      ]
    }
  }),
  computed: {
    currentCard () {
      this.article.title = this.currentCard.title
      this.article.subtitle = this.currentCard.subtitle
      if (this.currentCard.sections) {
        this.article.items = this.currentCard.sections
      }
    }
  },
  methods: {
    toRoute (rname, rparams = {}, query = {}) {
      this.dialog = true
      this.$router.push({name: rname, params: rparams, query: query})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>