<template>
    <div id="projects">
        <carousel :items-to-show="1">
            <slide v-for="project in projects" :key="project.id">
                <div
                        class="h-[50rem] w-full bg-center bg-cover flex flex-col items-center justify-center"
                        :style="'background-image: url(' + project.image + ')'">

                    <a
                            href=""
                            class="inline-block bg-primary text-white px-6 py-2 rounded font-semibold tracking-wide opacity-80 hover:opacity-100">
                        {{ project.title }}
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

export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            projects: [
                {
                    id: 1,
                    image: "project1.jpg",
                    title: "My Project 1",
                    description: "Lorem ipsum",
                },
                {
                    id: 2,
                    image: "project1.jpg",
                    title: "My Project 2",
                    description: "Lorem ipsum",
                },
            ],
        };
    },
};
</script>

<style scoped>
button {
    font-weight: bold;
}
</style>