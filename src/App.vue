<template>
  <v-app>
    <SnackbarSuccess />
    <SnackbarError />
    <SnackbarWarning />
    <SnackbarInfo />
    <SnackbarCharging />
    <router-view/>
  </v-app>
</template>

<script>
import SnackbarSuccess from "./components/core/SnackbarSucess.vue";
import SnackbarError from "./components/core/SnackbarError.vue";
import SnackbarWarning from "./components/core/SnackbarWarning.vue";
import SnackbarInfo from "./components/core/SnackbarInfo.vue";
import SnackbarCharging from "./components/core/SnackbarCharging.vue";

export default {
  components: {
    SnackbarSuccess,
    SnackbarError,
    SnackbarCharging,
    SnackbarWarning,
    SnackbarInfo
  },
  data() {
    return {};
  }
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
