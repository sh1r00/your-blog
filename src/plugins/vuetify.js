import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    primary: '#03A9F4',
    secondary: '#03A9F4',
    accent: '#FF5722',
    error: '#ff4444',
    warning: '#ffbb33',
    info: '#0099CC',
    success: '#00C851'
  }
}

export default new Vuetify(opts)
