<template>
  <v-app>
    <v-main>
        <home-view/>
    </v-main>
  </v-app>
</template>

<script>
import homeView from '/src/view/homeView.vue'

export default {
  name: 'App',

  components: {
      homeView
  },

  data: () => ({
    //
  }),
};
</script>
