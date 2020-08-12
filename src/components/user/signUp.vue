<template>
  <div  style="max-width: 100vw">
    <v-row class="hidden-sm-and-down">
      <div style="height: 60vh; width: 20%; margin: 10% 0 10% 10%; background-color: #03A9F4;" />
      <v-col width="40%" style="margin-right: 10%; padding: 20% 10%;">
        <h1 class="primary--text mb-8 pl-12">
          Welcome Back
        </h1>
        <v-form @submit="signUpUser">
          <v-text-field v-model="userInfo.username" label="Username" />
          <v-text-field v-model="userInfo.password" label="Password" />
          <v-text-field v-model="userInfo.cpassword" label="Confirm Password" />
          <v-row class="mt-4">
            <v-btn  class="mb-4" text to="/">
              Already have an Account
            </v-btn>
            <v-spacer />
            <v-btn class="py-4" color="primary" type="submit">
              Submit
            </v-btn>
          </v-row>
        </v-form>
        <v-row v-if="errorMsg" justify="center" class="mt-6">
          <p class="error--text">
            {{ errorMsg }}
          </p>
        </v-row>
      </v-col>
    </v-row>
    <v-col class="hidden-md-and-up pa-0">
      <div style="height: 2.25em; margin: 3em; background-color: #03A9F4;" />
      <v-col class="px-6">
        <h1 class="primary--text mb-8 text-center">
          Welcome Back
        </h1>
        <v-form @submit="signUpUser">
          <v-text-field v-model="userInfo.username" label="Username" />
          <v-text-field v-model="userInfo.password" label="Password" />
          <v-text-field v-model="userInfo.cpassword" label="Confirm Password" />
          <v-col class="mt-4 text-center">
            <v-btn text to="/">
              Already have an Account
            </v-btn>
            <v-spacer />
            <v-btn width="75px" class="py-4 px-2 ma-6" color="primary" type="submit">
              Submit
            </v-btn>
          </v-col>
        </v-form>
        <v-row v-if="errorMsg" justify="center" class="mt-6">
          <p class="error--text">
            {{ errorMsg }}
          </p>
        </v-row>
      </v-col>
    </v-col>
  </div>
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