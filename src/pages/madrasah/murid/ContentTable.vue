<template>
	<q-table
		:rows="murid"
		:columns="columns"
		:loading="spinner"
		:rows-per-page-options="[10, 25, 50, 75, 100, 0]"
		class="dt"
		:filter="filter"
		no-data-label="Silakan tentukan Tahun ajaran dan tingkat pendidikan!"
		no-results-label="Tidak ditemukan kata kunci yang sesuai dengan pencarian Anda!"
		row-key="name"
		flat
	>
		<template v-slot:top-left>
			<div class="text-subtitle1 text-green-10">Data Murid</div>
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
		<template v-slot:body="props">
			<q-tr
				:props="props"
				@click="rowClick(props.row)"
				style="cursor: pointer"
			>
				<q-td key="id" :props="props">
					{{ props.row.id }}
				</q-td>
				<q-td key="id" :props="props">
					{{ props.row.santri_id }}
				</q-td>
				<q-td key="nama" :props="props">
					{{ props.row.nama }} ({{ props.row.sex }})
				</q-td>
				<q-td
					key="alamat"
					:props="props"
					:title="props.row.alamat_pendek"
				>
					{{
						props.row.alamat_pendek.length > 30
							? props.row.alamat_pendek.substr(0, 30) + '&mldr;'
							: props.row.alamat_pendek
					}}
				</q-td>
				<q-td key="pendidikan" :props="props">
					{{ props.row.kelas }}
					{{ props.row.tingkat_id }}
					{{
						props.row.no_absen
							? ' (' +
							  String('0' + props.row.no_absen).slice(-2) +
							  ')'
							: ''
					}}
				</q-td>
				<q-td key="wali" :props="props">
					{{ props.row.wali_nama }} ({{ props.row.wali_status }};
					{{ props.row.wali_sex }})
				</q-td>
				<q-td key="ortu" :props="props">
					{{ props.row.ayah }} | {{ props.row.ibu }}
				</q-td>
			</q-tr>
		</template>
	</q-table>
	<!-- <pre>{{ murid }}</pre> -->
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const spinner = ref(false);
const route = useRoute();
const router = useRouter();
const murid = ref([]);
const filter = ref('');
const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
	kelas: route.params.kelas,
};

function rowClick(row) {
	router.push(`/madrasah/kelas/${row.id}/riwayat`);
}

onMounted(async () => {
	if (params.thAjaranH && params.tingkatId && params.kelas) {
		const data = await apiGet({
			endPoint: `murid/${params.thAjaranH}/${params.tingkatId}/${params.kelas}`,
		});
		murid.value = data.murid;
	} else if (params.thAjaranH && params.tingkatId) {
		const data = await apiGet({
			endPoint: `murid/${params.thAjaranH}/${params.tingkatId}`,
			loading: spinner,
		});
		murid.value = data.murid;
	} else {
		murid.value = [];
	}
});

const columns = [
	{
		name: 'id',
		label: 'ID Kelas',
		align: 'left',
		field: 'id',
		sortable: true,
	},
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
		name: 'alamat',
		label: 'Alamat',
		align: 'left',
		field: 'alamat_pendek',
		// field: (row) =>
		// 	`${
		// 		row.alamat_pendek.length > 20
		// 			? row.alamat_pendek.substr(0, 20) + '&mldr;'
		// 			: row.alamat_pendek
		// 	}`,
		sortable: true,
		classes: 'alamat',
	},
	{
		name: 'pendidikan',
		label: 'Kelas - Tingkat - Absen',
		align: 'left',
		field: (row) => `${row.kelas} ${row.tingkat_id}
			${row.no_absen ? ' (' + String('0' + row.no_absen).slice(-2) + ')' : ''}`,
		sortable: true,
	},
	{
		name: 'wali',
		label: 'Wali',
		align: 'left',
		field: 'wali_nama',
		sortable: true,
	},
	{
		name: 'ortu',
		label: 'Orang Tua',
		align: 'left',
		field: (row) => `${row.ayah} | ${row.ibu}`,
		sortable: true,
	},
];
</script>
<style lang=""></style>
