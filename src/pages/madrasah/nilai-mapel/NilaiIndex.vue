<template>
	<q-page class="q-pa-sm">
		<filter-kelas
			:showBulanUjian="false"
			start-url="/madrasah/nilai-mapel/rerata"
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
					icon="download"
					label="Excel"
					no-caps=""
					class="bg-green-11 text-green-10 q-px-md q-mr-sm"
					disable
				/>
				<q-btn
					dense=""
					icon="upload"
					label="Excel"
					no-caps=""
					class="bg-green-11 text-green-10 q-px-md q-mr-sm"
					disable
				/>

				<q-btn-dropdown
					outline
					no-caps
					class="text-green-11 q-px-md"
					size=""
					dense
					dropdown-icon="more_vert"
				>
					<q-list>
						<q-item v-close-popup to="/madrasah/mapel">
							<q-item-section>
								<q-item-label> Mata Pelajaran </q-item-label>
							</q-item-section>
							<q-item-section avatar>
								<q-icon name="settings" />
							</q-item-section>
						</q-item>
					</q-list>
				</q-btn-dropdown>
			</q-card-section>
			<q-card-section
				v-if="!params.thAjaranH || !params.tingkatId || !params.kelas"
				class="q-pa-sm"
			>
				<div class="text-center q-pa-lg text-negative text-italic">
					Tentukan Tahun Ajaran, Tingkat Pendidikan, dan Kelas!
				</div>
			</q-card-section>
			<q-card-section v-else class="q-pa-sm">
				<div v-if="loading">
					<q-skeleton type="text" height="4rem" />
				</div>
				<div v-else>
					<q-table
						flat
						:rows="nilai"
						:columns="columns"
						row-key="kelas_id"
						:rows-per-page-options="[0]"
						hide-pagination
						class="my-sticky-header-table"
					>
						<template v-slot:header="props">
							<q-tr :props="props" class="">
								<q-th> </q-th>
								<q-th> </q-th>
								<q-th> </q-th>
								<q-th> </q-th>
								<q-th class="text-left">Retata Kelas</q-th>
								<q-th class="text-right">
									{{ hitungRataRata(nilai, 'rerata_1') }}
								</q-th>
								<q-th class="text-right">
									{{ hitungRataRata(nilai, 'rerata_2') }}
								</q-th>
								<q-th class="text-right">
									{{ hitungRataRata(nilai, 'rerata_3') }}
								</q-th>
								<q-th class="text-right">
									{{ hitungRataRata(nilai, 'rerata_4') }}
								</q-th>
								<q-th class="text-right">
									{{ hitungRataRata(nilai, 'rerata_akhir') }}
								</q-th>
							</q-tr>
							<q-tr :props="props">
								<q-th auto-width>!</q-th>
								<q-th
									v-for="col in props.cols"
									:key="col.name"
									:props="props"
								>
									{{ col.label }}
								</q-th>
							</q-tr>
						</template>
						<template v-slot:body="props">
							<q-tr :props="props">
								<q-td auto-width>
									<q-btn
										size="sm"
										color="green"
										round
										dense
										@click="expand(props)"
										:icon="props.expand ? 'remove' : 'add'"
									/>
								</q-td>
								<q-td
									v-for="col in props.cols"
									:key="col.name"
									:props="props"
								>
									<span v-if="col.name == 'kelas_id'">
										<q-btn
											:label="col.value"
											dense
											outline
											class="q-px-md text-green-10"
											:to="`/madrasah/kelas/${col.value}/riwayat`"
										/>
									</span>
									<span v-else-if="col.name == 'santri_id'">
										<q-btn
											:label="col.value"
											dense
											outline
											class="q-px-md text-green-10"
											:to="`/santri/${col.value}`"
										/>
									</span>
									<span v-else>
										{{ col.value }}
									</span>
								</q-td>
							</q-tr>
							<q-tr v-show="props.expand" :props="props">
								<q-td colspan="100%">
									<div
										v-if="loadingDetail[props.row.kelas_id]"
									>
										<q-skeleton height="100px" />
									</div>
									<div v-else>
										<div
											v-if="
												nilaiDetail[props.row.kelas_id]
													?.length == 0
											"
											class="text-italic text-negative"
										>
											Tidak ada data untuk ditampilkan!
										</div>
										<div v-else>
											<q-markup-table
												flat
												dense
												class="bg-green-1"
												separator="cell"
											>
												<thead
													class="bg-green-2 text-weight-bold text-right"
												>
													<tr>
														<td
															class="text-left"
															style="width: 80px"
														>
															ID (Kode)
														</td>
														<td class="text-left">
															Mata Pelajaran
														</td>
														<td style="width: 50px">
															N-1
														</td>
														<td style="width: 50px">
															N-2
														</td>
														<td style="width: 50px">
															N-3
														</td>
														<td style="width: 50px">
															N-4
														</td>
														<td style="width: 65px">
															Rerata
														</td>
													</tr>
												</thead>
												<tbody>
													<tr
														v-for="(
															item, index
														) in nilaiDetail[
															props.row.kelas_id
														]"
														:key="index"
													>
														<td class="text-left">
															{{ item.id }}
														</td>
														<td class="text-left">
															{{ item.mapel }}
														</td>
														<td class="text-right">
															{{ item.nilai_1 }}
														</td>
														<td class="text-right">
															{{ item.nilai_2 }}
														</td>
														<td class="text-right">
															{{ item.nilai_3 }}
														</td>
														<td class="text-right">
															{{ item.nilai_4 }}
														</td>
														<td class="text-right">
															{{
																item.rerata.toFixed(
																	2,
																)
															}}
														</td>
													</tr>
												</tbody>
												<tfoot
													class="bg-green-2 text-weight-bold text-right"
												>
													<tr>
														<td
															colspan="2"
															class="text-left"
														>
															Rerata
														</td>
														<td>
															{{
																hitungRataRata(
																	nilaiDetail[
																		props
																			.row
																			.kelas_id
																	],
																	'nilai_1',
																)
															}}
														</td>
														<td>
															{{
																hitungRataRata(
																	nilaiDetail[
																		props
																			.row
																			.kelas_id
																	],
																	'nilai_2',
																)
															}}
														</td>
														<td>
															{{
																hitungRataRata(
																	nilaiDetail[
																		props
																			.row
																			.kelas_id
																	],
																	'nilai_3',
																)
															}}
														</td>
														<td>
															{{
																hitungRataRata(
																	nilaiDetail[
																		props
																			.row
																			.kelas_id
																	],
																	'nilai_4',
																)
															}}
														</td>
														<td>
															{{
																hitungRataRata(
																	nilaiDetail[
																		props
																			.row
																			.kelas_id
																	],
																	'rerata',
																)
															}}
														</td>
													</tr>
												</tfoot>
											</q-markup-table>
										</div>
									</div>
								</q-td>
							</q-tr>
						</template>
					</q-table>
				</div>
			</q-card-section>
		</q-card>
	</q-page>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import FilterKelas from 'src/components/HeadFilterKelas.vue';
