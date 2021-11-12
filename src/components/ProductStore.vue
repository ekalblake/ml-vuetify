<template>
    <v-card
        class="mx-auto"
        width="240"
        height="300"
        href="/"
    >
      <v-img
          :src="pstore.sbackg"
          height="100px"
      ></v-img>
      <v-list-item-avatar
          size="80"
          style="margin-top:-45px; margin-left:80px"
          rounded
      >
        <v-img
            :src="pstore.slogo"
        ></v-img>
      </v-list-item-avatar>
      <v-card-title class="justify-center" style="margin-top:-20px">
        {{pstore.sname}}
      </v-card-title>
      <v-card-subtitle>
        <v-item-group multiple>
          <v-row class="justify-center">
            <v-col
                cols="12"
                md="4"
                sm="4"
                xs="2"
            >
                <v-card
                    class="d-flex align-center"
                    height="70"
                >
                  <v-img :src="pstore.sprod1"></v-img>
                </v-card>
            </v-col>
            <v-col
                cols="12"
                md="4"
                sm="4"
                xs="2"
            >
              <v-card
                  class="d-flex align-center"
                  height="70"
              >
                <v-img :src="pstore.sprod2"></v-img>
              </v-card>
            </v-col>
            <v-col
                cols="12"
                md="4"
                sm="4"
                xs="2"
            >
              <v-card
                  class="d-flex align-center"
                  height="70"
              >
                <v-img :src="pstore.sprod3"></v-img>
              </v-card>
            </v-col>
            <a class="grey--text" :href="pstore.slink" style="text-decoration: none;">Ver tienda</a>
          </v-row>
        </v-item-group>
      </v-card-subtitle>
    </v-card>
</template>


<script>
export default {
  name : 'productStore',
  props: ['pstore']
}
</script>
