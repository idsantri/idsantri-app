<template>
	<q-card-section
		class="bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"
	>
		{{ selected?.label || 'List' }}
		<q-space />
		<q-btn
			icon="add"
			label="Baru"
			no-caps
			dense
			class="q-px-md"
			outline
			@click="handleAdd"
		/>
	</q-card-section>
	<q-card-section class="q-pa-sm">
		<ListsSingle
			v-if="selected?.style == 'single'"
			:data="listGet"
			:loading="loading"
			@handle-edit="handleEdit"
		/>

		<ListsDouble
			v-if="selected?.style == 'double'"
			:data="listGet"
			:loading="loading"
			@handle-edit="handleEdit"
		/>
		<div v-if="selected?.style == 'triple'">
			<ListsTriple
				:data="listGet"
				@update-list="handleUpdate"
				@delete-list="handleDelete"
				@add-list="handleAdd"
			/>
		</div>
	</q-card-section>
	<q-dialog v-model="crud">
		<lists-crud
			:data-input="objList"
			:show-input="showInput"
			@success-delete="fetchData"
			@success-submit="fetchData"
		/>
	</q-dialog>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import listData from './lists-data';

import apiUpdate from 'src/api/api-update';
import apiDelete from 'src/api/api-delete';
import apiPost from 'src/api/api-post';
import { getListsArrayObject } from 'src/api/api-get-lists';
import { notifyError } from 'src/utils/notify';
import ListsCrud from './ListsCrud.vue';
import ListsSingle from './ListsStyleSingle.vue';
import ListsDouble from './ListsStyleDouble.vue';
import ListsTriple from './ListsStyleTriple.vue';
import listsStore from 'src/stores/lists-store';

const crud = ref(false);
const { params } = useRoute();
const loading = ref(false);
const listGet = ref([]);
const objList = ref({});
const showInput = ref({});

onMounted(async () => {
	await fetchData();
});

const selected = listData.find(({ url }) => url == params.listKey);

async function fetchData() {
	const data = await getListsArrayObject({
		loading,
		key: selected.url,
		sort: true,
	});
	listGet.value = data;

	const store = listsStore();
	const checkState = store.checkState(selected.url);
	if (checkState) {
		store.$patch({ [selected.url]: data });
	}
	// const a = store.getByStateName_arr(selected.url);
	// console.log(a);
}

function setInput() {
	if (selected.column == 1) {
		return {
			val0: true,
			val1: false,
			val2: false,
		};
	}
	if (selected.column == 2) {
		return {
			val0: true,
			val1: true,
			val2: false,
		};
	}
	if (selected.column == 3) {
		return {
			val0: true,
			val1: true,
			val2: true,
		};
	}
}

function handleAdd() {
	showInput.value = setInput();
	objList.value = {};
	objList.value.key = params.listKey;
	crud.value = true;
}

function handleEdit(val) {
	showInput.value = setInput();
	objList.value = JSON.parse(JSON.stringify(val));
	crud.value = true;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function handleUpdate2(list) {
	// console.log(list);
	const { key, val0, val1, val2, note, id } = list;
	if (!val0) {
		return notifyError('List tidak boleh kosong!');
	}
	const data = { key, val0, val1, val2, note };
	const upd = await apiUpdate({ endPoint: `lists/${id}`, data });
	if (upd) await fetchData();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function handleDelete2(list) {
	const del = await apiDelete({ endPoint: `lists/${list.id}` });
	if (del) fetchData();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function handleAdd2(list) {
	// console.log(list);
	// console.log(selected);
	const { val0, val1, val2, note } = list;
	if (!val0) {
		return notifyError('List tidak boleh kosong!');
	}
	const data = {
		key: selected.url,
		val0,
		val1: val1 || null,
		val2: val2 || null,
		note: note || null,
	};
	// console.log(data);

	const post = await apiPost({ endPoint: 'lists', data });
	if (post) {
		await fetchData();
	}
}
</script>
