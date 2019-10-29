<template>
  <v-container class="ma-0 pa-0" fluid >
    <div style="display: flex; min-height: 100vh; padding-top: 10%" >
    <MenuOng/>
      <slot></slot>
    </div>
    <Footer />
  </v-container>
</template>
<script>
import MenuOng from '../components/MenuOng'
import Footer from '../components/Footer'
export default {
  components: {
    MenuOng,
    Footer
  }
}
</script>