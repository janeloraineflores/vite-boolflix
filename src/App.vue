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
      getResultsMovies() {
        axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=076c27a3470c152938c7f03362b72725&language=it_IT&query&query=fa', {
                  params: {
                    query: this.store.searchMovieSerie
                  }
                })
                
                .then(response => {
                    this.store.movies = response.data.results
                })

                .catch(error => {
                    console.log('Errore nella chiamata');
                    this.store.movies = [];
                });
      },

      getResultSeries() {
        axios 
            .get ('https://api.themoviedb.org/3/search/tv?api_key=076c27a3470c152938c7f03362b72725&language=it_IT&query=scrubs', {
                      params: {
                        query: this.store.searchMovieSerie
                      }
                    })
            .then(response => {
                     this.store.series = response.data.results
                 })

            .catch(error => {
                console.log('Errore nella chiamata');
                this.store.movies = [];
            });
          },
      performSearch() {
            console.log('Intercettato evento search');
            this.getResultSeries();
            this.getResultsMovies();
        },
        
     
    },

    created() {
        this.getResultSeries();
        this.getResultsMovies();
    }

  }

</script>

<template>
    <HeaderComponent @search="performSearch()"/>

    <MainComponent /> 

    <FooterComponent />
</template>

<style lang="scss">
@use "assets/scss/main.scss"
</style>