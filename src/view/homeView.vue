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
                          style="font-size:14px;color: #3483fa;text-transform: capitalize;"

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
      <v-row justify="space-around">

          <product-offer
              v-for="(product,i) in products"
              :key="i"
              :product="product">
          </product-offer>
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
                title: '569.04',
                subtitle:'12 x S/ 47,42 sin interés',
                descrip:'Bicicleta Vintage De Paseo Goliat Aro 26 Mujer Nueva',
                link: 'https://articulo.mercadolibre.com.pe/MPE-442078274-bicicleta-vintage-de-paseo-goliat-aro-26-mujer-nueva-_JM?variation=70388619161#reco_item_pos=0&reco_backend=promotions-sorted-by-score-mpe-A&reco_backend_type=low_level&reco_client=home_seller-promotions-recommendations&reco_id=63d8266b-d843-4a07-a323-0970e9732a92&c_id=/home/promotions-recommendations/element&c_element_order=1&c_uid=b73d4ac8-1fb7-4cbe-8bc3-7afa3d0da7bd',
                img:'https://http2.mlstatic.com/D_NQ_NP_775295-MPE44296222155_122020-O.webp'
              },
              {
                title: '85',
                subtitle:'12 x S/ 7,08 sin interés',
                descrip:'Vitamina D3 Importada D America 10 Mil Lu',
                link:'https://articulo.mercadolibre.com.pe/MPE-440632637-vitamina-d3-importada-d-americana-10-mil-iu-_JM?variation=71204892622#reco_item_pos=1&reco_backend=promotions-sorted-by-score-mpe-A&reco_backend_type=low_level&reco_client=home_seller-promotions-recommendations&reco_id=63d8266b-d843-4a07-a323-0970e9732a92&c_id=/home/promotions-recommendations/element&c_element_order=2&c_uid=a4b59843-ec5c-418c-ae2c-f1ffa7510828',
                img:'https://http2.mlstatic.com/D_NQ_NP_980099-MPE42831353693_072020-O.webp'
              },
              {
                title: '89.09',
                subtitle:'12 x S/ 7,43 sin interés',
                descrip:'Faja de Hombre Anti Ginecomastia Reduce',
                link: 'https://articulo.mercadolibre.com.pe/MPE-437042968-faja-de-hombre-anti-ginecomastia-reduce-abdomen-doble-capa-_JM#reco_item_pos=2&reco_backend=promotions-sorted-by-score-mpe-A&reco_backend_type=low_level&reco_client=home_seller-promotions-recommendations&reco_id=63d8266b-d843-4a07-a323-0970e9732a92&c_id=/home/promotions-recommendations/element&c_element_order=3&c_uid=5011743e-83de-4e9b-9c1e-a4cb65cfd1d7',
                img: 'https://http2.mlstatic.com/D_NQ_NP_884503-MPE32068115459_092019-O.webp'
              },
              {
                title: '118.75',
                subtitle:'12 x S/ 9,9 sin interés',
                descrip:'Cojin Anti Hemorroides Ergonómico Checa Goods',
                link:'https://articulo.mercadolibre.com.pe/MPE-446231593-cojin-anti-hemorroides-ergonomico-checa-goods-antiacaros-_JM#reco_item_pos=3&reco_backend=promotions-sorted-by-score-mpe-A&reco_backend_type=low_level&reco_client=home_seller-promotions-recommendations&reco_id=63d8266b-d843-4a07-a323-0970e9732a92&c_id=/home/promotions-recommendations/element&c_element_order=4&c_uid=15e03d7b-cd9a-45b5-9e93-d274e73d775e',
                img:'https://http2.mlstatic.com/D_NQ_NP_644410-MPE48044243661_102021-O.webp'
              }
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
              sbackg: 'https://http2.mlstatic.com/storage/official-stores-images/tiendasefe/background_home201909020352.jpg',
              slogo: 'https://http2.mlstatic.com/D_Q_NP_758524-MLA32045402351_092019-AE.webp',
              sname: 'Tiendas F',
              sprod1: 'https://http2.mlstatic.com/D_Q_NP_892059-MPE44642696876_012021-R.webp',
              sprod2: 'https://http2.mlstatic.com/D_Q_NP_717929-MPE45880770738_052021-R.webp',
              sprod3: 'https://http2.mlstatic.com/D_Q_NP_988155-MPE45881035189_052021-R.webp',
              slink: 'https://tienda.mercadolibre.com.pe/tiendas-efe#c_id=/home/official-stores/element&c_brand_name=Tiendas%20EFE&c_element_order=1&c_uid=26c206d0-9030-4b7b-88a3-a70d1bfb6cb8'

            },
            {
              sbackg: 'https://http2.mlstatic.com/storage/official-stores-images/sony/background_home201803270119.jpg',
              slogo: 'https://http2.mlstatic.com/D_Q_NP_742348-MLA25765809298_072017-AE.webp',
              sname: 'Sony',
              sprod1: 'https://http2.mlstatic.com/D_Q_NP_615105-MPE43080791425_082020-R.webp',
              sprod2: 'https://http2.mlstatic.com/D_Q_NP_600413-MPE43777889294_102020-R.webp',
              sprod3: 'https://http2.mlstatic.com/D_Q_NP_844187-MPE47934224948_102021-R.webp',
              slink: 'https://tienda.mercadolibre.com.pe/sony#c_id=/home/official-stores/element&c_brand_name=Sony&c_element_order=2&c_uid=0b826151-aa93-409c-b435-28cfb85f7c4d'
            },{
              sbackg: 'https://http2.mlstatic.com/storage/official-stores-images/xiaomi/background_home201903130146.jpg',
              slogo: 'https://mla-s1-p.mlstatic.com/804406-MLA44074826319_112020-AE.webp',
              sname: 'Xiaomi',
              sprod1: 'https://http2.mlstatic.com/D_Q_NP_736484-MPE46708672984_072021-R.webp',
              sprod2: 'https://http2.mlstatic.com/D_Q_NP_769865-MPE46322274493_062021-R.webp',
              sprod3: 'https://http2.mlstatic.com/D_Q_NP_810877-MPE46707768869_072021-R.webp',
              slink: 'https://tienda.mercadolibre.com.pe/xiaomi#c_id=/home/official-stores/element&c_brand_name=Xiaomi&c_element_order=3&c_uid=1b5c7780-75f1-4f85-afdc-dc07cea8830a'
            },
            {
              sbackg: 'https://http2.mlstatic.com/storage/official-stores-images/huawei/background_home202005131125.jpg',
              slogo: 'https://http2.mlstatic.com/D_Q_NP_912655-MLA28736452550_112018-AE.webp',
              sname: 'Huaweii',
              sprod1: 'https://http2.mlstatic.com/D_Q_NP_981991-MPE48123089129_112021-R.webp',
              sprod2: 'https://http2.mlstatic.com/D_Q_NP_763328-MPE47364662283_092021-R.webp',
              sprod3: 'https://http2.mlstatic.com/D_Q_NP_999835-MPE48004654772_102021-R.webp',
              slink: 'https://tienda.mercadolibre.com.pe/sany-distribuidor-de-huawei#c_id=/home/official-stores/element&c_brand_name=Sany%20-%20Distribuidor%20de%20Huawei&c_element_order=4&c_uid=4bf2bf59-1acc-48cd-8ad7-f51f95ea3147'
            }
            ]
        })

    }
</script>