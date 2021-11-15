<template>
  <div>
    <v-card
        class="mx-auto"
        max-width="240px"
        outlined
        :href="product.link"
    >
      <v-img :src="model.getImage(product.id_producto)" width="240" height="224"></v-img>
      <v-card-title>
        S/{{product.id_producto}}

      </v-card-title>

      <v-card-subtitle>

        {{product.nom_prod}}
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
