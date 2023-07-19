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
            <h2>
               Title: {{ serie.name }}
            </h2>
            <h3>
               Original Title: {{ serie.original_name }}
            </h3>
        </div>
        <div>
            <p>
               Original Language:{{ serie.original_language }}
            </p>
            <p>
                Voto:{{ serie.vote_average }}
            </p>
        </div>
    
</template>

<style lang="scss" scoped>
</style>