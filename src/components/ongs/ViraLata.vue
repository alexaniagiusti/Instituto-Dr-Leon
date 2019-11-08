<template>
<div>
    <p style="padding: 10px;height: 50px; background-color: #eae9fb" class="headline black--text text-center ma-0">Instituto Vira-Latas</p>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" xs="12">
                <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                    <v-timeline-item
                    v-for="(item, i) in items"
                    :key="i"
                    :color="item.color"
                    :icon="item.icon"
                    fill-dot
                    >
                    <v-card
                        :color="item.color"
                        dark
                    >
                      <v-card-title class="title pa-1">{{item.title}}</v-card-title>
                      <p style="text-align:justify" class="sobreaong white--text pa-4">{{item.sobreaong}}</p>
                    </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'Como nasceu o Instituto Vira-Latas:',
          sobreaong: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          img: 'img/ongs/viralatas/1.png',
          color: 'red lighten-2',
          icon: 'mdi-dog'
        },
        {
          title: 'O abrigo:',
          color: 'purple darken-1',
          icon: 'mdi-home-circle',
        },
        {
          title: 'Quantidade de pets abrigados:',
          color: 'green lighten-1',
          icon: 'mdi-dog-side',
        },
        {
          title: 'Maiores dificuldades para manter o abrigo:',
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],
    }),
  }
</script>