<template>
  <v-item v-slot="{toggle }">
      <v-card
        class="mx-auto pb-5"
        max-width="240px"
        outlined
        @click="toggle"
        href="/"
        >
      <v-card-text>
        <v-img src="https://http2.mlstatic.com/D_Q_NP_877971-MPE48012791189_102021-AB.webp"></v-img>
        <v-card-title>
          S/28.50
        </v-card-title>
        <v-card-subtitle>
          12 x S/ 2,38 sin interés
        </v-card-subtitle>
        <v-card-text>
          Sal para lavavajillas 1,2kg //Bosch Whirpool
        </v-card-text>
      </v-card-text>
      </v-card>
  </v-item>
</template>


<script>
export default {
  name : 'productOffer',

}
</script>
