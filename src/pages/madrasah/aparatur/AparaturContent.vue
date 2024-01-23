<template lang="">
	<q-table
		flat
		:rows="personalia"
		:columns="columns"
		:filter="filter"
		@row-click="
			(evt, row, index) =>
				$router.push(`/personalia/${row.personalia_id}`)
		"
		:rows-per-page-options="[10, 25, 50, 75, 100, 0]"
		no-data-label="Silakan tentukan filter!"
		no-results-label="Tidak ditemukan kata kunci yang sesuai dengan pencarian Anda!"
		row-key="name"
	>
		<template v-slot:top-left>
			<div class="text-subtitle1 text-green-10">
				Data Aparatur Madrasah
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

	<!-- <pre>
{{ personalia }}
</pre>
	<pre>
{{ params }}
</pre> -->
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const spinner = ref(false);
const route = useRoute();
const router = useRouter();
const filter = ref('');
const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
};

const personalia = ref([]);

onMounted(async () => {
	if (params.thAjaranH && params.tingkatId) {
		const data = await apiGet({
			endPoint: `personalia-madrasah`,
			params: {
				th_ajaran_h: params.thAjaranH,
				tingkat_id: params.tingkatId,
			},
		});
		personalia.value = data.personalia_madrasah;
	} else {
		personalia.value = [];
	}
});

const columns = [
	{
		name: 'nama',
		label: 'Nama',
		align: 'left',
		field: (row) => `${row.nama} (${row.sex})`,
		sortable: true,
	},
	{
		name: 'alamat',
		label: 'Alamat',
		align: 'left',
		field: 'alamat_pendek',
		sortable: true,
		classes: 'alamat',
	},
	{
		name: 'jabatan',
		label: 'Jabatan',
		align: 'left',
		field: 'jabatan',
		sortable: true,
	},
	{
		name: 'tingkat',
		label: 'Tingkat',
		align: 'left',
		field: 'tingkat',
		sortable: true,
	},
	{
		name: 'kelas',
		label: 'Kelas',
		align: 'left',
		field: 'kelas',
		sortable: true,
	},
	{
		name: 'ruang',
		label: 'Ruang',
		align: 'left',
		field: 'ruang',
		sortable: true,
	},
];
</script>
<style lang=""></style>
