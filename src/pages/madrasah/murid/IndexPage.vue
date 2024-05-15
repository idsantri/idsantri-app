<template>
	<q-page class="q-pa-sm">
		<filter-kelas
			:showBulanUjian="false"
			start-url="/madrasah/murid"
			@dataFilter="dataEmit"
		/>
		<q-card class="q-mt-sm">
			<q-card-section
				class="bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"
			>
				<span v-html="dataFilter.display || ''"></span>
				<q-space />
				<q-btn
					dense=""
					icon="download"
					label="Excel"
					no-caps=""
					class="bg-green-11 text-green-10 q-px-md"
					@click="downloadExcel"
				/>
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<q-dialog v-model="loadingDownload" persistent="">
					<q-spinner-cube
						color="green-12"
						size="8em"
						class="flex q-ma-lg q-mx-auto"
					/>
				</q-dialog>
				<router-view :key="$route.fullPath" />
			</q-card-section>
		</q-card>
	</q-page>
</template>
<script setup>
import { ref } from 'vue';
import FilterKelas from 'src/components/HeadFilterKelas.vue';
import { useRoute } from 'vue-router';
import { notifyWarning } from 'src/utils/notify';
import apiGet from 'src/api/api-get';

const dataFilter = ref({});
const route = useRoute();
const loadingDownload = ref(false);

function dataEmit(val) {
	dataFilter.value = val;
}

async function downloadExcel() {
	if (!route.params.thAjaranH || !route.params.tingkatId) {
		notifyWarning('Tentukan tahun ajaran dan tingkat pendidikan!');
		return;
	}

	const data = await apiGet({
		endPoint: 'export/kelas',
		loading: loadingDownload,
		params: {
			th_ajaran_h: route.params.thAjaranH,
			tingkat_id: route.params.tingkatId,
		},
	});
	// console.log(data.url);
	let link = document.createElement('a');
	link.href = data.url;
	link.click();
	link.remove();
}
</script>
