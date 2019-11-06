import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
//import VisualizarOng from './components/ongs/visualizar.vue'
import Anjos from './components/ongs/AnjosProtetores.vue'
import Gateiros from './components/ongs/GateirosTucujus.vue'
import Salvacao from './components/ongs/Salvacao.vue'
import ViraLatas from './components/ongs/ViraLata.vue'

import Gerencia from './views/Gerencia'

//rotas de criação e edição de ongs
import FormOng from './components/gerencia/ongs/Form'
import ListarOng from './components/gerencia/ongs/Listar'

//rotas pagamentos
import ListarPagamento from './components/gerencia/pagamentos/Listar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/gerencia',
      name: 'gerencia',
      component: Gerencia,
      children: [
        {
          path: '/gerencia/ong-listar',
          component: ListarOng
        },
        {
          path: '/gerencia/ong-form',
          component: FormOng
        },
        {
          path: '/gerencia/ong-form/:id',
          component: FormOng,
          props: true
        },
        {
          path: '/gerencia/pagamento-listar',
          component: ListarPagamento
        }
      ]
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
