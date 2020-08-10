<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-lg
  >
    <template v-for="(card, idx) in cards">
      <v-layout :key="idx" row wrap>
        <v-flex xs12>
          <v-card elevation-3>
            <v-container fluid grid-list-lg>
              <v-spacer />
              <v-btn color="info" text v-if="edit" @click="editCard(card)">
                <v-icon>
                  mdi-pencil
                </v-icon>
              </v-btn>
              <v-btn color="warning" text v-if="edit" @click="deleteCard(card)">
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
              <v-layout row>
                <v-flex
                  xs2
                  @click.stop="toRoute('view_article', {id: card.id})"
                  style="cursor: pointer"
                >
                  <v-img
                    :src="card.src"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs10>
                  <div>
                    <div
                      class="title"
                      @click.stop="toRoute('view_article', {id: card.id})"
                      style="cursor: pointer"
                    >
                      {{card.title}}
                      <span style="margin-left: 20px;">
                        <v-btn
                          text
                          icon
                          color="primary darken-2"
                          style="margin-left: -8px;"
                        >
                          <v-icon small>mdi-thumb-up</v-icon>
                        </v-btn>
                        <v-btn text icon color="red darken-2">
                          <v-icon small>mdi-thumb-down</v-icon>
                        </v-btn>
                      </span>
                      <span style="float:right;" class="caption grey--text"> {{card.created}} </span>
                    </div>
                    <div class="body-1">
                      <span v-if="card.subtitle.length > 140" class="grey--text">
                        {{card.subtitle.substring(0, 140)}}... &nbsp;&nbsp;
                        <a href="#">read more</a>
                      </span>
                      <span v-else class="grey--text">
                        {{card.subtitle}} &nbsp;&nbsp;
                      </span>
                    </div>
                    <div>
                      <v-container fluid v-if="card.topics && card.topics.length > 0">
                        <v-layout row wrap>
                          <v-flex xs12 style="margin-left: -15px;">
                            <template v-for="(topic, index) in card.topics">
                              <span :key="index"> <a href="">{{topic}}</a> &nbsp; </span>
                            </template>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </div>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </template>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ListCards',
  props: {
    cards: {
      type: Array,
      default: []
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  created () {
  },
  computed: {
    ...mapGetters(['filteredCards'])
  },
  methods: {
    toRoute (rname, rparams = {}, query = {}) {
      this.dialog = true
      this.$router.push({name: rname, params: rparams, query: query})
    },
    editCard (card) {
      const route = '/article/edit/' + card.id
      this.$store.dispatch('editCard', card)
      this.$router.push(route)
    },
    deleteCard (card) {
      return this.$store.dispatch('deleteCard', card)
    }
  }
}
</script>
