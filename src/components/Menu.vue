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
                            </div>
                            <!-- logo end -->
                        </div>
                        <div class="col-md-9 col-sm-9">
                            <div class="header-right-link">
                                <!-- search option end -->
                        <a  style="color:white" class="s-menu" @click="goToLogin">Login</a>
                            </div>
                            <!-- mainmenu start -->
                            <nav class="navbar navbar-default">
                                <div class="collapse navbar-collapse" id="navbar-example">
                                    <div class="main-menu">
                                        <ul class="nav navbar-nav navbar-right">
                                            <li><a class="pagess" @click="$router.push('/')">Início</a></li>
                                            <li><a @click="scrollar(770)">Missão</a></li>
                                            <li><a @click="scrollar(1420)">Parceiros</a>
                                                <ul class="sub-menu">
                                                    <li><a @click="$router.push('/ong/5dc852c4e105bf00170739a2')">Gateiros Tucujus</a></li>
                                                    <li><a @click="$router.push('/ong/5dc85332e105bf00170739a3')">Salvação</a></li>
                                                    <li><a @click="$router.push('/ong/5dc85436e105bf00170739a4')">Vira-Latas</a></li>
                                                    <li><a @click="$router.push('/ong/5dc854e3e105bf00170739a5')">Anjos Protetores</a></li>
                                                </ul>
                                            </li>
                                            <li><a @click="scrollar(2000)">Redes Sociais</a></li>
                                            <li><a>Amigos do Instituto</a></li>
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
            x: 0,
        }
    },
    methods: {
        goToHome() {
            this.$router.push('/')
        },
        goToLogin () {
            this.$router.push('/login')
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
