<template>
	<q-table
		:rows="murid"
		:columns="columns"
		:loading="spinner"
		:rows-per-page-options="[10, 25, 50, 100, 0]"
		class="dt"
		:filter="filter"
		no-data-label="Silakan tentukan Tahun ajaran dan tingkat pendidikan!"
		no-results-label="Tidak ditemukan kata kunci yang sesuai dengan pencarian Anda!"
		row-key="name"
	>
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
		<template v-slot:body="props">
			<q-tr :props="props">
				<q-td
					key="id"
					:props="props"
					@click="clickKelas(props.row.id)"
					class="dt-link"
				>
					{{ props.row.id }}
				</q-td>
				<q-td
					key="id"
					:props="props"
					@click="clickMurid(props.row.id)"
					class="dt-link"
				>
					{{ props.row.santri_id }}
				</q-td>
				<q-td
					key="nama"
					:props="props"
					@click="clickMurid(props.row.santri_id)"
					class="dt-link"
				>
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
				<q-td
					key="wali"
					:props="props"
					@click="clickWali(props.row.wali_id)"
					class="dt-link"
				>
					{{ props.row.wali_nama }} ({{ props.row.wali_status }};
					{{ props.row.wali_sex }})
				</q-td>
				<q-td
					key="ortu"
					:props="props"
					@click="clickOrtu(props.row.ortu_id)"
					class="dt-link"
				>
					{{ props.row.ayah }} | {{ props.row.ibu }}
				</q-td>
			</q-tr>
		</template>
	</q-table>
	<!-- <pre>{{ murid }}</pre> -->
</template>
<script setup>
import getData from 'src/api/api-get';
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

function clickKelas(id) {
	console.log(id);
}

function clickMurid(id) {
	router.push(`/santri/${id}`);
}

function clickOrtu(id) {
	router.push(`/ortu/${id}`);
}

function clickWali(id) {
	router.push(`/wali/${id}`);
}

onMounted(async () => {
	if (params.thAjaranH && params.tingkatId && params.kelas) {
		const data = await getData({
			endPoint: `murid/${params.thAjaranH}/${params.tingkatId}/${params.kelas}`,
		});
		murid.value = data.murid;
	} else if (params.thAjaranH && params.tingkatId) {
		const data = await getData({
			endPoint: `murid/${params.thAjaranH}/${params.tingkatId}`,
			spinner,
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
		sortable: true,
	},
	{
		name: 'pendidikan',
		label: 'Kelas - Tingkat - Absen',
		align: 'left',
		field: (row) => `${row.kelas} - ${row.tingkat_id} - ${row.no_absen}`,
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
