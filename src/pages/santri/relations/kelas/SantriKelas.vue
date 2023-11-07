<template>
	<div>
		<template-array
			:data="dataMap"
			:spinner="spinner"
			@add="handleAdd"
			@edit="handleEdit"
		/>

		<q-dialog v-model="crudShow">
			<santri-kelas-crud
				:data="dataObj"
				:is-new="isNew"
				title="Input Kelas"
				@success-submit="rerenderSantriRelations()"
				@success-delete="rerenderSantriRelations()"
			/>
		</q-dialog>
	</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import TemplateArray from 'src/pages/santri/relations/TemplateArray.vue';
import { getObjectById } from 'src/utils/array-object';
import SantriKelasCrud from './SantriKelasCrud.vue';
import { useRoute } from 'vue-router';
import getData from 'src/api/api-get';
import { rerenderSantriRelations } from 'src/utils/buttons-click';

const spinner = ref(false);
const crudShow = ref(false);
const dataObj = ref({});
const dataMap = ref([]);
const dataArr = ref([]);
const isNew = ref(false);
const santri = ref({});

const route = useRoute();
const santriId = route.params.id;

onMounted(async () => {
	const data = await getData({
		endPoint: `santri/${santriId}/kelas`,
		spinner,
	});
	dataArr.value = data.kelas;
	dataMap.value = data.kelas
		.map((v, i) => ({
			'Tahun Ajaran': `${v.th_ajaran_h}  |  ${v.th_ajaran_m || ''} `,
			Kelas:
				`${v.kelas} ${v.tingkat}` +
				(v.no_absen ? ` (No. ${v.no_absen})` : ''),
			Keterangan: v.keterangan || '-',
			id: v.id,
		}))
		.reverse();

	santri.value = data.santri;
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
