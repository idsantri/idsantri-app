<template>
	<q-page class="q-pa-sm">
		<div style="margin-top: 50px">
			<div class="text-subtitle1 text-center">Selamat Datang</div>
		</div>
		<div class="text-center" style="margin-top: 20px">
			<q-avatar size="150px" square="">
				<q-img src="logo-t.png" />
			</q-avatar>
		</div>
	</q-page>
</template>
<script setup>
import { getListsKey } from 'src/api/api-get-lists';
import { onMounted, ref } from 'vue';

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