import { useRoute } from 'vue-router';
import apiGet from 'src/api/api-get';

const dataFilter = ref({});
const route = useRoute();
const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
	kelas: route.params.kelas,
};
const nilai = ref([{}]);
const loading = ref(false);

const nilaiDetail = ref([{}]);
const loadingDetail = ref([]);

function dataEmit(val) {
	dataFilter.value = val;
}

const columns = [
	{
		name: 'no_absen',
		label: 'No',
		align: 'center',
		field: (row) => row.no_absen,
		format: (val) => `${val || ''}`,
		sortable: true,
	},
	{
		name: 'kelas_id',
		label: 'ID Kelas',
		align: 'center',
		field: (row) => row.kelas_id,
		format: (val) => `${val}`,
		sortable: true,
	},
	{
		name: 'santri_id',
		label: 'ID Santri',
		align: 'center',
		field: (row) => row.santri_id,
		format: (val) => `${val}`,
		sortable: true,
	},
	{
		name: 'nama',
		label: 'Nama',
		align: 'left',
		field: (row) => row.nama,
		sortable: true,
	},
	{
		name: 'rerata_1',
		label: 'Rerata-1',
		align: 'right',
		field: (row) =>
			row.rerata_1 ? parseFloat(row.rerata_1).toFixed(2) : null,
		// format: (val) => `${val}`,
		sortable: true,
	},
	{
		name: 'rerata_2',
		label: 'Rerata-2',
		align: 'right',
		field: (row) =>
			row.rerata_2 ? parseFloat(row.rerata_2).toFixed(2) : null,
		// format: (val) => `${val}`,
		sortable: true,
	},
	{
		name: 'rerata_3',
		label: 'Rerata-3',
		align: 'right',
		field: (row) =>
			row.rerata_3 ? parseFloat(row.rerata_3).toFixed(2) : null,
		// format: (val) => `${val}`,
		sortable: true,
	},
	{
		name: 'rerata_4',
		label: 'Rerata-4',
		align: 'right',
		field: (row) =>
			row.rerata_4 ? parseFloat(row.rerata_4).toFixed(2) : null,
		// format: (val) => `${val}`,
		sortable: true,
	},
	{
		name: 'rerata_akhir',
		label: 'R. Akhir',
		align: 'right',
		field: (row) =>
			row.rerata_akhir ? parseFloat(row.rerata_akhir).toFixed(2) : null,
		// format: (val) => `${val.toFixed(2)}`,
		sortable: true,
	},
];

