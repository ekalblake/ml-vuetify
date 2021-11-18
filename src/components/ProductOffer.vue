<template>
  <div>
        <v-card
            class="mx-auto t1"
            max-width="240px"
            hover
        >
          <v-img :src="model.getImage(product.prodid)" width="240" height="224"></v-img>
          <v-card-title>
            S/{{product.preuni}}
          </v-card-title>
          <v-card-subtitle>
            {{product.nompro}}
          </v-card-subtitle>
          <v-card-text class="extend">
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

<style>
.extend{
  display: none;
}

.v-card:hover .extend{
  display: block;
  cursor: pointer;
  transition: height 1s;
}
</style>