<template>
  <Molde title="Cadastrar nova ong" :options="options" :menu="menu" >
    <div>
        <div class="semQuebra expande-horizontal" >
            <v-flex class="pa-2" xs6>
                <v-text-field outlined label="Nome" v-model="ong.nome"></v-text-field>
            </v-flex>
            <v-flex  class="pa-2" xs6>
                <v-text-field outlined label="Objetivo em R$ a ser alcançado" prefix="R$" v-model="ong.objetivo"></v-text-field>
            </v-flex>
        </div>
    </div>
  </Molde>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
	directives: {
		mask
	},
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
					icon: 'mdi-save',
					nome: 'Salvar Alterações',
					action: () => this.saveOng()  
				},
			],
			tab: 0,
			ong: {
			}
		}
	},
	methods: {
		saveUser() {
			this.$store.dispatch('charging', true)

			this.$http.post(`/ong`, this.ong)
				.then(() => {
					this.$store.dispatch('snackbar_success', 'Ong Cadastrada'),
					this.$store.dispatch('charging', false),
					this.$router.go(-1)
				})
				.catch(e => this.$store.dispatch('snackbar_error', e.response.data.message))
		}
	}
}
</script>