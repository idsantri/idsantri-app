<template lang="">
	<div>tabel</div>

	<!-- <pre>{{ params }}</pre> -->
	<pre>{{ spinner }}</pre>
	<pre>{{ data }}</pre>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import postData from 'src/api/api-post.js';
const spinner = ref(false);
const route = useRoute();
const router = useRouter();
const murid = ref([]);
const filter = ref('');
const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
	kelas: route.params.kelas,
	tbu: route.params.tbu,
};
const data = ref([]);
onMounted(async () => {
	if (params.thAjaranH && params.tingkatId && params.kelas && params.tbu) {
		const post = await postData({
			endPoint: 'absensi-kelas',
			data: {
				th_ajaran_h: params.thAjaranH,
				tingkat_id: params.tingkatId,
				kelas: params.kelas,
				tbu: params.tbu,
			},
			needNotify: false,
			loading: spinner,
		});
		data.value = post.data;
	}
});
</script>
<style lang=""></style>
