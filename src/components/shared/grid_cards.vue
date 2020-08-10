<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex
        v-for="(card, idx) in cards"
        v-bind="{ [`xs${flex}`]: true }"
        :key="idx"
      >
        <v-card width="100%">
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
          <v-img
            class="white--text"
            height="200px"
            :src="card.src"
            v-if="card.src != ''"
          >
            <v-layout
              column class="media"
              @click.stop="toRoute('view_article',{id: card.id})"
              style="cursor: pointer"
            >
              <v-card-title>
                <v-spacer></v-spacer>
                <v-btn dark icon>
                  <v-icon>mdi-thumb-up</v-icon>
                </v-btn>
              </v-card-title>
              <v-spacer></v-spacer>
              <v-card-title class="white--text pt-5">
                <div class="body-2 pl-5 pt-5">{{card.meta}}</div>
              </v-card-title>
            </v-layout>
          </v-img>
          <v-card-title>
            <div>
              <v-flex class="title"
                @click.stop="toRoute('view_article',{id: card.id})"
                style="cursor: pointer"
              >{{card.title}}</v-flex>
              <v-flex class="body-1">
                <span v-if="card.subtitle.length > 140" class="grey--text">
                  {{card.subtitle.substring(0, 140)}}... &nbsp;&nbsp;
                  <a href="#">read more</a>
                </span>
                <span v-else class="grey--text">
                  {{card.subtitle}} &nbsp;&nbsp;
                </span>
              </v-flex>
            </div>
              <v-layout row wrap>
                <v-flex
                  v-for="(topic, index) in card.topics"
                  :key="index"
                >
                  <a href="">{{topic}}</a>
                </v-flex>
              </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'GridCards',
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
    flex () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 12
        case 'sm': return 6
        case 'md': return 4
        case 'lg': return 3
        case 'xl': return 2
      }
    }
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
