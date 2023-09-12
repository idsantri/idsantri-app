<template>
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="submit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<div class="text-subtitle1">
					{{ props.title }} &mdash;
					<em>{{ isNew ? 'baru' : 'edit' }}</em>
				</div>
			</q-card-section>
			<q-card-section>
				<q-input
					dense
					outlined
					label="Nama"
					:model-value="
						props.santri?.nama + ' (' + props.santri?.id + ')'
					"
					disable=""
					filled=""
					:hint="props.santri.data_akhir"
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
					option-value="val0"
					option-label="val0"
					@update:model-value="(val) => getVal1(val)"
				/>
				<q-input
					dense
					class="q-mt-sm"
					outlined
					label="Nominal"
					v-model="input.nominal"
				/>
				<q-input
					dense
					class="q-mt-sm"
					outlined
					label="Quantity"
					v-model="input.qty"
					hint="untuk pecahan awali/gunakan titik: .25 atau 0.25, .5 atau 0.5, …"
				/>
				<q-input
					disable=""
					filled=""
					dense
					class="q-mt-sm"
					outlined
					label="Terbayar"
					:model-value="'Rp' + digitSeparator(totalBayar)"
				/>

				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Via"
					emit-value
					map-options
					v-model="input.via"
					:options="lists['metode-pembayaran']"
					:loading="loading['metode-pembayaran']"
				/>
				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Keterangan"
					emit-value
					map-options
					v-model="input.keterangan"
					:options="lists['keterangan-iuran']"
					:loading="loading['keterangan-iuran']"
				/>
				<!-- <pre>{{ lists['iuran'] }}</pre> -->
				<!-- <pre>{{ lists['keterangan-iuran'] }}</pre> -->
				<pre>{{ input }}</pre>
			</q-card-section>
			<q-card-actions class="flex bg-green-6">
				<q-btn
					v-show="!props.isNew"
					label="Hapus"
					class="bg-red text-red-1"
					no-caps=""
					@click="deleteData(input.id)"
				/>
				<q-space />
				<q-btn
					label="Tutup"
					v-close-popup
					class="bg-green-11"
					no-caps=""
					id="btn-close-santri-crud"
				/>
				<q-btn
					type="submit"
					label="Simpan"
					class="bg-green-10 text-green-11"
					no-caps=""
				/>
			</q-card-actions>
		</q-form>
		<!-- <pre>{{ props.santri }}</pre> -->
	</q-card>
</template>
<script setup>
import { fetchListKey, fetchLists } from 'src/api/fetch-list';
import { digitSeparator } from 'src/utils/format-number';
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
	santri: { type: Object, required: true },
	isNew: { type: Boolean, default: true },
	title: { type: String, default: () => 'Input' },
});
const input = ref({});
const lists = ref([]);
const loading = ref([]);
const totalBayar = ref(0);

onMounted(async () => {
	input.value.santri_id = props.santri.id;
	await fetchListKey({
		key: 'iuran',
		loading,
		lists,
		ascending: false,
	});
	await fetchLists({ key: 'keterangan-iuran', loading, lists });
	await fetchLists({ key: 'metode-pembayaran', loading, lists });
	// console.log('l', lists.value['iuran']);
});

const getVal1 = (val) => {
	const selectedOption = lists.value['iuran'].find(
		(item) => item.val0 === val
	);
	if (selectedOption) {
		const val1 = selectedOption.val1;
		input.value.nominal = val1;
		input.value.qty = 1;
	}
};

watch(
	[() => input.value.qty, () => input.value.nominal],
	([newQty, newNominal], [oldQty, oldNominal]) => {
		totalBayar.value = newQty * newNominal;
	}
);
</script>
