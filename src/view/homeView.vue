<template>
  <div style="background-color: #ebebeb">
    <app-bar/>
    <carousel/>
      <v-container>
          <v-card
          class="mt-5 px-10"
          maxwidth="100%"
          height="90px"
          style="border-left:5px solid #333; border-color: #3483fa"
          >
            <v-row no-gutters class="pt-3" >
              <v-col cols="3" >
                <p style="font-size:18px;">Paga cómodo y seguro</p>
                <span style="font-size:14px;color: #999;">Con Mercado Pago</span>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="3">
                <p style="font-size:18px;">Hasta 12 cuotas sin interés con:</p>
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
                          style="font-size:14px;color: #3483fa;$btn-text-transform: lowercase !important;"

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
              <v-col cols="2" class="align-center">
                <v-img src="https://www.bbva.com/wp-content/uploads/2019/04/Logo-BBVA-1024x576.jpg"   max-width="66px" max-height="20px"></v-img>
               </v-col>
              <v-col cols="2">
                <v-img  src="https://cdn.worldvectorlogo.com/logos/diners-club-logo3-1.svg" max-width="116px" max-height="30px" ></v-img>
                </v-col>
              <v-col cols="2">
                <p>Más metodos de pago</p>
                <a href="/" style="font-size:14px;color: #3483fa">Ver Todos</a>
              </v-col>
            </v-row>
          </v-card>
      </v-container>
    <v-container>
      <v-card-title>Ofertas</v-card-title>
      <v-row
      >
        <v-col v-for="(product,i) in products"
        :key="i"
               cols="12"
               md="3"
               sm="6"
        >
          <product-offer/>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-5">
      <v-card-title>Descubre</v-card-title>
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
    <v-container class="mt-5">
      <v-card-title style="color:#666">Las mejores tiendas te esperan</v-card-title>
      <v-row
      >
        <v-col v-for="(store,i) in productstore"
               :key="i"
               cols="12"
               md="3"
               sm="6"
        >
          <products-store/>
        </v-col>
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
    <footer-bar/>
  </div>
</template>
<script>
    import appBar from '../components/appBar.vue'
    import carousel from '../components/carousel.vue'
    import productOffer from '../components/ProductOffer.vue'
    import productDiscounts from '../components/ProductDiscounts.vue'
    import productsStore from '../components/ProductStore.vue'
    import footerBar from '../components/footerBar.vue'

    export default {
        name : 'homeView',
        components :{
            appBar,
          carousel,
          productOffer,
          productDiscounts,
          productsStore,
          footerBar
        },
        data: () => ({
            dialog:false,
            products:[
              {
                title: 'Producto1',
                subtitle:'Sub1',
                descrip:'descrip1'
              },
              {
                title: 'Producto1',
                subtitle:'Sub1',
                descrip:'descrip1'
              },
              {
                title: 'Producto1',
                subtitle:'Sub1',
                descrip:'descrip1'
              },
              {
                title: 'Producto1',
                subtitle:'Sub1',
                descrip:'descrip1'
              },
              ],
          productdisc:[
            {
              title: 'Compra minima',
              descrip: 'descrip'
            },
            {
              title: 'Compra minima',
              descrip: 'descrip'
            }
          ],
          productstore:[
            {
              title: 'Compra minima',
              descrip: 'descrip'
            },
            {
              title: 'Compra minima',
              descrip: 'descrip'
            },{
              title: 'Compra minima',
              descrip: 'descrip'
            },
            {
              title: 'Compra minima',
              descrip: 'descrip'
            }
            ]
        })

    }
</script>