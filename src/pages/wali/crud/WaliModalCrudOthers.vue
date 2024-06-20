<template>
	<div class="text-subtitle2">
		{{ props.title }}
	</div>
	<select-p-a-formal
		v-model="pa_formal_tingkat"
		class="q-mt-sm"
		label="Pendidikan Akhir Formal"
		hint=""
		use-input=""
		new-value-mode="add"
	/>

	<select-p-a-diniyah
		v-model="pa_diniyah_tingkat"
		label="Pendidikan Akhir Diniyah"
		class="q-mt-sm"
		hint=""
		use-input=""
		new-value-mode="add"
	/>
	<select-pekerjaan
		v-model="pekerjaan"
		class="q-mt-sm"
		hint=""
		use-input=""
		new-value-mode="add"
	/>
	<q-input
		dense
		hint="08123456789"
		class="q-mt-sm"
		outlined
		label="Telepon"
		v-model="telepon"
		:rules="[(val) => !val || !isNaN(val) || 'Hanya angka!']"
		error-color="negative"
	/>
	<q-input
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Email"
		v-model="email"
	/>
	<q-input
		dense
		hint="Penghasilan bulanan"
		class="q-mt-sm"
		outlined
		label="Penghasilan"
		v-model="penghasilan"
		:rules="[(val) => !val || !isNaN(val) || 'Hanya angka!']"
		error-color="negative"
	/>
</template>
<script setup>
import { onMounted, toRefs } from 'vue';
import waliState from 'src/stores/wali-store';
import SelectPAFormal from 'src/components/select-list/SelectPAFormal.vue';
import SelectPADiniyah from 'src/components/select-list/SelectPADiniyah.vue';
import SelectPekerjaan from 'src/components/select-list/SelectPekerjaan.vue';

const props = defineProps({
	title: { type: String, default: '' },
});
const { wali } = waliState();
const {
	pa_formal_tingkat,
	pa_diniyah_tingkat,
	pekerjaan,
	telepon,
	email,
	penghasilan,
} = toRefs(wali);

onMounted(async () => {});
</script>
<style></style>
