<template>
  <div>
    <v-card
        class="mx-auto"
        max-width="240px"
        outlined
    >

      <v-img :src="model.getImage(product.prodid)" width="240" height="224"></v-img>
      <v-card-title>
        S/{{product.preuni}}

      </v-card-title>

      <v-card-subtitle>

        {{product.nompro}}
      </v-card-subtitle>
      <v-card-text>
        {{product.modelo}}
      </v-card-text>
    </v-card>
  </div>
</template>


<script>
import { defineComponent } from "@vue/composition-api";
import {servicioProducts} from "@/Services/ServicioProducts";


export default defineComponent({
  name : 'productOffer',
  props: {
    product : {
      type: Object
    }
  },
  setup(){
    return {
      model: servicioProducts
    }
  }
});
</script>
