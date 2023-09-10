<template>
	<div>
		<template-array :data="iuranMap" @add="handleAdd" @edit="handleEdit" />
	</div>
</template>
<script setup>
import { apiTokened } from 'src/api';
import { ref, onMounted } from 'vue';
import TemplateArray from 'src/components/TemplateArray.vue';
import { getObjectById } from 'src/utils/array-object';
import santriStore from 'src/stores/santri-store';
import { useRoute, useRouter } from 'vue-router';
import { digitSeparator } from 'src/utils/format-number';

const { santri } = santriStore();
const route = useRoute();
const santriId = route.params.id;

const crudShow = ref(false);
const iuranProps = ref({});
const iuranMap = ref([]);
const iuranArr = ref([]);
const isNew = ref(false);
async function fetchByIdSantri(id) {
	try {
		const { data } = await apiTokened.get(`santri/${id}/iuran-total`);
		return data;
	} catch (error) {
		console.log(error);
	}
}

const { iuran_total } = await fetchByIdSantri(santriId);
iuranArr.value = iuran_total;
iuranMap.value = iuran_total.map((v, i) => ({
	'Tahun Ajaran': `${v.th_ajaran_h}  |  ${v.th_ajaran_m || ''} `,
	Kelas: `${v.kelas || ''} ${v.tingkat || ''}`,
	Pembayaran: `Rp${digitSeparator(v.total)}`,
}));
onMounted(async () => {});

const router = useRouter();
const handleAdd = () => {
	router.push(`/santri/${santri.id}/iuran`);
};

const handleEdit = (tahun) => {
	const th = tahun['Tahun Ajaran'].substring(0, 9);
	router.push(`/santri/${santri.id}/iuran/${th}`);
};
</script>
