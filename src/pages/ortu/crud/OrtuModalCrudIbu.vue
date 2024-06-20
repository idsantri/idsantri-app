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
	<q-card bordered flat class="q-px-sm q-mt-sm">
		<q-toggle
			v-model="i_hidup"
			color="green"
			:true-value="1"
			:false-value="0"
			label="Hidup"
		/>
	</q-card>
	<select-p-a-formal
		v-model="i_pa_formal_tingkat"
		label="Pendidikan Akhir Formal"
		class="q-mt-sm"
		hint=""
		use-input=""
		new-value-mode="add"
	/>

	<select-p-a-diniyah
		v-model="i_pa_diniyah_tingkat"
		label="Pendidikan Akhir Diniyah"
		class="q-mt-sm"
		use-input=""
		new-value-mode="add"
		hint=""
	/>

	<select-pekerjaan
		v-model="i_pekerjaan"
		class="q-mt-sm"
		use-input=""
		new-value-mode="add"
		hint=""
	/>
</template>
<script setup>
import { onMounted, ref, toRefs } from 'vue';
import ortuState from 'src/stores/ortu-store.js';
import { m2h, bacaHijri } from 'src/utils/hijri';
import { isDate, formatDateFull } from 'src/utils/format-date';
import InputSelectKotaLahir from 'src/components/InputSelectKotaLahir.vue';
import SelectPekerjaan from 'src/components/select-list/SelectPekerjaan.vue';
import SelectPADiniyah from 'src/components/select-list/SelectPADiniyah.vue';
import SelectPAFormal from 'src/components/select-list/SelectPAFormal.vue';

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

onMounted(async () => {});
</script>
