<template>
  <Molde title="Ongs no Projeto" :options="options">
    <div>
      <v-simple-table v-if="ongs.length > 0" >
        <template v-slot:default>
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Objetivo</th>
              <th>Arrecadado</th>
              <th>Mais Detalhes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in ongs" :key="item._id">
              <td> <v-icon color="#56ab2f" >mdi-hand-heart</v-icon> </td>
              <td class="font-weight-bold">{{ item.nome }}</td>
              <td class="font-weight-bold green--text"> R$ {{ item.objetivo }}</td>
              <td class="font-weight-bold orange--text"> R$ {{ item.arrecadado }}</td>
              <td> <v-btn class="fonteCorpo text-lowercase" text @click="$router.push(`/gerencia/editar-ong/${item._id}`)"> Visualizar</v-btn> </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </Molde>
</template>

<script>
export default {
  data() {
    return {
        options: [
            {
                icon: 'mdi-refresh',
                nome: 'Atualizar Página',
                action: () => this.getOngs()    
            },
            {
                icon: 'mdi-plus',
                nome: 'Cadastrar Ong',
                action: () => this.$router.push('/gerencia/criar-ong')    
            }
        ],
        ongs: []
    }
  },
  methods: {
    getOngs() {
      this.$store.dispatch('charging', true)

      this.$http.get("/ong")
        .then(res => {
          this.ongs = res.data
          this.$store.dispatch('charging', false)
        })
        .catch(e => this.$store.dispatch('snackbar_error', e.response.data.message))
    }
  },
  created() {

    this.getOngs()
  }
}
</script>