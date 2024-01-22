<template lang="">
	<q-card>
		<q-card-section class="q-px-sm q-py-sm bg-green-11">
			<q-toolbar class="no-padding" style="min-height: 0">
				<q-toolbar-title class="text-subtitle1">
					<div class="text-subtitle2 text-weight-bold">
						Filter Tahun Ajaran
					</div>
				</q-toolbar-title>
				<slot></slot>
			</q-toolbar>
		</q-card-section>
		<q-card-section class="no-padding">
			<div class="row" style="max-width: 1000px; width: 100%">
				<q-select
					class="col-12 col-md-3 q-pa-sm"
					dense
					outlined
					label="Tahun Ajaran"
					v-model="thAjaranH"
					:options="lists['tahun-ajaran']"
					option-value="val0"
					option-label="val0"
					emit-value
					map-options
					behavior="menu"
					:loading="loading['tahun-ajaran']"
				/>
			</div>
		</q-card-section>
	</q-card>
</template>
<script setup>
import { getListsKey } from 'src/api/api-get-lists';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
	startUrl: String,
});
const emit = defineEmits(['dataFilter']);

const route = useRoute();
const router = useRouter();
const params = {
	thAjaranH: route.params.thAjaranH,
};

const thAjaranH = ref(params.thAjaranH);

const loading = ref([]);
const lists = ref([]);

onMounted(async () => {
	await getListsKey({
		key: 'tahun-ajaran',
		loading,
		lists,
		sort: false,
	});
	// console.log(lists.value);
	sendEmit();
});

function sendEmit() {
	const data = {
		display: thAjaranH.value
			? '➡️ Tahun Ajaran: <strong>' + thAjaranH.value + '</strong>'
			: '<div class="text-green-13 text-italic">Tentukan filter!</div>',
	};

	emit('dataFilter', data);
}

watch(thAjaranH, (newValue, oldValue) => {
	if (!newValue) {
		router.push(`${props.startUrl}`);
		return;
	}
	if (newValue != oldValue) {
		router.push(`${props.startUrl}/${newValue}`);
		return;
	}
});
</script>
<style lang=""></style>
