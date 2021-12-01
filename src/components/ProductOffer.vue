<template>
  <div>
        <v-card
            class="mx-auto px-0 "
            max-width="240px"
            hover
            height="425px"
        >
          <v-img
              :src="model.getImage(product.prodid)"
              width="240"
              height="224"
              class="pb-5"
          />
          <v-divider/>
          <div class="pa-0 pl-3 pt-2">
              <span
                  class="grey--text text-decoration-line-through extend"
              >
                S/{{product.preuni}}
              </span>
              <v-card-title
              class="pa-0 pb-3"
              >
                    S/{{product.getDesc()}}
                    <span v-if="product.ofertas != 0"
                          class="green--text pl-2"
                          style="font-size:13px;"
                    >
                    {{product.ofertas}}% OFF
                      </span>
              </v-card-title>
              <v-card-subtitle
                  style="font-size:13px;"
                  class="green--text d-none d-block pa-0"
              >
                12x S/{{offer}} sin interés
              </v-card-subtitle>

              <span
                  v-if="product.freeship == 1"
                  style="font-size:14px;"
                  class="green--text font-weight-bold d-none d-block"
              >
                Envío gratis
              </span>
              <v-card-subtitle class="black--text pa-0 pr-5 font-weight-light">
                {{product.nompro}}
              </v-card-subtitle>
              <v-card-text class="grey--text extend pa-0" >
                Por {{product.marca}}
              </v-card-text>

            <div class="float-right extend" style="position:absolute;">
              <v-icon>
              mdi-heart-outline
            </v-icon>
            </div>
          </div>

        </v-card>

  </div>
</template>


<script lang="ts">
import {onMounted, ref, defineComponent } from "@vue/composition-api";
import {servicioProducts} from "@/Services/ServicioProducts";
import ProductItemModel from "@/models/product/ProductItemModel";


export default defineComponent({
  name : 'productOffer',
  props: {
    product: {
      type: Object as () => Array<ProductItemModel>
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
  font-size:12px;
}

  .v-card:hover .extend{
    display: block;
    cursor: pointer;
}
</style>