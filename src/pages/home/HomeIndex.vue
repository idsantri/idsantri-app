<template>
	<div style="margin-top: 50px">
		<div class="text-subtitle1 text-center">Selamat Datang</div>
	</div>
	<div class="text-center" style="margin-top: 20px">
		<q-avatar size="150px" square="">
			<q-img src="icons/icon-192x192.png" />
		</q-avatar>
	</div>
</template>
<script setup>
import { getListsKey, getLists } from 'src/api/api-get-lists';
import { onMounted, ref, toRefs } from 'vue';

import loadingStore from 'src/stores/loading-store';
const loadingState = loadingStore();
const { loadingSpinner, setLoadingSpinner } = toRefs(loadingState);

const lists = ref([]);
const loading = ref([]);
const key = 'tahun-ajaran';
onMounted(async () => {
	const data = await getListsKey({
		loading,
		lists,
		key,
	});
	console.log('loading', loading.value);
	console.log('lists', lists.value);
	console.log('data', data);
});
</script>

<style lang="scss" scoped></style>
