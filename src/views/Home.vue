<template>
  <span>
    <SiteLayout>
      <Header/>
      <Sobre/>
    </SiteLayout>
  </span>
</template>

<script>
import SiteLayout from '../Layouts/SiteLayout'
import Header from '../components/Header'
import Sobre from '../components/Sobre'
export default {
  components: {
    SiteLayout,
    Header,
    Sobre
  },
  data () {
    return {

    }
  }
};
</script>
