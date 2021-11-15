<template>
  <div style="background-color: #ebebeb">
    <app-bar/>
    <carousel/>
    <pre>{{data}}</pre>
      <v-container>
          <v-card
            class="mt-5 px-10 "
            maxwidth="100%"
            height="90px"
            style="border-left:5px solid #333; border-color: #3483fa"
            >
            <v-row no-gutters class="pt-3" >
              <v-col cols="3" class="d-none d-md-block" >
                <span>Paga cómodo y seguro</span>
                <v-divider dark ></v-divider>
                <span style="font-size:14px;color: #999;">Con Mercado Pago</span>
              </v-col>
              <v-col cols="3">
                <span>Hasta 12 cuotas sin interés con:</span>
                <div>
                  <v-dialog
                      v-model="dialog"
                      width="825"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          text
                          v-bind="attrs"
                          v-on="on"
                          style="color: #3483fa;text-transform: capitalize; font-weight:normal;"
                          class="px-0 pt-0 "
                      >
                        Ver condiciones
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                       Condiciones Generales
                      </v-card-title>
                      <v-row>
                        <v-col cols="12"
                               md="6">
                          <v-img src="https://www.bbva.com/wp-content/uploads/2019/04/Logo-BBVA-1024x576.jpg"   max-width="66px" max-height="20px"></v-img>
                          <v-card-text>
                            Hasta 12 cuotas sin interés
                                <v-spacer></v-spacer>
                            Visa y Mastercard
                          </v-card-text>
                        </v-col>
                        <v-col cols="12"
                               md="6">

                          <h2>BBVA</h2>
                          <v-card-text style="font-size:10px">
                            Pagos Sin Intereses es un Programa que aplica exclusivamente a las tarjetas de crédito VISA y Mastercard del BBVA Continental.
                            No aplica para tarjetas empresariales (solo aplica para la Tarjeta Capital de Trabajo del BBVA Continental).
                            Aplica para compras realizadas a través de Mercado Pago en www.MercadoLibre.com.pe y para productos seleccionados (Publicaciones Premium).
                            El Usuario debe verificar que al momento de hacer el pago la cantidad de cuotas seleccionada debe contener la frase Sin Interés, si no aparece esta leyenda es porque el producto no aplica a dicho beneficio.
                            El cliente debe elegir un número de cuotas hasta 3, 6, 9 o 12 cuotas. En caso el número de cuotas seleccionado sea mayor a los indicados se aplicará la tasa de interés que corresponda según lo que el usuario tenga contratado con el banco.

                          </v-card-text>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12"
                               md="6">
                          <v-img  src="https://cdn.worldvectorlogo.com/logos/diners-club-logo3-1.svg" max-width="116px" max-height="30px" ></v-img>
                          <v-card-text>
                            Hasta 12 cuotas sin interés
                                      <v-spacer></v-spacer>
                            Visa y Mastercard
                          </v-card-text>
                        </v-col>
                        <v-col cols="12"
                               md="6">

                          <h2>Diners</h2>
                          <v-card-text style="font-size:10px">
                            Cuotas Sin Intereses es un beneficio permanente que aplica exclusivamente para compras con las tarjetas Diners Club emitidas en el Perú.
                            Aplica para compras realizadas a través de la web de www.mercadolibre.com.pe para productos seleccionados (Publicaciones Premium).
                            No aplica para tarjetas Diners Club Corporate. El usuario debe verificar que al momento de hacer el pago la cantidad de cuotas seleccionada debe contener la frase Sin Interés, si no aparece esta leyenda es porque el producto no aplica a dicho beneficio.
                            Considerar que el valor mínimo de cada cuota, debe ser de S/ 10.00 o U$$ 5.00 de lo contrario la transacción será¡ rechazada.
                            El cliente debe elegir un número de cuotas entre 02 hasta 06 cuotas, en caso el número de cuotas seleccionado sea mayor a los indicados se aplicará la tasa de interés que corresponda según el tarifario vigente desde la primera cuota.
                            Ver en https://www.dinersclub.pe/portal/tarifas/tasas-y-tarifas.
                          </v-card-text>
                        </v-col>
                      </v-row>
                      <v-divider></v-divider>
                    </v-card>
                  </v-dialog>
                </div>

              </v-col>
              <v-col cols="2" class="d-none d-sm-inline">
                <v-img src="https://www.bbva.com/wp-content/uploads/2019/04/Logo-BBVA-1024x576.jpg"   max-width="100px" max-height="40px"></v-img>
               </v-col>
              <v-col cols="1">
                <v-img src="https://cdn.worldvectorlogo.com/logos/diners-club-logo3-1.svg" max-width="100px" max-height="30px"></v-img>
                </v-col>
                <v-col cols="3">
                     <v-row>
                       <v-col cols="3">
                        <v-btn icon >
                          <v-icon>
                            mdi-plus
                          </v-icon>
                        </v-btn>
                       </v-col>
                      <v-col cols="9">
                        <span>Más metodos de pago:</span>
                        <v-divider dark ></v-divider>
                        <a href="/" style="color: #3483fa; text-decoration: none; padding: 0">Ver Todos</a>

                      </v-col>
                   </v-row>
              </v-col>
            </v-row>
          </v-card>
      </v-container>
    <v-container>
      <v-card-title>Ofertas</v-card-title>
      <v-row justify="space-around">

          <product-offer
              v-for="(product,i) in data"
              :key="i"
              :product="product">
          </product-offer>
      </v-row>
    </v-container>
    <v-container class="mt-5">
      <v-card-title>Descubre</v-card-title>


    </v-container>
    <v-container class="mt-5">
      <v-card-title style="color:#666">Las mejores tiendas te esperan</v-card-title>
      <v-row justify="space-around">
          <products-store
              v-for="(pstore,i) in productstore"
              :key="i"
              :pstore="pstore"/>
      </v-row>

    </v-container>

    <v-container class="mt-5 mb-5">
      <v-card-title>Te puede interesar..</v-card-title>
      <v-row
      >
        <v-col v-for="(disc,i) in productdisc"
               :key="i"
               cols="12"
               md="6"
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
    import productsStore from '../components/ProductStore.vue'
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
          productsStore,
          footerBar
        },

        setup(){
            //Variables
            const dialog : any = ref(false);
            const data : any = ref([]);

            //Funciones

            async function loadData(){
                   data.value = await servicioProducts.getProducts(10)
            }

            onMounted( () => {
                loadData();
            })

            return {
              dialog,
              data,
              model: servicioProducts

            }

        }

    })
</script>