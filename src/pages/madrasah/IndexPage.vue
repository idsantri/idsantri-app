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
					@update:model-value="(v) => routerPush(v)"
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
					@update:model-value="(v) => routerPush(v)"
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
					@update:model-value="(v) => routerPush(v)"
				/>
			</q-card-section>
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
				<router-view :key="$route.fullPath">
					murid: {{ murid }} params: {{ params }}
				</router-view>
			</q-card-section>
		</q-card>
	</div>

	<pre>th:{{ thAjaranH }}</pre>
	<pre>tk:{{ tingkatId }}</pre>
	<pre>kl:{{ kelas }}</pre>
</template>
<script setup>
import { apiTokened } from 'src/api';
import getData from 'src/api/api-get';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const keyReload = ref(0);
const router = useRouter();
const route = useRoute();

const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
	kelas: route.params.kelas,
};
const murid = ref([]);

const loading = ref([]);
const lists = ref([]);
const thAjaranH = ref('');
const tingkatId = ref('');
const kelas = ref('');

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
	// console.log('lg', listGet.value);
});

function routerPush() {
	// let url = `/madrasah/${thAjaranH.value}/${tingkatId.value}/${kelas.value}`;
	let url = `/madrasah`;
	if (thAjaranH.value) url += '/' + thAjaranH.value;
	if (tingkatId.value) url += '/' + tingkatId.value;
	if (kelas.value) url += '/' + kelas.value;
	console.log(url);
	// return router.push(url);
}

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

			murid.value = ['get tahun ' + newThAjaranH];
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

			murid.value = ['get tingkat ' + newTingkatId];
		}

		if (newKelas != oldKelas) {
			murid.value = ['get kelas ' + newKelas];
		}
	}
);
</script>
