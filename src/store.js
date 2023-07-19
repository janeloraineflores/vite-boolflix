import { reactive } from 'vue'

export const store = reactive({
    searchMovieSerie: "",
    series: [],
    movies: [],
    loading: true
});