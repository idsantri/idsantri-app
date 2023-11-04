<template>
	<div class="q-ma-sm">
		<q-card>
			<q-card-section class="no-padding row" style="max-width: 800px">
				<q-select
					class="col-12 col-md-4 q-pa-sm"
					dense
					outlined
					label="Tahun Ajaran"
					v-model="thAjaranH"
					:options="lists['th_ajaran_h']"
					behavior="menu"
					:loading="loading['th_ajaran_h']"
				/>
				<q-select
					class="col-12 col-md-4 q-pa-sm"
					dense
					outlined
					label="Tingkat Pendidikan"
					v-model="tingkatId"
					:options="lists['tingkat_id']"
					behavior="menu"
					:loading="loading['tingkat_id']"
					clearable=""
				/>
				<q-select
					class="col-12 col-md-4 q-pa-sm"
					dense
					outlined
					label="Kelas"
					v-model="kelas"
					:options="lists['kelas']"
					behavior="menu"
					:loading="loading['kelas']"
					clearable=""
				/>
			</q-card-section>
			<!-- <pre>tingkat id: {{ lists['tingkat_id'] }}</pre> -->
		</q-card>
		<q-card class="q-mt-sm">
			<q-card-section
				class="bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"
			>
				Data Murid
				<q-space />
				<q-btn flat="" icon="cached" @click="keyReload++" />
			</q-card-section>
			<q-card-section class="q-pa-sm" :key="keyReload">
				<!-- murid
				<pre>
					{{ murid }}
				</pre
				> -->
				<q-table :rows="murid" flat="" />
			</q-card-section>
		</q-card>
	</div>
</template>
<script setup>
import { apiTokened } from 'src/api';
import getData from 'src/api/api-get';
import { onMounted, ref, watch, watchEffect } from 'vue';

const keyReload = ref(0);

const loading = ref([]);
const lists = ref([]);
const thAjaranH = ref('');
const tingkatId = ref('');
const kelas = ref('');
const murid = ref([]);
async function fetchListsArray({ loading, lists, key, url }) {
	loading.value[key] = true;
	try {
		const { data } = await apiTokened.get(url);
		lists.value[key] = data[key];
	} catch (error) {
		console.log(`Not Found list: ${key}`, error);
	} finally {
		loading.value[key] = false;
	}
}
onMounted(async () => {
	await fetchListsArray({
		url: `murid/lists-kelas`,
		lists,
		key: 'th_ajaran_h',
		loading,
	});
});

watch(
	[thAjaranH, tingkatId, kelas],
	async (
		[newThAjaranH, newTingkatId, newKelas],
		[oldThAjaranH, oldTingkatId, oldKelas]
	) => {
		if (newThAjaranH != oldThAjaranH) {
			tingkatId.value = null;
			kelas.value = null;
			lists.value['tingkat_id'] = [];
			lists.value['kelas'] = [];

			await fetchListsArray({
				url: `murid/lists-kelas/${newThAjaranH}`,
				lists,
				key: 'tingkat_id',
				loading,
			});
		}
		if (newTingkatId != oldTingkatId) {
			kelas.value = null;
			lists.value['kelas'] = [];

			await fetchListsArray({
				url: `murid/lists-kelas/${newThAjaranH}/${newTingkatId}`,
				lists,
				key: 'kelas',
				loading,
			});
		}

		if (newKelas != oldKelas) {
		}
	}
);

watchEffect(async () => {
	if (thAjaranH.value && tingkatId.value && kelas.value) {
		const data = await getData({
			endPoint: `murid/${thAjaranH.value}/${tingkatId.value}/${kelas.value}`,
		});
		murid.value = data.murid;
	} else if (thAjaranH.value && tingkatId.value) {
		const data = await getData({
			endPoint: `murid/${thAjaranH.value}/${tingkatId.value}`,
		});
		murid.value = data.murid;
	} else {
		murid.value = [];
	}
});
</script>
