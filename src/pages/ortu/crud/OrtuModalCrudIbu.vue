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
		v-model="ibu"
		:rules="[
			(val) => !!val || 'Harus diisi!',
			(val) => val?.length >= 3 || 'Setidaknya 3 huruf!',
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
		v-model="i_nik"
		:rules="[
			(val) =>
				!val || (val?.length == 16 && !isNaN(val)) || '16 digit angka!',
		]"
		error-color="negative"
	/>
	<input-select-kota-lahir
		@emit-input="(val) => Object.assign(input, val)"
		:data="input"
	/>

	<q-input
		dense
		:hint="
			isDate(i_tgl_lahir)
				? formatDateFull(i_tgl_lahir) +
					' | ' +
					bacaHijri(m2h(i_tgl_lahir))
				: ''
		"
		class="q-mt-sm"
		outlined
		label="Tanggal Lahir"
		v-model="i_tgl_lahir"
		type="date"
	/>
	<q-toggle
		v-model="i_hidup"
		color="green"
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
		v-model="i_pa_formal_tingkat"
		:options="lists['pendidikan-akhir-formal']"
		:loading="loading['pendidikan-akhir-formal']"
		use-input=""
		new-value-mode="add"
		clearable
		behavior="menu"
	/>

	<q-select
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Pendidikan Akhir Diniyah"
		emit-value
		map-options
		v-model="i_pa_diniyah_tingkat"
		:options="lists['pendidikan-akhir-diniyah']"
		:loading="loading['pendidikan-akhir-diniyah']"
		use-input=""
		new-value-mode="add"
		clearable
		behavior="menu"
	/>

	<q-select
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Pekerjaan"
		emit-value
		map-options
		v-model="i_pekerjaan"
		:options="lists['pekerjaan']"
		:loading="loading['pekerjaan']"
		use-input=""
		new-value-mode="add"
		clearable
		behavior="menu"
	/>
</template>
<script setup>
import ortuState from 'src/stores/ortu-store.js';
import { m2h, bacaHijri } from 'src/utils/hijri';
import { isDate, formatDateFull } from 'src/utils/format-date';
import { onMounted, ref, toRefs } from 'vue';
import InputSelectKotaLahir from 'src/components/InputSelectKotaLahir.vue';
import { getLists } from 'src/api/api-get-lists';

const props = defineProps({
	title: { type: String, default: '' },
});

const { ortu } = ortuState();
const {
	ibu,
	i_tgl_lahir,
	i_tmp_lahir,
	i_nik,
	i_hidup,
	i_pa_formal_tingkat,
	i_pa_diniyah_tingkat,
	i_pekerjaan,
} = toRefs(ortu);

const input = ref({
	tmp_lahir: i_tmp_lahir,
});

const lists = ref([]);
const loading = ref([]);

onMounted(async () => {
	await getLists({
		loading,
		lists,
		sort: true,
		key: 'pendidikan-akhir-formal',
	});
	await getLists({
		loading,
		lists,
		sort: true,
		key: 'pendidikan-akhir-diniyah',
	});
	await getLists({ loading, lists, sort: true, key: 'pekerjaan' });
});
</script>
