<template>
    <div id="projects">
        <carousel :items-to-show="itemsToShow">
            <slide v-for="image in images" :key="image">
                <img :src="image" class="h-46 xl:h-96" alt="project" /> 
            </slide>

            <template #addons>
                <navigation />
            </template>
        </carousel>
    </div>
</template>

<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props:{
      images: Array  
    },
    data() {
        return {
            width: 0
        };
    },
    computed: {
        itemsToShow(): number{
            return this.width < 768 ? 1 : 2;
        }
    },
    mounted() {
        this.width = window.outerWidth;
    }
};
</script>

<style scoped>
button {
    font-weight: bold;
}
</style>