<template>
  <div style="background-color: #ebebeb">
    <carousel/>
    <main-section/>
  </div>
</template>
<script>

    import carousel from '@/components/carousel.vue'
    import MainSection from "@/components/MainSection.vue";


    export default{
        name : 'home',
        components :{
          MainSection,
          carousel,
        },



    }
</script>