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
					:options="lists['th_ajaran']"
					option-value="th_ajaran_h"
					option-label="th_ajaran_h"
					emit-value
					map-options
					behavior="menu"
					:loading="loading['th_ajaran']"
				/>
				<q-select
					class="col-12 col-md-3 q-pa-sm"
					dense
					outlined
					label="Tingkat Pendidikan"
					v-model="tingkatId"
					:options="lists['tingkat']"
					option-value="tingkat_id"
					option-label="tingkat"
					emit-value
					map-options
					behavior="menu"
					:loading="loading['tingkat']"
					clearable=""
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
					v-if="props.showBulanUjian"
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
				/>
			</div>
		</q-card-section>
	</q-card>
</template>
<script setup>
import { fetchListsArray } from 'src/api/fetch-list';
import { notifyWarning } from 'src/utils/notify';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
	showBulanUjian: Boolean,
	startUrl: String,
});
const emit = defineEmits(['dataFilter']);

const route = useRoute();
const router = useRouter();
const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
	kelas: route.params.kelas,
	bulanUjian: route.params.bulanUjian,
};

const thAjaranH = ref(params.thAjaranH);
const tingkatId = ref(params.tingkatId);
const kelas = ref(params.kelas);
const bulanUjian = ref(params.bulanUjian);

const loading = ref([]);
const lists = ref([]);

onMounted(async () => {
	// get tahun ajaran
	await fetchListsArray({
		url: `murid/lists-kelas`,
		lists,
		key: 'th_ajaran',
		loading,
	});

	// get tingkat
	if (params.thAjaranH) {
		await fetchListsArray({
			url: `murid/lists-kelas/${params.thAjaranH}`,
			lists,
			key: 'tingkat',
			loading,
		});
	}

	// get kelas
	if (params.thAjaranH && params.tingkatId) {
		await fetchListsArray({
			url: `murid/lists-kelas/${params.thAjaranH}/${params.tingkatId}`,
			lists,
			key: 'kelas',
			loading,
		});
	}

	// get bulan ujian
	if (
		params.thAjaranH &&
		params.tingkatId &&
		params.kelas &&
		props.showBulanUjian
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

	sendEmit();
});

function sendEmit() {
	const th = () =>
		thAjaranH.value
			? lists.value.th_ajaran.find(
					({ th_ajaran_h }) => th_ajaran_h === thAjaranH.value
			  )
			: {};

	const tk = () =>
		tingkatId.value
			? lists.value.tingkat.find(
					({ tingkat_id }) => tingkat_id === tingkatId.value
			  )
			: {};

	const bu = () =>
		bulanUjian.value
			? lists.value.bulan_ujian.find(({ bu }) => bu === bulanUjian.value)
			: {};

	const data = {
		thAjaranH: th().th_ajaran_h || '',
		thAjaranM: th().th_ajaran_m || '',
		tingkat: tk().tingkat || '',
		tingkatId: tk().tingkat_id || '',
		kelas: kelas.value || '',
		bu: bu().bu || '',
		bulanUjian: bu().bulan_ujian || '',
	};

	emit('dataFilter', data);
}

watch(thAjaranH, (newValue, oldValue) => {
	if (!newValue) {
		router.push(`${props.startUrl}`);
		return;
	}
	if (newValue != oldValue) {
		router.push(`${props.startUrl}/${newValue}`);
		return;
	}
});

watch(tingkatId, (newValue, oldValue) => {
	if (!newValue) {
		router.push(`${props.startUrl}/${params.thAjaranH}`);
		return;
	}
	if (newValue != oldValue) {
		router.push(`${props.startUrl}/${params.thAjaranH}/${newValue}`);
		return;
	}
});

watch(kelas, (newValue, oldValue) => {
	if (!newValue) {
		router.push(
			`${props.startUrl}/${params.thAjaranH}/${params.tingkatId}`
		);
		return;
	}
	if (newValue != oldValue) {
		router.push(
			`${props.startUrl}/${params.thAjaranH}/${params.tingkatId}/${newValue}`
		);
		return;
	}
});

watch(bulanUjian, (newValue, oldValue) => {
	if (!newValue) {
		router.push(
			`${props.startUrl}/${params.thAjaranH}/${params.tingkatId}/${params.kelas}`
		);
		return;
	}
	if (newValue != oldValue) {
		router.push(
			`${props.startUrl}/${params.thAjaranH}/${params.tingkatId}/${params.kelas}/${newValue}`
		);
		return;
	}
});
</script>
<style lang=""></style>
