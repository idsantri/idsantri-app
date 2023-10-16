<template>
	<div v-if="spinner">
		<q-spinner-cube color="green-12" size="8em" class="flex q-mx-auto" />
	</div>
	<div v-else>
		<div v-if="selected.mode == 1">
			<ListsMode1
				:data="listGet"
				@update-list="handleUpdate"
				@delete-list="handleDelete"
				@add-list="handleAdd"
			/>
		</div>
		<div v-if="selected.mode == 2">
			<ListsMode2 />
		</div>
	</div>

	<!-- <pre>list key{{ listKey }}</pre>
	<pre>list key{{ selected }}</pre> -->
</template>
<script setup>
import { useRoute } from 'vue-router';
import listData from './lists-data';
import { onMounted, ref } from 'vue';
import { kebabToSnakeCase } from 'src/utils/format-text';
import ListsMode1 from 'src/pages/settings/lists/ListsMode1.vue';
import ListsMode2 from 'src/pages/settings/lists/ListsMode2.vue';
import getData from 'src/api/get-data.js';
import updateData from 'src/api/api-update';
import deleteData from 'src/api/api-delete';
import postData from 'src/api/api-post';
import { notifyError } from 'src/utils/notify';

const route = useRoute();
const listKey = route.params.listKey;
const selected = listData.find(({ url }) => url == listKey);
const spinner = ref(false);
const listGet = ref([]);
async function fetchData() {
	const data = await getData({
		endPoint: `lists/${selected.url}`,
		spinner: spinner,
	});
	const response = kebabToSnakeCase(selected.url);
	// console.log('r', response);
	listGet.value = data[response];
}

onMounted(async () => {
	await fetchData();
	// console.log('lg', listGet.value);
});

async function handleUpdate(list) {
	// console.log(list);
	const { key, val0, val1, val2, id } = list;
	if (!val0) {
		return notifyError('List tidak boleh kosong!');
	}
	const data = { key, val0, val1, val2 };
	const upd = await updateData({ endPoint: `lists/${id}`, data });
	if (upd) await fetchData();
}

async function handleDelete(list) {
	const del = await deleteData({ endPoint: `lists/${list.id}` });
	if (del) fetchData();
}

async function handleAdd(list) {
	// console.log(list);
	// console.log(selected);
	const { val0, val1, val2 } = list;
	if (!val0) {
		return notifyError('List tidak boleh kosong!');
	}
	const data = {
		key: selected.url,
		val0,
		val1: val1 || null,
		val2: val2 || null,
	};
	// console.log(data);

	const post = await postData({ endPoint: `lists`, data });
	if (post) {
		await fetchData();
	}
}
</script>
<style lang=""></style>
