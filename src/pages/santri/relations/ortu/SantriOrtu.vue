<template>
	<template-object
		:data="dataObj"
		:route="'/ortu/' + dataObj['ID Ortu']"
		:spinner="spinner"
	/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TemplateObject from 'src/pages/santri/relations/TemplateObject.vue';
import { useRoute } from 'vue-router';
import getData from 'src/api/api-get';

const route = useRoute();
const santriId = route.params.id;
const spinner = ref(false);
const dataObj = ref({});

onMounted(async () => {
	const { ortu } = await getData({
		endPoint: `santri/${santriId}/ortu`,
		spinner,
	});

	dataObj.value = {
		'ID Ortu': ortu.id,
		Ayah: ortu.ayah,
		Ibu: ortu.ibu,
		'Anak ke': `${ortu.anak_ke || '?'} dari ${
			ortu.jumlah_anak || '?'
		}  bersaudara`,
	};
});
</script>
