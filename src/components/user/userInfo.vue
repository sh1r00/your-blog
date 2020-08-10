<template>
  <v-row width="100vh">
    <v-col width="20%" style="margin: 10% 0 10% 10%; background-color: #03A9F4;">
    </v-col>
    <v-col width="40%" style="margin-right: 10%; padding: 20% 10%;">
      <h1 class="primary--text mb-8 pl-12">
        Please enter your information
      </h1>
      <v-form @submit="updateUserInfo">
        <v-text-field v-model="userInfo.fname" label="First Name" />
        <v-text-field v-model="userInfo.lname" label="Last Name" />
        <v-text-field v-model="userInfo.email" label="Email" />
        <v-text-field v-model="userInfo.mobile" label="mobile" />
        <v-row>
          <v-spacer />
          <v-btn color="success" type="submit">
            Save
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
        fname: '',
        lname: '',
        email: '',
        mobile: ''
      }
    }
  },
  computed: {
    ...mapGetters(['errorMsg'])
  },
  methods: {
    updateUserInfo () {
      this.$store.dispatch('updateUser', this.userInfo)
    }
  }
}
</script>