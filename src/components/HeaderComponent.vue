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
                <ul class="list-unstyled mx-3 mt-2">
                    <li class="d-inline">
                        <a class="text-decoration-none text-light" href="#"> Home </a>
                    </li>
                    <li class="d-inline mx-2">
                        <a class="text-decoration-none text-light" href="#"> Movies </a>
                    </li>
                    <li class="d-inline mx-2">
                        <a class="text-decoration-none text-light" href="#"> TV Series </a>
                    </li>
                    <li class="d-inline mx-2">
                        <a class="text-decoration-none text-light" href="#"> My List </a>
                    </li>
                </ul>
            </div>
            <form action=""  @submit.prevent="$emit('search')" class="d-flex align-items-center">
                <input v-model="store.searchMovieSerie" type="text" class="form-control" id="movie-name" placeholder="Search">
            
                <button type="submit">
                    <i class="bi bi-search"></i>
                </button>
            </form>
        </div>
    </header>
   
</template>

<style lang="scss" scoped>

    header {
        background-color: black;
        
        button {
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