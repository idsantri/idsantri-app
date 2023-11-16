<template>
	<div class="q-ma-sm">
		<q-card>
			<q-card-section class="bg-green-8 text-green-11 q-px-sm q-py-none">
				<q-toolbar class="no-padding no-margin">
					<q-toolbar-title class="text-subtitle1">
						Absensi: {{ $route.name }}
					</q-toolbar-title>
					<q-btn
						dense
						class="q-px-md q-mr-sm text-green-10"
						label="Cetak"
						no-caps=""
						icon="print"
						@click="routerPrint"
						color="green-2"
					/>
					<q-btn-dropdown
						flat
						round
						dense
						dropdown-icon="more_vert"
						class="q-pl-sm"
						color="green-10"
					>
						<q-list>
							<q-item
								clickable
								v-close-popup
								@click="routerSetting"
							>
								<q-item-section>Pengaturan</q-item-section>
								<q-item-section avatar>
									<q-icon color="green" name="settings" />
								</q-item-section>
							</q-item>
						</q-list>
					</q-btn-dropdown>
				</q-toolbar>
			</q-card-section>
			<q-card-section class="no-padding">
				<div class="row" style="max-width: 1000px; width: 100%">
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
						:disable="
							route.fullPath.search('input') > 0 ? false : true
						"
					/>
				</div>
			</q-card-section>
			<!-- <pre>tingkat id: {{ lists['tingkat_id'] }}</pre> -->
		</q-card>
		<q-card class="q-mt-sm">
			<q-card-section
				class="bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"
			>
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
					v-if="route.fullPath.search('input') > 0"
					dense
					class="q-px-md q-mr-sm text-green-10"
					label="Rekap"
					no-caps=""
					icon="library_books"
					@click="routerRekapUjian"
					color="green-2"
				/>
				<q-btn
					v-if="route.fullPath.search('rekap-ujian') > 0"
					dense
					class="q-px-md q-mr-sm text-green-10"
					label="Input"
					no-caps=""
					icon="library_books"
					@click="routerInput"
					color="green-2"
				/>

				<q-btn
					flat
					round
					dense
					icon="more_vert"
					class="q-pl-sm"
					color="green-1"
					disable=""
				/>
			</q-card-section>
			<q-card-section class="q-pa-sm" :key="keyReload">
				<router-view :key="$route.fullPath" />
			</q-card-section>
		</q-card>
	</div>
</template>
<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchListsArray } from 'src/api/fetch-list';
import { QCardSection } from 'quasar';

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
const disSelect = ref(false);

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
			url: `absensi-settings?tingkat_id=${tingkatId.value}`,
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
			url: `absensi-settings?tingkat_id=${tingkatId.value}`,
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

function routerInput() {
	return router.push(`/madrasah/absensi/input${routeParams(true)}`);
}

function routerRekapUjian() {
	return router.push(`/madrasah/absensi/rekap-ujian${routeParams(false)}`);
}

function routerSetting() {
	router.push('/madrasah/absensi/setting');
}

function routerPrint() {
	router.push('/madrasah/absensi/print');
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

<style lang="scss" scoped>
@media screen And (max-width: 1400px) {
	.content-right {
		width: 100%;
	}
}
</style>
