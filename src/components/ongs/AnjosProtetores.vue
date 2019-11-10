<template>
    <Ong>
        <v-container fluid style="background-color: #eae9fb">
            <v-row class="mb-0 pb-0" justify="center">
                <v-col cols="12" md="5" class="ml-5 mb-0 pb-0" xs="12">
                    <div style="display: flex; flex-direction: row; align-items: flex-end; margin-bottom: 16px" >
                        <v-avatar size="80">
                            <v-img  src="img/services/w4.png" alt="logo"/>
                        </v-avatar>

                        <h5 class="ml-2 mb-2">Anjos Protetores</h5>    
                        
                    </div>

                    <p class="mb-5" style="text-align: justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna neque viverra justo nec. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Massa tempor nec feugiat nisl pretium fusce id velit ut. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Mollis nunc sed id semper. Sit amet nulla facilisi morbi tempus iaculis. Sit amet nulla facilisi morbi tempus. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Porta lorem mollis aliquam ut porttitor leo a. Venenatis lectus magna fringilla urna. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Habitant morbi tristique senectus et netus et malesuada.
                    </p>
                    
                    <div style="display: flex; flex-direction: column; align-items: flex-end; margin-bottom: 16px" >
                        <v-btn color="green" large><span class="white--text">Seja um apoiador</span><v-icon color="white" class="ml-2 mb-1" size="20" >mdi-hand-heart</v-icon></v-btn>
                    </div>
                </v-col>

                <v-col class="pa-5 pb-0" cols="12" md="6" xs="12">
                    <v-img src="https://static.wixstatic.com/media/78d3dc_cc7dfd1ebd184234ae51d7f05d501536~mv2.jpeg/v1/fill/w_395,h_282,al_c,q_80,usm_0.66_1.00_0.01/WhatsApp%20Image%202019-10-15%20at%2015_59_19_jp.webp" width="600"></v-img>
                </v-col>
                <!-- <v-col v-for="foto in fotos" :key="foto" cols="12" md="4" xs="12">
                    <v-card>
                    <v-img :src="foto"></v-img>
                    </v-card>
                </v-col> -->
            </v-row>

            <v-container class="mt-0 pt-0" >
                <v-row class="mt-0 pt-0">
                    <v-col class="mt-0 pt-0" cols="12" md="12" xs="12">
                        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                            <v-timeline-item
                            v-for="(item, i) in items"
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
    data() {
        return {
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
    }
}
</script>
