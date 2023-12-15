<template lang="">
	<div class="q-ma-sm">
		<filter-tanggal
			:showBulanUjian="true"
			start-url="/keamanan/izin-pesantren"
			@dataFilter="dataEmit"
		/>
		<q-card class="q-mt-sm">
			<q-card-section
				class="bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"
			>
				<span v-html="dataFilter.display || ''"></span>
				<q-space />
				<q-btn
					dense=""
					icon="add"
					label="Baru"
					no-caps
					color="green-11 q-px-md"
					class="text-green-10"
					@click="crudShow = true"
				/>
			</q-card-section>
			<q-table
				class="dt q-pa-sm"
				:rows="izin"
				:columns="columns"
				:loading="loading"
				:filter="filter"
				:rows-per-page-options="[10, 25, 50, 75, 100, 0]"
				no-data-label="Silakan tentukan filter tanggal!"
				no-results-label="Tidak ditemukan kata kunci yang sesuai dengan pencarian Anda!"
				row-key="name"
				flat
				@row-click="
					(evt, row, index) =>
						$router.push(`/keamanan/izin-pesantren/${row.id}`)
				"
			>
				<template v-slot:top-left>
					<div class="text-subtitle1 text-green-10">
						Data Perizinan
					</div>
				</template>
				<template v-slot:top-right>
					<q-input
						borderless
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
		</q-card>
	</div>

	<q-dialog v-model="crudShow"> <izin-crud :is-new="true" /> </q-dialog>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import apiGet from 'src/api/api-get';
import FilterTanggal from 'src/components/FilterTanggal';
import { useRoute } from 'vue-router';
import { isDate } from 'src/utils/format-date';
import { formatHijri } from 'src/utils/hijri';
import IzinCrud from 'src/pages/keamanan/perizinan/IzinCrud.vue';

const izin = ref([{}]);
const loading = ref(false);
const route = useRoute();
const dataFilter = ref({});
const filter = ref('');
const params = {
	startDate: route.params.startDate || 0,
	endDate: route.params.endDate || 0,
};
const startDate = ref(params.startDate);
const endDate = ref(params.endDate);
const crudShow = ref(false);

function dataEmit(val) {
	dataFilter.value = val;
}

onMounted(async () => {
	if (isDate(startDate.value) && isDate(endDate.value)) {
		const data = await apiGet({
			endPoint: 'izin-pesantren',
			loading,
			params: { start_date: startDate.value, end_date: endDate.value },
		});
		izin.value = data.izin_pesantren;
		// console.log(izin.value);
	}
});

const columns = [
	{
		name: 'santri_id',
		label: 'ID Santri',
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
		name: 'sifat',
		label: 'Sifat Izin',
		align: 'left',
		field: 'sifat',
		sortable: true,
	},
	{
		name: 'tgl_m',
		label: 'Dari',
		align: 'left',
		field: 'tgl_m',
		sortable: true,
	},
	{
		name: 'must_back_m',
		label: 'Sampai',
		align: 'left',
		field: 'must_back_m',
		sortable: true,
	},
	{
		name: 'status',
		label: 'Status',
		align: 'left',
		field: 'status',
		sortable: true,
	},

	// {
	// 	name: 'tgl_h',
	// 	label: 'Dari (H)',
	// 	align: 'left',
	// 	field: (row) => formatHijri(row.tgl_h),
	// 	sortable: true,
	// },
	// {
	// 	name: 'durasi',
	// 	label: 'Durasi',
	// 	align: 'left',
	// 	field: (row) => {
	// 		const obj = JSON.parse(JSON.stringify(row));
	// 		const isObj =
	// 			obj !== null &&
	// 			typeof obj === 'object' &&
	// 			typeof obj.durasi !== 'undefined';
	// 		if (!isObj) return null;
	// 		else return `${row.durasi} hari`;
	// 	},
	// 	sortable: true,
	// },

	{
		name: 'alamat',
		label: 'Alamat',
		align: 'left',
		field: 'alamat_pendek',
		sortable: true,
		classes: 'alamat',
	},
];
</script>
<style lang=""></style>
