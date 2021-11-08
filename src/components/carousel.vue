<template>
  <v-carousel
      v-model="model"
      cycle
      height="338"
      hide-delimiter-background
      show-arrows-on-hover
  >
    <v-carousel-item
        v-for="link in links"
        :key="link"
    >
        <v-row
            class="fill-height"
            align="center"
            justify="center"
        >
            <v-img class="float-left" :src="link" max-width="80%"></v-img>
        </v-row>
    </v-carousel-item>
  </v-carousel>
</template>


<script>
export default {
  data: () => ({
    model: 0,
    links: [
      'https://http2.mlstatic.com/D_NQ_809090-MLA48143355195_112021-OO.webp',
      'https://http2.mlstatic.com/D_NQ_807957-MLA48143749607_112021-OO.webp',
      'https://http2.mlstatic.com/D_NQ_616314-MLA48143894079_112021-OO.webp',
      'https://http2.mlstatic.com/D_NQ_676290-MLA47591642747_092021-OO.webp',
      'https://http2.mlstatic.com/D_NQ_979957-MLA48143894238_112021-OO.webp',
    ],
  }),
}
</script>
