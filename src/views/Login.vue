<template>
  <v-app id="inspire" style="background: linear-gradient(to right, #4b6cb7, #182848)">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    v-model="usuario.email"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    label="Senha"
                    v-model="usuario.senha"
                    name="password"
                    prepend-icon="mdi-shield-lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="login" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data() {
      return {
        usuario: {
          email: '',
          senha: ''
        }
      }
    },
    methods: {
      login() {
        this.$store.dispatch('charging', true)

        this.$http.post('/session', this.usuario)
          .then(res => {
            sessionStorage.usuario = JSON.stringify(res.data)
            this.$store.dispatch('charging', false)
            this.$router.push("/gerencia/ong-listar")
          })
          .catch(err => {
            this.$store.dispatch('charging', false)
            this.$store.dispatch("snackbar_error", `${err.response.data.message}`)
          })
      }
    }
  }
</script>