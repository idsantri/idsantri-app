<template lang="">
	<q-select
		dense
		outlined
		label="Pasal dilanggar"
		emit-value
		map-options
		:options="options"
		:loading="loading"
		behavior="menu"
		clearable
		multiple
	>
		<template v-slot:after>
			<drop-down-after
				route-to="/settings/lists/tatib-santri"
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

/**
 * @returns
 * set = array object
 * get = array
 * manipulasi data pada saat get
 * */

onMounted(async () => {
	const store = listsStore().tatibSantriGetArray();
	if (store.length) {
		options.value = store;
	} else {
		await fetchList();
	}
});

async function fetchList() {
	const data = await getListsArrayObject({
		key: 'tatib-santri',
		loading,
		sort: 'asc',
	});
	listsStore().tatibSantriSet(data);
	options.value = listsStore().tatibSantriGetArray();
}
</script>
<style lang=""></style>
