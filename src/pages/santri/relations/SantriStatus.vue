<template>
	<div>
		<template-array :data="dataMap" @add="handleAdd" @edit="handleEdit" />
		<q-dialog v-model="crudStatus">
			<q-card class="full-width" style="max-width: 425px">
				<q-form @submit.prevent="submit">
					<q-card-section class="bg-teal-7 text-teal-11 q-pa-sm">
						<div class="text-subtitle1">Input Status</div>
					</q-card-section>
					<q-card-section>
						<q-select
							dense
							hint=""
							class="q-mt-sm"
							outlined
							label="Status"
							emit-value
							map-options
							v-model="data.status"
							:options="lists['status']"
							:loading="loading['status']"
						/>
					</q-card-section>
					<q-card-actions class="flex bg-teal-6">
						<q-btn
							label="Hapus"
							class="bg-red text-red-1"
							no-caps=""
						/>
						<q-space />
						<q-btn
							label="Tutup"
							v-close-popup
							class="bg-teal-11"
							no-caps=""
							id="btn-close-santri-crud"
						/>
						<q-btn
							type="submit"
							label="Simpan"
							class="bg-teal-10 text-teal-11"
							no-caps=""
						/>
					</q-card-actions>
				</q-form>
				<!-- <pre>{{ status }}</pre>
                <pre>{{ listsMap }}</pre> -->
			</q-card>
		</q-dialog>
	</div>
</template>
<script setup>
import { apiTokened } from 'src/config/api.js';
import { ref, onMounted } from 'vue';
import TemplateArray from './TemplateArray.vue';
import { formatDateShort } from 'src/utils/format-date.js';
import { m2hFormat } from 'src/utils/hijri.js';
import { fetchLists } from 'src/utils/fetch-list';
import { getObjectById } from 'src/utils/array-object';

const props = defineProps({
	santriId: { default: null },
});

const crudStatus = ref(false);
const status = ref({});
const dataMap = ref([]);
const data = ref([]);
async function fetchData() {
	try {
		const { data } = await apiTokened.get(
			`santri/${props.santriId}/status`
		);
		data.value = data.status;
		dataMap.value = data.status.map((v, i) => ({
			Tanggal:
				formatDateShort(v.created_at) + ' | ' + m2hFormat(v.created_at),
			Status: v.status,
			Keterangan: v.keterangan || '-',
			id: v.id,
		}));
	} catch (error) {
		console.log(error);
	}
}

const lists = ref([]);
const loading = ref([]);
onMounted(async () => {
	await fetchData();
	await fetchLists({ key: 'status', loading, lists });
	// console.log(lists.value['status']);
});

const handleAdd = () => {
	console.log('add');
};

const handleEdit = ({ id }) => {
	status.value = getObjectById(data, id);
	crudStatus.value = true;
};

const submit = () => {
	console.log('submit');
};
</script>
