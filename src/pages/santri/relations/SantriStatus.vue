<template>
	<div>
		<template-array :data="listsMap" @add="handleAdd" @edit="handleEdit" />
		<q-dialog v-model="crudStatus">
			<q-card class="full-width" style="max-width: 425px">
				<q-form @submit.prevent="submit">
					<q-card-section class="bg-teal-7 text-teal-11 q-pa-sm">
						<div class="text-subtitle1">Input Status</div>
					</q-card-section>
					<q-card-section>
						<q-input v-model="status.status" />
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
const props = defineProps({
	santriId: { default: null },
});

const crudStatus = ref(false);
const status = ref({});
const listsMap = ref([]);
const lists = ref([]);
async function fetchData() {
	try {
		const { data } = await apiTokened.get(
			`santri/${props.santriId}/status`
		);
		lists.value = data.status;
		listsMap.value = data.status.map((v, i) => ({
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

onMounted(async () => {
	await fetchData();
});

const handleAdd = () => {
	console.log('add');
};

const handleEdit = ({ id }) => {
	status.value = getObjectById(lists, id);
	crudStatus.value = true;
};

const submit = () => {
	console.log('submit');
};

function getObjectById(arr, id) {
	// Periksa apakah array merupakan Proxy
	const dataArr = Array.isArray(arr) ? arr : arr.value;
	return dataArr.find((obj) => obj.id === id);
}
</script>
