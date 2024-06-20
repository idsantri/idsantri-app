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
		:hint="textHint()"
	>
		<template v-slot:after>
			<drop-down-after route-to="tatib-santri" @reload="fetchList" />
		</template>
	</q-select>
</template>
<script setup>
import { getListsArrayObject } from 'src/api/api-get-lists';
import listsStore from 'src/stores/lists-store';
import { onMounted, ref } from 'vue';
import DropDownAfter from './DropDownAfter.vue';

const props = defineProps({
	selected: {
		type: String,
	},
});

function textHint() {
	let result = '';
	if (props.selected) {
		result = extractDataInBrackets(props.selected);
	}
	return result;
}

function extractDataInBrackets(inputText) {
	let extractedData = '';
	const regex = /\[(.*?)\]/g;
	const matches = inputText.match(regex);

	if (matches) {
		extractedData = matches.map((match) => match.slice(1, -1)).join(', ');
	}

	return extractedData;
}

const loading = ref(false);
const options = ref([]);
const store = listsStore();
const url = 'tatib-santri';

function mapData(data) {
	let result = [];
	if (data.length) {
		result = data
			.filter((d) => d.val0.length != 1)
			.map((d) => `[${d.val0}] ${d.val1}`);
	}
	return result;
}

onMounted(async () => {
	const data = store.getByStateName(url);
	if (data.length) {
		options.value = mapData(data);
	} else {
		await fetchList();
		const result = store.getByStateName(url);
		options.value = mapData(result);
	}
});

async function fetchList() {
	const data = await getListsArrayObject({
		key: url,
		loading,
		sort: 'asc',
	});
	store.$patch({ [url]: data });
}
</script>
<style lang=""></style>
