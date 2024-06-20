<template>
	<div class="text-subtitle2">
		{{ props.title }}
	</div>
	<div class="text-italic">Sebelum masuk ke lembaga ini</div>
	<div class="text-overline q-mt-sm">Formal</div>

	<select-p-a-formal
		v-model="pa_formal_tingkat"
		class="q-mt-sm"
		hint=""
		use-input=""
		new-value-mode="add"
	/>
	<select-kelas
		v-model="pa_formal_kelas"
		class="q-mt-sm"
		hint=""
		use-input=""
		new-value-mode="add"
	/>
	<q-input
		dense
		hint="Nama sekolah dan alamat"
		class="q-mt-sm"
		outlined
		label="Sekolah"
		v-model="pa_formal_alamat"
		autogrow
		clearable
	/>

	<div class="text-overline q-mt-sm">Diniyah</div>
	<select-p-a-diniyah
		v-model="pa_diniyah_tingkat"
		class="q-mt-sm"
		hint=""
		use-input=""
		new-value-mode="add"
	/>

	<select-kelas
		v-model="pa_diniyah_kelas"
		class="q-mt-sm"
		hint=""
		use-input=""
		new-value-mode="add"
	/>

	<q-input
		dense
		hint="Nama sekolah dan alamat"
		class="q-mt-sm"
		outlined
		label="Sekolah"
		v-model="pa_diniyah_alamat"
		clearable
		autogrow
	/>
</template>
<script setup>
import { onMounted, toRefs } from 'vue';
import santriState from 'src/stores/santri-store';
import SelectKelas from 'src/components/select-list/SelectKelas.vue';
import SelectPADiniyah from 'src/components/select-list/SelectPADiniyah.vue';
import SelectPAFormal from 'src/components/select-list/SelectPAFormal.vue';

const props = defineProps({
	title: { type: String, default: '' },
});
const { santri } = santriState();
const {
	pa_formal_tingkat,
	pa_formal_kelas,
	pa_formal_alamat,
	pa_diniyah_tingkat,
	pa_diniyah_kelas,
	pa_diniyah_alamat,
} = toRefs(santri);

onMounted(async () => {});
</script>
<style></style>
