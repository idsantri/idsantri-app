<template lang="">
	<q-page class="q-pa-sm">
		<q-card style="max-width: 600px">
			<q-card-section
				class="bg-green-8 text-green-11 text-subtitle1 q-pa-sm"
			>
				Ekspor Data Santri
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<div class="q-gutter-sm flex flex-center">
					<label>Ekspor Santri</label>
					<q-radio v-model="isActive" :val="true" label="Aktif" />
					<q-radio
						v-model="isActive"
						:val="false"
						label="Non Aktif"
					/>
					<q-btn
						label="Unduh"
						no-caps
						class="q-px-md q-ml-lg"
						outline
						color="green-6"
						icon="file_download"
						@click="download"
					/>
				</div>
			</q-card-section>
			<q-card-actions align="right" class="bg-green-6 q-pa-sm">
			</q-card-actions>
		</q-card>
	</q-page>
</template>
<script setup>
import { ref, toRefs } from 'vue';
import apiGet from 'src/api/api-get.js';
import loadingStore from 'src/stores/loading-store';

const isActive = ref(true);
const { loadingMain } = toRefs(loadingStore());

async function download() {
	// console.log(isActive.value);
	const data = await apiGet({
		endPoint: 'export/santri',
		loading: loadingMain,
		params: {
			aktif: isActive.value,
		},
	});
	// console.log(data.url);
	let link = document.createElement('a');
	link.href = data.url;
	link.click();
	link.remove();
}
</script>
<style lang=""></style>
