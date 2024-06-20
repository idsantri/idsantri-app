<template lang="">
	<q-select
		dense
		outlined
		label="Iuran"
		emit-value
		map-options
		option-value="val0"
		option-label="val0"
		:options="options"
		:loading="loading"
		behavior="menu"
		clearable
	>
		<template v-slot:after>
			<drop-down-after
				route-to="/settings/lists/iuran"
				@reload="fetchList"
			/>
		</template>
	</q-select>
</template>
<script setup>
import { getListsArrayObject } from 'src/api/api-get-lists';
import listsStore from 'src/stores/lists-store';
import { onMounted, ref } from 'vue';
import DropDownAfter from './DropDownAfter.vue';

const loading = ref(false);
const options = ref([]);

onMounted(async () => {
	const store = listsStore().iuranGet();
	if (store.length) {
		options.value = store;
	} else {
		await fetchList();
	}
});

async function fetchList() {
	const data = await getListsArrayObject({
		key: 'iuran',
		loading,
		sort: 'asc',
	});
	options.value = data;
	listsStore().iuranSet(data);
}
</script>
<style lang=""></style>
