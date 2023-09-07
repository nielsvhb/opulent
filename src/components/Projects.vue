<template>
    <div id="projects">
        <carousel :items-to-show="1">
            <slide v-for="project in projects" :key="project.frontmatter.title">
                <div
                        class="h-[18rem] sm:h-[25rem] lg:h-[50rem] w-full bg-primary-light bg-center bg-contain bg-no-repeat sm:bg-cover flex flex-col items-center justify-center"
                        :style="'background-image: url(' + project.frontmatter.images[0].image + ')'">

                    <a
                            :href="project.url"
                            class="inline-block bg-primary text-white px-6 py-2 rounded tracking-wide opacity-80 hover:opacity-100">
                        {{ project.frontmatter.title }}
                    </a>
                </div>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>
</template>

<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

interface Project {
    url: string;
    compiledContent: () => string;
    frontmatter: {
        title: string;
        images: {
            image: string[]
        };
    }
}
export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props: {
      projects: Array as () => Project[]  
    },
    data() {
        return {
          
        };
    },
};
</script>

<style scoped>
button {
    font-weight: bold;
}
</style>