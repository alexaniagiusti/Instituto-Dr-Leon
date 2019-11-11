<template>
<div style="background-color: #fff">
<div class="missao-mobile hidden-sm-and-up" style="background: #fff">
  <v-container class="" style="background: #fff">
    <v-row>
      <v-col cols="12">
        <div class="layer-1 wow fadeInUp" data-wow-delay="0.3s">
          <h2 class="title2">Missão</h2>
        </div>
        <div class="support-services wow fadeInUp" data-wow-delay="0.3s">
                <div class="support-content pa-4 ma-0">
                  <img class="mb-3" src="img/about/ab.png" alt="">
                  <h4><a href="#" class="mt-4">1ª Aventura do Dr Leon.</a></h4>
                  <p style="text-align: justify;" class="black--text">Nossa missão é ajudar Ogns que protegem animais maltratados por todo o país, começando pela nossa cidade Macapá, mas para isso precisamos da sua ajuda, nosso objetivo inicial é ajudar as nossas <a href="#">Ongs Parceiras</a> a quitarem as suas dívidas em clínicas veterinárias, dívidas essas que foram contraídas devido ao trabalho incansável e resgate de animais de rua. 
                  As Ongs beneficiadas com a 1ª aventura do Dr. Leon são:
                  </p>
                  <p class="mt-4 black--text">
                  <v-icon>mdi-paw</v-icon> Gateiros Tucujus: Dívida de 3.500.
                  </p>
                  <p class="mt-4 black--text">
                  <v-icon>mdi-paw</v-icon> Ong Salvação: Dívida de 8 mil reais.
                  </p>
                  <p class="mt-4 black--text">
                  <v-icon>mdi-paw</v-icon> Ong Vira-Latas: Dívida de 5 mil reais.
                  </p>
                  <p class="mt-4 black--text">
                  <v-icon>mdi-paw</v-icon> Ong Anjos Protetores: Dívida de 8 mil reais
                  </p>
                  <v-btn class="mt-4" color="blue" @click="contribua = true" block><span class="white--text">Contribua</span><v-icon color="white" class="ma-2">mdi-charity</v-icon> </v-btn>
                </div>
              </div>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog width="800" v-model="contribua">
    <v-flex xs12>
      <v-card></v-card>
      <v-card>
          <div style="display: flex; flex-direction: row; flex-wrap: wrap">
            <v-flex class="pa-1" xs12 md4>
              <v-card class="cardPayment">
                <div style="flex-direction: column; display: flex; width: 100%; align-items: center; justify-content: center">
                  <div>
                    <span>R$</span>
                    <h3>{{valorPersonalizado}},00</h3>
                  </div>
                </div>

                <div class="pa-4" style="flex-direction: column; display: flex; width: 100%; align-items: center; justify-content: center">
                  <v-text-field outlined  v-model="valorPersonalizado" label="Personalize aqui o valor" />
                </div>

                <div class="pa-4" style="flex-direction: column; display: flex; width: 100%; align-items: center; justify-content: center">
                  <div>
                    <v-icon color="yellow darken-3">
                      mdi-star
                    </v-icon>
                    <v-icon v-if="valorPersonalizado >= 50" color="yellow darken-3">
                      mdi-star
                    </v-icon>
                    <v-icon v-if="valorPersonalizado >= 500" color="yellow darken-3">
                      mdi-star
                    </v-icon>
                    <span class="font-italic text-justify grey--text" >
                      Contribua e tenha a certeza que uma vida será salva com a sua ajuda.
                    </span>
                  </div>
                </div>
                
                <div style="flex-direction: column; display: flex; width: 100%; align-items: center; justify-content: center">
                  <div>
                    <v-btn @click="contribuirPaypal(500)" text color="green" >
                      <span>Contribuir</span>
                      <v-icon>mdi-charity</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-flex>

            <v-flex class="pa-1" xs12 md4>
              <v-card class="pt-5 cardPayment">
                <div style="flex-direction: column; display: flex; width: 100%; align-items: center; justify-content: center">
                  <div>
                    <span>R$</span>
                    <h3>50,00</h3>
                  </div>
                </div>
                
                <div class="pa-4" style="flex-direction: column; display: flex; width: 100%; align-items: center; justify-content: center">
                  <div>
                    <v-icon color="yellow darken-3">
                      mdi-star
                    </v-icon>
                    <v-icon color="yellow darken-3">
                      mdi-star
                    </v-icon>
                    <span class="font-italic text-justify grey--text" >
                      Com esta contribuição, você ganha o certificado de amigo dos animais assinado pelo Dr.Leon. <a> Veja </a>
                    </span>
                  </div>
                </div>
                
                <div style="flex-direction: column; display: flex; width: 100%; align-items: center; justify-content: center">
                  <div>
                    <v-btn @click="contribuirPaypal(50)" block text color="green" >
                      <span >Contribuir</span>
                      <v-icon>mdi-charity</v-icon>
                    </v-btn>
                  </div>
                </div>
                
              </v-card>
            </v-flex>
            
            <v-flex class="pa-1" xs12 md4>
              <v-card class="pt-5 cardPayment">
                <div style="flex-direction: column; display: flex; width: 100%; align-items: center; justify-content: center">
                  <div>
                    <span>R$</span>
                    <h3>500,00</h3>
                  </div>
                </div>
                
                <div class="pa-4" style="flex-direction: column; display: flex; width: 100%; align-items: center; justify-content: center">
                  <div>
                    <v-icon color="yellow darken-3">
                      mdi-star
                    </v-icon>
                    <v-icon color="yellow darken-3">
                      mdi-star
                    </v-icon>
                    <v-icon color="yellow darken-3">
                      mdi-star
                    </v-icon>
                    <span class="font-italic text-justify grey--text" >
                      Contribuindo com esta quantia, você terá sua foto no mural de amigo dos animais no site do Dr.Leon.
                    </span>
                  </div>
                </div>
                
                <div style="flex-direction: column; display: flex; width: 100%; align-items: center; justify-content: center">
                  <div>
                    <v-btn @click="contribuirPaypal(500)" block text color="green" >
                      <span>Contribuir</span>
                      <v-icon>mdi-charity</v-icon>
                    </v-btn>
                  </div>
                </div>
                
              </v-card>
            </v-flex>
          </div>
      </v-card>
    </v-flex>
  </v-dialog>

