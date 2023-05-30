<template>
	<div>
		<template v-if="!isSent">
			
			<form
				class="lg:pl-24"
				name="contact"
				method="POST"
				data-netlify-honeypot="bot-field"
				data-netlify="true"
				enctype="application/x-www-form-urlencoded"
				@submit.prevent="handleFormSubmit"
			>
				<input type="hidden" name="form-name" value="contact" />

				<div class="flex space-x-6">
					<div class="w-1/2">
						<label for="firstname" class="block text-white mb-1">Voornaam</label>
						<input v-model="formData.firstName" id="firstname" name="firstname" type="text" class="bg-primary-light px-4 py-2 rounded w-full" required>
					</div>
					<div class="w-1/2">
						<label for="surname" class="block text-white mb-1">Naam</label>
						<input v-model="formData.lastName" id="surname" name="surname" type="text" class="bg-primary-light px-4 py-2 rounded w-full" required>
					</div>
				</div>
				<div class="mt-6">
					<div class="w-full">
						<label for="email" class="block text-white mb-1">E-mailadres</label>
						<input v-model="formData.email" id="email" name="email" type="text" class="bg-primary-light px-4 py-2 rounded w-full" required>
					</div>
				</div>
				<div class="mt-6">
					<div class="w-full">
						<label for="message" class="block text-white mb-1">Uw bericht</label>
						<textarea v-model="formData.message" id="message" name="message" class="bg-primary-light px-4 py-2 rounded w-full" rows="4" required></textarea>
					</div>
				</div>
				<div class="mt-6">
					<button class="font-semibold text-white bg-primary-light hover:bg-fuchsia hover:text-black rounded px-6 py-2 w-48">Verzenden</button>
				</div>
			</form>
		</template>
		<div v-else>
			<div class="uppercase text-primary tracking-widest text-left mb-2">
				Bedankt!
			</div>
			<p class="text-white font-normal normal-case">
				We nemen zo snel mogelijk contact op!
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
	name: "contact",
	data() {
		return {
			isSent: false,
			formData: {
				email: "",
				firstName: "",
				lastName: "",
				message: ""
			},
		};
	},
	methods: {
		encode(data: any) {
			const formData = new FormData();

			for (const key of Object.keys(data)) {
				formData.append(key, data[key]);
			}

			return formData;
		},
		async handleFormSubmit(e: Event) {
			await axios.post(
				location.href,
				this.encode({
					"form-name": (e!.target! as HTMLFormElement).getAttribute("name"),
					...this.formData,
				}),
				{
					headers: { "Content-Type": "application/x-www-form-urlencoded" },
				}
			);

			this.isSent = true;
		},
	},
});
</script>
