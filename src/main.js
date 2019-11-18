import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import axios from 'axios'

import Ong from './Layouts/Ong'
import MoldeAdmin from './Layouts/MoldeAdmin.vue'

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  //baseURL: 'https://leon-backend.herokuapp.com'
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${store.getters.token}`
  }
})

Vue.component('Ong', Ong)
Vue.component('Molde', MoldeAdmin)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
