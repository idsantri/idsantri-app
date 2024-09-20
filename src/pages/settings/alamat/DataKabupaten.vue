<template lang="">
	<q-card>
		<q-card-section
			class="q-pa-sm bg-green-7 text-green-11 text-subtitle1 flex flex-center"
		>
			Kabupaten/Kota
			<q-space />
			<q-btn
				@click="getData"
				icon="sync"
				round
				dense
				flat
				class="q-mr-md"
			/>
			<q-btn @click="onAdd" icon="add" round dense flat />
		</q-card-section>
		<TableAlamat
			:rows="rows"
			:columns="columns"
			:loading="loading"
			@on-select="(v) => $emit('onSelect', v)"
			@on-edit="onEdit"
		/>
		<q-dialog v-model="crudShow">
			<CrudKabupaten
				:data="alamat"
				@success-delete="getData"
				@success-submit="getData"
			/>
		</q-dialog>
	</q-card>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { ref, watch } from 'vue';
import TableAlamat from './TableAlamat.vue';
import CrudKabupaten from './CrudKabupaten.vue';
import { notifyWarning } from 'src/utils/notify';

const props = defineProps({
	provinsi: { type: Object },
});

const rows = ref([]);
const loading = ref(false);
const alamat = ref({});
const crudShow = ref(false);

async function getData() {
	rows.value = [];
	const provinsi_id = props.provinsi?.id ?? null;
	if (!provinsi_id) return;

	const data = await apiGet({
		endPoint: 'alamat/kabupaten',
		loading,
		params: { provinsi_id },
	});
	if (data && data.kabupaten) {
		rows.value = data.kabupaten;
	}
}

function onAdd() {
	const provinsi_id = props.provinsi?.id ?? null;
	if (!provinsi_id) {
		return notifyWarning('Pilih provinsi terlebih dahulu!');
	}
	alamat.value = { provinsi_id };
	crudShow.value = true;
}

function onEdit(v) {
	alamat.value = v;
	crudShow.value = true;
}

watch(
	() => props.provinsi,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async (v) => {
		// const id = v?.id ?? null;
		getData();
	},
	{ deep: true },
);

const columns = [
	{
		name: 'id',
		label: 'ID',
		align: 'left',
		field: 'id',
		sortable: true,
	},
	{
		name: 'kabupaten',
		align: 'left',
		label: 'Kabupaten',
		field: 'kabupaten',
		sortable: true,
	},
];
</script>
<style lang=""></style>
