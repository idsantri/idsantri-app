<template>
	<div class="text-subtitle2">
		{{ props.title }}
	</div>

	<q-select
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Pendidikan Akhir Formal"
		emit-value
		map-options
		v-model="pa_formal_tingkat"
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
		v-model="pa_diniyah_tingkat"
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
		v-model="pekerjaan"
		:options="lists['pekerjaan']"
		:loading="loading['pekerjaan']"
		use-input=""
		new-value-mode="add"
		clearable
		behavior="menu"
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
import waliState from 'src/stores/wali-store';
import { onMounted, ref, toRefs } from 'vue';
import { getLists } from 'src/api/api-get-lists';

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
<style></style>
