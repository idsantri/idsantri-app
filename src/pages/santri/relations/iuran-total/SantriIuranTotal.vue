<template>
	<div>
		<temp-array
			:data="dataMap"
			:spinner="spinner"
			@add="handleAdd"
			@edit="handleEdit"
		/>
	</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import TempArray from 'src/pages/santri/relations/TemplateArray.vue';
import { useRoute, useRouter } from 'vue-router';
import { digitSeparator } from 'src/utils/format-number';
import apiGet from 'src/api/api-get';

/**
 * TODO: BUANG FITUR INI
 */

const spinner = ref(false);
const dataMap = ref([]);
const dataArr = ref([]);
const santri = ref({});

const route = useRoute();
const santriId = route.params.id;

onMounted(async () => {
	const data = await apiGet({
		endPoint: `santri/${santriId}/iuran-total`,
		loading: spinner,
	});

	dataArr.value = data.iuran_total;
	dataMap.value = data.iuran_total.map((v) => ({
		'Tahun Ajaran': `${v.th_ajaran_h}  |  ${v.th_ajaran_m || ''} `,
		Kelas: `${v.kelas || ''} ${v.tingkat || ''}`,
		Pembayaran: `Rp${digitSeparator(v.total)}`,
	}));

	santri.value = data.santri;
});

const router = useRouter();
const handleAdd = () => {
	router.push(`/bendahara/iuran/santri/${santri.value.id}`);
};

const handleEdit = (tahun) => {
	const th = tahun['Tahun Ajaran'].substring(0, 9);
	router.push(`/bendahara/iuran/santri/${santri.value.id}/${th}`);
};
</script>
