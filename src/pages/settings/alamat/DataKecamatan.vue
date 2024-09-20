<template lang="">
	<q-card>
		<q-card-section
			class="q-pa-sm bg-green-7 text-green-11 text-subtitle1 flex flex-center"
		>
			Kecamatan/Distrik
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
			<CrudKecamatan
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
import { notifyWarning } from 'src/utils/notify';
import CrudKecamatan from './CrudKecamatan.vue';

const props = defineProps({
	kabupaten: { type: Object },
});

const rows = ref([]);
const loading = ref(false);
const alamat = ref({});
const crudShow = ref(false);

async function getData() {
	rows.value = [];
	const kabupaten_id = props.kabupaten?.id ?? null;
	if (!kabupaten_id) return;

	const data = await apiGet({
		endPoint: 'alamat/kecamatan',
		loading,
		params: { kabupaten_id },
	});
	if (data && data.kecamatan) {
		rows.value = data.kecamatan;
	}
}

function onAdd() {
	const kabupaten_id = props.kabupaten?.id ?? null;
	if (!kabupaten_id) {
		return notifyWarning('Pilih kabupaten terlebih dahulu!');
	}
	alamat.value = { kabupaten_id };
	crudShow.value = true;
}

function onEdit(v) {
	alamat.value = v;
	crudShow.value = true;
}

watch(
	() => props.kabupaten,
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
		name: 'kecamatan',
		align: 'left',
		label: 'Kecamatan',
		field: 'kecamatan',
		sortable: true,
	},
];
</script>
<style lang=""></style>
