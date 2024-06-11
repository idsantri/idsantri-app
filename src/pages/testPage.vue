<template lang="">
	<q-page>
		<q-card>
			<q-card-section>
				<h1 class="text-subtitle1">Upload File Excel</h1>

				<q-file
					@input="handleFileChange"
					outlined
					bottom-slots
					v-model="model"
					label="Label"
					counter
				>
					<template v-slot:prepend>
						<q-icon name="cloud_upload" @click.stop.prevent />
					</template>
					<template v-slot:append>
						<q-icon
							name="close"
							@click.stop.prevent="model = null"
							class="cursor-pointer"
						/>
					</template>

					<template v-slot:hint
						>Hanya membaca sheet pertama
					</template>
				</q-file>
				<br />
				<!-- <input type="file" v-on:change="handleFileChange" /> -->
				<br />
				<!-- <pre v-if="jsonData">{{ jsonData }}</pre> -->
			</q-card-section>
			<q-table :rows="jsonData" />
		</q-card>
	</q-page>
</template>
<script setup>
import { ref, watch } from 'vue';
import { read, utils } from 'xlsx';
const model = ref();

const jsonData = ref([]);
const handleFileChange = (event) => {
	const file = event.target.files[0];
	const reader = new FileReader();

	reader.onload = (e) => {
		const data = e.target.result;
		const workbook = read(data, { type: 'array' });
		const sheetName = workbook.SheetNames[0];
		const worksheet = workbook.Sheets[sheetName];
		jsonData.value = utils.sheet_to_json(worksheet);
		console.log(jsonData.value);
	};

	reader.readAsArrayBuffer(file);
};

watch(model, (newModel) => {
	if (!newModel) {
		jsonData.value = [];
	}
});
</script>
<style lang=""></style>
