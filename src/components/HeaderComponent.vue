<script>
   import { store } from '../store.js';
    export default {
        name: "HeaderComponent",
        emits: ['search'],
        data() {
            return {
               store
            }
        },
        methods: {

        }
    }
</script>

<template>

    <header>
        <div class="container d-flex justify-content-between align-items-center" >
            <div class="d-flex align-items-center">
                <div>
                    <h1 class="me-4 text-danger fw-bold">
                        BOOLFLIX
                    </h1>
                </div>
                <div>
                    <button class="link text-light ms-2"> Home </button>
                    <button class="link text-light" @click="$emit('searchMovies')"> Movies </button>
                    <button class="link text-light"> TV Series </button>
                    <button class="link text-light"> My List </button>
                </div>
            </div>
            <form action=""  @submit.prevent="$emit('search')" class="d-flex align-items-center">
                <input v-model="store.searchMovieSerie" type="text" class="form-control" id="movie-name" placeholder="Search">
            
                <button class="search" type="submit">
                    <i class="bi bi-search"></i>
                </button>
            </form>
        </div>
    </header>
   
</template>

<style lang="scss" scoped>

    header {
        background-color: black;

        .link {
            color: white;
            font-size: 20px;
            border: none;
            background-color: rgba(255, 254, 254, 0);
            margin-right: 30px;
        }

        .search {
            width: 100px;
            height: 100px;
            border: none;
            background-color: rgba(255, 254, 254, 0);
            color: white;
            margin-right : 100px;
            font-size: 20px;
        }
    }

   
</style>