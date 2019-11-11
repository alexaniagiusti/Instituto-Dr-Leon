<template>
  <div>
    <v-navigation-drawer class="elevation-3" v-model="drawer" app clipped width="250">
      <v-card class="elevation-0" style="border-radius: 0px;" color="white">
        <div style="display: flex; width: 100%; align-items: center; flex-direction: column">
          <div style="display: flex">
            <img
              class="mb-1 mt-3"
              src="/img/logo/logo2.png"
              alt="logo"
              height="40"
            />
          </div>
          <h6 class="black--text grey--text text-uppercase">Administração</h6>
        </div>
      </v-card>
      <v-list nav dense>

        <v-subheader>Gerenciamento</v-subheader>

        <v-list-item active-class="menuAtivo" to="/gerencia/ong-listar">
          <v-avatar>
            <v-icon color="blue accent-3">mdi-dog-side</v-icon>
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title class="grey--text">Ongs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item active-class="menuAtivo" to="/gerencia/pagamento-listar">
          <v-avatar>
            <v-icon color="red accent-3">mdi-hand-heart</v-icon>
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title class="grey--text">Pagamentos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item active-class="menuAtivo" to="/gerencia/pagamento-listar">
          <v-avatar>
+          </v-avatar>
          <v-list-item-content>
            <v-list-item-title class="grey--text">Sair</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-content>
      <transition name="router-anim" >
        <router-view></router-view>
      </transition>
    </v-content>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  computed: {
    drawer() {
      return this.$store.getters.drawer
    }
  }
};
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}

::-webkit-scrollbar {
  width: 2px;
  border-radius: 10px;
  background: rgba(180, 179, 179, 0);
}
::-webkit-scrollbar-thumb {
  background: rgb(232, 245, 51);
  border-radius: 10px;
}

.menuAtivo {
  color: #ffffff;
  border-radius: 5px;
  margin-right: 5px;
  font-weight: bold;
}

  .router-anim-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.4s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    scale: 1;
    opacity: 1;
  }
  to {
    scale: 0.7;
    opacity: 0.1;
  }
}

@keyframes coming {
  from {
    scale: 0.7;
    opacity: 0.1;
  }
  to {
    scale: 1;
    opacity: 1;
  }
}
</style>