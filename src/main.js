import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

import Ong from './Layouts/Ong'
import MoldeAdmin from './Layouts/MoldeAdmin.vue'

Vue.config.productionTip = false

Vue.component('Ong', Ong)
Vue.component('Molde', MoldeAdmin)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
