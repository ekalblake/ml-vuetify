<template>
  <v-item v-slot="{toggle}">
      <v-card
        v-for="(product,i) in products"
        :key="i"
        class="mx-auto"
        max-width="240px"
        outlined
        @click="toggle"
        href="/"
        >
        <v-img src="https://http2.mlstatic.com/D_Q_NP_877971-MPE48012791189_102021-AB.webp"></v-img>
        <v-card-title>
          S/{{product.title}}

        </v-card-title>
        <v-card-subtitle>
          {{product.subtitle}}
        </v-card-subtitle>
        <v-card-text>
          {{product.descrip}}
        </v-card-text>
      </v-card>
  </v-item>
</template>


<script>
export default {
  name : 'productOffer',

  data: () =>({
  products:[
    {
      title: '28.50',
      subtitle:'12 x S/ 2,38 sin interés',
      descrip:'Sal para lavavajillas 1,2kg //Bosch Whirpool'
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
    }
  ]
})
}
</script>
