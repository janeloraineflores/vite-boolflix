<script>
    import MovieCard from './MovieCard.vue'
    import SerieCard from './SerieCard.vue'
    import { store } from '../store.js';
    export default {
        name: "MainComponent",
        data() {
            return {
               store
            }
        },
        methods: {

        },
        components: {
            MovieCard,
            SerieCard
        }
    }

</script>

<template>
    
   <main>
        <div class="container">
            <div class="row">
                <div class=" col-3 p-2 " id="my-col" v-for="(movie, i) in store.movies" :key="i">
                    <MovieCard :movie="movie" />
                </div>
                <div class="col-3 p-2 " id="my-col" v-for="(serie, i) in store.series" :key="i">
                    <SerieCard :serie="serie" />
                </div>
            </div>
        </div>
   </main>
</template>

<style lang="scss" scoped>

    main {
        background-color: black;
       
        #my-col {
            position: relative;
        }
    
        
    }

</style>