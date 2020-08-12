<template>
  <div style="max-width: 100vw">
    <v-row class="hidden-sm-and-down">
      <div style="height: 60vh; width: 20%; margin: 10% 0 10% 10%; background-color: #03A9F4;" />
      <v-col width="40%" style="margin-right: 10%; padding: 20% 10%;">
        <h3 class="primary--text mb-8 pl-12">
          Please enter the email associated with your account
        </h3>
        <v-form @submit="forgotInfo">
          <v-text-field v-model="userInfo.email" label="Email" />
          <v-row class="mt-4">
            <v-btn text to="/">
              Back to Sign In
            </v-btn>
            <v-spacer />
            <v-btn color="info" class="mr-4" to="/signUp">
              Sign Up
            </v-btn>
            <v-btn type="submit" color="primary">
              Submit
            </v-btn>
          </v-row>
        </v-form>
        <v-row v-if="errorMsg" justify="center" class="mt-6">
          <p class="error--text">
            {{ errorMsg }}
          </p>
        </v-row>
        <v-row justify="center" class="mt-6">
          <p v-if="successMsg" class="success--text">
            {{ successMsg }}
          </p>
        </v-row>
      </v-col>
    </v-row>

    <v-col class="hidden-md-and-up pa-0">
      <div style="height: 2.25em; margin: 3em; background-color: #03A9F4;" />
      <v-col class="px-6">
        <h3 class="primary--text mb-8 text-center">
          Please enter the email associated with your account
        </h3>
        <v-form @submit="forgotInfo">
          <v-text-field v-model="userInfo.email" label="Email" />
          <v-col class="mt-4 text-center">
            <v-btn class="mb-4" text to="/">
              Back to Sign In
            </v-btn>
            <v-row>
              <v-spacer />
              <v-btn color="info" class="mr-4" to="/signUp">
                Sign Up
              </v-btn>
              <v-btn type="submit" color="primary">
                Submit
              </v-btn>
            </v-row>
          </v-col>
        </v-form>
        <v-row v-if="errorMsg" justify="center" class="mt-6">
          <p class="error--text">
            {{ errorMsg }}
          </p>
        </v-row>
        <v-row justify="center" class="mt-6">
          <p v-if="successMsg" class="success--text">
            {{ successMsg }}
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
        email: ''
      }
    }
  },
  computed: {
    ...mapGetters(['errorMsg', 'successMsg'])
  },
  methods: {
    forgotInfo () {
      const email = this.userInfo.email
      return this.$store.dispatch('forgotInfo', email)
    }
  }
}
</script>