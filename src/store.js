import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar_error: {
      mostrar: false,
      mensagem: ""
    },
    snackbar_success: {
      mostrar: false,
      mensagem: ""
    },
    snackbar_warning: {
      mostrar: false,
      mensagem: ""
    },
    snackbar_info: {
      mostrar: false,
      mensagem: ""
    },
    charging: {
      mostrar: false
    },
    drawer: true
  },
  mutations: {
    desativa_snackbar(state) {
      state.snackbar_success = {
        mostrar: false,
        mensagem: '',
      };
      state.snackbar_error = {
        mostrar: false,
        mensagem: '',
      };
      state.snackbar_warning = {
        mostrar: false,
        mensagem: '',
      };
      state.snackbar_info = {
        mostrar: false,
        mensagem: '',
      };
    },
    snackbar_error(state, mensagem) {
      state.snackbar_error = {
        mostrar: true,
        mensagem,
      };
    },
    snackbar_success(state, mensagem) {
      state.snackbar_success = {
        mostrar: true,
        mensagem,
      };
    },
    snackbar_warning(state, mensagem) {
      state.snackbar_warning = {
        mostrar: true,
        mensagem,
      };
    },
    snackbar_info(state, mensagem) {
      state.snackbar_info = {
        mostrar: true,
        mensagem,
      };
    },
    charging(state, boleano) {
      state.charging = {
        mostrar: boleano
      }
    },
    drawer(state, boleano) {
      state.drawer = false
      setTimeout(() => state.drawer = true, 200)
    }
  },
  actions: {
    desativa_snackbar(state) {
      state.commit('desativa_snackbar');
    },
  
    snackbar_error(state, mensagem) {
      state.commit('snackbar_error', mensagem);
    },
  
    snackbar_success(state, mensagem) {
      state.commit('snackbar_success', mensagem);
    },
  
    snackbar_warning(state, mensagem) {
      state.commit('snackbar_warning', mensagem);
    },
  
    snackbar_info(state, mensagem) {
      state.commit('snackbar_info', mensagem);
    },
  
    charging(state, boleano) {
      state.commit('charging', boleano);
    },
  
    drawer(state, boleano) {
      state.commit('drawer', boleano)
    }
  },
  getters: {
    snackbar_success(state) {
      return state.snackbar_success;
    },
    snackbar_error(state) {
      return state.snackbar_error;
    },
    snackbar_warning(state) {
      return state.snackbar_warning;
    },
    snackbar_info(state) {
      return state.snackbar_info;
    },
    charging(state) {
      return state.charging;
    },
    drawer(state) {
      return state.drawer
    }
  }
})
