import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(BootstrapVue)

Vue.use(Buefy)



new Vue({
  el: '#app',
  render: h => h(App)
})