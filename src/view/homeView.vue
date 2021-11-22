<template>
  <div style="background-color: #ebebeb">
    <app-bar/>
    <carousel/>
      <v-container >
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

      <product-discounts

      />

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

    <v-container class="mt-5 mb-5">
      <v-card-title>Te puede interesar..</v-card-title>
      <v-row
      >
        <v-col
        >
          <product-discounts/>
        </v-col>
      </v-row>

    </v-container>

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
    <footer-bar/>
  </div>
</template>
<script lang="ts">
    import appBar from '../components/appBar.vue'
    import carousel from '../components/carousel.vue'
    import productOffer from '../components/ProductOffer.vue'
    import productDiscounts from '../components/ProductDiscounts.vue'
    import productStore from '../components/ProductStore.vue'
    import footerBar from '../components/footerBar.vue'
    import {onMounted,ref, defineComponent} from "@vue/composition-api";
    import {servicioProducts} from "@/Services/ServicioProducts";


    export default defineComponent ({
        name : 'homeView',
        components :{
          appBar,
          carousel,
          productOffer,
          productDiscounts,
          productStore,
          footerBar
        },
        productdiscs:[
        {
          title: 'Compra minima',
          descrip: 'descrip'
        },
        {
          title: 'Compra minima',
          descrip: 'descrip'
        },
        {
          title: 'Compra minima',
          descrip: 'descrip'
        },

      ],
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