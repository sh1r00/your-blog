<template>
  <div style="max-width: 100vw">
    <v-row style="width: 100vw" class="hidden-sm-and-down">
      <div style="height: 60vh; width: 20%; margin: 10% 0 10% 10%; background-color: #03A9F4;" />
      <v-col width="40%" style="margin-right: 10%; padding: 20% 10%;">
        <h1 class="primary--text mb-8 pl-12">
          Welcome Back
        </h1>
        <p>
          Try Username: 'admin'
        </p>
        <p>
          And Password: 'admin'
        </p>
        <h5>
          * without the quotes
        </h5>
        <v-form @submit="signInUser">
          <v-text-field v-model="userInfo.username" label="Username" />
          <v-text-field v-model="userInfo.password" label="Password" />
          <v-row class="mt-4">
            <v-btn text to="/forgotInfo">
              Forgot Info?
            </v-btn>
            <v-spacer />
            <v-btn color="info" class="mr-4" to="/signUp">
              Sign Up
            </v-btn>
            <v-btn color="primary" type="submit">
              Login
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
        <p>
          Try Username: 'admin', Password: 'admin'
        </p>
        <v-form @submit="signInUser">
          <v-text-field v-model="userInfo.username" label="Username" />
          <v-text-field v-model="userInfo.password" label="Password" />
          <v-col class="mt-4 text-center">
            <v-btn  class="mb-4" text to="/forgotInfo">
              Forgot Info?
            </v-btn>
            <v-row>
              <v-spacer />
              <v-btn color="info" class="mr-4" to="/signUp">
                Sign Up
              </v-btn>
              <v-btn color="primary" type="submit">
                Login
              </v-btn>
            </v-row>
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
        id: '1',
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters(['errorMsg'])
  },
  methods: {
    signInUser () {
      this.$store.dispatch('signInUser', this.userInfo)
    }
  }
}
</script>