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
        }
    
    } 
    
}
</script>

<template>

    <div class="first-card">
        <div class="image-container">
            <img :src= "'https://image.tmdb.org/t/p/w342/' +  movie.poster_path " alt="">
        </div>
    </div>
    <div class="second-card">
        <div class="second-card-two">
            <h3>
                {{ movie.title }}
            </h3>
            <div class="flag-container">
                <img :src="getFlag(movie.original_language)" alt="">
            </div>
            <div class="my-2">
                <span v-for="numero in Math.round(movie.vote_average / 2) " :key="numero">
                    <i class="bi bi-star-fill"></i>
                </span>
                <span v-for="numero in (5 - Math.round(movie.vote_average / 2)) " :key="numero">
                    <i class="bi bi-star"></i>
                </span>
            </div>
            <p>
                {{ movie.overview }}
            </p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .image-container {
        width: 100%;
        height: 100%;
        display: block;

        img{
            border-radius: 10px;
            width: 100%;
            height: 100%;
        }
    }


    .first-card {
        width: 100%;
        height: 100%;
    }

    .second-card {
        color: white;
        display: none;
        width: 100%;
        height: 487px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.753);
        padding: 20px;
        overflow-y: auto;
    }
    .second-card-two {
        height: 487px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        
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

    span {
        color: #FFA500;
    }

</style>