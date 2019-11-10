<template>
  <v-dialog
    width="300"
    persistent
    fullscreen
    transition="fade"
    elevation="0"
    style="overflow: hidden; z-index: 1000"
    v-model="charging.mostrar"
  >
    <v-card class="pa-3" elevation="0" style="background-color: rgba(0,0,0,0.3) ;display: flex; width: 100%; height: 100vh; justify-content: center; align-items: center; overflow: hidden; border-radius: 10px;" light width="300">
      <div class="meio">
        <v-flex xs12>
          <div style="display: flex; justify-content: center; width: 100%">
            <v-avatar size="54" class="elevation-1 bounceInUp snack" color="white">
              <v-progress-circular size="48" indeterminate color="green"></v-progress-circular>
            </v-avatar>
          </div>
        </v-flex>
        <v-flex class="mt-3 mb-3" xs12>
          <h5 class="text-center white--text"> Carregando dados, um momento... </h5>
        </v-flex>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    charging() {
      return this.$store.getters.charging;
    },
  }
};
</script>
