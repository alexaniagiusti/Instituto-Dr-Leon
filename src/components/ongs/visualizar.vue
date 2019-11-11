<template>
    <Ong>
        <v-container fluid style="background-color: #eae9fb">
          {{ ong }}
            <v-container class="mt-0 pt-0" >
                <v-row class="mt-0 pt-0">
                    <v-col class="mt-0 pt-0" cols="12" md="12" xs="12">
                        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                            <v-timeline-item
                            v-for="(item, i) in ong.galeria"
                            :key="i"
                            :color="item.color"
                            :icon="item.icon"
                            fill-dot
                            >
                            <v-card
                                :color="item.color"
                                dark
                            >
                            <v-card-title class="title pa-1">{{item.title}}</v-card-title>
                            <p style="text-align:justify" class="sobreaong white--text pa-4">{{item.sobreaong}}</p>
                            </v-card>
                            </v-timeline-item>
                        </v-timeline>
                    </v-col>
                </v-row>
            </v-container>
            
        </v-container>
    </Ong>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
          ong: {

          },
            fotos: [
                'https://static.wixstatic.com/media/78d3dc_ca3b8200ff67475f9f6c6ba553885616~mv2_d_1280_1280_s_2.png/v1/fill/w_359,h_358,al_c,q_80,usm_0.66_1.00_0.01/9.webp',
                'https://static.wixstatic.com/media/78d3dc_ca3b8200ff67475f9f6c6ba553885616~mv2_d_1280_1280_s_2.png/v1/fill/w_359,h_358,al_c,q_80,usm_0.66_1.00_0.01/9.webp',
                'https://static.wixstatic.com/media/78d3dc_ca3b8200ff67475f9f6c6ba553885616~mv2_d_1280_1280_s_2.png/v1/fill/w_359,h_358,al_c,q_80,usm_0.66_1.00_0.01/9.webp',
                'https://static.wixstatic.com/media/78d3dc_ca3b8200ff67475f9f6c6ba553885616~mv2_d_1280_1280_s_2.png/v1/fill/w_359,h_358,al_c,q_80,usm_0.66_1.00_0.01/9.webp'
            ],
            items: [
                {
                    title: 'Como nasceu o Instituto Vira-Latas:',
                    sobreaong: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    img: 'img/ongs/viralatas/1.png',
                    color: 'red lighten-2',
                    icon: 'mdi-dog'
                },
                {
                    title: 'O abrigo:',
                    color: 'purple darken-1',
                    icon: 'mdi-home-circle',
                },
                {
                    title: 'Quantidade de pets abrigados:',
                    color: 'green lighten-1',
                    icon: 'mdi-dog-side',
                },
                {
                    title: 'Maiores dificuldades para manter o abrigo:',
                    color: 'indigo',
                    icon: 'mdi-buffer',
                },
            ],
        }
    },
    methods: {
      getOng() {
        this.$store.dispatch('charging', true)

        this.$http.get("/ong/"+ this.id)
          .then(res => {
            this.ong = res.data
            this.$store.dispatch('charging', false)
          })
          .catch(e => this.$store.dispatch('snackbar_error', e.response.data.message))
      }
    },
    created() {
      this.getOng()
    }
}
</script>
