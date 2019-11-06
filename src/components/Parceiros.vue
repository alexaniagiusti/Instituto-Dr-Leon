<template>
	<div>
		<div class="layer-2 wow fadeInUp" data-wow-delay="0.5s">
			<p style="padding: 10px;height: 50px; background-color: #eae9fb" class="headline black--text text-center ma-0">Conheça as Ongs que são parceiras do Instituto Dr. Leon e abrace uma causa!</p>
		</div>
		<v-container class="mt-5">
			<v-row>
					<v-col cols="12" md="3" sm="6" xs="12" class="all-services">
						<v-card
							hover
							color="pink lighten-5"
							max-width="344"
							class="mx-auto"
						>
						<v-list-item>
							<v-list-item-avatar> <v-img src="img/services/w1.png"></v-img> </v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="title">Gateiros Tucujus</v-list-item-title>
							</v-list-item-content>
						</v-list-item>

						<v-img
							src="img/about/gateiros1.jpg"
							height="194"
						></v-img>

						<v-card-text>
							<p style="text-align: justify" class="black--text"> A gateiros tucujus é o 1° grupo de proteção aos gatos do Amapá, atualmente a ONG não possui abrigo e possui uma divida de R$ 3.055,80 em clínicas veterinárias.</p>
						</v-card-text>
						<v-progress-linear
								color="light-blue"
								v-model="salvacao"
								height="25"
								reactive
								striped
							>
							<strong>{{ Math.ceil(gateirostucujus) }}%</strong>
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
				<v-col cols="12" md="3" sm="6" xs="12" class="all-services">
					<v-card
							color="lime lighten-4"
							hover
							max-width="344"
							class="mx-auto"
						>
						<v-list-item>
							<v-list-item-avatar> <v-img src="img/services/w2.png"></v-img> </v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="title">Ong Salvação</v-list-item-title>
							</v-list-item-content>
						</v-list-item>

						<v-img
							src="img/about/salvacao1.jpg"
							height="194"
						></v-img>

						<v-card-text>
							<p style="text-align: justify" class="black--text">a ONG Salvação resgata animais nas cidades de Santana e Macapá, possui mais de 100 animais entre cães e gatos. Sua dívida em clínicas veterinárias é de R$ 8.000</p>
						</v-card-text>
						<v-progress-linear
								color="light-blue"
								v-model="salvacao"
								height="25"
								reactive
								striped
							>
							<strong>{{ Math.ceil(gateirostucujus) }}%</strong>
						</v-progress-linear>

						<v-card-actions>
							<v-btn
								text
								color="deep-purple accent-4"
							>
								Contribua
							<v-icon>mdi-charity</v-icon>

							</v-btn>
							<v-btn
								@click="$router.push('/ong/salvacao')"
								text
								color="deep-purple accent-4"
							>
								Saiba mais
								<v-icon>mdi-cursor-default-click</v-icon>
							</v-btn>
							<v-spacer></v-spacer>
						</v-card-actions>
				</v-card>
				</v-col>
				<v-col cols="12" md="3" sm="6" xs="12" class="all-services">
					<v-card
							hover
							color="light-green lighten-4"
							max-width="344"
							class="mx-auto"
						>
						<v-list-item>
							<v-list-item-avatar> <v-img src="img/services/w3.png"></v-img> </v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="title">Instituto Vira-Latas</v-list-item-title>
							</v-list-item-content>
						</v-list-item>

						<v-img
							src="img/about/viralatas1.png"
							height="194"
						></v-img>

						<v-card-text>
							<p style="text-align: justify" class="black--text"> A gateiros tucujus é o 1° grupo de proteção aos gatos do Amapá, atualmente a ONG não possui abrigo e possui uma divida de R$ 3.055,80 em clínicas veterinárias.</p>
						</v-card-text>
						<v-progress-linear
								color="light-blue"
								v-model="salvacao"
								height="25"
								reactive
								striped
							>
							<strong>{{ Math.ceil(viralatas) }}%</strong>
						</v-progress-linear>

						<v-card-actions>
							<v-btn
								text
								color="deep-purple accent-4"
							> 
								Contribua
							<v-icon>mdi-charity</v-icon>

							</v-btn>
							<v-btn
								@click="$router.push('/ong/vira-latas')"
								text
								color="deep-purple accent-4"
							>
								Saiba mais
								<v-icon>mdi-cursor-default-click</v-icon>
							</v-btn>
							<v-spacer></v-spacer>
						</v-card-actions>
				</v-card>
				</v-col>
<!-- Final da Coluna que exibe a Ong Vira-latas -->

<!-- Inicio da Coluna que exibe a Ong Anjos Protetores -->
				<v-col cols="12" md="3" sm="6" xs="12" class="all-services">
					<v-card
							hover
							color="cyan lighten-4"
							max-width="344"
							class="mx-auto"
						>
						<v-list-item>
							<v-list-item-avatar> <v-img src="img/services/w4.png"></v-img> </v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="title">Anjos Protetores</v-list-item-title>
							</v-list-item-content>
						</v-list-item>

						<v-img
							src="img/about/gateiros1.jpg"
							height="194"
						></v-img>

						<v-card-text>
							<p style="text-align: justify" class="black--text"	> A gateiros tucujus é o 1° grupo de proteção aos gatos do Amapá, atualmente a ONG não possui abrigo e possui uma divida de R$ 3.055,80 em clínicas veterinárias.</p>
						</v-card-text>
						<v-progress-linear
								color="light-blue"
								v-model="salvacao"
								height="25"
								reactive
								striped
							>
							<strong>{{ Math.ceil(anjosprotetores) }}%</strong>
						</v-progress-linear>

						<v-card-actions>
							<v-btn
								text
								color="deep-purple accent-4"
							>
								Contribua
							<v-icon>mdi-charity</v-icon>

							</v-btn>
							<v-btn
								@click="$router.push('/ong/anjos-protetores')"
								text
								color="deep-purple accent-4"
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
      gateirostucujus: 0,
			anjosprotetores: 0,
			viralatas: 0,
			salvacao: 0,
    }),
  }
</script>
