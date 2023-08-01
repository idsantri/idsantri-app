<template>
	<template-array :data="lists" />
</template>
<script setup>
import { apiTokened } from 'src/config/api.js';
import { ref, onMounted } from 'vue';
import TemplateArray from 'src/components/TemplateArray.vue';

const props = defineProps({
	santriId: { default: null },
});

const lists = ref([]);
async function fetchData() {
	try {
		const { data } = await apiTokened.get(`santri/${props.santriId}/kelas`);
		lists.value = data.kelas.map((v, i) => ({
			'Tahun Ajaran': `${v.th_ajaran_h}  |  ${v.th_ajaran_m || ''} `,
			Kelas: `${v.kelas} ${v.tingkat}`,
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
</script>
