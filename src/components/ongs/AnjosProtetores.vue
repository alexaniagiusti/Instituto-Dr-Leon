<template>
    <Ong>
        <v-container fluid style="background-color: #eae9fb">
            <v-row justify="center">
                <v-col cols="12" md="5" class="ml-5 pa-5" xs="12">
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

                <v-col class="pa-5" cols="12" md="6" xs="12">
                    <iframe width="100%" height="480" src="https://www.youtube.com/embed/wxHs0WD8czA" frameborder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </v-col>

                <v-col v-for="foto in fotos" :key="foto" cols="12" md="4" xs="12">
                    <v-card>
                    <v-img :src="foto"></v-img>
                    </v-card>
                </v-col>
            </v-row>
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
            ]
        }
    }
}
</script>
