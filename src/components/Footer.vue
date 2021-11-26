<template>
  <v-card
      class="white lighten-1"
      style="padding-top:40px;"
  >
    <v-card-text class=" justify-space-around text-center">
      <v-row
          justify="center"
          no-gutters

      >
        <v-col
            cols="12"
            md="3"

        >
          <v-btn icon>
            <v-img src="	https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/payment.svg" max-width="66" max-height="46"></v-img>
          </v-btn>
          <v-card-title class="justify-center">Paga con Mercado Pago</v-card-title>
          <v-card-text class="pt-0 grey--text" >
            Usa Mercado Pago, la solución de Mercado Libre para pagar de forma segura y con el medio de pago que prefieras.
          </v-card-text>
          <span class="blue--text">Cómo pagar con Mercado Pago</span>

        </v-col>
        <v-divider vertical></v-divider>
        <v-col
            cols="12"
            md="3">
          <v-btn
              icon
          >
            <v-img src="	https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/shipping.svg" max-width="56" max-height="49"></v-img>
          </v-btn>
          <v-card-title class="justify-center">Envío gratis desde S/ 79</v-card-title>
          <v-card-text class="pt-0 grey--text">
            Elige Mercado Envíos en tus compras y disfruta de envíos gratis en miles de productos nuevos.
          </v-card-text>
          <span class="blue--text">Cómo recibir compras con Mercado Envíos</span>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col
            cols="12"
            md="3">
          <v-btn
              icon
          >
            <v-img src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/protected.svg" max-width="51" max-height="55"></v-img>
          </v-btn>
          <v-card-title class="justify-center">Compra Protegida</v-card-title>
          <v-card-text class="pt-0 grey--text">
            Paga con Mercado Pago y te acompañamos hasta que recibas lo que compraste. Y si no es lo que esperabas, te devolvemos el dinero.
          </v-card-text>
          <span class="light-blue--text">Cómo te protegemos</span>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>

  </v-card>
</template>

<script>
export default {
  name: "Footer.vue"
}
</script>

<style scoped>

</style>