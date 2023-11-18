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
				/>
				<q-select
					class="col-12 col-md-3 q-pa-sm"
					dense
					outlined
					label="Tingkat Pendidikan"
					v-model="tingkat"
					:options="lists['tingkat']"
					option-value="tingkat_id"
					option-label="tingkat"
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
	<!-- <pre>{{ props.startUrl }}</pre>
	<pre>tingkat {{ tingkat }}</pre>
	<pre>tingkat id {{ tingkatId }}</pre>
	<pre>param {{ params }}</pre> -->
</template>
<script setup>
import { fetchListsArray } from 'src/api/fetch-list';
import { notifyWarning } from 'src/utils/notify';
import { onMounted, ref, watch, watchEffect } from 'vue';
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

const loading = ref([]);
const lists = ref([]);
const thAjaranH = ref(params.thAjaranH);
const tingkat = ref();
const tingkatId = ref(params.tingkatId);
const kelas = ref(params.kelas);
const bulanUjian = ref(params.bulanUjian);

onMounted(async () => {
	// get tahun ajaran
	await fetchListsArray({
		url: `murid/lists-kelas`,
		lists,
		key: 'th_ajaran_h',
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
		tingkat.value = lists.value.tingkat.find(
			({ tingkat_id }) => tingkat_id === tingkatId.value
		);
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

	const data = {
		thAjaranH: thAjaranH.value,
		tingkat: tingkat.value?.tingkat || '',
		tingkatId: tingkat.value?.tingkat_id || '',
		kelas: kelas.value,
		bulanUjian: bulanUjian.value,
	};
	emit('dataFilter', data);
});

watch(
	[thAjaranH, tingkat, kelas, bulanUjian],
	(
		[newTahun, newTingkat, newKelas, newBulan],
		[oldTahun, oldTingkat, oldKelas, oldBulan]
	) => {
		let url = props.startUrl;
		if (newTahun != params.thAjaranH || !newTingkat) {
			router.push(`${url}/${newTahun}`);
			return;
		}

		if (newTingkat?.tingkat_id != params.tingkatId || !newKelas) {
			router.push(`${url}/${params.thAjaranH}/${newTingkat?.tingkat_id}`);
			return;
		}

		if (newKelas != params.kelas || !newBulan) {
			router.push(
				`${url}/${params.thAjaranH}/${params.tingkatId}/${newKelas}`
			);
			return;
		}

		if (newBulan != oldBulan) {
			router.push(
				`${url}/${params.thAjaranH}/${params.tingkatId}/${params.kelas}/${newBulan}`
			);
			return;
		}
	}
);
</script>
<style lang=""></style>
