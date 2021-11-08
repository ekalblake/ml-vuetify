<template>
    <div>
        <v-app-bar
                color="#fff159"
                dense
                flat
                height="100"
        >
          <v-container>
          <v-row no-gutters class="mt-3">
            <v-col cols="2"
                   class="pr-3 float-right"
            >
              <v-img class="float-right" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.2/mercadolibre/logo__large_plus@2x.png" max-width="134" max-height="34"></v-img>
            </v-col>
            <v-col cols="5"
            >
              <v-text-field
                  solo
                  hide-details
                  label="Buscar productos, marcas y más..."
                  append-icon="mdi-magnify"

              ></v-text-field>

            </v-col>
            <v-col cols="5">
              <v-img class="float-left" src="https://http2.mlstatic.com/D_NQ_684485-MLA47533161749_092021-OO.webp" max-width="340" max-height="39"></v-img>
            </v-col>
          </v-row >
          <v-row no-gutters>
            <v-col cols="3">
            <v-btn icon>
              <v-icon dark right>
                 mdi-map-marker
              </v-icon>

            </v-btn>

            </v-col>
            <v-col cols="4">
              <v-toolbar-items >
                    Categoria
                    Ofertas
                    Historial
                    Tiendas Oficiales
                    Vender
                    Ayuda
              </v-toolbar-items>


            </v-col>
            <v-col cols="5">

            </v-col>
           </v-row>
          </v-container>
        </v-app-bar>
    </div>
</template>


<script>
        export default {
          name : 'homeView',

}
</script>
