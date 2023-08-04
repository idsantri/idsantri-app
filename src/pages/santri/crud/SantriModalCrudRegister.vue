<template>
	<div class="text-subtitle2">
		{{ props.title }}
	</div>
	<q-input
		dense
		hint="Kosongkan jika ingin diisi otomatis!"
		class="q-mt-sm"
		outlined
		label="ID"
		v-model="id"
		:rules="[(val) => !val || !isNaN(val) || 'Hanya angka!']"
		error-color="negative"
	/>

	<q-input
		dense
		:hint="isDate(tgl_daftar_m) ? formatDateFull(tgl_daftar_m) : ''"
		class="q-mt-sm"
		outlined
		label="Tanggal Daftar (M)"
		v-model="tgl_daftar_m"
		type="date"
		@change="isDate(tgl_daftar_m) ? (tgl_daftar_h = m2h(tgl_daftar_m)) : ''"
	/>
	<q-input
		dense
		:hint="tgl_daftar_h?.length ? bacaHijri(tgl_daftar_h) : ''"
		class="q-mt-sm"
		outlined
		label="Tanggal Daftar (H)"
		v-model="tgl_daftar_h"
		mask="####-##-##"
	/>
	<q-select
		dense
		:hint="
			th_ajaran_h?.length == 9
				? lists['tahun-ajaran']?.find(
						(item) => item.val0 === th_ajaran_h
				  )?.val1
				: ''
		"
		class="q-mt-sm"
		outlined
		label="Tahun Ajaran"
		v-model="th_ajaran_h"
		:options="lists['tahun-ajaran']"
		option-value="val0"
		option-label="val0"
		emit-value
		map-options
		:rules="[(val) => !!val || 'Harus diisi!']"
		error-color="negative"
		:loading="loading['tahun-ajaran']"
	/>
</template>
<script setup>
import santriState from 'src/stores/santri-store';
import { m2h, bacaHijri } from 'src/utils/hijri';
import { isDate, formatDateFull } from 'src/utils/format-date';
import { onMounted, ref, toRefs, watch } from 'vue';
import { fetchListKey } from 'src/api/fetch-list';

const props = defineProps({
	title: { type: String, default: '' },
});

const { santri } = santriState();
const { id, tgl_daftar_m, tgl_daftar_h, th_ajaran_h } = toRefs(santri);

const loading = ref([]);
const lists = ref([]);

onMounted(async () => {
	await fetchListKey({
		key: 'tahun-ajaran',
		loading,
		lists,
		ascending: false,
	});
	// console.log(lists.value["tahun-ajaran"]);
});

watch(tgl_daftar_h, (newValue, oldValue) => {
	// Menghapus karakter "-" dari tgl_daftar_h
	if (newValue !== oldValue) {
		tgl_daftar_h.value = newValue.replace(/-/g, '');
	}
});
</script>
src/api/fetch-list
