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
    }
}
</script>

<template>
        <div>
            <h2>
               Title: {{ movie.title }}
            </h2>
            <h3>
               Original Title: {{ movie.original_title }}
            </h3>
        </div>
        <div>
            <p>
               Original Language:{{ movie.original_language }}
            </p>
            <p>
                Voto:{{ movie.vote_average }}
            </p>
        </div>
    
</template>

<style lang="scss" scoped>
</style>