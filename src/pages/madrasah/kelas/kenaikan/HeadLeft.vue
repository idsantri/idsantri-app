<template lang="">
	<div>
		<q-select
			v-model="filter.th_ajaran"
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
			v-model="filter.tingkat"
			:options="lists['tingkat']"
			:loading="loadingArray['tingkat']"
			option-value="tingkat_id"
			option-label="tingkat"
			outlined
			dense
			class="q-mt-sm"
			label="Tingkat"
		/>
		<q-select
			v-model="filter.kelas"
			:options="lists['kelas']"
			:loading="loadingArray['kelas']"
			outlined
			dense
			class="q-mt-sm"
			label="Kelas"
		/>
	</div>
</template>
<script setup>
import { getListsCustom } from 'src/api/api-get-lists';
import kenaikanKelasStore from 'src/stores/kenaikan-kelas-store';
import listsMadrasahStore from 'src/stores/lists-madrasah-store';
import { onMounted, ref, toRef, watch } from 'vue';

const lists = ref([]);
const loadingArray = ref([]);
const init = () => {
	return { th_ajaran: null, tingkat: null, kelas: null };
};

const filter = ref(init());

const props = defineProps({
	reload: {
		type: Boolean,
		default: false,
	},
});

const reloadRef = toRef(props, 'reload');

onMounted(async () => {
	await loadTahun();
});

async function loadTahun() {
	const cekData = listsMadrasahStore().getThAjaran;
	if (cekData.length) {
		lists.value['th_ajaran'] = cekData;
	} else {
		const data = await getListsCustom({
			url: 'kelas/lists',
			key: 'th_ajaran',
			loadingArray,
		});
		listsMadrasahStore().setThAjaran(data);
		lists.value['th_ajaran'] = data;
	}
}

async function loadTingkat(th_ajaran_h) {
	const cekData = listsMadrasahStore().getTingkatByTahun(th_ajaran_h);
	if (cekData.length) {
		lists.value['tingkat'] = cekData;
	} else {
		const data = await getListsCustom({
			url: 'kelas/lists',
			params: { th_ajaran_h: th_ajaran_h },
			key: 'tingkat',
			loadingArray,
			sort: 'asc',
		});
		listsMadrasahStore().addTingkatToTahun(data, th_ajaran_h);
		lists.value['tingkat'] = data;
	}
}

async function loadKelas(tingkat_id, th_ajaran_h) {
	const cekData = listsMadrasahStore().getKelasByTingkatAndTahun(
		tingkat_id,
		th_ajaran_h,
	);
	if (cekData.length) {
		lists.value['kelas'] = cekData;
	} else {
		const data = await getListsCustom({
			url: 'kelas/lists',
			params: { th_ajaran_h, tingkat_id },
			key: 'kelas',
			loadingArray,
			sort: 'asc',
		});

		listsMadrasahStore().addKelasToTingkatByTahun(
			data,
			tingkat_id,
			th_ajaran_h,
		);
		lists.value['kelas'] = data;
	}
}

// tahun ajaran
watch(
	() => filter.value.th_ajaran,
	async (newValue) => {
		if (newValue?.th_ajaran_h) {
			filter.value.tingkat = null;
			filter.value.kelas = null;
			await loadTingkat(newValue.th_ajaran_h);
			lists.value['kelas'] = null;
		}
	},
);

// tingkat pendidikan
watch(
	() => filter.value.tingkat,
	async (newValue) => {
		if (newValue?.tingkat_id) {
			filter.value.kelas = null;
			await loadKelas(
				newValue.tingkat_id,
				filter.value.th_ajaran.th_ajaran_h,
			);
		}
	},
);

// reload
watch(reloadRef, async () => {
	lists.value = [];
	filter.value = init();
	listsMadrasahStore().$reset();
	await loadTahun();
});

// add to store
watch(
	filter,
	() => {
		const data = {
			th_ajaran_h: filter.value.th_ajaran?.th_ajaran_h ?? '',
			tingkat_id: filter.value.tingkat?.tingkat_id ?? '',
			kelas: filter.value.kelas ?? '',
		};
		kenaikanKelasStore().addOldDataFilter(data);
		// emit('onSelect', data);
		// console.log(filter.value);
	},
	{ deep: true },
);
</script>
<style lang=""></style>
