<template>
<div style="background-color: #fff">
	<v-container style="background-color: #fff">
		<div class="layer-1 wow fadeInUp" data-wow-delay="0.3s">
			<h2 class="title2">Ongs Parceiras!</h2>
		</div>
			<v-row>
					<v-col v-for="item in ongs" :key="item._id" cols="12" md="3" sm="6" xs="12" class="pa-2">
						<v-card
							hover
							:color="item.cor"
							max-width="344"
							class="mx-auto"
						>
						<v-list-item>
							<v-list-item-avatar> <v-img :src="item.avatar"></v-img> </v-list-item-avatar>
							<v-list-item-content>

								<v-list-item-title class="title">
									<h5 class="mt-2" >{{ item.nome }}</h5>
								</v-list-item-title>

							</v-list-item-content>
						</v-list-item>

						<v-img
							:src="item.imgcapa"
							height="194"
						></v-img>

						<v-card-text>
							<p style="text-align: justify" class="black--text"> {{ item.textocapa }} </p>
							<p class="subtitle-1 black--text font-weight-bold">Objetivo: {{ item.objetivo | filterCash}}</p>
						</v-card-text>
						<v-progress-linear
								color="light-blue"
								v-model="salvacao"
								height="25"
								reactive
								striped
							>
							<strong>Arrecadado {{ Math.ceil(item.arrecadado) }}%</strong>
						</v-progress-linear>

						<v-card-actions>
							<v-btn
								style="z-index:40;"
								@click="$router.push('#')"
								text
								color="deep-purple accent-4"
							>
								Contribua
							<v-icon>mdi-charity</v-icon>

							</v-btn>
							<v-btn
								text
								color="deep-purple accent-4"
								@click="$router.push(`/ong/${item._id}`)"
							>
								Saiba mais
								<v-icon>mdi-cursor-default-click</v-icon>
							</v-btn>
							<v-spacer></v-spacer>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
</div>
</template>

<script>
  export default {
    data: () => ({
		ongs: [],
      		gateirostucujus: 0,
			anjosprotetores: 0,
			viralatas: 0,
			salvacao: 0,
	}),
	filters: {
		filterCash(val) {
			function formataDinheiro(n) {
				return "R$ " + n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
			}

			if(!!val) {
				const valFixado = formataDinheiro(val)
				return valFixado
			}
		}
	},
	methods: {
		getOngs () {
			this.$http.get('/ong')
				.then((res) => {
					this.ongs = res.data
				})
				.catch()
		}
	},
	created () {
		this.getOngs()
	}
  }
</script>
