<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style>
  .titulo {
    font-family: 'Indie Flower', cursive;
    font-size: 24pt;
  }
  .corpo {
    font-family: 'Open Sans', sans-serif;
    font-size: 14pt;
  }
</style>
