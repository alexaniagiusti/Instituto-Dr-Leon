<template>
  <v-container class="ma-0 pa-0" fluid >
    <div class="bg" style="display: flex; min-height: 100vh; padding-top: 10%" >
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
  },
  methods: {
    scrollar() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  created() {
    setTimeout(() => this.scrollar(), 340)
  }
}
</script>

<style scoped>

.bg{
	background-image: url(../../public/img/background/bg2.png);
  background-size: 100% 100%;
}

</style>