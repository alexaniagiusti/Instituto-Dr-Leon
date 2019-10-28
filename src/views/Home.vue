<template>
  <SiteLayout>
    <v-app-bar
      style="z-index: 5"
      absolute
      class="hidden-sm-and-up"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
      <v-toolbar-title>
        Dr. Leon
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer absolute v-model="drawer" style="z-index: 6" >
      
      <v-list class="pa-0 ma-0" dense nav>
        <v-list-item @click="" >
          Login
        </v-list-item>

        <v-list-item @click="">
          Início
        </v-list-item>

        <v-list-item @click="">
          Sobre
        </v-list-item>

        <v-list-item @click="">
          Parceiros
        </v-list-item>

        <v-list-item @click=""> 
          Contato
        </v-list-item>

        <v-list-item @click="">
          Galeria
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <Header/>
    <Sobre/>
  </SiteLayout>
</template>

<script>
import Header from '../components/Header'
import Sobre from '../components/Sobre'
import SiteLayout from '../Layouts/SiteLayout'
export default {
  components: {
    SiteLayout,
    Header,
    Sobre,
  },
  data () {
    return {
      drawer: false
    }
  }
};
</script>

<style>
