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
                {{ movie.title }}
            </h2>
            <h3>
                {{ movie.original_title }}
            </h3>
        </div>
        <div>
            <p>
               {{ movie.original_language }}
            </p>
            <p>
                {{ movie.vote_average }}
            </p>
        </div>
    
</template>

<style lang="scss" scoped>
</style>