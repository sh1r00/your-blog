<template>
  <div style="max-width: 100vw">
    <v-row class="hidden-sm-and-down">
      <div style="height: 60vh; width: 20%; margin: 10% 0 10% 10%; background-color: #03A9F4;" />
      <v-col width="40%" style="margin-right: 10%; padding: 20% 10%;">
        <h3 class="primary--text mb-8 pl-12">
          Please enter your information
        </h3>
        <v-form @submit="updateUserInfo">
          <v-text-field v-model="userInfo.fname" label="First Name" />
          <v-text-field v-model="userInfo.lname" label="Last Name" />
          <v-text-field v-model="userInfo.email" label="Email" />
          <v-text-field v-model="userInfo.mobile" label="mobile" />
          <v-row class="mt-4">
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
    
    <v-row class="hidden-md-and-up pa-0">
      <div style="height: 2.25em; margin: 3em; background-color: #03A9F4;" />
      <v-col class="pr-8">
        <h3 class="primary--text my-8 pl-12">
          Please enter your information
        </h3>
        <v-form @submit="updateUserInfo">
          <v-text-field v-model="userInfo.fname" label="First Name" />
          <v-text-field v-model="userInfo.lname" label="Last Name" />
          <v-text-field v-model="userInfo.email" label="Email" />
          <v-text-field v-model="userInfo.mobile" label="mobile" />
          <v-row class="mt-4">
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
  </div>
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