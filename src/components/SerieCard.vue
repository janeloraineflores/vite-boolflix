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
    },
    methods: {
        getFlag(lang) {
            if (lang == 'it') {
                return 'https://flagicons.lipis.dev/flags/4x3/it.svg'
            }

            else if (lang == 'en') {
                return 'https://flagicons.lipis.dev/flags/4x3/gb.svg'
            }

            else if (lang == 'fr') {
                return 'https://flagicons.lipis.dev/flags/4x3/fr.svg'
            }

            else if (lang == 'es') {
                return 'https://flagicons.lipis.dev/flags/4x3/es.svg'
            }

            else if (lang == 'de') {
                return 'https://flagicons.lipis.dev/flags/4x3/de.svg'
            }

            else {
                return 'https://flagicons.lipis.dev/flags/4x3/eu.svg'
            }
        },

        getStars(rate) {
            if (rate == '1') {
                return 'https://cdn-icons-png.flaticon.com/128/2107/2107957.png'

            }

            else {
                return 'https://cdn-icons-png.flaticon.com/128/2107/2107957.png'
            }
        } 
    }

}
</script>

<template>
        
    <div class="first-card">
        <div class="image-container">
            <img :src= "'https://image.tmdb.org/t/p/w342/' +  serie.poster_path " alt="">
        </div>
    </div>
    <div class="second-card">
        <h3>
            {{ serie.title }}
        </h3>
        <div class="flag-container">
            <img :src="getFlag(serie.original_language)" alt="">
        </div>
        <div class="star-container">
            <img :src="getStars(Math.round(serie.vote_average / 2))" alt="">
        </div>
        <p>
            {{ serie.overview }}
        </p>
    </div>
    
</template>

<style lang="scss" scoped>
    .image-container {
        width: 100%;
        height: 100%;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .first-card{
        width: 100%;
        height: 100%;
    }

    .second-card {
        color: white;
        display: none;
        width: 100%;
        height: 100%;
    }
    
    #my-col:hover .first-card {
        display: none;
        cursor: pointer;
    }

    #my-col:hover .second-card{
        display: block;
        cursor: pointer;
    }

    .flag-container {
        width: 30px;
        height: 30px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .star-container {
        margin-bottom: 20px;
        width: 20px;
        height: 20px;

        img {
            width: 100%;
            height: 100%;
        }
    }

</style>