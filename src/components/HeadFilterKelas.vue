<template lang="">
	<q-card>
		<q-card-section class="q-px-sm q-py-sm bg-green-11">
			<q-toolbar class="no-padding" style="min-height: 0">
				<q-toolbar-title class="text-subtitle1">
					<div class="text-subtitle2 text-weight-bold">
						Filter Kelas
					</div>
				</q-toolbar-title>
				<slot></slot>
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
					:options="lists['th_ajaran']"
					option-value="th_ajaran_h"
					option-label="th_ajaran_h"
					emit-value
					map-options
					:loading="loading['th_ajaran']"
					behavior="menu"
				/>
				<q-select
					v-if="props.showTingkat"
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
					:loading="loading['tingkat']"
					clearable=""
					behavior="menu"
				/>
				<q-select
					v-if="props.showKelas"
					class="col-12 col-md-3 q-pa-sm"
					dense
					outlined
					label="Kelas"
					v-model="kelas"
					:options="lists['kelas_detail']"
					option-value="kelas"
					option-label="kelas"
					emit-value
					map-options
					:loading="loading['kelas_detail']"
					clearable=""
					behavior="menu"
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
					:loading="loading['bulan_ujian']"
					clearable=""
					behavior="menu"
				/>
			</div>
		</q-card-section>
	</q-card>
</template>
<script setup>
import { getListsCustom } from 'src/api/api-get-lists';
import { notifyWarning } from 'src/utils/notify';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
	showBulanUjian: Boolean,
	startUrl: String,
	showKelas: {
		type: Boolean,
		default: true,
	},
	showTingkat: {
		type: Boolean,
		default: true,
	},
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
	await getListsCustom({
		url: 'murid/lists-kelas',
		lists,
		key: 'th_ajaran',
		loading,
	});
	sendEmit();

	// get tingkat
	if (params.thAjaranH) {
		await getListsCustom({
			url: `murid/lists-kelas/${params.thAjaranH}`,
			lists,
			key: 'tingkat',
			loading,
		});
	}
	sendEmit();

	// get kelas
	if (params.thAjaranH && params.tingkatId) {
		await getListsCustom({
			url: `murid/lists-kelas/${params.thAjaranH}/${params.tingkatId}`,
			lists,
			key: 'kelas_detail',
			loading,
		});
	}
	sendEmit();

	// get bulan ujian
	if (
		params.thAjaranH &&
		params.tingkatId &&
		params.kelas &&
		props.showBulanUjian
	) {
		await getListsCustom({
			url: `absensi-settings?tingkat_id=${tingkatId.value}`,
			lists,
			key: 'bulan_ujian',
			loading,
		});

		if (!lists.value['bulan_ujian'].length) {
			notifyWarning(
				'Jadwal ujian untuk jenjang ini belum diatur.<br>Silakan masuk ke menu pengaturan (kanan atas)!',
			);
		}
	}
	sendEmit();
});

function sendEmit() {
	const th = () =>
		thAjaranH.value && lists.value.th_ajaran
			? lists.value.th_ajaran.find(
					({ th_ajaran_h }) => th_ajaran_h === thAjaranH.value,
				)
			: {};

	const tk = () =>
		tingkatId.value && lists.value.tingkat
			? lists.value.tingkat.find(
					({ tingkat_id }) => tingkat_id === tingkatId.value,
				)
			: {};

	const kl = () =>
		kelas.value && lists.value.kelas_detail
			? lists.value.kelas_detail.find(({ kelas: k }) => k === kelas.value)
			: {};

	const bu = () =>
		bulanUjian.value && lists.value.bulan_ujian
			? lists.value.bulan_ujian.find(({ bu }) => bu === bulanUjian.value)
			: {};

	const display = () => {
		let text = '';
		if (th().th_ajaran_h)
			text +=
				'➡️ Tahun Ajaran: <strong>' + th().th_ajaran_h + '</strong>';
		if (tk().tingkat)
			text += ' ➡️ Tingkat: <strong>' + tk().tingkat + '</strong>';
		if (kl().kelas)
			text += ' ➡️ Kelas: <strong>' + kl().kelas + '</strong>';
		if (kl().jumlah_murid) text += ' (' + kl().jumlah_murid + ' murid)';
		if (bu().bulan_ujian)
			text +=
				' ➡️ Bulan-Ujian: <strong>' + bu().bulan_ujian + '</strong>';

		return (
			text ||
			'<div class="text-green-13 text-italic">Tentukan filter!</div>'
		);
	};

	const data = {
		thAjaranH: th().th_ajaran_h || '',
		thAjaranM: th().th_ajaran_m || '',
		thAjaranJumlahMurid: th().jumlah_murid || '',
		tingkat: tk().tingkat || '',
		tingkatId: tk().tingkat_id || '',
		tingkatJumlahMurid: tk().jumlah_murid || '',
		kelas: kl().kelas || '',
		kelasJumlahMurid: kl().jumlah_murid || '',
		bu: bu().bu || '',
		bulanUjian: bu().bulan_ujian || '',
		display: display(),
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
			`${props.startUrl}/${params.thAjaranH}/${params.tingkatId}`,
		);
		return;
	}
	if (newValue != oldValue) {
		router.push(
			`${props.startUrl}/${params.thAjaranH}/${params.tingkatId}/${newValue}`,
		);
		return;
	}
});

watch(bulanUjian, (newValue, oldValue) => {
	if (!newValue) {
		router.push(
			`${props.startUrl}/${params.thAjaranH}/${params.tingkatId}/${params.kelas}`,
		);
		return;
	}
	if (newValue != oldValue) {
		router.push(
			`${props.startUrl}/${params.thAjaranH}/${params.tingkatId}/${params.kelas}/${newValue}`,
		);
		return;
	}
});
</script>
<style lang=""></style>
