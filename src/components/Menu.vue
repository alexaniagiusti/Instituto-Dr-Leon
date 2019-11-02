<template>
<div>
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
                                            <li><a class="pagess" @click="$router.push('/')">Início</a></li>
                                            <li><a @click="scrollar(780)">Parceiros</a></li>
                                            <li><a @click="scrollar(980)">Missão</a></li>
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
    data() {
        return {
            x: 0
        }
    },
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