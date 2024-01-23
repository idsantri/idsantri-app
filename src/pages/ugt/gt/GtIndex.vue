<template lang="">
	<q-card class="q-ma-sm">
		<q-card-section class="bg-green-8 no-padding">
			<q-toolbar class="no-padding no-margin">
				<q-toolbar-title class="text-subtitle1 q-ml-sm text-green-11">
					Data Guru Tugas
				</q-toolbar-title>

				<q-btn
					dense
					class="q-px-md q-mr-sm text-green-10"
					label="Tambah"
					no-caps=""
					icon="add"
					color="green-2"
					@click="crudShow = true"
				/>
			</q-toolbar>
		</q-card-section>

		<q-card-section class="no-padding">
			<q-table
				:rows="gtFiltered"
				:loading="loading"
				:rows-per-page-options="[10, 25, 50, 100, 0]"
				class="dt"
				:columns="columns"
				:filter="filter"
				no-data-label="Tidak ada data untuk ditampilkan!"
				no-results-label="Tidak ditemukan kata kunci yang sesuai dengan pencarian Anda!"
				row-key="name"
				@row-click="
					(evt, row, index) => $router.push(`/ugt/gt/${row.id}`)
				"
			>
				<template v-slot:top-left>
					<div style="width: 250px">
						<q-select
							dense
							hint=""
							class="q-mt-sm"
							outlined
							label="Tahun Ajaran"
							emit-value
							map-options
							v-model="thAjaranH"
							:options="lists['th_ajaran_h']"
							:loading="loadingList['th_ajaran_h']"
							clearable
							@update:model-value="(v) => filterThAjaranH(v)"
							behavior="menu"
						/>
					</div>
				</template>
				<template v-slot:top-right>
					<q-input
						outlined
						dense
						debounce="300"
						v-model="filter"
						placeholder="Cari"
					>
						<template v-slot:append>
							<q-icon name="search" />
						</template>
					</q-input>
				</template>
			</q-table>
		</q-card-section>
	</q-card>
	<q-dialog persistent="" v-model="crudShow">
		<gt-crud
			:is-new="true"
			:data="{}"
			@success-submit="(v) => $router.push(`/ugt/gt/${v.id}`)"
			@success-delete="$router.go(-1)"
		/>
	</q-dialog>
	<!-- <pre>{{ gt }}</pre> -->
	<!-- <pre>{{ wilayah }}</pre> -->
</template>
<script setup>
import { ref, onMounted } from 'vue';
import apiGet from 'src/api/api-get.js';
import { getListsCustom } from 'src/api/api-get-lists.js';
import GtCrud from 'src/pages/ugt/gt/GtCrud.vue';

const gt = ref([]);
const gtFiltered = ref([]);
const lists = ref([]);
const loading = ref(false);
const filter = ref('');
const loadingList = ref([]);
const thAjaranH = ref('');
const crudShow = ref(false);

async function loadData() {
	const data = await apiGet({ endPoint: 'ugt/gt', loading });
	gt.value = data.gt;
	gtFiltered.value = gt.value;
}

function filterThAjaranH(v) {
	if (v) {
		gtFiltered.value = gt.value.filter((obj) => obj.th_ajaran_h == v);
	} else {
		gtFiltered.value = gt.value;
	}
}

onMounted(async () => {
	await loadData();
	await getListsCustom({
		url: `ugt/gt/lists/th-ajaran-h`,
		lists,
		key: 'th_ajaran_h',
		loading: loadingList,
	});
	// console.log(lists.value['th_ajaran_h']);
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
		name: 'th_ajaran_h',
		label: 'Th Ajaran H',
		align: 'left',
		field: 'th_ajaran_h',
		sortable: true,
	},
	{
		name: 'santri_id',
		label: 'Santri ID',
		align: 'left',
		field: 'santri_id',
		sortable: true,
	},
	{
		name: 'nama',
		label: 'Nama',
		align: 'left',
		field: 'nama',
		sortable: true,
	},
	{
		name: 'data_akhir',
		label: 'Data Akhir',
		align: 'left',
		field: 'data_akhir',
		sortable: true,
	},
	{
		name: 'pjgt_nama',
		label: 'Nama PJGT',
		align: 'left',
		field: 'pjgt_nama',
		sortable: true,
	},
	{
		name: 'pjgt_lembaga',
		label: 'Lembaga',
		align: 'left',
		field: 'pjgt_lembaga',
		sortable: true,
	},
	{
		name: 'pjgt_wilayah',
		label: 'Wilayah Tugas',
		align: 'left',
		field: 'pjgt_wilayah',
		sortable: true,
	},
];
</script>
<style lang=""></style>
