<template>
  <v-row width="100vh">
    <v-col width="20%" style="margin: 10% 0 10% 10%; background-color: #03A9F4;">
    </v-col>
    <v-col width="40%" style="margin-right: 10%; padding: 20% 10%;">
      <h1 class="primary--text mb-8 pl-12">
        Welcome Back
      </h1>
      <v-text-field v-model="userInfo.username" label="Username" />
      <v-text-field v-model="userInfo.password" label="Password" />
      <v-text-field v-model="userInfo.cpassword" label="Confirm Password" />
      <v-row>
        <v-btn text to="/">
          Already have an Account
        </v-btn>
        <v-spacer />
        <v-btn color="primary" @click="signUpUser">
          Submit
        </v-btn>
      </v-row>
      <v-row v-if="errorMsg" justify="center" class="mt-6">
        <p class="error--text">
          {{ errorMsg }}
        </p>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      userInfo: {
        id: '2',
        username: '',
        passowrd: '',
        cpassword: ''
      }
    }
  },
  computed: {
    ...mapGetters(['errorMsg'])
  },
  methods: {
    signUpUser () {
      if (this.userInfo.password === this.userInfo.cpassword) {
        this.$store.dispatch('signUpUser', this.userInfo)
      } else {
        this.$store.commit('SET_ERROR', 'Passwords do not match')
      }
    }
  }
}
</script>