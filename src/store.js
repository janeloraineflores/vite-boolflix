import { reactive } from 'vue'

export const store = reactive({
    searchMovie: "",
    movies: [],
    loading: true
});