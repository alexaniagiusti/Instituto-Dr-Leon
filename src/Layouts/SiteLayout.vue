<template>
  <div>
    <Menu/>
      <slot></slot>
    <Footer/>
  </div>
</template>

<script>
import Menu from '../components/Menu'

export default {
  components: {
    Menu,
  },
  data () {
    return {

    }
  }
}
</script>