</div>

  <!-- Container de exibição para desktop -->
      <v-container>
        <v-row>
          <v-col cols="12" md="6" sm="6" xs="12" class="hidden-sm-and-down">
            <div class="layer-1 wow fadeInUp" data-wow-delay="0.3s">
              <h2 class="title2">Missão</h2>
            </div>
          
          <img  src="img/about/ab.png" alt="">
          </v-col>
          <v-col cols="12" md="6" sm="6" xs="12">
            <div class="support-all">
            <!-- Start services -->
              <div class="support-services wow fadeInUp" data-wow-delay="0.3s">
                <div class="support-content pa-4 ma-0">
                  <img class="mb-3 hidden-sm-and-up" src="img/about/ab.png" alt="">
                  <h4>1ª Aventura do Dr Leon.</h4>
                  <div class="layer-2 wow fadeInUp" data-wow-delay="0.5s">
                  <p style="text-align: justify;" class="black--text">Nossa missão é ajudar Ogns que protegem animais maltratados por todo o país, começando pela nossa cidade Macapá, mas para isso precisamos da sua ajuda, nosso objetivo inicial é ajudar as nossas <a href="#">Ongs Parceiras</a> a quitarem as suas dívidas em clínicas veterinárias, dívidas essas que foram contraídas devido ao trabalho incansável e resgate de animais de rua. 
                  As Ongs beneficiadas com a 1ª aventura do Dr. Leon são:
                  </p>
                  </div>
                  <p class="mt-4 black--text">
                  <v-icon>mdi-paw</v-icon> Gateiros Tucujus: Dívida de 3.500.
                  </p>
                  <p class="mt-4 black--text">
                  <v-icon>mdi-paw</v-icon> Ong Salvação: Dívida de 8 mil reais.
                  </p>
                  <p class="mt-4 black--text">
                  <v-icon>mdi-paw</v-icon> Ong Vira-Latas: Dívida de 5 mil reais.
                  </p>
                  <p class="mt-4 black--text">
                  <v-icon>mdi-paw</v-icon> Ong Anjos Protetores: Dívida de 8 mil reais.
                  </p>
                  <p class="mt-4"><a @click="scrollar(1450)"> <v-icon>mdi-arrow-down</v-icon> Saiba mais sobre nossos Parceiros</a></p>
                  <v-btn class="mt-4" color="blue" @click="contribua=true" block><span class="white--text">Contribua</span><v-icon color="white" class="ma-2">mdi-charity</v-icon> </v-btn>
                </div>
              </div>
            </div>
          </v-col>     
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      valorPersonalizado: 20,
      contribua: false
    }
  },
  methods: {
        scrollar(to) {
        window.scrollTo({
            top: to,
            behavior: 'smooth'
        })
    },
    contribuirPaypal(valor) {
      this.$store.dispatch('charging', true)

      const dados = {
        valor: valor,
        cpf: '',
        email: ''
      }

      this.$http.post('/payment', valor)
        .then(res => {
          location.replace(`${res.data.links[1].href}`)
        })
        .catch(err => {
          this.$store.dispatch('snackbar_error', 'Verifique sua conexão com a internet e tente novamente.')
        })
    }
  }
}
</script>>

<style scoped>
#background-missao {
background-color: #fff;

}

.cardPayment {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f2f2f2;
  border-radius: 6px;
  flex-direction: column;
  min-height: 250px;
}
</style>