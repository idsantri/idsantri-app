<template lang="">
	<q-page class="q-pa-sm">
		<q-card>
			<q-card-section class="q-pa-sm bg-green-8 text-green-11 flex">
				<div tag="h1" class="text-subtitle1">Download Nilai</div>
				<q-space />
				<q-btn
					label="Kembali"
					to="/madrasah/nilai-mapel"
					dense
					outline
					no-caps
					icon="arrow_back"
					class="q-px-sm q-mr-md"
				/>
				<q-btn
					label="Upload"
					to="/madrasah/nilai-mapel/upload"
					dense
					outline
					no-caps
					icon="upload"
					class="q-px-sm"
				/>
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<q-form @submit.prevent="onSubmit">
					<q-card style="max-width: 425px">
						<q-card-section class="q-pa-sm">
							<q-select
								dense
								class=""
								outlined
								label="Tahun Ajaran"
								emit-value
								map-options
								v-model="input.th_ajaran_h"
								:options="lists['th_ajaran_h']"
								:loading="loading['th_ajaran_h']"
								clearable=""
								behavior="menu"
								required
								:rules="[(val) => !!val || 'Harus diisi!']"
							/>
							<q-select
								dense
								class=""
								outlined
								label="Tingkat Pendidikan"
								emit-value
								map-options
								option-value="tingkat_id"
								option-label="tingkat"
								v-model="input.tingkat_id"
								:options="lists['tingkat']"
								:loading="loading['tingkat']"
								clearable=""
								behavior="menu"
								required
								:rules="[(val) => !!val || 'Harus diisi!']"
							/>
							<q-select
								dense
								class=""
								outlined
								label="Kelas"
								emit-value
								map-options
								v-model="input.kelas"
								:options="lists['kelas']"
								:loading="loading['kelas']"
								clearable=""
								behavior="menu"
								required
								:rules="[(val) => !!val || 'Harus diisi!']"
							/>

							<q-select
								dense
								class="q-mt-sm"
								outlined
								label="Kategori Nilai"
								v-model="input.category"
								behavior="menu"
								required
								:options="listsCategory"
								emit-value
								map-options
								:rules="[(val) => !!val || 'Harus diisi!']"
							/>
							<q-input
								dense
								class="q-mt-sm"
								outlined
								label="Ujian Ke"
								v-model="input.ujian_ke"
								required
								type="number"
								:rules="[
									(val) =>
										(val > 0 && val < 5) ||
										'antara 1 s.d. 4',
								]"
							/>
						</q-card-section>
						<q-card-actions class="bg-green-6" align="right">
							<q-btn
								class=""
								type="submit"
								label="Download"
								icon="download"
								color="green-11"
								no-caps
								outline
								dense
							/>
						</q-card-actions>
					</q-card>
				</q-form>
			</q-card-section>
		</q-card>
	</q-page>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { getListsCustom } from 'src/api/api-get-lists';
import loadingStore from 'src/stores/loading-store';
import { onMounted, ref, toRefs, watch } from 'vue';

const { loadingMain } = toRefs(loadingStore());
const input = ref({});
const loading = ref([]);
const lists = ref([]);
const listsCategory = [
	{
		value: 'ujian',
		label: 'Nilai Ujian',
	},
	{
		value: 'harian',
		label: 'Nilai Harian',
	},
	{
		value: 'rapor',
		label: 'Nilai Rapor',
	},
	{
		value: 'ijazah',
		label: 'Nilai Ijazah',
	},
];

onMounted(async () => {
	await getListsCustom({
		loading,
		lists,
		key: 'th_ajaran_h',
		url: 'kelas/lists',
		sort: 'desc',
	});
});

async function onSubmit() {
	const params = JSON.parse(JSON.stringify(input.value));
	const data = await apiGet({
		endPoint: 'nilai-mapel/export',
		loading: loadingMain,
		params,
	});
	if (data) {
		let link = document.createElement('a');
		link.href = data.url;
		link.click();
		link.remove();
	}
	// console.log(data.url);
}

watch(
	() => input.value.th_ajaran_h,
	async (newModel) => {
		input.value.tingkat_id = '';
		input.value.kelas = '';
		if (newModel) {
			await getListsCustom({
				loading,
				lists,
				key: 'tingkat',
				url: 'kelas/lists',
				sort: 'asc',
				params: { th_ajaran_h: newModel },
			});
		} else {
			lists.value['tingkat'] = [];
		}
		lists.value['kelas'] = [];
	},
);

watch(
	() => input.value.tingkat_id,
	async (newModel) => {
		input.value.kelas = '';
		if (newModel) {
			await getListsCustom({
				loading,
				lists,
				key: 'kelas',
				url: 'kelas/lists',
				sort: 'asc',
				params: {
					th_ajaran_h: input.value.th_ajaran_h,
					tingkat_id: newModel,
				},
			});
		} else {
			lists.value['kelas'] = [];
		}
	},
);
</script>
<style lang=""></style>
