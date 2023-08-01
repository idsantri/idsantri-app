<template>
	<template-array :data="lists" />
</template>
<script setup>
import { apiTokened } from 'src/config/api.js';
import { ref, onMounted } from 'vue';
import TemplateArray from 'src/components/TemplateArray.vue';
import { m2hFormat } from 'src/utils/hijri.js';
import { formatDateShort } from 'src/utils/format-date.js';

const props = defineProps({
	santriId: { default: null },
});

const lists = ref([]);
async function fetchData() {
	try {
		const { data } = await apiTokened.get(
			`santri/${props.santriId}/domisili`
		);
		lists.value = data.domisili.map((v, i) => ({
			Tanggal:
				formatDateShort(v.created_at) + ' | ' + m2hFormat(v.created_at),
			Domisili: v.domisili,
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
