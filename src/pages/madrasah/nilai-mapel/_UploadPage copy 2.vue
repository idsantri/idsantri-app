<template lang="">
	<q-page class="q-pa-sm">
		<q-card>
			<q-card-section class="q-pa-sm bg-green-8 text-green-11">
				<div tag="h1" class="text-subtitle1">Upload Nilai</div>
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<q-stepper
					v-model="step"
					ref="stepper"
					done-color="green-8"
					active-color="green-10"
					animated
					flat
					bordered
					header-nav
				>
					<q-step
						:name="1"
						title="Pilih File Excel"
						icon="settings"
						:done="step > 1"
						class="q-pa-sm"
					>
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
								<q-icon
									name="cloud_upload"
									@click.stop.prevent
								/>
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
					</q-step>

					<q-step
						:name="2"
						title="Create an ad group"
						caption="Optional"
						icon="create_new_folder"
						:done="step > 2"
					>
						An ad group contains one or more ads which target a
						shared set of keywords.
					</q-step>

					<q-step
						:name="3"
						title="Ad template"
						icon="assignment"
						disable
					>
						This step won't show up because it is disabled.
					</q-step>

					<q-step :name="4" title="Create an ad" icon="add_comment">
						Try out different ad text to see what brings in the most
						customers, and learn how to enhance your ads using
						features like ad extensions. If you run into any
						problems with your ads, find out how to tell if they're
						running and how to resolve approval issues.
					</q-step>

					<template v-slot:navigation>
						<q-stepper-navigation>
							<q-btn
								:disabled="step == 1"
								flat
								color="primary"
								@click="$refs.stepper.previous()"
								label="Back"
								class="q-ml-sm"
							/>
							<q-btn
								@click="$refs.stepper.next()"
								color="primary"
								:label="step === 4 ? 'Finish' : 'Continue'"
							/>
						</q-stepper-navigation>
					</template>
				</q-stepper>
			</q-card-section>

			<q-card-section class="q-pa-sm flex">
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
				<q-space />
				<div>
					<q-btn
						label="Simpan"
						dense
						no-caps
						icon="save"
						outline
						class="q-px-sm"
						:disable="!Object.keys(nilaiMapel).length > 0"
						@click="onProses"
					/>
				</div>
			</q-card-section>
			<q-card-section v-if="nilaiPivot?.length > 0" class="q-pa-sm">
				<q-table
					:rows="nilaiPivot"
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
		</q-card>
	</q-page>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { notifyWarning } from 'src/utils/notify';
import { onMounted, ref, watch } from 'vue';
import { read, utils } from 'xlsx';

const inputFile = ref();
const nilaiPivot = ref([]);
const nilaiMapel = ref({});
const loading = ref(false);
const mapelIds = ref([]);
const mapel = ref([{}]);
const step = ref(1);
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
		const dataJson = utils.sheet_to_json(worksheet, {
			// blankrows: true,
			defval: null,
		});
		nilaiMapel.value = groupDataByMapel(dataJson, mapelIds.value);
		if (!Object.keys(nilaiMapel.value).length > 0) {
			notifyWarning('Data tidak dapat diproses');
			notifyWarning(
				'Pastikan baris pertama adalah judul kolom dan baris berikutnya adalah konten data',
			);
		} else {
			nilaiPivot.value = dataJson;
		}

		// console.log(nilaiPivot.value);
		// console.log(nilaiMapel.value);
	};

	reader.readAsArrayBuffer(file);
};
async function onProses() {
	console.log(nilaiMapel.value);
}
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
		nilaiPivot.value = [];
		nilaiMapel.value = {};
	}
});
</script>
<style lang=""></style>
