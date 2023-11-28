<template lang="">
	<q-table :rows="personalia"></q-table>

	<pre>

{{ personalia }}

	</pre
	>
	<pre>

{{ params }}

	</pre
	>
</template>
<script setup>
import getData from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const spinner = ref(false);
const route = useRoute();
const router = useRouter();
const filter = ref('');
const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
};

const personalia = ref([]);

onMounted(async () => {
	if (params.thAjaranH && params.tingkatId) {
		const data = await getData({
			endPoint: `personalia-madrasah`,
			params: {
				th_ajaran_h: params.thAjaranH,
				tingkat_id: params.tingkatId,
			},
		});
		personalia.value = data.personalia_madrasah;
	} else {
		personalia.value = [];
	}
});
</script>
<style lang=""></style>
