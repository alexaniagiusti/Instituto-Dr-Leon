<template>
		<div id="background-sobre">
		<!-- Welcome service area start -->
					<div class="welcome-area area-padding">
						<v-container fluid>
							<v-row justify="center">
								<v-col cols="12" md="10" xs="12">
									<v-tooltip top>
										<template v-slot:activator="{ on }">
											<v-row>
												<v-col cols="12" xs="12">
													<v-btn @click="dialog = true" v-on="on" rounded color="#1a1364" block> 
														<span class="text-lowercase font-weight-bold white--text">Seja amigo dos animais e receba um presente do Dr. Leon</span>
													</v-btn>
												</v-col>
											</v-row>
										</template>
										<span class="font-weight-bold subtitle-2 white--text">Clique aqui e saiba qual o presente que o Dr. Leon tem pra você!</span>
									</v-tooltip>
									<p class="text-justify text-center title black--text pt-5">Nossa missão é ajudar as ONGs que protegem animais abandonados e maltratados por todo o país, começando pela minha cidade Macapá! Mas pra isso precisamos da sua ajuda, nossa primeira aventura será a arrecadação de fundos, para que as nossas Ongs parceiras possam quitar suas dívidas em clínicas veterinárias.</p>
									<p class="title text-center black--text">Conheça as Ongs que são parceiras do Instituto Dr. Leon e abrace uma causa!</p>
								</v-col>
								<v-dialog v-model="dialog" persistent max-width="410">
								<v-card>
									<v-img src="img/about/certificado.jpg"></v-img>
									<v-card-actions>
										<v-btn small block color="#1a1364" class="white--text darken-1" flat="flat" @click.native="dialog = false">Fechar</v-btn>

									</v-card-actions>
								</v-card>
							</v-dialog>
							</v-row>
						</v-container>
							<div class="container">
								<div class="row">
									<div class="all-services">
							<!-- single-well end-->
							<div class="col-md-3 col-sm-6 col-xs-12">
								<div class="well-services wow fadeInUp" data-wow-delay="0.3s">
									<div class="services-img">
										<img src="img/services/w1.png" alt="">
									</div>
									<div class="main-wel">
										<div class="wel-content">
											<h4>Gateiros Tucujus</h4>
											<p>Fundada em agosto de 2016, a GATU realiza principalmente resgates de animais feridos ou em condições de risco. Com o foco na preservação ambiental.</p>
												<v-btn color="blue" block> <span class="white--text">Saiba Mais</span> </v-btn>
										</div>
									</div>
								</div>
							</div>
							<!-- single-well end-->
							<div class="col-md-3 col-sm-6 col-xs-12">
								<div class="well-services wow fadeInUp" data-wow-delay="0.5s">
									<div class="services-img">
										<img src="img/services/w2.png" alt="">
									</div>
									<div class="main-wel">
										<div class="wel-content">
											<h4>Salvação</h4>
											<p>Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu. independent agency, free from the internal demands.</p>
												<v-btn color="blue" block> <span class="black--text">Saiba Mais</span> </v-btn>											
										</div>
									</div>
								</div>
							</div>
							<!-- single-well end-->
							<!-- single-well end-->
							<div class="col-md-3 col-sm-6 col-xs-12">
								<div class="well-services wow fadeInUp" data-wow-delay="0.5s">
									<div class="services-img">
										<img src="img/services/w3.png" alt="">
									</div>
									<div class="main-wel">
										<div class="wel-content">
											<h4>Vira-Latas</h4>
											<p>Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu. independent agency, free from the internal demands.</p>
												<v-btn color="blue" block> <span class="white--text">Saiba Mais</span> </v-btn>										
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-6 col-xs-12">
								<div class="well-services wow fadeInUp" data-wow-delay="0.5s">
									<div class="services-img">
										<img src="img/services/w4.png" alt="">
									</div>
									<div class="main-wel">
										<div class="wel-content">
											<h4>Anjos Protetores</h4>
											<p>Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu. independent agency, free from the internal demands.</p>
												<v-btn color="blue" block> <span class="white--text">Saiba Mais</span> </v-btn>
										</div>
									</div>
								</div>
							</div>
							<!-- single-well end-->
						</div>
					</div>
				</div>
			</div>
	<!-- Welcome service area End -->
		</div>
</template>

<script>
export default {
	data () {
		return {
			dialog: false
		}
	}
}
</script>>

<style scoped>
	#background-sobre {
	background-color: #eae9fb;
	/* background-image: url('../../public/img/background/color-bg.png') */
	}
</style>