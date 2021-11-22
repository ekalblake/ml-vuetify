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
                md="6"
            >
              <v-text-field
                  flat
                  solo
                  hide-details
                  dense
                  :label="$t('search_placeholder')"
                  append-icon="mdi-magnify"
              />

            </v-col>
            <v-col
                cols="1"
                md="3"

                style="display: grid; text-align: center"
              >

                <v-icon class="float-left d-block d-md-none"
                        large
                >
                  menu
                </v-icon>
            </v-col>
            <v-col
                cols="1"
                md="1"
            >
              <v-select
                dense
                outlined
                hide-details
                class="d-none d-md-block pr-5 float-right"
                :items="lang"
                item-text="id"
                @change="selectLanguage($event)"
                v-model="e1"
            >
                <template v-slot:selection="{item}">
                  <v-img :src="item.iconlang" style="width:22px;height:15px"/>
                </template>
                <template v-slot:item="{item}">
                  {{item.title}}
                </template>
              </v-select>
            </v-col>

          </v-row >
          <v-row no-gutters>
                <v-col
                    cols="12"
                    md="2"
                    class="align-baseline d-flex pl-3"
                    style="gap:20px"
                >
                <v-btn icon>
                  <v-icon
                      dark
                      right
                  >
                    mdi-map-marker
                  </v-icon>
                </v-btn>
                <span style="font-size:12px; color: rgba(0,0,0,.5);">{{$t('ship_to')}}
                  <span style="font-size: 13px; color: #333;"> Lima</span>
                </span>
                </v-col>
            <v-col
                cols="12"
                md="7"
                class="d-none d-md-block"
            >

                <v-card-text
                    class="d-flex float-right px-0 text--black text-decoration-none pt-5  "
                    style="gap: 20px; "
                >
                      <v-menu
                          open-on-hover
                          origin="center center"
                          transition="scale-transition"
                          offset-y
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <a class="category-color"
                             color="primary"
                             dark
                             v-bind="attrs"
                             v-on="on">
                            {{$t('category')}}
                            <v-icon x-small>
                              mdi-arrow-down-bold
                            </v-icon>
                          </a>
                        </template>
                        <v-list>
                          <v-list-item
                              style="display:flex; flex-direction:column">
                            <v-list-item-title>Tecnología</v-list-item-title>
                            <v-list-item-title>Electrodomésticos</v-list-item-title>
                            <v-list-item-title>Hogar y Muebles</v-list-item-title>
                            <v-list-item-title>Deporte y Fitness</v-list-item-title>
                            <v-list-item-title>Belleza y Cuidado Personal</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    <a class="category-color">{{$t('offers')}}</a>
                    <a class="category-color d-none d-md-block">{{$t('history')}}</a>
                    <a class="category-color d-none d-md-block">{{$t('stores')}} </a>
                    <a class="category-color">{{$t('sell')}}</a>
                    <a class="category-color">{{$t('help')}}</a>
                </v-card-text>



            </v-col>
            <v-col
                cols="12"
                md="3"
                class="d-none d-md-block"
            >

                <v-card-text
                    class="d-flex float-right px-0 text--black text-decoration-none pt-5"
                    style="gap:15px; font-size:13px; color: #333333"
                  >
                  <a class="category-color2">{{$t('account')}}</a>
                  <a class="category-color2">{{$t('signin')}}</a>
                  <a class="category-color2">{{$t('purchases')}}</a>
                </v-card-text>

            </v-col>
           </v-row>
          </v-container>
        </v-app-bar>
</template>


<script lang="ts">

import { defineComponent} from "@vue/composition-api";
import i18n from "@/plugins/i18n";

        export default defineComponent({
          name: 'appBar',
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
              },

          setup(){
            const e1 = 'es';
            const lang = [
              { id: 'es', serial: 0 , title: 'Español', iconlang:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/2560px-Flag_of_Catalonia.svg.png' },
              { id: 'en', serial: 1, title: 'Ingles', iconlang:'https://www.nicepng.com/png/full/6-63506_usa-png-clipart-american-flag-icon-png.png'}
            ];

            function selectLanguage(id:string) {
              i18n.locale = id;

            }

            return {
              e1,
              lang,
              selectLanguage
            }


          }
        })
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