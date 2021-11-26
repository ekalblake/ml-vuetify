<template>
  <product-offer/>
</template>

<script lang="ts">
import { ref, Ref, defineComponent, onMounted, SetupContext } from "@vue/composition-api";

import ProductOffer from '@/components/ProductOffer.vue';
import ProductModel from "@/models/product/ProductModel";
import {servicioProducts} from "@/Services/ServicioProducts";

export default defineComponent({
  name: "ProductView",
  components: {
    ProductOffer
  },
  setup(_, context: SetupContext){

    const productsArr:Ref<ProductModel|null> = ref(null);
    const errorMessage: Ref<string> = ref('');

    const findProducts = async () => {
      try {
        const productSearch = (context.root.$route.query.nompro).toString();
        console.log(productSearch)
        const response = await servicioProducts.searchProducts(productSearch);
        productsArr.value = new ProductModel(response);

        if(response.length <= 0){
          errorMessage.value = `No se encontraron resultados para: ${productSearch}`;
        }

      } catch (e) {
        console.log("Error: ",e);
      }
    }

    onMounted(() => {
      findProducts();
    })

    return {
      productsArr,
      errorMessage,
    }

  }
});
</script>