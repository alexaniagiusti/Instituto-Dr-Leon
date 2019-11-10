<template>
<div>
<p style="border-top: 2px solid #ccc; padding: 10px;height: 130px;background-color: #fff" class="hidden-sm-and-up font-weight-light headline black--text text-center ma-0">Conheça as Ongs que são parceiras do Instituto Dr. Leon e abrace uma causa!</p>
<p style="padding: 10px;height: 50px; background-color: #eae9fb" class="hidden-sm-and-down font-weight-light headline black--text text-center ma-0">Conheça as Ongs que são parceiras do Instituto Dr. Leon e abrace uma causa!</p>
	<v-container style="background-color: #fff">
			<v-row>
					<v-col v-for="item in ongs" :key="item._id" cols="12" md="3" sm="6" xs="12" class="pa-2">
						<v-card
							hover
							color="pink lighten-5"
							max-width="344"
							class="mx-auto"
						>
						<v-list-item>
							<v-list-item-avatar> <v-img src="img/services/w1.png"></v-img> </v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="title">{{ item.nome }}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>

						<v-img
							src="img/about/gateiros1.jpg"
							height="194"
						></v-img>

						<v-card-text>
							<p style="text-align: justify" class="black--text"> A gateiros tucujus é o 1° grupo de proteção aos gatos do Amapá, atualmente a ONG não possui abrigo e conta com doações para suprir as necessidades dos animais abrigados.</p>
							<p class="subtitle-1 black--text font-weight-bold">Objetivo: {{ item.objetivo }}</p>
						</v-card-text>
						<v-progress-linear
								color="light-blue"
								v-model="salvacao"
								height="25"
								reactive
								striped
							>
							<strong>Arrecadado {{ Math.ceil(gateirostucujus) }}%</strong>
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
								@click="$router.push('/ong/gateiros-tucujus')"
							>
								Saiba mais
								<v-icon>mdi-cursor-default-click</v-icon>
							</v-btn>
							<v-spacer></v-spacer>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
<!-- Final da Coluna que exibe a Ong Anjos Protetores -->
		</v-container>
</div>
</template>

<script>
  export default {
    data: () => ({
		ongs: [],
      gateirostucujus: 4,
			anjosprotetores: 5,
			viralatas: 0,
			salvacao: 0,
	}),
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
