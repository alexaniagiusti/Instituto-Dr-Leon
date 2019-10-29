import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import Ong from './Layouts/Ong'

Vue.config.productionTip = false

Vue.component('Ong', Ong)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
