<template>
  <SiteLayout>
    <Header/>
    <Sobre/>
    <Footer/>
  </SiteLayout>
</template>

<script>
import Header from '../components/Header'
import Sobre from '../components/Sobre'
import Footer from '../components/Footer'
import SiteLayout from '../Layouts/SiteLayout'
export default {
  components: {
    SiteLayout,
    Header,
    Sobre,
    Footer
  },
  data () {
    return {

    }
  }
};
</script>

<style>
