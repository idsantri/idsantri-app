<template lang="">
	<q-card class="q-ma-sm">
		<q-card-section class="bg-green-8 no-padding">
			<q-toolbar class="no-padding no-margin">
				<q-toolbar-title class="text-subtitle1 q-ml-sm text-green-11">
					Kas UGT
				</q-toolbar-title>

				<q-btn
					dense
					class="q-px-md q-mr-sm text-green-10"
					label="Tambah"
					no-caps=""
					icon="add"
					color="green-2"
					@click="addKas"
				/>
			</q-toolbar>
		</q-card-section>

		<q-card-section class="no-padding">
			<q-table
				:rows="kas"
				:loading="loading"
				:rows-per-page-options="[10, 25, 50, 100, 0]"
				:pagination="{ page: 999 }"
				class="dt"
				:columns="columns"
				:filter="filter"
				no-data-label="Tidak ada data untuk ditampilkan!"
				no-results-label="Tidak ditemukan kata kunci yang sesuai dengan pencarian Anda!"
				row-key="name"
				@row-click="(evt, row, index) => editKas(evt, row, index)"
			>
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
				<template v-slot:body="props">
					<q-tr :props="props">
						<q-td key="id" :props="props">
							{{ props.row.id }}
						</q-td>
						<q-td key="tgl_m" :props="props">
							{{ props.row.tgl_m }}
						</q-td>
						<q-td key="keperluan" :props="props">
							{{
								props.row.gt_id
									? `${props.row.keperluan} (${props.row.gt_id})`
									: props.row.keperluan
							}}
						</q-td>
						<q-td key="keterangan" :props="props">
							{{ props.row.keterangan }}
						</q-td>
						<q-td key="masuk" :props="props">
							{{ digitSeparator(props.row.masuk) }}
						</q-td>
						<q-td key="keluar" :props="props">
							{{ digitSeparator(props.row.keluar) }}
						</q-td>
						<q-td key="saldo" :props="props">
							{{ digitSeparator(props.row.saldo) }}
						</q-td>
						<q-td key="cr_by" :props="props">
							{{ props.row.cr_by }}
						</q-td>
						<q-td key="edit" :props="props">
							<div class="q-gutter-sm">
								<q-btn
									icon="edit"
									no-caps
									color="green-10"
									outline
									dense
									class="q-px-md"
									@click="editKas(props.row)"
								/>
								<q-btn
									icon="print"
									no-caps
									color="green-10"
									outline
									dense
									class="q-px-md"
									@click="print(props.row)"
									:disable="props.row.gt_id ? false : true"
								/>
							</div>
						</q-td>
					</q-tr>
				</template>
			</q-table>
		</q-card-section>
	</q-card>
	<q-dialog persistent="" v-model="crudShow">
		<kas-crud
			:is-new="isNew"
			:data="kasObj"
			@success-submit="loadData()"
			@success-delete="loadData()"
		/>
	</q-dialog>
	<!-- <pre>{{ kas[0] }}</pre> -->
	<!-- <pre>{{ wilayah }}</pre> -->
</template>
<script setup>
import { ref, onMounted, toRefs } from 'vue';
import apiGet from 'src/api/api-get.js';
import { digitSeparator } from 'src/utils/format-number';
import KasCrud from 'src/pages/ugt/kas/KasCrud.vue';
import loadingStore from 'src/stores/loading-store';
import apiDownload from 'src/api/api-download';

const loadingState = loadingStore();
const { loadingMain } = toRefs(loadingState);
const kas = ref([]);
const loading = ref(false);
const filter = ref('');
const crudShow = ref(false);
const isNew = ref(false);
const kasObj = ref({});

async function loadData() {
	crudShow.value = false;
	const data = await apiGet({ endPoint: 'ugt/kas', loading });
	kas.value = data.kas;
}

function addKas() {
	kasObj.value = {};
	isNew.value = true;
	crudShow.value = true;
}
async function print(val) {
	await apiDownload({
		url: `/reports/ugt/kuitansi/download`,
		loading: loadingMain,
		confirm: false,
		fileName: 'kuitansi-' + val.id,
		params: { id: val.id },
	});
}
function editKas(row) {
	const flag = row.masuk ? '+' : '-';
	const nominal = row.masuk || row.keluar;

	const data = {
		id: row.id,
		gt_id: row.gt_id,
		keperluan: row.keperluan,
		keterangan: row.keterangan,
		flag: flag,
		nominal: nominal,
	};
	kasObj.value = data;
	isNew.value = false;
	crudShow.value = true;
}

onMounted(async () => {
	await loadData();
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
		name: 'tgl_m',
		label: 'Tanggal',
		align: 'left',
		field: 'tgl_m',
		sortable: true,
	},
	{
		name: 'keperluan',
		label: 'Keperluan',
		align: 'left',
		field: 'keperluan',
		sortable: true,
	},
	{
		name: 'keterangan',
		label: 'Keterangan',
		align: 'left',
		field: 'keterangan',
		sortable: true,
	},
	{
		name: 'masuk',
		label: 'Masuk',
		align: 'right',
		field: 'masuk',
		sortable: true,
	},
	{
		name: 'keluar',
		label: 'Keluar',
		align: 'right',
		field: 'keluar',
		sortable: true,
	},
	{
		name: 'saldo',
		label: 'Saldo',
		align: 'right',
		field: 'saldo',
		sortable: true,
	},
	{
		name: 'cr_by',
		label: 'By',
		align: 'left',
		field: 'cr_by',
		sortable: true,
	},
	{
		name: 'edit',
		label: '!',
		align: 'center',
		field: '',
		sortable: false,
	},
];

function localTime(time) {
	const date = new Date(time + ' UTC');
	const options = { timeZone: 'Asia/Jakarta' };
	const localTime = date.toLocaleString('id-ID', options);

	// console.log(isDate(localTime));
	return localTime;
}
</script>
<style lang=""></style>
