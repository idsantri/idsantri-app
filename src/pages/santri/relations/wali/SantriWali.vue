<template>
	<template-object :data="wali" :route="'/wali/' + result.id" />
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { apiTokened } from 'src/api';
import TemplateObject from 'src/components/TemplateObject.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const santriId = route.params.id;

const result = ref({});
async function fetchData() {
	try {
		const { data } = await apiTokened.get(`santri/${santriId}/wali`);
		result.value = data.wali;
	} catch (error) {
		console.log(error);
	}
}
const wali = ref({});
await fetchData();
wali.value = {
	'ID Wali': result.value.id,
	Nama: `${result.value.nama} (${result.value?.sex?.toUpperCase()})`,
	Status: result.value.wali_status,
	Telepon: result.value.telepon || '-',
};
onMounted(async () => {});
</script>
