<template>
  <v-layout>
    <v-flex v-if="!showFilter" class="hidden-md-and-up" xs2 sm3>
      <v-btn style="margin-left: 2em; z-index: 3;" fab color="accent" @click="showFilter = !showFilter">
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </v-btn>
    </v-flex>
    <v-flex v-if="showFilter" class="hidden-md-and-up">
      <v-row>
        <topics-filter style="margin-left: 2em" />
        <v-btn @click="showFilter = !showFilter" color="accent" absolute fab style="margin-left: 45%; z-index: 3;" xs2 sm3>
          <v-icon>
            mdi-chevron-left
          </v-icon>
        </v-btn>
      </v-row>
    </v-flex>
    <v-flex class="hidden-sm-and-down">
      <topics-filter />
    </v-flex>
    <v-flex xs10 sm9 v-if="!isList" >
      <v-card>
        <grid-cards :cards="filteredCards"></grid-cards>
      </v-card>
    </v-flex>
    <v-flex xs10 sm9 v-else>
      <v-card>
        <list-cards :cards="filteredCards"></list-cards>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import TopicsFilter from '@/components/vuejs/TopicsFilter.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Topics',
  created () {
    window.bus.$on('emitListView', (args) => {
      this.isList = args.isList
    })
  },
  data: () => ({
    show: false,
    isList: false,
    showFilter: false
  }),
  computed: {
    ...mapGetters(['filteredCards'])
  },
  components: {
    TopicsFilter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
`