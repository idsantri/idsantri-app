<template>
	<q-card style="width: 100%">
		<q-card-section
			class="bg-green-8 text-green-1 q-pa-sm flex items-center"
		>
			<h2 class="text-subtitle1 no-margin">Cari</h2>
			<q-space />
			<q-btn
				label="Tambah"
				color="green-6"
				class="text-green-11"
				icon="add"
				no-caps=""
				dense=""
			/>
		</q-card-section>
		<q-card-section>
			<Suspense>
				<template #default>
					<data-table
						class="display table nowrap"
						:options="options"
						style="overflow: hidden"
						id="dt-santri"
					/>
				</template>
				<template #fallback>
					<q-spinner-cube
						color="green-12"
						size="14em"
						class="absolute-center"
					/>
				</template>
			</Suspense>
		</q-card-section>
	</q-card>
</template>

<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net-dt';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { apiTokened } from 'src/api';
const router = useRouter();

const url = `${apiTokened.defaults.baseURL}/santri/search`;
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
			class: 'hidden',
			title: 'ID',
			data: 'id',
			render: function (data, type, row, meta) {
				return `<span class="dt-link" onclick='goToSantri(${row.id})'>${row.id}</span>`;
			},
		},
		{
			title: 'Nama',
			data: 'nama',
			render: function (data, type, row, meta) {
				return `<span class="dt-link" onclick='goToSantri(${row.id})'>${row.nama}</span>`;
			},
		},
		{
			title: 'Alamat',
			data: 'alamat_lengkap',
			render: function (data, type, row, meta) {
				return type === 'display' && data.length > 30
					? `<span title='${data}'>${data.substr(0, 30)}&mldr;</span>`
					: data;
			},
		},
		{
			title: 'Wali',
			data: 'wali_nama',
			render: function (data, type, row, meta) {
				return `<span class="dt-link" onclick='goToWali(${row.wali_id})'>${row.wali_nama}</span>`;
			},
		},
		{
			title: 'Ortu',
			data: 'ortu',
			render: function (data, type, row, meta) {
				return `<span class="dt-link" onclick='goToOrtu(${row.ortu_id})'>${row.ortu}</span>`;
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
		alert(id);
		// router.push(`/products/${id}`);
	};
	document.goToOrtu = (id) => {
		alert(id);
		// router.push(`/products/${id}`);
	};
});

onUnmounted(() => {
	delete document.goToSantri;
	delete document.goToWali;
	delete document.goToOrtu;
});
</script>
<style lang="scss">
@import 'datatables.net-dt';
.dt-link {
	color: rgb(8, 46, 56);
	cursor: pointer;
}
</style>
../../api/api
