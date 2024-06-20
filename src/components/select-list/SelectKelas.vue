<template lang="">
	<q-select
		dense
		outlined
		label="Kelas"
		emit-value
		map-options
		:options="options"
		:loading="loading"
		behavior="menu"
		clearable
	>
		<template v-slot:after>
			<drop-down-after
				route-to="/settings/lists/kelas"
				@reload="fetchList"
			/>
		</template>
	</q-select>
</template>
<script setup>
import { getListsArray } from 'src/api/api-get-lists';
import listsStore from 'src/stores/lists-store';
import { onMounted, ref } from 'vue';
import DropDownAfter from './DropDownAfter.vue';

const loading = ref(false);
const options = ref([]);

onMounted(async () => {
	const store = listsStore().kelasGet();
	if (store.length) {
		options.value = store;
	} else {
		await fetchList();
	}
});

async function fetchList() {
	const data = await getListsArray({
		key: 'kelas',
		loading: loading,
		sort: true,
	});
	options.value = data;
	listsStore().kelasSet(data);
}
</script>
<style lang=""></style>
