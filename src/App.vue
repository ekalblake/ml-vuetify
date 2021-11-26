<template>
  <v-app>
    <router-view name="toolbar" />
    <v-main>
      <router-view :key="$route.fullPath"/>
    </v-main>
    <footer-bar/>
  </v-app>
</template>

<script>
import footerBar from '@/components/footerBar.vue'

export default {
  name: 'App',

  components: {
     footerBar
  },

  data: () => ({
    //
  }),
};
</script>
