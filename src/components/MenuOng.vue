<template>
<div class="menu-ong">
    <header class="header-one">
        <!-- header-area start -->
        <div id="sticker" class="header-area hidden-xs">
            <div class="container">
                <div class="row">
                    <!-- logo start -->
                    <div class="col-md-3 col-sm-3">
                        <div class="logo">
                            <!-- Brand -->
                            <a class="navbar-brand page-scroll black-logo" @click="goToHome">
                                <img src="img/logo/logo2.png">
                            </a>
                            <a class="navbar-brand page-scroll white-logo" href="#">
                                <img src="img/logo/logo2.png" alt="">
                            </a>
                        </div>
                        <!-- logo end -->
                    </div>
                    <div class="col-md-9 col-sm-9">
                        <div class="header-right-link">
                            <!-- search option end -->
                    <a  style="color:white" class="s-menu" href="#">Login</a>
                        </div>
                        <!-- mainmenu start -->
                        <nav class="navbar navbar-default">
                            <div class="collapse navbar-collapse" id="navbar-example">
                                <div class="main-menu">
                                    <ul class="nav navbar-nav navbar-right">
                                        <li><a class="pagess" @click="goToHome()">Início</a></li>
                                        <li><a>Parceiros</a>
                                            <ul class="sub-menu">
                                                <li><a href="index-2.html">Gateiros Tucujus</a></li>
                                                <li><a href="index-3.html">Salvação</a></li>
                                                <li><a href="index-3.html">Vira-Latas</a></li>
                                                <li><a href="index-3.html">Anjos Protetores</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="pagess" @click="goToHome()">Rodapé</a></li>
                                        <li><a class="pagess" @click="goToHome()">Amigos do Instituto</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <!-- mainmenu end -->
                    </div>
                </div>
            </div>
        </div>
        <!-- header-area end -->
    </header>		
    <!-- header end -->
</div>
</template>

<script>
export default {
    methods: {
        goToHome() {
            this.$router.push('/')
        },
        scrollar(to) {
            window.scrollTo({
                top: to,
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style scoped>
  .main-menu ul.navbar-nav li a {
      color: #fff;
      font-size: 15px;
      font-weight: 500;
      padding: 40px 15px;
      text-transform: capitalize;
      position: relative;
  }
  .main-menu ul.navbar-nav li.active a {
    background: rgba(15, 235, 15, 0) none repeat scroll 0 0;
    color: rgb(14, 236, 32);
    position: relative;
    z-index: 9999999;
}

.header-area{
	background-image: url(../../public/img/background/bg1.png);
}
</style>