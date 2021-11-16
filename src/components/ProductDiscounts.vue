<template>
  <v-hover>
    <v-item v-slot="{toggle }">
      <v-card
          class="mx-auto"
          max-width="584px"
          max-height="250px"
          @click="toggle"
          >
          <v-row>
            <v-col cols="6" >
                    <v-card-title>
                      Min. de compra S/149
                    </v-card-title>
                    <v-card-text>
                      20% DCTO.ADIC.
                      CUPÓN: WIZ2021
                </v-card-text>
                <v-card-actions>
                <v-btn
                    outlined
                    text
                    color="primary"
                >
                  Ver más
                </v-btn>
                </v-card-actions>
            </v-col>
            <v-col cols="6">
                <v-img src="https://http2.mlstatic.com/D_NQ_736571-MLA48144198150_112021-C.webp" max-width="250px"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-item>
  </v-hover>
</template>


<script>
export default {
  name : 'productDiscounts',

}
</script>
