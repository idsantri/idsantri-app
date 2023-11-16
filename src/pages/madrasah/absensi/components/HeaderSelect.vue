<template lang="">
	<q-card>
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
					@update="updateModel('tahun')"
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
					@update="updateModel('tingkat')"
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
					:loading="loading['bulan_ujian']"
					clearable=""
					:disable="props.disableBulanUjian"
				/>
			</div>
		</q-card-section>
	</q-card>
</template>
<script setup>
import { fetchListsArray } from 'src/api/fetch-list';
import { notifyWarning } from 'src/utils/notify';
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
	disableBulanUjian: Boolean,
});

const route = useRoute();
const router = useRouter();

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
	if (props.disableBulanUjian) bulanUjian.value = '';

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

	if (
		thAjaranH.value &&
		tingkatId.value &&
		kelas.value &&
		!props.disableBulanUjian
	) {
		await fetchListsArray({
			url: `absensi-settings?tingkat_id=${tingkatId.value}`,
			lists,
			key: 'bulan_ujian',
			loading,
		});

		if (!lists.value['bulan_ujian'].length) {
			notifyWarning(
				'Jadwal ujian untuk jenjang ini belum diatur.<br>Silakan masuk ke menu pengaturan (kanan atas)!'
			);
		}
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
		if (props.disableBulanUjian) {
			routerPush();
			return;
		}
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
<style lang=""></style>
