<template lang="">
	<q-page class="q-pa-sm">
		<q-card>
			<q-card-section
				class="text-subtitle1 text-green-11 bg-green-7 q-pa-sm"
			>
				Nilai Mata Pelajaran
			</q-card-section>
			<q-card-section class="no-padding bg-green-12 text-green-10">
				<div class="row" style="max-width: 1000px; width: 100%">
					<q-select
						input-class="bg-green-13"
						class="col-12 col-md-3 q-pa-sm"
						dense
						outlined
						label="Tahun Ajaran"
						v-model="thAjaranH"
						:options="lists['th_ajaran']"
						option-value="th_ajaran_h"
						option-label="th_ajaran_h"
						emit-value
						map-options
						:loading="loading['th_ajaran']"
						behavior="menu"
					/>
					<q-select
						class="col-12 col-md-3 q-pa-sm"
						dense
						outlined
						label="Tingkat Pendidikan"
						v-model="tingkatId"
						:options="lists['tingkat']"
						option-value="tingkat_id"
						option-label="tingkat"
						emit-value
						map-options
						:loading="loading['tingkat']"
						clearable=""
						behavior="menu"
					/>
					<q-select
						class="col-12 col-md-3 q-pa-sm"
						dense
						outlined
						label="Kelas"
						v-model="kelas"
						:options="lists['kelas_detail']"
						option-value="kelas"
						option-label="kelas"
						emit-value
						map-options
						:loading="loading['kelas_detail']"
						clearable=""
						behavior="menu"
					/>
					<q-select
						class="col-12 col-md-3 q-pa-sm"
						dense
						outlined
						label="Ujian Ke-?"
						v-model="bulanUjian"
						:options="lists['bulan_ujian']"
						option-value="bu"
						option-label="bulan_ujian"
						emit-value
						map-options
						:loading="loading['bulan_ujian']"
						clearable=""
						behavior="menu"
					/>
				</div>
			</q-card-section>
			<q-table
				:rows="transNilai"
				:loading="loading"
				:rows-per-page-options="[25, 50, 75, 100, 0]"
				:pagination="{ rowsPerPage: 0 }"
				separator="cell"
				table-header-class="text-green-10 text-weight-bold"
				row-key="index"
				no-data-label="Tidak ada data pada filter ini!"
			>
				<template v-slot:header="props">
					<q-tr :props="props">
						<q-th
							v-for="col in props.cols"
							:key="col.name"
							:props="props"
							class=""
						>
							{{ col.label }}
						</q-th>
					</q-tr>
				</template>
				<template v-slot:body-cell="props">
					<q-td :props="props" :title="props.col.field">
						{{ props.value }}
					</q-td>
				</template>
			</q-table>
		</q-card>
	</q-page>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';

const nilai = ref([{}]);
const mapel = ref([{}]);
const loading = ref(false);

const thAjaranH = ref('');
const tingkatId = ref('');
const kelas = ref('');
const bulanUjian = ref('');
const lists = ref([]);

async function loadData() {
	const params = {
		th_ajaran_h: '1441-1442',
		tingkat_id: 'ts',
		kelas: '5-a',
		ujian_ke: 2,
	};
	const data = await apiGet({
		endPoint: 'nilai-mapel/pivot',
		params,
		loading,
	});
	nilai.value = data.nilai;
	mapel.value = data.mapel;
	// console.log(data);
}
const transNilai = ref([{}]);

onMounted(async () => {
	await loadData();
	transNilai.value = transformNilai(nilai.value, mapel.value);
	console.log(transNilai.value);
});

function transformNilai(nilaiData, mapelData) {
	const result = nilaiData.map((nilai) => {
		const transformedNilai = {
			no_absen: nilai.no_absen,
			id: nilai.id,
			santri_id: nilai.santri_id,
			nama: nilai.nama,
			// th_ajaran_h: nilai.th_ajaran_h,
			// tingkat_id: nilai.tingkat_id,
			// kelas: nilai.kelas,
			rerata: nilai.rerata,
		};

		mapelData.forEach((mapel) => {
			transformedNilai[mapel.mapel] = nilai[mapel.id];
		});

		return transformedNilai;
	});

	return result;
}
</script>
<style lang=""></style>
