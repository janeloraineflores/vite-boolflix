<script>
    import MovieCard from './MovieCard.vue'
    import SerieCard from './SerieCard.vue'
    import { store } from '../store.js';
    export default {
        name: "MainComponent",
        emits: ['search'],
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
    <form action=""  @submit.prevent="$emit('search')">
        <input v-model="store.searchMovieSerie" type="text" class="form-control" id="movie-name" placeholder="Search a movie">
    
        <button type="submit" class="btn btn-primary">
            Search
        </button>
    </form>
   
    <div  v-for="(movie, i) in store.movies" :key="i">
        <MovieCard :movie="movie" />
    </div>

    <div  v-for="(serie, i) in store.series" :key="i">
        <SerieCard :serie="serie" />
    </div>



</template>

<style lang="scss" scoped>

</style>