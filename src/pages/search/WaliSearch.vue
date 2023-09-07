<template>
	<q-card style="width: 100%">
		<q-card-section
			class="bg-green-8 text-green-1 q-pa-sm flex items-center"
		>
			<h2 class="text-subtitle1 no-margin text-green-11">Cari Wali</h2>
			<q-space />
			<q-btn
				label="Tambah"
				color="green-12"
				class="text-green-10"
				icon="add"
				no-caps=""
				dense=""
				@click="addNew"
				v-show="crudSantri"
			/>
		</q-card-section>
		<q-card-section>
			<data-table
				class="display table nowrap dt"
				:options="options"
				style="overflow: hidden"
			/>
		</q-card-section>
		<q-card-actions class="bg-green-7">
			<div class="text-body2 text-green-11 text-italic">
				Cari berdsarkan ID, Nama Wali, NIK, atau alamat
			</div>
			<q-space />
			<q-btn
				label="Tutup"
				color="green-1"
				class="text-green-10"
				no-caps=""
				v-close-popup
				id="btn-close-wali-search"
				v-show="searchWali"
			/>
		</q-card-actions>
	</q-card>
</template>

<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net-dt';
import { ref, onMounted, onUnmounted, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { apiTokened } from 'src/api';
import { notifySuccess } from 'src/utils/notify';
import dialogStore from 'src/stores/dialog-store';
import santriStore from 'src/stores/santri-store';
import waliStore from 'src/stores/wali-store';

const dialog = dialogStore();
const { searchWali, crudWali, crudSantri } = toRefs(dialog);
const { santri } = santriStore();
const { wali_id } = toRefs(santri);
const addNew = () => {
	waliStore().$reset();
	crudWali.value = true;
};

const router = useRouter();
const url = `${apiTokened.defaults.baseURL}/wali/search`;
const headers = {
	Authorization: apiTokened.defaults.headers.common.Authorization,
};

DataTable.use(DataTablesLib);
const options = ref({
	processing: true,
	serverSide: true,
	responsive: true,
	ajax: {
		url: url,
		type: 'POST',
		headers: headers,
	},
	order: [],
	columns: [
		{
			title: 'ID',
			data: 'id',
			render: function (data, type, row, meta) {
				return `<button onclick='copyId(${row.id})' class='dt-btn'>${row.id}</button>`;
			},
		},
		{
			title: 'Nama',
			data: 'nama',
			render: function (data, type, row, meta) {
				return `<span class="dt-link" onclick='goToWali(${row.id})'>${row.nama}</span>`;
			},
		},
		{
			title: 'Alamat',
			data: 'alamat_pendek',
			render: function (data, type, row, meta) {
				return type === 'display' && data.length > 50
					? `<span title='${data}'>${data.substr(0, 50)}&mldr;</span>`
					: data;
			},
		},
		{
			title: 'NIK',
			data: 'nik',
		},
		{
			title: 'Anak1',
			render: function (data, type, row, meta) {
				return `<span class="dt-link" onclick='goToSantri(${
					row.santri1_id
				})'>${row.santri1_nama || '-'}</span>`;
			},
		},
		{
			title: 'Anak2',
			render: function (data, type, row, meta) {
				return `<span class="dt-link" onclick='goToSantri(${
					row.santri2_id
				})'>${row.santri2_nama || '-'}</span>`;
			},
		},
		{
			title: 'Anak3',
			render: function (data, type, row, meta) {
				return `<span class="dt-link" onclick='goToSantri(${
					row.santri3_id
				})'>${row.santri3_nama || '-'}</span>`;
			},
		},
		{
			title: 'Anak4',
			render: function (data, type, row, meta) {
				return `<span class="dt-link" onclick='goToSantri(${
					row.santri4_id
				})'>${row.santri4_nama || '-'}</span>`;
			},
		},
		{
			title: 'Anak5',
			render: function (data, type, row, meta) {
				return `<span class="dt-link" onclick='goToSantri(${
					row.santri5_id
				})'>${row.santri5_nama || '-'}</span>`;
			},
		},
	],
	language: {
		search: 'Cari:',
		zeroRecords:
			'Tidak data data untuk ditampilkan. Coba kata kunci yang lain!',
		info: 'Menampilkan _START_ hingga _END_, dari total _TOTAL_ data',
		// info: 'Halaman _PAGE_ dari _PAGES_ halaman',
		infoFiltered: '(disaring dari _MAX_ total data)',
		paginate: { first: '↑', previous: '←', next: '→', last: '↓' },
		lengthMenu: '_MENU_ Perhalaman',
	},
	autoWidth: false,
	// dom: 'bftip',
	scrollX: true,
	search: {
		return: true,
	},
});

onMounted(() => {
	document.goToSantri = (id) => {
		router.push(`/santri/${id}`);
	};
	document.goToWali = (id) => {
		router.push(`/wali/${id}`);
	};
	document.copyId = (id) => {
		if (crudSantri.value) {
			wali_id.value = id;
		} else {
			navigator.clipboard.writeText(id);
			notifySuccess(`ID (${id}) sudah disalin/dicopy ke clipboard`);
		}
		searchWali.value = false;
	};
});

// onUnmounted(() => {
// 	delete document.goToSantri;
// 	delete document.goToWali;
// 	delete document.copyId;
// });
</script>
<style lang="scss">
@import 'datatables.net-dt';
</style>
../../api/api
