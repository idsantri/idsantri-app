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
		v-model="a_nik"
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
	<q-card bordered flat class="q-px-sm q-mt-sm">
		<q-toggle
			v-model="a_hidup"
			color="green"
			:true-value="1"
			:false-value="0"
			label="Hidup"
		/>
	</q-card>
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
		v-model="a_pa_diniyah_tingkat"
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
		v-model="a_pekerjaan"
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
	ayah,
	a_tgl_lahir,
	a_tmp_lahir,
	a_nik,
	a_hidup,
	a_pa_formal_tingkat,
	a_pa_diniyah_tingkat,
	a_pekerjaan,
} = toRefs(ortu);

const input = ref({
	tmp_lahir: a_tmp_lahir,
});

const lists = ref([]);
const loading = ref([]);
onMounted(async () => {
	await getLists({
		loading,
		lists,
		key: 'pendidikan-akhir-formal',
		sort: true,
	});
	await getLists({
		loading,
		lists,
		key: 'pendidikan-akhir-diniyah',
		sort: true,
	});
	await getLists({ loading, lists, key: 'pekerjaan', sort: true });
});
</script>
