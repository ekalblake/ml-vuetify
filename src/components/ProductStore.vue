<template>
  <v-item v-slot="{toggle }">
    <v-card
        class="mx-auto"
        max-width="300"
        max-height="360"
        @click="toggle"
        href="/"
    >
      <v-img
          src="	https://http2.mlstatic.com/storage/official-stores-images/sony/background_home201803270119.jpg"
          height="100px"
      ></v-img>
      <v-list-item-avatar
          size="80"
          style="margin-top:-45px; margin-left:100px"
          rounded
      >
        <v-img
            src="https://http2.mlstatic.com/D_Q_NP_742348-MLA25765809298_072017-AE.webp"
        ></v-img>
      </v-list-item-avatar>
      <v-card-title class="justify-center" style="margin-top:-20px">
        Sony
      </v-card-title>
      <v-card-subtitle>
        <v-item-group multiple>
          <v-row class="justify-center">
            <v-col
                v-for="n in 3"
                :key="n"
                cols="12"
                md="4"
                sm="4"
                xs="2"
            >
                <v-card

                    class="d-flex align-center"
                    height="70"
                >
                  <v-img src="https://http2.mlstatic.com/D_Q_NP_615105-MPE43080791425_082020-R.webp"></v-img>

                </v-card>
            </v-col>
            <p>Ver tienda</p>
          </v-row>
        </v-item-group>
      </v-card-subtitle>
    </v-card>
  </v-item>
</template>


<script>
export default {
  name : 'productStore',
  data: () => ({
    show: false,
  }),
}
</script>
