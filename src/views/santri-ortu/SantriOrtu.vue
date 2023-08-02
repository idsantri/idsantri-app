<template>
	<template-object :data="ortu" :route="'/ortu/' + result.id" />
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { apiTokened } from 'src/config/api.js';
import TemplateObject from 'src/components/TemplateObject.vue';
const props = defineProps({
	santriId: { default: null },
});

const result = ref({});
async function fetchData() {
	try {
		const { data } = await apiTokened.get(`santri/${props.santriId}/ortu`);
		result.value = data.ortu;
	} catch (error) {
		console.log(error);
	}
}

const ortu = ref({});
onMounted(async () => {
	await fetchData();
	ortu.value = {
		'ID Ortu': result.value.id,
		Ayah: result.value.ayah,
		Ibu: result.value.ibu,
		'Anak ke': `${result.value.anak_ke || '?'} dari ${
			result.value.jumlah_anak || '?'
		}  bersaudara`,
	};
});
</script>
