<template lang="">
	<q-select
		dense
		outlined
		label="Tahun Ajaran"
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
				route-to="/settings/lists/tahun-ajaran"
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
	const store = listsStore().tahunAjaranGet();
	if (store.length) {
		options.value = store;
	} else {
		await fetchList();
	}
});

async function fetchList() {
	const data = await getListsArrayObject({
		key: 'tahun-ajaran',
		loading,
		sort: 'desc',
	});
	options.value = data;
	listsStore().tahunAjaranSet(data);
}
</script>
<style lang=""></style>
