<template>
  <div>
    <v-card
        class="mx-auto"
        width="240"
        height="300"
        hover
    >
      <v-img
          :src="model.getImageStore(pstore.image, 1)"
          height="100px"
      ></v-img>
      <v-list-item-avatar
          size="80"
          style="margin-top:-45px; margin-left:80px"
          rounded
      >
        <v-img
            :src="model.getImageStore(pstore.image, 2)"
        ></v-img>
      </v-list-item-avatar>
      <v-card-title class="justify-center" style="margin-top:-20px">
        {{pstore.nomcom}}
      </v-card-title>
      <v-card-subtitle>
        <v-item-group multiple>
          <v-row class="justify-center">
            <v-col
                cols="12"
                md="4"
                sm="4"
                xs="2"
            >
                <v-card
                    class="d-flex align-center"
                    height="70"
                >
                  <v-img :src="model.getImageStore(pstore, 3)"></v-img>
                </v-card>
            </v-col>
            <v-col
                cols="12"
                md="4"
                sm="4"
                xs="2"
            >
              <v-card
                  class="d-flex align-center"
                  height="70"
              >
                <v-img :src="model.getImageStore(pstore, 4)"></v-img>
              </v-card>
            </v-col>
            <v-col
                cols="12"
                md="4"
                sm="4"
                xs="2"
            >
              <v-card
                  class="d-flex align-center"
                  height="70"
              >
                <v-img :src="model.getImageStore(pstore, 5)"></v-img>
              </v-card>
            </v-col>
            <span class="grey--text">Ver tienda</span>
          </v-row>
        </v-item-group>
      </v-card-subtitle>
    </v-card>
  </div>
</template>


<script>
import { defineComponent } from "@vue/composition-api";
import {servicioProducts} from "@/Services/ServicioProducts";


export default defineComponent({
  name : 'productStore',
  props: {
    pstore: {
      type : Object
    }
  },
  setup(){
    return {
      model: servicioProducts
    }
  }
});
</script>
