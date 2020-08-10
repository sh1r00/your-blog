<template>
  <v-row width="100vh">
    <v-col width="20%" style="margin: 10% 0 10% 10%; background-color: #03A9F4;">
    </v-col>
    <v-col width="40%" style="margin-right: 10%; padding: 20% 10%;">
      <h3 class="primary--text mb-8 pl-12">
        Please enter the email associated with your account
      </h3>
      <v-form @submit="forgotInfo">
        <v-text-field v-model="userInfo.email" label="Email" />
        <v-row>
          <v-spacer />
          <v-btn color="info" class="mr-4" to="/signUp">
            Sign Up
          </v-btn>
          <v-btn type="submit" color="primary" @click="forgotInfo">
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