<template lang="">
	<q-form @submit.prevent="onSubmit">
		<q-card class="">
			<q-card-section
				class="q-pa-sm text-subtitle2 text-italic bg-green-11"
			>
				Tentukan iuran yang ingin Anda unduh!
			</q-card-section>

			<q-card-section class="q-pa-sm">
				<q-select
					dense
					class=""
					outlined
					label="Tahun Ajaran*"
					emit-value
					map-options
					v-model="input.th_ajaran_h"
					:options="lists['th_ajaran_h']"
					:loading="loading['th_ajaran_h']"
					clearable=""
					behavior="menu"
					required
					:rules="[(val) => !!val || 'Harus diisi!']"
				/>
				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Iuran"
					emit-value
					map-options
					v-model="input.iuran"
					:options="lists['iuran']"
					:loading="loading['iuran']"
					clearable=""
					behavior="menu"
				/>
				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Kasir"
					emit-value
					map-options
					v-model="input.kasir"
					:options="lists['kasir']"
					:loading="loading['kasir']"
					clearable=""
					behavior="menu"
				/>
				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Via"
					emit-value
					map-options
					v-model="input.via"
					:options="lists['via']"
					:loading="loading['via']"
					clearable=""
					behavior="menu"
				/>
			</q-card-section>
			<q-card-actions class="q-pa-sm bg-green-6" align="right">
				<q-btn
					label="Unduh"
					icon="download"
					no-caps
					class="bg-green-10 text-green-11"
					type="submit"
				/>
			</q-card-actions>
		</q-card>
	</q-form>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { getListsCustom } from 'src/api/api-get-lists';
import loadingStore from 'src/stores/loading-store';
import { onMounted, ref, toRefs, watch } from 'vue';

const { loadingMain } = toRefs(loadingStore());
const input = ref({});
const lists = ref([]);
const loading = ref([]);

onMounted(async () => {
	await getListsCustom({
		loading,
		lists,
		key: 'th_ajaran_h',
		url: 'iuran/real-lists',
		sort: false,
	});
});

async function getList(th_ajaran_h, listKey) {
	await getListsCustom({
		loading,
		lists,
		key: listKey,
		url: 'iuran/real-lists',
		params: { th_ajaran_h, key: listKey },
		sort: true,
	});
}

async function onSubmit() {
	const params = JSON.parse(JSON.stringify(input.value));
	const data = await apiGet({
		endPoint: 'export/iuran',
		loading: loadingMain,
		params,
	});
	// console.log(data.url);
	let link = document.createElement('a');
	link.href = data.url;
	link.click();
	link.remove();
}

watch(
	() => input.value.th_ajaran_h,
	async (newValue, oldValue) => {
		if (newValue && newValue != oldValue) {
			input.value.iuran = '';
			await getList(newValue, 'iuran');

			input.value.kasir = '';
			await getList(newValue, 'kasir');

			input.value.via = '';
			await getList(newValue, 'via');
		}
	},
);
</script>
<style lang=""></style>
