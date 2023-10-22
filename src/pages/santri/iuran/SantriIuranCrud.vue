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
						props.dataSantri?.nama +
						' (' +
						props.dataSantri?.id +
						')'
					"
					disable=""
					filled=""
					:hint="props.dataSantri.data_akhir"
				/>
				<q-select
					dense
					:hint="
						input.th_ajaran_h?.length == 9
							? lists['tahun-ajaran']?.find(
									(item) => item.val0 === input.th_ajaran_h
							  )?.val1
							: ''
					"
					class="q-mt-sm"
					outlined
					label="Tahun Ajaran"
					v-model="input.th_ajaran_h"
					:options="lists['tahun-ajaran']"
					option-value="val0"
					option-label="val0"
					emit-value
					map-options
					:rules="[(val) => !!val || 'Harus diisi!']"
					error-color="negative"
					:loading="loading['tahun-ajaran']"
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

				<currency-input
					dense
					class="q-mt-sm"
					outlined
					v-model="input.nominal"
					required
					label="Nominal"
				/>
				<q-input
					dense
					class="q-mt-sm"
					outlined
					label="Quantity"
					v-model="input.qty"
					hint="Untuk pecahan: awali/gunakan titik (.25 atau 0.25, .5 atau 0.5, …)"
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
				<!-- <pre>{{ input }}</pre> -->
			</q-card-section>
			<q-card-actions class="flex bg-green-6">
				<q-btn
					v-show="!props.isNew"
					label="Hapus"
					class="bg-red text-red-1"
					no-caps=""
					@click="del(input.id)"
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
import { apiTokened } from 'src/api';
import deleteData from 'src/api/api-delete';
import { fetchListAscKey, fetchListKey, fetchLists } from 'src/api/fetch-list';
import { toArray } from 'src/utils/array-object';
import { rerenderSantriIuran } from 'src/utils/buttons-click';
import { digitSeparator } from 'src/utils/format-number';
import { notifyError, notifySuccess } from 'src/utils/notify';
import { onMounted, ref, watch } from 'vue';
import CurrencyInput from 'src/components/CurrencyInput.vue';

const props = defineProps({
	dataSantri: { type: Object, required: true },
	dataIuran: { type: Object, required: false, default: () => {} },
	isNew: { type: Boolean, default: true },
	title: { type: String, default: () => 'Input' },
});
const input = ref({});
const lists = ref([]);
const loading = ref([]);
const totalBayar = ref(0);

onMounted(async () => {
	input.value.santri_id = props.dataSantri.id;
	if (props.dataIuran) Object.assign(input.value, props.dataIuran);

	await fetchListAscKey({
		key: 'tahun-ajaran',
		loading,
		lists,
		ascending: false,
	});

	await fetchListKey({
		key: 'iuran',
		loading,
		lists,
		ascending: false,
	});
	await fetchLists({ key: 'keterangan-iuran', loading, lists });
	await fetchLists({ key: 'metode-pembayaran', loading, lists });

	// console.log('l', lists.value['iuran']);
	// console.log(input.value);
	// console.log('d', props.dataIuran);
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

const submit = async () => {
	const data = {
		santri_id: input.value.santri_id,
		th_ajaran_h: input.value.th_ajaran_h,
		iuran: input.value.iuran,
		nominal: input.value.nominal,
		qty: input.value.qty,
		via: input.value.via || '',
		keterangan: input.value.keterangan || '',
	};
	// console.log(data);
	try {
		let response = null;
		if (props.isNew) response = await apiTokened.post(`iuran`, data);
		else response = await apiTokened.put(`iuran/${input.value.id}`, data);
		notifySuccess(response.data.message);
		rerenderSantriIuran();
	} catch (error) {
		toArray(error.response.data.message).forEach((message) => {
			notifyError(message);
		});
	}
};

const del = async (id) => {
	// console.log(id);
	// return;
	const result = await deleteData({
		endPoint: `iuran/${id}`,
		rerender: false,
	});
	// console.log(result);
	if (result) rerenderSantriIuran();
};
</script>
