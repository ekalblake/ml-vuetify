<template>
  <div>
    <app-bar/>
    <carousel/>
    <v-container>
      <v-card
      class="mt-10 px-10"
      maxwidth="100%"
      height="90px"
      >
        <v-row no-gutters class="pt-3">
          <v-col cols="3">
            <p style="font-size:18px;">Paga cómodo y seguro</p>
            <span style="font-size:14px;color: #999;">Con Mercado Pago</span>
          </v-col>
          <v-col cols="3">
            <p style="font-size:18px;">Hasta 12 cuotas sin interés con:</p>
            <span style="font-size:14px;color: #3483fa">Ver condiciones</span>
          </v-col>
          <v-col cols="2">
            <v-img src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logos-mpe-large_v_91cc43d5a1.png" max-width="66px" max-height="20px"></v-img>
          </v-col>
          <v-col cols="2">
            <v-img src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logos-mpe-large_v_91cc43d5a1.png" max-width="66px" max-height="20px"></v-img>
            </v-col>
          <v-col cols="2">
            <p>Más metodos de pago</p>
            <span style="font-size:14px;color: #3483fa">Ver Todos</span>
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
      <v-card-title>Las mejores tiendas te esperan</v-card-title>
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
  </div>
</template>
<script>
    import appBar from '../components/appBar.vue'
    import carousel from '../components/carousel.vue'
    import productOffer from '../components/ProductOffer.vue'
    import productDiscounts from '../components/ProductDiscounts.vue'
    import productsStore from '../components/ProductStore.vue'

    export default {
        name : 'homeView',
        components :{
            appBar,
          carousel,
          productOffer,
          productDiscounts,
          productsStore
        },
        data: () => ({
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