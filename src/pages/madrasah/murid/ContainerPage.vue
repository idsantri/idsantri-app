<template>
	<q-table :rows="murid" :loading="spinner" />
</template>
<script setup>
import getData from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const murid = ref([]);
const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
	kelas: route.params.kelas,
};
const spinner = ref(false);

onMounted(async () => {
	if (params.thAjaranH && params.tingkatId && params.kelas) {
		const data = await getData({
			endPoint: `murid/${params.thAjaranH}/${params.tingkatId}/${params.kelas}`,
		});
		murid.value = data.murid;
	} else if (params.thAjaranH && params.tingkatId) {
		const data = await getData({
			endPoint: `murid/${params.thAjaranH}/${params.tingkatId}`,
			spinner,
		});
		murid.value = data.murid;
	} else {
		murid.value = [];
	}
});
</script>
<style lang=""></style>
