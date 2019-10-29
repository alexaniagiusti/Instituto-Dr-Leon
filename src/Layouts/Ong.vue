<template>
  <div>
    <MenuOng/>
    <div style="display: flex; min-height: 100vh; padding-top: 10%" >
      <slot></slot>
    </div>
    <Footer />
  </div>
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