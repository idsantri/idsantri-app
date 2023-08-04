<template>
	<div class="text-subtitle2">
		{{ props.title }}
	</div>
	<q-input
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Nama*"
		v-model="ayah"
		:rules="[
			(val) => !!val || 'Harus diisi!',
			(val) => val?.length >= 5 || 'Setidaknya 5 huruf!',
		]"
		error-color="negative"
		autocapitalize="words"
	/>

	<q-input
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Nomor Induk Kependudukan"
		v-model="a_nik"
		:rules="[
			(val) =>
				!val || (val?.length == 16 && !isNaN(val)) || '16 digit angka!',
		]"
		error-color="negative"
	/>
	<q-select
		dense
		hint="Kota kelahiran"
		class="q-mt-sm"
		outlined
		label="Tempat Lahir"
		v-model="a_tmp_lahir"
		:options="optionsKotaLahir"
		emit-value
		map-options
		error-color="negative"
		@filter="filterTempatLahir"
		:loading="loadingKotaLahir"
		use-input
		new-value-mode="add"
		clearable=""
	/>

	<q-input
		dense
		:hint="
			isDate(a_tgl_lahir)
				? formatDateFull(a_tgl_lahir) +
				  ' | ' +
				  bacaHijri(m2h(a_tgl_lahir))
				: ''
		"
		class="q-mt-sm"
		outlined
		label="Tanggal Lahir"
		v-model="a_tgl_lahir"
		type="date"
	/>
	<q-toggle
		v-model="a_hidup"
		color="teal"
		label="Hidup"
		:true-value="1"
		:false-value="0"
	/>

	<q-select
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Pendidikan Akhir Formal"
		emit-value
		map-options
		v-model="a_pa_formal_tingkat"
		:options="lists['pendidikan-akhir-formal']"
		:loading="loading['pendidikan-akhir-formal']"
		use-input=""
		new-value-mode="add"
		clearable
	/>

	<q-select
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Pendidikan Akhir Diniyah"
		emit-value
		map-options
		v-model="a_pa_diniyah_tingkat"
		:options="lists['pendidikan-akhir-diniyah']"
		:loading="loading['pendidikan-akhir-diniyah']"
		use-input=""
		new-value-mode="add"
		clearable
	/>

	<q-select
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Pekerjaan"
		emit-value
		map-options
		v-model="a_pekerjaan"
		:options="lists['pekerjaan']"
		:loading="loading['pekerjaan']"
		use-input=""
		new-value-mode="add"
		clearable
	/>
</template>
<script setup>
import ortuState from 'src/stores/ortu-store.js';
import { m2h, bacaHijri } from 'src/utils/hijri';
import { isDate, formatDateFull } from 'src/utils/format-date';
import { onMounted, ref, toRefs } from 'vue';
import { fetchKotaLahir, filterKotaLahir } from 'src/api/fetch-alamat';
import { fetchLists } from 'src/api/fetch-list';

const props = defineProps({
	title: { type: String, default: '' },
});

const { ortu } = ortuState();
const {
	ayah,
	a_tgl_lahir,
	a_tmp_lahir,
	a_nik,
	a_hidup,
	a_pa_formal_tingkat,
	a_pa_diniyah_tingkat,
	a_pekerjaan,
} = toRefs(ortu);

const loadingKotaLahir = ref(false);
const listKotaLahir = ref([]);
const optionsKotaLahir = ref(listKotaLahir);

const filterTempatLahir = (val, update) => {
	filterKotaLahir(val, update, optionsKotaLahir, listKotaLahir);
};

const lists = ref([]);
const loading = ref([]);
onMounted(async () => {
	await fetchKotaLahir(listKotaLahir, loadingKotaLahir);
	await fetchLists({ loading, lists, key: 'pendidikan-akhir-formal' });
	await fetchLists({ loading, lists, key: 'pendidikan-akhir-diniyah' });
	await fetchLists({ loading, lists, key: 'pekerjaan' });
});
</script>
src/api/fetch-alamat src/api/fetch-list
