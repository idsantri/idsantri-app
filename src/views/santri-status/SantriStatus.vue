<template>
	<div>
		<template-array
			:data="statusMap"
			@add="handleAdd"
			@edit="handleEdit"
			:key="keyStatus"
		/>
		<q-dialog v-model="crudShow">
			<santri-status-crud
				:data="status"
				:is-new="isNew"
				title="Input Status"
			/>
		</q-dialog>
	</div>
</template>
<script setup>
import { apiTokened } from 'src/config/api.js';
import { ref, onMounted } from 'vue';
import TemplateArray from 'src/components/TemplateArray.vue';
import { formatDateShort } from 'src/utils/format-date.js';
import { m2hFormat } from 'src/utils/hijri.js';
import { getObjectById } from 'src/utils/array-object';
import SantriStatusCrud from './SantriStatusCrud.vue';
import santriStore from 'src/stores/santri-store';
import { useRoute } from 'vue-router';

const { santri } = santriStore();
const keyStatus = ref(0);

const route = useRoute();
const santriId = route.params.id;

const crudShow = ref(false);
const status = ref({});
const statusMap = ref([]);
const statusArr = ref([]);
const isNew = ref(false);
async function fetchByIdSantri(id) {
	try {
		const { data } = await apiTokened.get(`santri/${id}/status`);
		return data;
	} catch (error) {
		console.log(error);
	}
}

onMounted(async () => {
	const { status } = await fetchByIdSantri(santriId);
	statusArr.value = status;
	statusMap.value = status.map((v, i) => ({
		Tanggal:
			formatDateShort(v.created_at) + ' | ' + m2hFormat(v.created_at),
		Status: v.status,
		Keterangan: v.keterangan || '-',
		id: v.id,
	}));
});

const handleAdd = () => {
	status.value = {
		santri_id: statusArr.value[0]?.santri_id || santri.id,
		nama: statusArr.value[0]?.nama || santri.nama,
	};
	isNew.value = true;
	crudShow.value = true;
};

const handleEdit = ({ id }) => {
	status.value = getObjectById(statusArr, id);
	isNew.value = false;
	crudShow.value = true;
};
</script>
