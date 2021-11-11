<template>
    <div>
        <v-app-bar
                color="#fff159"
                dense
                flat
                height="100"
        >
          <v-container
              style="font-size:13px;"
          >
          <v-row no-gutters class="mt-5">
            <v-col cols="2"
            >
              <v-img class="float-left" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.2/mercadolibre/logo__large_plus@2x.png" max-width="134" max-height="34"></v-img>
            </v-col>
            <v-col cols="6"
            >
              <v-text-field
                  style="color: rgba(0, 0, 0, 0.87);"
                  solo
                  hide-details
                  label="Buscar productos, marcas y más..."
                  append-icon="mdi-magnify"
              ></v-text-field>

            </v-col>
            <v-col cols="4">
              <v-img class="float-right" src="https://http2.mlstatic.com/D_NQ_684485-MLA47533161749_092021-OO.webp" max-width="340" max-height="39"></v-img>
            </v-col>
          </v-row >

          <v-row no-gutters>
            <v-col cols="2">
              <v-row no-gutters>
                <v-col cols="3">
                  <v-btn icon>
                  <v-icon dark right>
                    mdi-map-marker
                  </v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="9">
                  <p  style="font-size:12px; color: rgba(0,0,0,.5);">Enviar a..
                    <span style="font-size:13px; color: 333;"> Lima Metropolitana</span>
                  </p>


                </v-col>
              </v-row>


            </v-col>
            <v-col cols="7" >
              <v-card
                  class="mx-auto"
                  tile
                  style="background: none !important; border: none; box-shadow: none;"
              >
                <v-card-text style="font-size:13px;display: flex; gap: 30px; float-right; padding: 0; padding-top : 16px;">
                    <a>Categoria </a>
                    <a>Ofertas</a>
                    <a>Historial</a>
                    <a>Tiendas Oficiales</a>
                    <a>Vender</a>
                    <a>Ayuda</a>
                </v-card-text>

              </v-card>


            </v-col>
            <v-col cols="3">
              <v-card

                  tile
                  style="background: none !important; box-shadow: none; float:right; "
              >
                <v-card-text style="font-size:13px;display: flex; gap: 20px; padding:0; padding-top:15px">
                  <a>Crea tu cuenta</a>
                  <a>Ingresa</a>
                  <a>Mis compras</a>
                </v-card-text>

              </v-card>
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
