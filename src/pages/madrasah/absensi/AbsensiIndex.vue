<template>
	<div class="q-ma-sm">
		<q-card>
			<q-card-section class="no-padding row" style="max-width: 1000px">
				<q-select
					class="col-12 col-md-3 q-pa-sm"
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
					class="col-12 col-md-3 q-pa-sm"
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
					class="col-12 col-md-3 q-pa-sm"
					dense
					outlined
					label="Kelas"
					v-model="kelas"
					:options="lists['kelas']"
					behavior="menu"
					:loading="loading['kelas']"
					clearable=""
				/>
				<q-select
					class="col-12 col-md-3 q-pa-sm"
					dense
					outlined
					label="Bulan (Ujian)"
					v-model="bulanUjian"
					:options="lists['bulan_ujian']"
					option-value="bu"
					option-label="bulan_ujian"
					emit-value
					map-options
					behavior="menu"
					:loading="bulanUjian['bulan_ujian']"
					clearable=""
					:disable="disSelect"
				/>
			</q-card-section>
			<!-- <pre>tingkat id: {{ lists['tingkat_id'] }}</pre> -->
		</q-card>
		<q-card class="q-mt-sm">
			<q-card-section
				class="bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"
			>
				{{ $route.name }} &nbsp;
				<span
					v-html="
						thAjaranH
							? ` ➡️ Tahun Ajaran: <strong>` +
							  thAjaranH +
							  `</strong>`
							: ''
					"
				></span
				>&nbsp;
				<span
					v-html="
						tingkatId
							? ` ➡️ Tingkat: <strong>` + tingkatId + `</strong>`
							: ''
					"
				></span
				>&nbsp;
				<span
					v-html="
						kelas ? ` ➡️ Kelas: <strong>` + kelas + `</strong>` : ''
					"
				></span
				>&nbsp;
				<span
					v-html="
						bulanUjian
							? ` ➡️ Key: <strong>` + bulanUjian + `</strong>`
							: ''
					"
				></span>

				<q-space />
				<q-btn
					:label="rekapRoute ? 'Input' : 'Rekap'"
					no-caps=""
					dense=""
					class="q-px-md text-green-10"
					color="green-2"
					@click="routeSwitch"
				/>
				<q-btn flat="" icon="cached" @click="keyReload++" />
				<q-btn-dropdown
					flat
					round
					dense
					dropdown-icon="more_vert"
					class="q-pl-md"
					color="green-1"
				>
					<q-list>
						<q-item clickable v-close-popup>
							<q-item-section>Cetak</q-item-section>
							<q-item-section avatar>
								<q-icon color="green" name="install_mobile" />
							</q-item-section>
						</q-item>
						<q-item clickable v-close-popup>
							<q-item-section>Pengaturan</q-item-section>
							<q-item-section avatar>
								<q-icon color="red" name="logout" />
							</q-item-section>
						</q-item>
					</q-list>
				</q-btn-dropdown>
			</q-card-section>
			<q-card-section class="q-pa-sm" :key="keyReload">
				<router-view
					:key="$route.fullPath"
					@success-delete="bulanUjian = ''"
				/>
			</q-card-section>
		</q-card>
	</div>
</template>
<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchListsArray } from 'src/api/fetch-list';

const keyReload = ref(0);
const router = useRouter();
const route = useRoute();
const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
	kelas: route.params.kelas,
	bulanUjian: route.params.bulanUjian,
};

const loading = ref([]);
const lists = ref([]);
const thAjaranH = ref(params.thAjaranH);
const tingkatId = ref(params.tingkatId);
const kelas = ref(params.kelas);
const bulanUjian = ref(params.bulanUjian);
const rekapRoute = ref(route.fullPath.search('rekap-ujian') > 0 ? true : false);
const disSelect = ref(false);

function onDelete() {
	bulanUjian.value = '';
}

function updateModel(params) {
	if (params == 'tahun') {
		tingkatId.value = null;
		kelas.value = null;
		bulanUjian.value = null;
	}
	if (params == 'tingkat') {
		kelas.value = null;
		bulanUjian.value = null;
	}
	if (params == 'kelas') {
		bulanUjian.value = null;
	}
}

onMounted(async () => {
	route.path.search('absensi/input') > 0
		? (disSelect.value = false)
		: (disSelect.value = true);

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

	if (thAjaranH.value && tingkatId.value && kelas.value) {
		await fetchListsArray({
			url: `bulan-ujian`,
			lists,
			key: 'bulan_ujian',
			loading,
		});
	}
});

watchEffect(async () => {
	if (!thAjaranH.value) {
		tingkatId.value = '';
		kelas.value = '';
		bulanUjian.value = '';
		lists.value['tingkat_id'] = [];
		lists.value['kelas'] = [];
		lists.value['bulan_ujian'] = [];
		routerPush();
		return;
	}

	if (thAjaranH.value && !tingkatId.value) {
		tingkatId.value = '';
		kelas.value = '';
		bulanUjian.value = '';
		lists.value['tingkat_id'] = [];
		lists.value['kelas'] = [];
		lists.value['bulan_ujian'] = [];
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
		lists.value['bulan_ujian'] = [];
		bulanUjian.value = '';
		await fetchListsArray({
			url: `murid/lists-kelas/${thAjaranH.value}/${tingkatId.value}`,
			lists,
			key: 'kelas',
			loading,
		});
		routerPush();
		return;
	}

	if (
		thAjaranH.value &&
		tingkatId.value &&
		kelas.value &&
		!bulanUjian.value
	) {
		lists.value['bulan_ujian'] = [];
		bulanUjian.value = '';
		await fetchListsArray({
			url: `bulan-ujian`,
			lists,
			key: 'bulan_ujian',
			loading,
		});

		routerPush();
		return;
	}

	if (thAjaranH.value && tingkatId.value && kelas.value && bulanUjian.value) {
		routerPush();
		return;
	}
});

function routeParams(withBulanUjian) {
	let url = '';
	if (thAjaranH.value) url += '/' + thAjaranH.value;
	if (tingkatId.value) url += '/' + tingkatId.value;
	if (kelas.value) url += '/' + kelas.value;
	if (withBulanUjian) {
		if (bulanUjian.value) url += '/' + bulanUjian.value;
	}
	return url;
}

function routeSwitch() {
	const { path } = route;
	if (path.search('absensi/input') > 0) {
		return router.push(
			`/madrasah/absensi/rekap-ujian${routeParams(false)}`
		);
	}
	if (path.search('absensi/rekap-ujian') > 0) {
		return router.push(`/madrasah/absensi/input${routeParams(true)}`);
	}
}

function routerPush() {
	const { path } = route;
	if (path.search('absensi/input') > 0) {
		return router.push(`/madrasah/absensi/input${routeParams(true)}`);
	}
	if (path.search('absensi/rekap-ujian') > 0) {
		return router.push(
			`/madrasah/absensi/rekap-ujian${routeParams(false)}`
		);
	}
}
</script>
