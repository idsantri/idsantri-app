<template lang="">
	<q-select
		dense
		outlined
		label="Tingkat Pendidikan"
		emit-value
		map-options
		option-value="val0"
		option-label="val1"
		:options="options"
		:loading="loading"
		behavior="menu"
		clearable
	>
		<template v-slot:after>
			<drop-down-after
				@reload="fetchList"
				route-to=""
				:disableRoute="true"
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
	const store = listsStore().tingkatPendidikanGet();
	if (store.length) {
		options.value = store;
	} else {
		await fetchList();
	}
});

async function fetchList() {
	const data = await getListsArrayObject({
		key: 'tingkat-pendidikan',
		loading,
		sort: 'asc',
	});
	options.value = data;
	listsStore().tingkatPendidikanSet(data);
}
</script>
<style lang=""></style>
