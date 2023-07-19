<script>
export default {
    props: {
        movie: {
            type: Object,
            default: {
                title: '',
                original_title: '',
                original_language: '',
                vote_average: '',
            }
        }

    },   
    
}
</script>

<template>
        <div>
            <div>
                <img :src= "'https://image.tmdb.org/t/p/w342/' +  movie.poster_path " alt="">
            </div>
            <h2>
               Title: {{ movie.title }}
            </h2>
            <h3>
               Original Title: {{ movie.original_title }}
            </h3>
    
            <p>
               Original Language:{{ movie.original_language }}
            </p>
            <p>
                Voto: {{ Math.round(movie.vote_average / 2)  }}
            </p>
        </div>
    
</template>

<style lang="scss" scoped>
</style>