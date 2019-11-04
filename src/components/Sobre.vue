<template>
	<div class="welcome-area">
		<v-container>
			<v-row>
<!-- Inicio da Coluna com o Titulo Inicial da Página -->
					<v-col cols="12" md="12" xs="12">
						<div class="pt-5 mb-5 layer-2 wow fadeInUp" data-wow-delay="0.5s">
							<h4 class="title2 hidden-sm-and-down" style="color: #333">Conheça as Ongs que são parceiras do Instituto Dr. Leon e abrace uma causa!</h4>
							<h6 class="title2 hidden-lg-and-up text-center" style="color: #333">Conheça as Ongs que são parceiras do Instituto Dr. Leon e abrace uma causa!</h6>
						</div>
					</v-col>
<!-- Fim da Coluna que exibe o titulo principal -->
			<v-row>
<!-- Coluna que exibe a Ong Gateiros tucujus -->
					<v-col cols="12" md="3" sm="6" xs="12" class="all-services">
						<div class="well-services wow fadeInUp" data-wow-delay="0.3s">
							<div class="services-img">
								<img src="img/services/w1.png" alt="">
							</div>
						<div class="main-wel">
							<div class="wel-content">
								<h4>Gateiros Tucujus</h4>
								<span class="title">Dívida em Clinica Veterinária</span><br>
								<span class="title">Objetivo: R$3.500</span><br>
								<span class="title">Arrecadado:</span>
								<v-progress-linear
								 	color="light-blue"
									v-model="gateirostucujus"
									height="25"
									reactive
									striped
								>
								<strong>{{ Math.ceil(gateirostucujus) }}%</strong>
							</v-progress-linear>
							<!--	<p>Fundada em agosto de 2016, a GATU realiza resgates de animais feridos ou em condições de risco. Com o foco na preservação ambiental.</p> -->
							<!--	<v-btn class="mt-5" @click="$router.push('/ong/gateiros-tucujus')" color="blue" small block> <span class="white--text">Saiba Mais</span> </v-btn> -->
							</div>
						</div>
						</div>
					</v-col>
<!-- Final da Coluna que exibe a Ong gateiros tucujus -->

<!-- Inicio da Coluna que exibe a Ong Salvação -->
					<v-col cols="12" md="3" sm="6" xs="12" class="all-services">
						<div class="well-services wow fadeInUp" data-wow-delay="0.5s">
							<div class="services-img">
							<img src="img/services/w2.png" alt="">
							</div>
						<div class="main-wel">
							<div class="wel-content">
							<h4>Ong Salvação</h4>
							<span class="title">Dívida em Clinica Veterinária</span><br>
							<span class="title">Objetivo: R$8.000</span><br>
								<span class="title">Arrecadado:</span>
								<v-progress-linear
								 	color="light-blue"
									v-model="salvacao"
									height="25"
									reactive
									striped
								>
								<strong>{{ Math.ceil(salvacao) }}%</strong>
							</v-progress-linear>
						<!--	<v-btn @click="$router.push('/ong/salvacao')" color="blue" block> <span class="white--text">Saiba Mais</span> </v-btn>					-->						
							</div>
						</div>
						</div>
					</v-col>
<!-- Final da coluna que exibe a Ong Salvação -->

<!-- Inicio da Coluna que exibe a Ong Vira-latas -->
					<v-col cols="12" md="3" sm="6" xs="12" class="all-services">
						<div class="well-services wow fadeInUp" data-wow-delay="0.5s">
							<div class="services-img">
							<img src="img/services/w3.png" alt="">
							</div>
							<div class="main-wel">
								<div class="wel-content">
									<h4>Vira-Latas</h4> <br>
									<span class="title">Dívida em Clinica Veterinária</span><br>
									<span class="title">Objetivo: R$5.000</span><br>
									<span class="title">Arrecadado:</span>
									<v-progress-linear
										color="light-blue"
										v-model="viralatas"
										height="25"
										reactive
										striped
									>
								<strong>{{ Math.ceil(viralatas) }}%</strong>
								</v-progress-linear>
								<!--	<v-btn @click="$router.push('/ong/vira-latas')" color="blue" block> <span class="white--text">Saiba Mais</span> </v-btn>				-->						
								</div>
							</div>
						</div>
					</v-col>
<!-- Final da Coluna que exibe a Ong Vira-latas -->

<!-- Inicio da Coluna que exibe a Ong Anjos Protetores -->
					<v-col cols="12" md="3" sm="6" xs="12" class="all-services">
						<div class="well-services wow fadeInUp" data-wow-delay="0.5s">
							<div class="services-img">
							<img src="img/services/w4.png" alt="">
							</div>
							<div class="main-wel">
								<div class="wel-content">
								<h4>Anjos Protetores</h4>
								<span class="title">Dívida em Clinica Veterinária</span><br>
								<span class="title">Objetivo: R$8.000</span><br>
								<span class="title">Arrecadado:	</span>								
								<v-progress-linear
								 	color="light-blue"
									v-model="anjosprotetores"
									height="25"
									reactive
									striped
								>
								<strong>{{ Math.ceil(anjosprotetores) }}%</strong>
								</v-progress-linear>
							 <!--	<v-btn @click="$router.push('/ong/anjos-protetores')" color="blue" block> <span class="white--text">Saiba Mais</span> </v-btn> -->
								</div>
							</div>
						</div>
					</v-col>
<!-- Final da Coluna que exibe a Ong Anjos Protetores -->
				</v-row>
			</v-row>
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