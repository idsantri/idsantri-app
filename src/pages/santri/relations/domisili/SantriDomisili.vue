<template>
	<div>
		<template-array
			:data="dataMap"
			:spinner="spinner"
			@add="handleAdd"
			@edit="handleEdit"
		/>

		<q-dialog v-model="crudShow">
			<santri-domisili-crud
				:data="dataObj"
				:is-new="isNew"
				title="Input Domisili"
				@success-submit="loadData"
				@success-delete="loadData"
			/>
		</q-dialog>
	</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import TemplateArray from 'src/pages/santri/relations/TemplateArray.vue';
import { formatDateShort } from 'src/utils/format-date.js';
import { m2hFormat } from 'src/utils/hijri.js';
import { getObjectById } from 'src/utils/array-object';
import SantriDomisiliCrud from './SantriDomisiliCrud.vue';
import { useRoute } from 'vue-router';
import apiGet from 'src/api/api-get';

const spinner = ref(false);
const crudShow = ref(false);
const dataObj = ref({});
const dataMap = ref([]);
const dataArr = ref([]);
const isNew = ref(false);
const santri = ref({});

const route = useRoute();
const santriId = route.params.id;

async function loadData() {
	const data = await apiGet({
		endPoint: `santri/${santriId}/domisili`,
		loading: spinner,
	});
	dataArr.value = data.domisili;
	dataMap.value = data.domisili.map((v, i) => ({
		Tanggal: formatDateShort(v.date_m) + ' | ' + m2hFormat(v.date_m),
		Domisili: v.domisili,
		Keterangan: v.keterangan || '-',
		id: v.id,
	}));

	santri.value = data.santri;
}

onMounted(async () => {
	await loadData();
});

const handleAdd = () => {
	dataObj.value = {
		santri_id: santri.value.id,
		nama: santri.value.nama,
	};

	isNew.value = true;
	crudShow.value = true;
};

const handleEdit = ({ id }) => {
	dataObj.value = getObjectById(dataArr, id);
	dataObj.value.santri_id = santri.value.id;
	dataObj.value.nama = santri.value.nama;

	isNew.value = false;
	crudShow.value = true;
};
</script>
