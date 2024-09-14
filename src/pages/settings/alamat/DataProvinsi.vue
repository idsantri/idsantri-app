<template lang="">
	<q-card>
		<q-card-section
			class="q-pa-sm bg-green-7 text-green-11 text-subtitle1 flex flex-center"
		>
			Provinsi
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
			<CrudProvinsi
				:data="alamat"
				@success-delete="getData"
				@success-submit="getData"
			/>
		</q-dialog>
	</q-card>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import TableAlamat from './TableAlamat.vue';
import CrudProvinsi from './CrudProvinsi.vue';

const rows = ref([]);
const loading = ref(false);
const alamat = ref({});
const crudShow = ref(false);

async function getData() {
	rows.value = [];
	const data = await apiGet({
		endPoint: 'alamat/provinsi',
		loading,
	});
	if (data && data.provinsi) {
		rows.value = data.provinsi;
	}
}

function onAdd() {
	alamat.value = {};
	crudShow.value = true;
}

function onEdit(v) {
	alamat.value = v;
	crudShow.value = true;
}

onMounted(async () => {
	await getData();
});

const columns = [
	{
		name: 'id',
		label: 'ID',
		align: 'left',
		field: 'id',
		sortable: true,
	},
	{
		name: 'provinsi',
		align: 'left',
		label: 'Provinsi',
		field: 'provinsi',
		sortable: true,
	},
];
</script>
<style lang=""></style>
