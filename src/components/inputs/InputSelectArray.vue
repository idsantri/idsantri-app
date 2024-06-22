<template lang="">
	<q-select
		dense
		outlined
		emit-value
		map-options
		:options="options"
		:loading="loading"
		behavior="menu"
		clearable
		:hint="textHint()"
	>
		<template v-slot:after>
			<drop-down-after :route-to="url" @reload="fetchList" />
		</template>
	</q-select>
</template>
<script setup>
import { getLists } from 'src/api/api-get-lists';
import listsStore from 'src/stores/lists-store';
import { onMounted, ref } from 'vue';
import DropDownAfter from './DropDownAfter.vue';

const props = defineProps({
	url: {
		type: String,
		require: true,
	},
	sort: {
		type: String,
		default: 'asc',
	},
	selected: {
		type: String,
		default: '',
	},
});

const loading = ref(false);
const options = ref([]);
const store = listsStore();

function textHint() {
	let result = '';
	if (props.selected && props.url == 'tahun-ajaran') {
		const data = store.getByStateName(props.url);
		result = data.find((th) => th.val0 === props.selected)?.val1;
	}
	return result;
}

onMounted(async () => {
	const data = store.getByStateName_arr(props.url);
	if (data.length) {
		options.value = data;
	} else {
		await fetchList();
		options.value = store.getByStateName_arr(props.url);
	}
});

async function fetchList() {
	const data = await getLists({
		key: props.url,
		loading: loading,
		sort: props.sort,
	});
	store.$patch({ [props.url]: data });
}
</script>
<style lang=""></style>
