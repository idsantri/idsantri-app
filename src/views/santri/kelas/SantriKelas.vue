<template>
	<div>
		<template-array :data="kelasMap" @add="handleAdd" @edit="handleEdit" />

		<q-dialog v-model="crudShow">
			<santri-kelas-crud
				:data="kelasProps"
				:is-new="isNew"
				title="Input Kelas"
			/>
		</q-dialog>
	</div>
</template>
<script setup>
import { apiTokened } from 'src/api';
import { ref, onMounted } from 'vue';
import TemplateArray from 'src/components/TemplateArray.vue';
import { formatDateShort } from 'src/utils/format-date.js';
import { m2hFormat } from 'src/utils/hijri.js';
import { getObjectById } from 'src/utils/array-object';
import SantriKelasCrud from './SantriKelasCrud.vue';
import santriStore from 'src/stores/santri-store';
import { useRoute } from 'vue-router';

const { santri } = santriStore();
const route = useRoute();
const santriId = route.params.id;

const crudShow = ref(false);
const kelasProps = ref({});
const kelasMap = ref([]);
const kelasArr = ref([]);
const isNew = ref(false);
async function fetchByIdSantri(id) {
	try {
		const { data } = await apiTokened.get(`santri/${id}/kelas`);
		return data;
	} catch (error) {
		console.log(error);
	}
}

const { kelas } = await fetchByIdSantri(santriId);
kelasArr.value = kelas;
kelasMap.value = kelas
	.map((v, i) => ({
		'Tahun Ajaran': `${v.th_ajaran_h}  |  ${v.th_ajaran_m || ''} `,
		Kelas:
			`${v.kelas} ${v.tingkat}` +
			(v.no_absen ? ` (No. ${v.no_absen})` : ''),
		Keterangan: v.keterangan || '-',
		id: v.id,
	}))
	.reverse();
onMounted(async () => {});

const handleAdd = () => {
	kelasProps.value = {
		santri_id: kelasArr.value[0]?.santri_id || santri.id,
		nama: kelasArr.value[0]?.nama || santri.nama,
	};
	isNew.value = true;
	crudShow.value = true;
};

const handleEdit = ({ id }) => {
	kelasProps.value = getObjectById(kelasArr, id);
	isNew.value = false;
	crudShow.value = true;
};
</script>
src/api/api.js
