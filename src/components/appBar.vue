<template>
        <v-app-bar
                color="#fff159"
                dense
                flat
                :height="cardHeight"
                :width="cardWidth"
        >
          <v-container
          >
          <v-row no-gutters class="mt-2">
            <v-col
                cols="1"
                md="2"

            >
              <v-toolbar-title class="pl-2">
                <v-img class="float-left d-none d-md-block"
                       src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.2/mercadolibre/logo__large_plus@2x.png"
                       max-width="134"
                       max-height="34"/>

                <v-img class="float-left d-block d-md-none"
                       src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.17.0/mercadolibre/logo__small.png"
                       max-width="44"
                       max-height="32"/>
              </v-toolbar-title>
            </v-col>
            <v-col
                cols="10"
                md="7"
            >
              <v-text-field
                  flat
                  solo
                  hide-details
                  dense
                  label="Buscar productos, marcas y más..."
                  append-icon="mdi-magnify"
              />

            </v-col>
            <v-col
                cols="1"
                md="3"

                style="display: grid; text-align: center"
              >
              <v-img class="d-none d-md-block float-right"
                     src="https://http2.mlstatic.com/D_NQ_684485-MLA47533161749_092021-OO.webp"
                     max-width="340"
                     max-height="39"
              />
                <v-icon class="float-left d-block d-md-none"
                        large
                >
                  menu
                </v-icon>
            </v-col>

          </v-row >
          <v-row no-gutters>

                <v-col
                    cols="12"
                    md="2"

                    class="align-baseline d-flex pl-3"
                    style="gap:20px">
                <v-btn icon>
                  <v-icon dark
                          right
                          small
                  >
                    mdi-map-marker
                  </v-icon>
                </v-btn>
                <span  style="font-size:12px; color: rgba(0,0,0,.5);">Enviar a
                  <span style="font-size: 13px; color: 333;"> Lima Metropolitana</span>
                </span>
                </v-col>
            <v-col
                cols="12"
                md="7"
                class="d-none d-md-block"
            >

                <v-card-text
                    class="d-flex float-right px-0 text--black text-decoration-none pt-5  "
                    style="gap: 30px; "
                >
                    <a class="category-color">Categoria
                    <v-icon x-small>
                      mdi-arrow-down-bold
                    </v-icon></a>
                    <a class="category-color">Ofertas</a>
                    <a class="category-color">Historial</a>
                    <a class="category-color">Tiendas Oficiales</a>
                    <a class="category-color">Vender</a>
                    <a class="category-color">Ayuda</a>
                </v-card-text>



            </v-col>
            <v-col
                cols="12"
                md="3"
                class="d-none d-md-block"
            >

                <v-card-text
                    class="d-flex float-right px-0 text--black text-decoration-none pt-5"
                    style="gap:15px"
                  >
                  <a class="category-color2">Crea tu cuenta</a>
                  <a class="category-color2">Ingresa</a>
                  <a class="category-color2">Mis compras</a>
                </v-card-text>

            </v-col>
           </v-row>
          </v-container>
        </v-app-bar>
</template>


<script>
        export default {
          name: 'homeView',
          computed:
              {
                cardWidth() {
                  switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                      return '100%'
                  }
                },
                cardHeight() {
                  switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                      return '87px'
                    case 'sm':
                      return '87px'
                    case 'md':
                      return '100px'
                    case 'lg':
                      return '100px'
                    case 'xl':
                      return '100px'
                  }
                }
              }
        }
</script>

<style>
.v-toolbar__content, .v-toolbar__extension {
  padding: 0px;
}
.container {
  padding: 0;
}
.v-toolbar__content .v-btn.v-btn--icon.v-size--default, .v-toolbar__extension .v-btn.v-btn--icon.v-size--default {
  height: 48px;
  width: 0;
}
@media (min-width: 1024px) {
  .container {
    max-width: 900px;
  }
}
@media (max-width: 1920px) {
  .container {
    max-width: 85%;
  }
}
@media (max-width: 1250px) {
  .container {
    max-width: 100%;
  }
}
.category-color{
  color: rgba(51,51,51,.6) !important;
}
.category-color2{
  color: #333333 !important;
}
.carousel-container .next-button, .carousel-container .prev-button {
  width: 64px;
  height: 64px;
  /* display: none; */
  background-color: #fff;
  /* border-radius: 50%; */
  border-width: 0;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 19%);
  cursor: pointer;
  outline: 0;
  position: absolute;
  top: 48%;
  z-index: 2;
}
</style>