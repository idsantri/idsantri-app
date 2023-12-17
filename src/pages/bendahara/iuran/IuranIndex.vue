<template lang="">
	<div class="q-ma-sm">
		<filter-tanggal
			:showBulanUjian="true"
			start-url="/bendahara/iuran/tanggal"
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
					@click="showSelectId = true"
				/>
			</q-card-section>
			<q-table
				class="dt q-pa-sm"
				:rows="iuran"
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
						$router.push(
							`/bendahara/iuran/santri/${row.santri_id}/${row.th_ajaran_h}`
						)
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
			<q-card-section
				class="bg-green-7 text-green-1 text-subtitle1 q-px-sm q-py-xs"
			>
				<div class="text-right">
					<em>Total: </em>
					<strong>{{ digitSeparator(calculateTotal()) }}</strong>
				</div>
			</q-card-section>
		</q-card>
	</div>

	<q-dialog v-model="showSelectId">
		<iuran-select :is-new="true" />
	</q-dialog>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import apiGet from 'src/api/api-get';
import FilterTanggal from 'src/components/FilterTanggal';
import { useRoute } from 'vue-router';
import { formatDateShort, isDate } from 'src/utils/format-date';
import { formatHijri } from 'src/utils/hijri';
import IuranSelect from 'src/pages/bendahara/iuran/IuranSelect.vue';
import { digitSeparator } from 'src/utils/format-number';

const iuran = ref([{}]);
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
const showSelectId = ref(false);

function dataEmit(val) {
	dataFilter.value = val;
}

function calculateTotal() {
	return iuran.value.reduce(function (acc, obj) {
		return acc + obj.sub_total;
	}, 0);
}
onMounted(async () => {
	if (isDate(startDate.value) && isDate(endDate.value)) {
		const data = await apiGet({
			endPoint: 'iuran',
			loading,
			params: { start_date: startDate.value, end_date: endDate.value },
		});
		iuran.value = data.iuran;
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
		name: 'th_ajaran_h',
		label: 'Tahun Ajaran',
		align: 'left',
		field: 'th_ajaran_h',
		sortable: true,
	},
	{
		name: 'tgl_m',
		label: 'Tanggal',
		align: 'left',
		field: (row) => formatDateShort(row.tgl_m),
		sortable: true,
	},
	{
		name: 'iuran',
		label: 'Iuran',
		align: 'left',
		field: 'iuran',
		sortable: true,
	},
	{
		name: 'sub_total',
		label: 'Nominal',
		align: 'right',
		field: (row) => digitSeparator(row.sub_total),
		sortable: true,
	},
	{
		name: 'kasir',
		label: 'Penerima',
		align: 'left',
		field: 'kasir',
		sortable: true,
	},
];
</script>
<style lang=""></style>
