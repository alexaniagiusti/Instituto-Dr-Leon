<template>
  <span>
    <SiteLayout>
      <Menu/>
      <Header/>
      <Causas/>
      <Footer/>
    </SiteLayout>
  </span>
</template>

<script>
import SiteLayout from '../Layouts/SiteLayout'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Causas from '../components/Causas'
import Footer from '../components/Footer'
export default {
  components: {
    SiteLayout,
    Menu,
    Causas,
    Footer
  },
  data () {
    return {

    }
  }
};
</script>
