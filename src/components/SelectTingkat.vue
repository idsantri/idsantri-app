<template lang="">
	<q-select
		dense
		outlined
		label="Tingkat"
		v-model="tingkat_id"
		:options="lists['tingkat']"
		option-value="tingkat_id"
		option-label="tingkat"
		emit-value
		map-options
		:loading="loading['tingkat']"
		behavior="menu"
		clearable
	/>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getListsCustom } from 'src/api/api-get-lists';
import listsStore from 'stores/lists-madrasah-store';

const props = defineProps({
	startUrl: {
		type: String,
		required: true,
	},
	routerPush: {
		type: Boolean,
		default: true,
	},
});

const lists = ref([]);
const loading = ref([]);
const router = useRouter();
const { params } = useRoute();
const tingkat_id = ref(params.tingkat_id);
const url = `${props.startUrl}/${params.th_ajaran_h}`;

onMounted(async () => {
	if (params.th_ajaran_h) {
		const cekData = listsStore().getTingkatByTahun(params.th_ajaran_h);
		if (cekData.length) {
			lists.value['tingkat'] = cekData;
		} else {
			const data = await getListsCustom({
				url: 'kelas/lists',
				params: { th_ajaran_h: params.th_ajaran_h },
				key: 'tingkat',
				loading,
				sort: 'asc',
			});
			listsStore().addTingkatToTahun(data, params.th_ajaran_h);
			lists.value['tingkat'] = data;
		}
	}
});

watch(tingkat_id, (newValue, oldValue) => {
	if (!props.routerPush) {
		return;
	} else {
		if (!newValue) {
			router.push(url);
			return;
		}
		if (newValue != oldValue) {
			router.push(`${url}/${newValue}`);
			return;
		}
	}
});
</script>
<style lang=""></style>
