<template>
  <SiteLayout>
  <!-- Exibição do Menu mobole -->
    <v-app-bar
      style="z-index: 5"
      absolute
      elevate-on-scroll
      class="hidden-sm-and-up"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
      <v-toolbar-title>
       Instituto Dr. Leon
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer absolute v-model="drawer" style="z-index: 6" >
      
      <v-list class="pa-0 ma-0" dense nav>
        <v-list-item @click="" >
          Login
        </v-list-item>

        <v-list-item @click="">
          Inicio
        </v-list-item>

        <v-list-item @click="">
          Parceiros
        </v-list-item>

        <v-list-item @click=""> 
          Missão
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Final da exibição do menu mobile -->
    <Header/>
    <Missao/>
    <Sobre/>
  </SiteLayout>
</template>

<script>
import Header from '../components/Header'
import Missao from '../components/Missao'
import Sobre from '../components/Sobre'
import SiteLayout from '../Layouts/SiteLayout'
export default {
  components: {
    SiteLayout,
    Header,
    Sobre,
    Missao
  },
  data () {
    return {
      drawer: false
    }
  }
};
</script>