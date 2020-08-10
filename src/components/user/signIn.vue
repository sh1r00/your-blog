<template>
  <v-row height="calc(100vh - 100px);">
    <v-col width="20%" style="margin: 10% 0 10% 10%; background-color: #03A9F4;">
    </v-col>
    <v-col width="40%" style="margin-right: 10%; padding: 20% 10%;">
      <h1 class="primary--text mb-8 pl-12">
        Welcome Back
      </h1>
      <v-form @submit="signInUser">
        <v-text-field v-model="userInfo.username" label="Username" />
        <v-text-field v-model="userInfo.password" label="Password" />
        <v-row>
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