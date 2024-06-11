<template lang="">
	<q-page class="q-pa-sm">
		<q-card>
			<q-card-section class="q-pa-sm bg-green-8 text-green-11">
				<div tag="h1" class="text-subtitle1">Upload Nilai</div>
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<q-file
					@input="handleFileChange"
					outlined
					bottom-slots
					v-model="inputFile"
					label="Pilih file excel"
					counter
					dense
					style="max-width: 500px"
					:loading="loading"
				>
					<template v-slot:prepend>
						<q-icon name="cloud_upload" @click.stop.prevent />
					</template>
					<template v-slot:after>
						<q-icon
							name="close"
							@click.stop.prevent="inputFile = null"
							class="cursor-pointer"
						/>
					</template>

					<template v-slot:hint>
						<span class="text-green text-italic">
							Hanya membaca sheet pertama
						</span>
					</template>
				</q-file>
			</q-card-section>
			<q-card-section v-if="jsonData?.length > 0" class="q-pa-sm">
				<q-table
					:rows="jsonData"
					flat
					bordered
					class=""
					:rows-per-page-options="[10, 25, 50, 75, 100, 0]"
				>
					<template v-slot:header="props">
						<q-tr :props="props">
							<q-th
								v-for="col in props.cols"
								:key="col.name"
								:props="props"
								class="text-bold"
								:title="
									mapel.find(
										(m) =>
											m.id.toLowerCase() ==
											col.label.toLowerCase(),
									)?.mapel || ''
								"
							>
								{{ col.label.toLowerCase() }}
								<q-icon
									v-if="
										mapel.find(
											(m) =>
												m.id.toLowerCase() ==
												col.label.toLowerCase(),
										)
									"
									name="check_circle"
									color="green"
									size="1.3em"
								/>
							</q-th>
						</q-tr>
					</template>
				</q-table>
			</q-card-section>
			<!-- <q-card-section v-if="pecahData" class="q-pa-sm flex q-gutter-sm">
				<div v-for="(item, index) in pecahData" :key="index">
					<q-markup-table
						dense
						separator="cell"
						bordered
						flat
						style="max-width: 425px"
					>
						<thead>
							<tr>
								<th>ID Kelas</th>
								<th>Nama</th>
								<th>Nilai</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="i in item" :key="i">
								<td>{{ i.kelas_id }}</td>
								<td>{{ i.nama }}</td>
								<td>{{ i.nilai }}</td>
							</tr>
						</tbody>
					</q-markup-table>
				</div>
			</q-card-section> -->
			<q-card-section v-if="pecahData" class="q-pa-sm">
				<q-splitter style="max-width: 500px">
					<template v-slot:before>
						<q-tabs
							v-model="tab"
							no-caps
							class="bg-green-8 text-green-11 shadow-2"
							align="left"
							shrink
							vertical
						>
							<q-tab
								v-for="(item, index) in pecahData"
								:key="index"
								:name="index"
								:label="index"
							/>
						</q-tabs>
					</template>

					<template v-slot:after>
						<q-tab-panels v-model="tab" animated>
							<q-tab-panel
								v-for="(item, index) in pecahData"
								:key="index"
								:name="index"
								class="q-pa-sm bg-green-1"
							>
								<q-toolbar class="bg-green-7 text-green-1">
									<q-toolbar-title>
										{{
											mapel.find((m) => m.id == index)
												.mapel
										}}
									</q-toolbar-title>
									<q-btn
										label="Simpan"
										dense
										icon="save"
										no-caps
										outline
										class="q-px-sm"
									/>
								</q-toolbar>

								<q-markup-table
									dense
									separator="cell"
									bordered
									flat
									style="max-width: 425px"
								>
									<thead>
										<tr>
											<th>ID Kelas</th>
											<th>Nama</th>
											<th>Nilai</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="i in item" :key="i">
											<td class="text-center">
												{{ i.kelas_id }}
											</td>
											<td>{{ i.nama }}</td>
											<td class="text-right">
												{{ i.nilai }}
											</td>
										</tr>
									</tbody>
								</q-markup-table>
							</q-tab-panel>
						</q-tab-panels>
					</template>
				</q-splitter>

				<q-separator />
			</q-card-section>
		</q-card>
	</q-page>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref, watch } from 'vue';
import { read, utils } from 'xlsx';

const inputFile = ref();
const tab = ref('');
const jsonData = ref([]);
const pecahData = ref({});
const loading = ref(false);
const mapelIds = ref([]);
const mapel = ref([{}]);
async function loadData() {
	const data = await apiGet({
		endPoint: 'mapel',
		loading,
	});
	mapel.value = data.mapel;
	const ids = data.mapel.map((item) => item.id);
	mapelIds.value = ids;
}

onMounted(async () => {
	await loadData();
	// console.log(mapelIds.value);
});

const handleFileChange = (event) => {
	const file = event.target.files[0];
	const reader = new FileReader();

	reader.onload = (e) => {
		const data = e.target.result;
		const workbook = read(data, { type: 'array' });
		const sheetName = workbook.SheetNames[0];
		const worksheet = workbook.Sheets[sheetName];
		jsonData.value = utils.sheet_to_json(worksheet, {
			// blankrows: true,
			defval: null,
		});
		// console.log(jsonData.value);
		pecahData.value = groupDataByMapel(jsonData.value, mapelIds.value);
		console.log(pecahData.value);
	};

	reader.readAsArrayBuffer(file);
};

function groupDataByMapel(data, mapel) {
	const result = {};
	mapel.forEach((mapelKey) => {
		// cek key ada di data
		if (data[0].hasOwnProperty(mapelKey)) {
			result[mapelKey] = data.map((item) => ({
				kelas_id: item.kelas_id,
				nama: item.nama,
				nilai: item[mapelKey] || null,
				mapel_id: mapelKey,
			}));
		}
	});
	return result;
}

watch(inputFile, (newModel) => {
	if (!newModel) {
		jsonData.value = [];
		pecahData.value = {};
	}
});
</script>
<style lang=""></style>
