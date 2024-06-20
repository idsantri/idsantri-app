<template lang="">
	<q-page class="q-pa-sm">
		<q-card>
			<q-card-section class="bg-green-8 text-green-11 q-px-sm q-py-none">
				<q-toolbar class="no-padding no-margin">
					<q-toolbar-title class="text-subtitle1">
						Daftar Mata Pelajaran
					</q-toolbar-title>
					<q-btn
						label="Nilai Mapel"
						to="/madrasah/nilai-mapel"
						dense
						outline
						no-caps
						icon="arrow_back"
						class="q-px-sm q-mr-md"
					/>
					<q-btn
						class="q-mr-sm text-green-10"
						label="Baru"
						icon="add"
						no-caps
						color="green-11"
						@click="addNew"
					/>
					<select-tingkat-pendidikan
						style="width: 250px"
						bg-color="green-1"
						v-model="tingkatId"
					/>
					<!-- <q-select
						style="width: 200px"
						dense
						bg-color="green-1"
						outlined
						label="Tingkat Pendidikan"
						v-model="tingkatId"
						:options="lists['tingkat-pendidikan']"
						option-value="val0"
						option-label="val1"
						emit-value
						map-options
						:loading="loadingLists['tingkat-pendidikan']"
						behavior="menu"
					/> -->
				</q-toolbar>
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<q-markup-table flat>
					<thead>
						<tr class="text-left">
							<th>No</th>
							<th>Kode/ID</th>
							<th>Mapel</th>
							<th>Mata Pelajaran</th>
							<th>Status Fan</th>
							<th>Tampil</th>
							<th class="text-center">Edit</th>
						</tr>
					</thead>
					<tbody>
						<tr v-if="loading">
							<td colspan="5">
								<q-skeleton height="50px" />
							</td>
						</tr>
						<tr v-else-if="mapel.length == 0">
							<td
								colspan="5"
								class="text-center text-green-10 text-italic"
							>
								&mdash; Tidak ada data untuk ditampilkan &mdash;
								<br />
								&mdash; Pilih Tingkat Pendidikan &mdash;
							</td>
						</tr>

						<tr v-else v-for="item in mapel" :key="item.id">
							<td>{{ item.urut }}</td>
							<td>{{ item.id }}</td>
							<td>{{ item.mapel }}</td>
							<td>{{ item.mata_pelajaran }}</td>
							<td>{{ item.category }}</td>
							<td>
								<q-toggle
									:model-value="item.show ? true : false"
									color="green"
									disable
								/>
							</td>
							<td class="text-center">
								<q-btn
									icon="edit"
									flat
									color="green"
									@click="onEdit(item)"
								/>
							</td>
						</tr>
					</tbody>
				</q-markup-table>
			</q-card-section>
		</q-card>
		<!-- <pre>{{ mapel }}</pre> -->
		<q-dialog v-model="crudShow">
			<mapel-crud
				:data="mapelObj"
				title="Input Mata Pelajaran"
				@success-submit="loadData"
				@success-delete="loadData"
			/>
		</q-dialog>
	</q-page>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';
import apiGet from 'src/api/api-get';
import MapelCrud from 'pages/madrasah/mapel/MapelCrud.vue';
import SelectTingkatPendidikan from 'src/components/select-list/SelectTingkatPendidikan.vue';

const mapel = ref([]);
const tingkatId = ref('');
const loading = ref(false);
const mapelObj = ref({});
const crudShow = ref(false);

async function loadData(id) {
	const data = await apiGet({
		endPoint: 'mapel',
		loading,
		params: { tingkat_id: id },
	});
	mapel.value = data.mapel;
}

onMounted(async () => {});

watch(tingkatId, async (newVal) => {
	if (newVal) {
		await loadData(newVal);
	} else {
		mapel.value = [];
	}
});

function onEdit(item) {
	mapelObj.value = item;
	crudShow.value = true;
}

function addNew() {
	mapelObj.value = {};
	crudShow.value = true;
}
</script>
<style lang=""></style>
