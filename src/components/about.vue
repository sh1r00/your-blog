<template>
  <v-container
    class="fluid px-0"
  >
    <v-layout column>
      <v-flex xs12 text-xs-center>
        <v-flex xs10 offset-xs1 class="pb-3">
          <v-avatar
            size="200px"
            color="grey lighten-4"
          >
            <img src="#" alt="avatar">
          </v-avatar>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-3>
      <v-flex xs10 offset-xs1>
        <div class="about" >
          Introduce yourself to your crowd. <br>
          Share why you decided to build this website. List some of your interests below
        </div>
        <div class="about" style="margin: 10px 0px; padding: 0px 20px;">
          <ul class="grey--text">
            <li> Hiking </li>
            <li> Reading (Deep Learning) </li>
            <li> Cooking </li>
            <li> Etc. </li>
          </ul>
        </div>
        <div>
          Add any links to your other pages, e.g. a Social Media account <a href="#"> here </a>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>

export default {
  name: 'Article',
  created () {
  },
  mounted () {
    // console.log(this.$route.params)
  },
  data: () => ({
    show: false,
    article: {
      title: 'All About You'
    }
  }),
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

.about {
  font-size: 20px;
  font-weight: 400;
}

</style>
