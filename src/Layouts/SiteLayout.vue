<template>
  <div>
    <Menu/>
      <slot></slot>
    <Footer/>
  </div>
</template>

<script>
import Menu from '../components/Menu'
import Footer from '../components/Footer'

export default {
  components: {
    Menu,
    Footer,
  },
  data () {
    return {

    }
  }
}
</script>