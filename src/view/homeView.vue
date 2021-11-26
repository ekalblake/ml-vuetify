<template>
  <div style="background-color: #ebebeb">
    <carousel/>
    <main-section/>
  </div>
</template>
<script lang="ts">

    import carousel from '@/components/carousel.vue'
    import MainSection from "@/components/MainSection.vue";
    import { defineComponent } from "@vue/composition-api";


    export default defineComponent({
        name : 'home',
        components :{
          MainSection,
          carousel,
        },



    })
</script>