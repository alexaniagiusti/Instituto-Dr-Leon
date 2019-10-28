import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import VisualizarOng from './components/ongs/visualizar.vue'
import Anjos from './components/ongs/AnjosProtetores.vue'
import Gateiros from './components/ongs/GateirosTucujus.vue'
import Salvacao from './components/ongs/Salvacao.vue'
import ViraLatas from './components/ongs/ViraLata.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ong/anjos-protetores',
      name: 'Anjos',
      component: Anjos,
    },
    {
      path: '/ong/gateiros-tucujus',
      name: 'Gateiros',
      component: Gateiros,
    },
    {
      path: '/ong/salvacao',
      name: 'Salvacao',
      component: Salvacao,
    },
    {
      path: '/ong/vira-latas',
      name: 'Vira-Latas',
      component: ViraLatas,
    }
  ]
})
