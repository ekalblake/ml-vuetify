<template>
  <div>
  <v-container>
    <v-card
        class="mt-5 pt-1 pl-2"
        height="90px"
        style="border-left:5px solid #333; border-color: #3483fa"
    >
      <v-row no-gutters class="pt-3" >
        <v-col
            cols="2"
            class="d-none d-md-block"
            md="2"
        >
          <span>{{$t('safe_payment')}}</span>
          <v-divider dark ></v-divider>
          <span style="font-size:14px;color: #999;">{{$t('safe_payment2')}}</span>
        </v-col>

        <v-col
            cols="6"
            md="3"
            sm="4"
            xs="6"
        >
          <span>{{$t('dues')}}</span>
          <v-btn
              text
              style="color: #3483fa;text-transform: capitalize; font-weight:normal;"
              class="px-0 pt-0 "
          >
            {{$t('dues2')}}
          </v-btn>

        </v-col>
        <v-col
            cols="2"
            md="2"
            sm="2"
            class="d-none d-sm-inline"
        >
          <v-img src="https://www.bbva.com/wp-content/uploads/2019/04/Logo-BBVA-1024x576.jpg"   max-width="100px" max-height="40px"></v-img>
        </v-col>
        <v-col
            cols="1"
            md="2"
            sm="2"
            class="d-none d-sm-inline align-center"
            align-self="auto"
        >
          <v-img src="https://cdn.worldvectorlogo.com/logos/diners-club-logo3-1.svg" max-width="100px" height="40px"></v-img>
        </v-col>
        <v-col
            cols="6"
            md="2"
            sm="4"
            xs="8"
        >
          <v-row>
            <v-col
                cols="3"
                md="2"
                sm="3"


            >
              <v-btn icon >
                <v-icon>
                  mdi-plus
                </v-icon>
              </v-btn>
            </v-col>
            <v-col
                md="10"
                sm="9"
                xs="6"
            >
              <span>{{$t('payment_method')}}</span>
              <v-divider dark ></v-divider>
              <a href="/" style="color: #3483fa; text-decoration: none; padding: 0">{{$t('payment_method2')}}</a>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
  <v-container fluid>
    <v-card-title>Ofertas</v-card-title>
    <v-slide-group
        v-model="model"
        class="pa-4"
        mandatory
        show-arrows
    >
      <v-slide-item
          v-for="(product,i) in data"
          :key="i"
          v-slot="{ active, toggle }"
      >
        <product-offer
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            @click="toggle"
            :product="product"
            justify="space-around"
        >

        </product-offer>
      </v-slide-item>
    </v-slide-group>
  </v-container>
  <v-container class="mt-5">
    <v-card-title>Descubre</v-card-title>

  </v-container>
      <v-container class="mt-5">
        <v-card-title style="color:#666">Las mejores tiendas te esperan</v-card-title>
        <v-slide-group
            v-model="model"
            class="pa-4"
            show-arrows
        >
          <v-slide-item
              v-for="(pstore,i) in stores"
              :key="i"
              v-slot="{ active, toggle }"
          >
            <product-store
                :color="active ? 'primary' : 'grey lighten-1'"
                class="ma-4"
                @click="toggle"
                :pstore="pstore"
                justify="space-around"
            >

            </product-store>
          </v-slide-item>
        </v-slide-group>

      </v-container>
  </div>
</template>

<script lang="ts">
import productOffer from '../components/ProductOffer.vue'
import productStore from '../components/ProductStore.vue'
import {onMounted, ref, defineComponent} from "@vue/composition-api";
import {servicioProducts} from "@/Services/ServicioProducts";

export default defineComponent({
  name: "MainSection",
  components: {
    productOffer,
    productStore
  }
  ,

  setup(){
    //Variables

    const dialog : any = ref(false);
    const data : any = ref([]);
    const pstore : any = ref([]);
    const stores : any = ref([]);

    //Funciones

    async function loadData(){
      data.value = await servicioProducts.getProducts(5)
    }
    async function loadStores(){
      stores.value = await servicioProducts.getStores(5)
    }

    onMounted( () => {
      loadData();
      loadStores();
    })

    return {
      dialog,
      data,
      stores,
      pstore,
      model: servicioProducts

    }

  }
})
</script>

<style scoped>

</style>