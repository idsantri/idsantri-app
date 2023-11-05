<template>
	<div v-if="spinner">loading</div>
	<div v-else>
		<data-table
			class="display table nowrap dt"
			:options="options"
			style="overflow: hidden"
		/>
	</div>
	<pre>{{ murid }}</pre>
</template>
<script setup>
import getData from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net-dt';
import DataTablesCore from 'datatables.net';
import { apiTokened } from 'src/api';

const route = useRoute();
const murid = ref([]);
const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
	kelas: route.params.kelas,
};
const spinner = ref(false);
DataTable.use(DataTablesLib);
const url = `${apiTokened.defaults.baseURL}/murid/1443-1444/Aly.`;
const headers = {
	Authorization: apiTokened.defaults.headers.common.Authorization,
};

const options = ref({
	processing: true,
	serverSide: false,
	responsive: true,
	ajax: {
		url: url,
		type: 'GET',
		headers: headers,
		dataSrc: 'murid',
	},
	order: [],
	columns: [
		{
			title: 'Nama',
			data: 'nama',
			render: function (data, type, row, meta) {
				return row.nama;
			},
		},
		{
			title: 'Ayah',
			data: 'ayah',
			// render: function (data, type, row, meta) {
			// 	return row.ayah;
			// },
		},
	],
});

const columns = ref([]);
onMounted(async () => {
	// if (params.thAjaranH && params.tingkatId && params.kelas) {
	// 	const data = await getData({
	// 		endPoint: `murid/${params.thAjaranH}/${params.tingkatId}/${params.kelas}`,
	// 	});
	// 	murid.value = data.murid;
	// } else if (params.thAjaranH && params.tingkatId) {
	// 	const data = await getData({
	// 		endPoint: `murid/${params.thAjaranH}/${params.tingkatId}`,
	// 		spinner,
	// 	});
	// 	murid.value = data.murid;
	// } else {
	// 	murid.value = [];
	// }
	// console.log(murid.value);
	// columns.value = [{ murid: 'nama', title: 'Name' }];
});
</script>
<style lang="scss">
@import 'datatables.net-dt';
</style>
