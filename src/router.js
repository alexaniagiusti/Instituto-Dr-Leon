import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VisualizarOng from './components/ongs/visualizar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ong/:nome',
      name: 'ong',
      component: VisualizarOng,
      props: true
    }
  ]
})
