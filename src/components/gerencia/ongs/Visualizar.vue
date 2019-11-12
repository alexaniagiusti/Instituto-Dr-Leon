<template>
  <Molde :title="ong.nome" :options="options" :menu="menu" >
    <div>
        <v-tabs class="mb-0 pb-0" grow v-model="tab">
            <v-tab>
                Informações da Ong
            </v-tab>
            <v-tab>
                 Galeria
            </v-tab>
        </v-tabs>
        <v-divider class="mt-0 pt-0"></v-divider>


        <v-tabs-items class="mt-3" v-model="tab">
            <v-tab-item>
                <div class="pa-0 semQuebra expande-horizontal" >
                    <v-flex class="pa-2" xs6>
                        <v-text-field outlined label="Nome" v-model="ong.nome"></v-text-field>
                    </v-flex>
                    <v-flex  class="pa-2" xs6>
                        <v-text-field outlined label="Objetivo em R$ a ser alcançado" prefix="R$" v-model="ong.objetivo"></v-text-field>
                    </v-flex>
                </div>
                
                <div class="pa-0 semQuebra expande-horizontal" >
                    <v-flex  class="pa-2" xs6>
                        <v-text-field outlined label="Avatar img" v-model="ong.avatar"></v-text-field>
                    </v-flex>
                    <v-flex class="pa-2" xs6>
                        <v-text-field outlined label="Img Capa" prefix="link" v-model="ong.imgcapa"></v-text-field>
                    </v-flex>
                </div>
                
                <div class="pa-0 semQuebra expande-horizontal" >
                    <v-flex  class="pa-2" xs6>
                        <v-text-field outlined label="Cor da ong" v-model="ong.cor"></v-text-field>
                    </v-flex>
                </div>
                
                <div class="pa-0 semQuebra expande-horizontal" >
                    <v-flex class="pa-2" xs12>
                        <v-textarea outlined label="Texto da Capa" v-model="ong.textocapa"></v-textarea>
                    </v-flex>
                </div>
            </v-tab-item>

            <v-tab-item>
                <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                    <v-timeline-item
                    v-for="(item, i) in ong.galeria"
                    :key="i"
                    :color="ong.galeria[i].cor"
                    :icon="ong.galeria[i].icon"
                    fill-dot
                    >
                    <v-card
                        :color="ong.galeria[i].cor"
                        class="pa-2"
                    >
                      <v-card-title class="title pa-1">
                          <v-text-field label="Titulo" outlined v-model="ong.galeria[i].titulo"></v-text-field>
                      </v-card-title>
                      <v-textarea label="texto" v-model="ong.galeria[i].texto" outlined ></v-textarea>
                          <v-text-field label="Icone" outlined v-model="ong.galeria[i].icon"></v-text-field>
                          <v-text-field label="Foto" outlined v-model="ong.galeria[i].foto"></v-text-field>
                          <v-text-field label="Cor" outlined v-model="ong.galeria[i].cor"></v-text-field>
                    </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-tab-item>
        </v-tabs-items>
    </div>
  </Molde>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
	directives: {
		mask
    },
    props: ['id'],
	data() {
		return {
			masks: {
			},
			options: [
				{
					icon: 'mdi-arrow-left',
					nome: 'Voltar',
					action: () => this.$router.go(-1)    
				},
				{
					icon: 'mdi-content-save',
					nome: 'Salvar Alterações',
					action: () => this.saveOng()  
                },
                {
                    icon: 'mdi-plus',
                    nome: 'Adicionar item a Galeria',
                    action: () => {
                        this.tab = 1
                        this.ong.galeria.push({
                            icon: '',
                            titulo: '',
                            foto: '',
                            texto: '',
                            cor: ''
                        })
                    }
                }
			],
			tab: 0,
			ong: {
                nome: 'carregando...',
                galeria: []
			}
		}
	},
	methods: {
        getOng() {
            this.$store.dispatch('charging', true)

			this.$http.get(`/ong/`+this.id, this.ong)
				.then((res) => {
                    this.$store.dispatch('charging', false)
                    this.ong = res.data
				})
				.catch(e => this.$store.dispatch('snackbar_error', e.response.data.message))
        },
        saveOng() {
			this.$store.dispatch('charging', true)

			this.$http.put(`/ong/` + this.id, this.ong)
				.then(() => {
					this.$store.dispatch('snackbar_success', 'Ong Atualizada'),
					this.$store.dispatch('charging', false),
					this.$router.go(-1)
				})
				.catch(e => this.$store.dispatch('snackbar_error', e.response.data.message))
        }
    },
    created() {
        this.getOng()
    }
}
</script>

<style>
    .semQuebra {
        display: flex;
        flex-wrap: nowrap
    }

    .expande-horizontal {
        width: 100%;
    }
</style>