async function expand(props) {
	props.expand = !props.expand;
	if (props.expand) {
		loadingDetail.value[props.key] = true;
		nilaiDetail.value[props.key] = null;
		const data = await apiGet({
			endPoint: 'nilai-mapel',
			params: {
				kelas_id: props.key,
				status_nilai: 'ujian',
			},
		});
		// console.log('detail', data.nilai);
		loadingDetail.value[props.key] = false;
		nilaiDetail.value[props.key] = data.nilai;
	}
}

onMounted(async () => {
	if (params.thAjaranH && params.tingkatId && params.kelas) {
		const data = await apiGet({
			endPoint: 'nilai-mapel/rerata',
			params: {
				th_ajaran_h: params.thAjaranH,
				tingkat_id: params.tingkatId,
				kelas: params.kelas,
				status_nilai: 'ujian',
			},
			loading,
		});
		nilai.value = data.nilai;
	}
	// console.log(nilai.value);
});

function hitungRataRata(data, n) {
	let totalNilai = 0;
	let jumlahData = 0;
	if (!data?.length) {
		return null;
	} else {
		data.forEach((item) => {
			if (item[n] !== null) {
				totalNilai += parseFloat(item[n]);
				jumlahData++;
			}
		});
		const rerata = totalNilai / jumlahData;
		return !isNaN(rerata) ? rerata.toFixed(2) : null;
	}
}
</script>
<style lang="scss" scoped>
thead tr th {
	/*	font-weight: bold; */
	background-color: #e8f5e9;
	color: #1b5e20;
}

.my-sticky-header-table-xxx {
	/* height or max-height is important */
	max-height: 650px;

	.q-table__top,
	.q-table__bottom,
	thead tr th {
		/* bg color is important for th; just specify one */
		background-color: #69f0ae;
		color: #1b5e20;
	}

	thead tr th {
		position: sticky;
		z-index: 1;
		top: 0;
		font-weight: bold;
	}

	/* this is when the loading indicator appears */
	&.q-table--loading thead tr:last-child th {
		/* height of all previous header rows */
		top: 48px;
	}

	/* prevent scrolling behind sticky top row on focus */
	tbody {
		/* height of all previous header rows */
		scroll-margin-top: 48px;
	}
}
</style>
