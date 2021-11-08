<template>
  <v-carousel
      v-model="model"
      cycle
      height="338"
      hide-delimiter-background
      show-arrows-on-hover
  >
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        :href="item.link"

    >
        <v-row
            class="fill-height"
            align="center"
            justify="center"
        >
        </v-row>
    </v-carousel-item>
  </v-carousel>
</template>


<script>
export default {
  data: () => ({
    model: 0,
    items: [
      {
        src:'https://http2.mlstatic.com/D_NQ_809090-MLA48143355195_112021-OO.webp',
        link:'https://ofertas.mercadolibre.com.pe/especial-celulares-2021#me.position=0&me.bu_line=20&me.flow=-1&me.bu=3&me.audience=all&me.content_id=MS_WEB_ESPCELULARES2021_W46&me.component_id=main_slider_web_ml_0&me.logic=user_journey&audience=all&bu=3&bu_line=20&component_id=main_slider_web_ml_0&content_id=MS_WEB_ESPCELULARES2021_W46&flow=-1&logic=user_journey&position=0&c_id=/home/exhibitors-carousel/element&c_campaign=especial-celulares-2021&c_element_order=1&c_uid=85f59b32-ed37-4bd7-9f1e-2eb56dd00de9'
      },
      {
        src:'https://http2.mlstatic.com/D_NQ_807957-MLA48143749607_112021-OO.webp',
        link:'https://ofertas.mercadolibre.com.pe/especial-juguetes-y-bebes-nov21#me.bu=3&me.audience=all&me.content_id=MS_WEB_ESPJUGUETESYBEBESNOV21_W46&me.component_id=main_slider_web_ml_1&me.logic=user_journey&me.position=1&me.bu_line=16&me.flow=-1&audience=all&bu=3&bu_line=16&component_id=main_slider_web_ml_1&content_id=MS_WEB_ESPJUGUETESYBEBESNOV21_W46&flow=-1&logic=user_journey&position=1&c_id=/home/exhibitors-carousel/element&c_campaign=especial-juguetes-y-bebes-nov21&c_element_order=2&c_uid=a3fb3f28-359e-4f3c-bb10-13398bfc3814'
      },
      {
        src:'https://http2.mlstatic.com/D_NQ_616314-MLA48143894079_112021-OO.webp',
        link:'https://ofertas.mercadolibre.com.pe/especial-mabe#me.bu_line=20&me.flow=-1&me.bu=3&me.audience=all&me.content_id=MS_WEB_ESPMABE_W46&me.component_id=main_slider_web_ml_2&me.logic=user_journey&me.position=2&audience=all&bu=3&bu_line=20&component_id=main_slider_web_ml_2&content_id=MS_WEB_ESPMABE_W46&flow=-1&logic=user_journey&position=2&c_id=/home/exhibitors-carousel/element&c_campaign=especial-mabe&c_element_order=3&c_uid=4b3434f9-102b-430c-afde-f4091e7be490'
      },
      {
        src:'https://http2.mlstatic.com/D_NQ_676290-MLA47591642747_092021-OO.webp',
        link:'https://www.mercadolibre.com.pe/ofertas?free_shipping=1#origin=qcat&filter_applied=free_shipping&filter_position=4&me.bu_line=26&me.flow=-1&me.bu=3&me.audience=all&me.content_id=MS_WEB_FREESHIPPING_W42&me.component_id=main_slider_web_ml_3&me.logic=user_journey&me.position=3&audience=all&bu=3&bu_line=26&component_id=main_slider_web_ml_3&content_id=MS_WEB_FREESHIPPING_W42&flow=-1&logic=user_journey&position=3&c_id=/home/exhibitors-carousel/element&c_campaign=ofertas%3Ffree_shipping%3D1&c_element_order=4&c_uid=02011d75-bf4e-41ee-aebf-3b3f7f657f81'
      },
      {
        src:'https://http2.mlstatic.com/D_NQ_979957-MLA48143894238_112021-OO.webp',
        link:'https://ofertas.mercadolibre.com.pe/especial-belleza-y-salud-nov#me.bu_line=13&me.flow=-1&me.bu=3&me.audience=all&me.content_id=MS_WEB_ESPBELLEZAYSALUDNOV_W46&me.component_id=main_slider_web_ml_4&me.logic=user_journey&me.position=4&audience=all&bu=3&bu_line=13&component_id=main_slider_web_ml_4&content_id=MS_WEB_ESPBELLEZAYSALUDNOV_W46&flow=-1&logic=user_journey&position=4&c_id=/home/exhibitors-carousel/element&c_campaign=especial-belleza-y-salud-nov&c_element_order=5&c_uid=309b34f4-1ffb-4ae8-906b-e0961b00c71d'
      }
    ],
  }),
}
</script>
