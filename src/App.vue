<template>
  <v-app>
    <v-main>
        <home-view/>
        <carousel/>
    </v-main>
  </v-app>
</template>

<script>
import homeView from '/src/view/homeView.vue'
import carousel from '../src/components/carousel.vue'

export default {
  name: 'App',

  components: {
      homeView,
      carousel,
  },

  data: () => ({
    //
  }),
};
</script>
