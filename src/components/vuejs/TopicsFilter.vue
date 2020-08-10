<template>
  <v-card>
    <v-card-title>
      Filter Topics
    </v-card-title>
    <v-card-text v-for="(item, index) in topics" :key="index">
      <v-list-item>
        <v-checkbox :label="item.name" color="indigo-light" :value="item.value" @change="toggleTopic(item.name, item.value)" />
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['topics'])
  },
  methods: {
    toggleTopic (name, value) {
      const topic = {
        name: name,
        value: !value
      }
      this.$store.dispatch('toggleTopic', topic)
    }
  }
}
</script>
