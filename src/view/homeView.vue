<template>
    <v-container fluid>
        <app-bar/>
    </v-container>
</template>
<script>
    import appBar from '../components/appBar.vue'
    export default {
        name : 'homeView',
        components :{
            appBar,
        }

    }
</script>