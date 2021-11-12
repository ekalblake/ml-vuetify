<template>
  <div>
    <v-card
        class="mx-auto"
        max-width="240px"
        outlined
        :href="product.link"
    >
      <v-img :src="product.img" width="240" height="224"></v-img>
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
  </div>
</template>


<script>
export default {
  name : 'productOffer',
  props: ['product']
}
</script>
