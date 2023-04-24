<template>
	<div>
		<carousel :items-to-show="1">
			<slide v-for="project in projects" :key="project.id">
				<div
					class="h-[50rem] w-full bg-center bg-cover flex flex-col items-center"
					:style="'background-image: url(' + project.image + ')'">
					<div class="text-4xl text-white text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] mt-auto">
						{{ project.title }}
					</div>
					<a
						href=""
						class="mt-6 mb-32 inline-block bg-primary text-white px-6 py-2 rounded font-semibold tracking-wide hover:bg-secondary">
						View project
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
