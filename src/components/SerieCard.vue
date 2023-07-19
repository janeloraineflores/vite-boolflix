<script>
export default {
    props: {
        serie: {
            type: Object,
            default: {
                name: '',
                original_name: '',
                original_language: '',
                vote_average: '',
            }
        }
    }
}
</script>

<template>
        <div>
            <div>
                <img :src= "'https://image.tmdb.org/t/p/w342/' +  serie.poster_path " alt="">
            </div>
            <h2>
               Title: {{ serie.name }}
            </h2>
            <h3>
               Original Title: {{ serie.original_name }}
            </h3>
            <p>
               Original Language: {{ serie.original_language }}
            </p>
            <p ()>
                Voto: {{ Math.round(serie.vote_average / 2)  }}
            </p>
        </div>
    
</template>

<style lang="scss" scoped>
</style>