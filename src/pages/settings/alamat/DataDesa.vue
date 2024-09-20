<template lang="">
	<q-card>
		<q-card-section
			class="q-pa-sm bg-green-7 text-green-11 text-subtitle1 flex flex-center"
		>
			Desa/Kelurahan
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
			@on-select="null"
			:no-check-box="true"
			@on-edit="onEdit"
		/>
		<q-dialog v-model="crudShow">
			<CrudDesa
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
import CrudDesa from './CrudDesa.vue';
import { notifyWarning } from 'src/utils/notify';

const props = defineProps({
	kecamatan: { type: Object },
});

const rows = ref([]);
const loading = ref(false);
const alamat = ref({});
const crudShow = ref(false);

async function getData() {
	rows.value = [];
	const kecamatan_id = props.kecamatan?.id ?? null;
	if (!kecamatan_id) return;

	const data = await apiGet({
		endPoint: 'alamat/desa',
		loading,
		params: { kecamatan_id },
	});
	if (data && data.desa) {
		rows.value = data.desa;
	}
}

function onAdd() {
	const kecamatan_id = props.kecamatan?.id ?? null;
	if (!kecamatan_id) {
		return notifyWarning('Pilih kecamatan terlebih dahulu!');
	}
	alamat.value = { kecamatan_id };
	crudShow.value = true;
}

function onEdit(v) {
	alamat.value = v;
	crudShow.value = true;
}

watch(
	() => props.kecamatan,
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
		name: 'desa',
		align: 'left',
		label: 'Desa',
		field: 'desa',
		sortable: true,
	},
];
</script>
<style lang=""></style>
