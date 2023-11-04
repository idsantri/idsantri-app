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
					@update:model-value="() => updateModel('tahun')"
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
					@update:model-value="() => updateModel('tingkat')"
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
				<router-view :key="$route.fullPath" />
			</q-card-section>
		</q-card>
	</div>
</template>
<script setup>
import { apiTokened } from 'src/api';
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const keyReload = ref(0);
const router = useRouter();
const route = useRoute();

const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
	kelas: route.params.kelas,
};

const loading = ref([]);
const lists = ref([]);
const thAjaranH = ref(params.thAjaranH);
const tingkatId = ref(params.tingkatId);
const kelas = ref(params.kelas);

function updateModel(params) {
	if (params == 'tahun') {
		tingkatId.value = null;
		kelas.value = null;
	}
	if (params == 'tingkat') {
		kelas.value = null;
	}
}

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
	if (thAjaranH.value) {
		await fetchListsArray({
			url: `murid/lists-kelas/${thAjaranH.value}`,
			lists,
			key: 'tingkat_id',
			loading,
		});
	}
	if (thAjaranH.value && tingkatId.value) {
		await fetchListsArray({
			url: `murid/lists-kelas/${thAjaranH.value}/${tingkatId.value}`,
			lists,
			key: 'kelas',
			loading,
		});
	}
});

function routerPush() {
	const to = route.fullPath;
	if (to.search('madrasah/murid') == true) {
		let url = `/madrasah/murid`;
		if (thAjaranH.value) url += '/' + thAjaranH.value;
		if (tingkatId.value) url += '/' + tingkatId.value;
		if (kelas.value) url += '/' + kelas.value;
		return router.push(url);
	}
}

watchEffect(async () => {
	if (!thAjaranH.value) {
		tingkatId.value = '';
		kelas.value = '';
		lists.value['tingkat_id'] = [];
		lists.value['kelas'] = [];
		routerPush();
		return;
	}
	if (thAjaranH.value && !tingkatId.value) {
		tingkatId.value = '';
		kelas.value = '';
		lists.value['tingkat_id'] = [];
		lists.value['kelas'] = [];
		await fetchListsArray({
			url: `murid/lists-kelas/${thAjaranH.value}`,
			lists,
			key: 'tingkat_id',
			loading,
		});
		routerPush();
		return;
	}

	if (thAjaranH.value && tingkatId.value && !kelas.value) {
		lists.value['kelas'] = [];
		kelas.value = '';
		await fetchListsArray({
			url: `murid/lists-kelas/${thAjaranH.value}/${tingkatId.value}`,
			lists,
			key: 'kelas',
			loading,
		});
		routerPush();
		return;
	}

	if (thAjaranH.value && tingkatId.value && kelas.value) {
		routerPush();
		return;
	}
});
</script>
