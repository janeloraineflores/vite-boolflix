<script>
    import MovieCard from './MovieCard.vue'
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
        }
    }

</script>

<template>
    <form action=""  @submit.prevent="$emit('search')">
        <input v-model="store.searchMovie" type="text" class="form-control" id="movie-name" placeholder="Search a movie">
    
        <button type="submit" class="btn btn-primary">
            Search
        </button>
    </form>
   
    <div  v-for="(movie, i) in store.movies" :key="i">
        <MovieCard :movie="movie" />
    </div>

</template>

<style lang="scss" scoped>

</style>