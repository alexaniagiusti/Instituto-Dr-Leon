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
                        <v-card-title class="title">{{item.title}}</v-card-title>
                        <img :src="item.img" height="200" alt="">
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
          title: 'qualquer',
          img: 'img/ongs/viralatas/1.png',
          color: 'red lighten-2',
          icon: 'mdi-dog'
        },
        {
          title: 'outronome',
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],
    }),
  }
</script>