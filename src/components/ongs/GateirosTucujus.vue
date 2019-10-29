<template>
  <div class="layout">
    <div class="bg-wrapper">
        <img src="img/background/bg1.png" alt="">
    </div>
    <Menu />
  </div>
</template>

<script>
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
export default {
  components: {
    Menu
  }
}

</script>

<style>
  .layout {
    display: flex;
    width: 100%;
    min-height: 100vh;
  }
</style>