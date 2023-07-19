<script>
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue'
  import FooterComponent from './components/FooterComponent.vue'
  import axios from 'axios';
  import { store } from './store.js';

  export default {
    name: "App",
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent,
    },
    data() {
      return {
        store
      };
    },

    methods: {
      getResults() {
        axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=076c27a3470c152938c7f03362b72725&query&query=fa', {
                  params: {
                    title: this.store.searchMovie
                  }
                })
                .then(response => {
                    this.store.movies = response.data.results
                    
                    
                })
      },
      performSearch() {
            console.log('Intercettato evento search');
            this.getResults();
        }     
    },

    created() {
        this.getResults();
    }

  }

</script>

<template>
  <HeaderComponent />

  <MainComponent @search="performSearch()" /> 

  <FooterComponent />
</template>

<style lang="scss">
@use "assets/scss/main.scss"
</style>
