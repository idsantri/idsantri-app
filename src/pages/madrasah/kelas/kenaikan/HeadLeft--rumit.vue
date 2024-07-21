<template lang="">
	<div>
		<q-select
			:model-value="filter.th_ajaran_h"
			@update:model-value="(v) => (filter.th_ajaran_h = v.th_ajaran_h)"
			:options="lists['th_ajaran']"
			:loading="loadingArray['th_ajaran']"
			option-value="th_ajaran_h"
			option-label="th_ajaran_h"
			outlined
			dense
			class=""
			label="Tahun Ajaran"
			hide-bottom-space
		/>
		<q-select
			:model-value="filter.tingkat_id"
			@update:model-value="(v) => (filter.tingkat_id = v.tingkat_id)"
			:options="lists['tingkat']"
			option-value="tingkat_id"
			option-label="tingkat"
			outlined
			dense
			class="q-mt-sm"
			label="Tingkat ID"
		/>
		<q-select
			v-model="filter.kelas"
			:options="lists['kelas']"
			outlined
			dense
			class="q-mt-sm"
			label="Kelas"
		/>
	</div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import apiGet from 'src/api/api-get';
import { getListsCustom } from 'src/api/api-get-lists';
import kenaikanKelasStore from 'src/stores/kenaikan-kelas-store';
import listsMadrasahStore from 'src/stores/lists-madrasah-store';
import { onMounted, ref, toRef, watch } from 'vue';

const lists = ref([]);
const loadingArray = ref([]);

const { oldDataFilter: filter } = storeToRefs(kenaikanKelasStore());
const loading = ref(false);

const props = defineProps({
	reload: {
		type: Boolean,
		default: false,
	},
});
const emit = defineEmits(['onLoading']);
const reloadRef = toRef(props, 'reload');

onMounted(async () => {
	await loadTahunAjaran();
});

async function loadTahunAjaran() {
	const cekData = kenaikanKelasStore().getTahunAjaran;
	if (cekData.length) {
		lists.value['th_ajaran'] = cekData;
	} else {
		const data = await getListsCustom({
			url: 'kelas/lists',
			key: 'th_ajaran',
			loadingArray,
		});
		kenaikanKelasStore().postData(data);
		lists.value['th_ajaran'] = data;
	}
}

// tahun ajaran
watch(
	() => filter.value.th_ajaran_h,
	async (newValue) => {
		filter.value.tingkat_id = '';
		filter.value.kelas = '';
		if (newValue) {
			// console.log(newValue);
			await getMuridByThAjaran(newValue);
			const tingkat = kenaikanKelasStore().getTingkatByTahun(newValue);
			// console.log(tingkat);
			lists.value['tingkat'] = tingkat;
		}
	},
);

// tingkat
watch(
	() => filter.value.tingkat_id,
	async (tingkat) => {
		filter.value.kelas = '';
		// console.log('t', tingkat);
		if (tingkat) {
			const kelas = kenaikanKelasStore().getKelasByTahunAndTingkat(
				filter.value.th_ajaran_h,
				tingkat,
			);
			// console.log(kelas);
			lists.value['kelas'] = kelas;
		}
	},
);

async function getMuridByThAjaran(th_ajaran_h) {
	const cekMurid = kenaikanKelasStore().getMuridByTahun(th_ajaran_h);
	// console.log(cekMurid.length);
	// console.log(cekMurid == false);
	if (!cekMurid.length) {
		emit('onLoading', true);
		const data = await apiGet({
			endPoint: 'kelas',
			params: { th_ajaran_h },
			loading,
		});
		kenaikanKelasStore().addMuridToTahun(data.murid, th_ajaran_h);
		emit('onLoading', false);
	}
	// console.log(kenaikanKelasStore().getMuridByTahun(th_ajaran_h));
}

// // tahun ajaran
// // watch(
// // 	() => filter.value.th_ajaran_h,
// // 	async (newValue) => {
// // 		if (newValue) {
// // 			// console.log(newValue);
// // 			filter.value.tingkat_id = '';
// // 			filter.value.kelas = '';
// // 			await loadTingkat(newValue);
// // 			lists.value['kelas'] = null;
// // 		}
// // 	},
// // );

// // tingkat pendidikan
// watch(
// 	() => filter.value.tingkat_id,
// 	async (newValue) => {
// 		if (newValue) {
// 			filter.value.kelas = '';
// 			await loadKelas(newValue, filter.value.th_ajaran_h);
// 		}
// 	},
// );

// reload
watch(reloadRef, async () => {
	lists.value = [];
	kenaikanKelasStore().resetOldFilter();
	listsMadrasahStore().$reset();
	await loadTahun();
});

// add to store
watch(
	filter,
	async (value) => {
		// kenaikanKelasStore().addOldDataFilter(value);
		// kenaikanKelasStore().resetMurid();
		// console.log(value);
		if (value.th_ajaran_h && value.tingkat_id && value.kelas) {
			// console.log('get');
			// value.status = 'Aktif';
			// value.aktif = true;
			// emit('onLoading', true);
			// const data = await apiGet({
			// 	endPoint: 'kelas',
			// 	params: value,
			// 	loading,
			// });
			// kenaikanKelasStore().addMurid(data.murid);
			// emit('onLoading', false);
		}
	},
	{ deep: true },
);
</script>
<style lang=""></style>
src/stores/kenaikan-kelas-store--rumit
