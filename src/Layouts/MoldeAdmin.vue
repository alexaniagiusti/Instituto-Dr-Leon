<template>
  <v-container class="mt-0 pt-0" fluid>
    <v-row>
      <v-col cols="12" md="12">
        
        <v-app-bar elevation="1" style="justify-content: center; align-items: center; border-radius: 6px; margin-bottom: 6px" >
            <v-btn @click="$store.dispatch('drawer', true)" icon>
              <v-icon>mdi-menu</v-icon>
            </v-btn>

            <v-toolbar-title>{{ title }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="hidden-sm-and-down centraliza-tudo">
              <v-btn color="red" class="white--text" v-for="item in menu" @click="() => item.action()" :key="item.nome" >{{ item.nome }}</v-btn>
            </div>

            <v-menu
              class="hidden-lg-and-up"
              left
              bottom
            >
              <template v-slot:activator="{ on }">
                <v-btn class="hidden-lg-and-up" icon v-on="on">
                  <v-icon color="#000" >more_vert</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="item in menu" :key="item.nome" @click="() => item.action()"
                >
                  <v-list-item-title>{{ item.nome }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>

        
        <v-card>
          <v-card-title>
            <v-row>
              <v-col cols="12" xs="12" md="12">
                <v-btn text small :class="item.color" v-for="item in options" @click="item.action()" :key="item.nome">
                    <v-icon color="white" class="mr-2" >{{ item.icon }}</v-icon>
                    <span class="white--text text-capitalize" >{{ item.nome }}</span> 
                </v-btn>                
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-content>
            <slot></slot>
          </v-card-content>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['title', 'menu', 'options']
}
</script>

<style>
  .centraliza-tudo {
    display: flex;
    flex-direction: row;
    align-items: center
  }
</style>