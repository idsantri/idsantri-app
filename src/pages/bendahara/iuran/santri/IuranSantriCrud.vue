<template>
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="submit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<toolbar-form @emit-button="null">
					{{ props.title }} &mdash;
					<em>{{ isNew ? 'baru' : 'edit' }}</em>
				</toolbar-form>
			</q-card-section>
			<q-card-section>
				<div v-if="loadingCrud">
					<q-dialog v-model="loadingCrud" persistent="">
						<q-spinner-cube
							color="green-12"
							size="8em"
							class="flex q-ma-lg q-mx-auto"
						/>
					</q-dialog>
				</div>
				<InputSelectSantriId
					:active-only="true"
					@emit-input="(val) => Object.assign(input, val)"
					:data="props.data"
					:disable-select="$props.disableSantriId"
				/>
				<select-tahun-ajaran
					v-model="input.th_ajaran_h"
					class="q-mt-sm"
					:rules="[(val) => !!val || 'Harus diisi!']"
					:hint="hintTahun()"
				/>
				<select-iuran
					v-model="input.iuran"
					class="q-mt-sm"
					@update:model-value="setNominal"
				/>
				<currency-input
					dense
					class="q-mt-sm"
					outlined
					v-model="input.nominal"
					required
					label="Nominal"
					:rules="[(val) => !!val || 'Harus diisi!']"
				/>
				<q-input
					hint="Untuk pecahan: awali/gunakan titik (.25 atau 0.25, .5 atau 0.5, …)"
					dense
					class="q-mt-sm"
					outlined
					v-model="input.qty"
					required
					label="Quantity"
					:rules="[
						(val) => !!val || 'Harus diisi!',
						(val) => !val || !isNaN(val) || 'Hanya angka',
						(val) => val > 0 || 'Harus lebih besar dari 0',
					]"
				/>
				<q-input
					disable=""
					filled=""
					dense
					class="q-mt-sm"
					outlined
					label="Sub Total"
					:model-value="
						'Rp' +
						digitSeparator(
							Number(input.qty) * Number(input.nominal),
						)
					"
				/>
				<select-metode-pembayaran v-model="input.via" class="q-mt-sm" />
				<select-keterangan-iuran
					v-model="input.keterangan"
					class="q-mt-sm"
				/>
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
					id="btn-close"
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
import { onMounted, ref } from 'vue';
import listsStore from 'src/stores/lists-store';
import apiDelete from 'src/api/api-delete';
import apiUpdate from 'src/api/api-update';
import apiPost from 'src/api/api-post';
import { digitSeparator } from 'src/utils/format-number';
import CurrencyInput from 'src/components/CurrencyInput.vue';
import ToolbarForm from 'src/components/ToolbarForm.vue';
import InputSelectSantriId from 'src/components/InputSelectSantriId.vue';
import SelectTahunAjaran from 'src/components/select-list/SelectTahunAjaran.vue';
import SelectIuran from 'src/components/select-list/SelectIuran.vue';
import SelectKeteranganIuran from 'src/components/select-list/SelectKeteranganIuran.vue';
import SelectMetodePembayaran from 'src/components/select-list/SelectMetodePembayaran.vue';

const props = defineProps({
	data: { type: Object, required: false, default: () => {} },
	isNew: { type: Boolean, default: true },
	title: { type: String, default: () => 'Input' },
	disableSantriId: { type: Boolean, default: false },
});

const emit = defineEmits(['successSubmit', 'successDelete']);

const input = ref({ qty: 1 });
const loadingCrud = ref(false);
const tahunAjaran = ref([]);
const iuran = ref([]);

onMounted(async () => {
	Object.assign(input.value, props.data);
	tahunAjaran.value = listsStore().tahunAjaranGet();
	iuran.value = listsStore().iuranGet();
});

const hintTahun = () =>
	input.value.th_ajaran_h?.length == 9
		? tahunAjaran.value?.find((th) => th.val0 === input.value.th_ajaran_h)
				?.val1
		: '';

const setNominal = (val) => {
	const selectedOption = iuran.value.find((item) => item.val0 === val);
	if (selectedOption) {
		input.value.nominal = selectedOption.val1;
	}
};

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
	let response = null;
	if (props.isNew) {
		response = await apiPost({
			endPoint: 'iuran',
			data,
			loading: loadingCrud,
		});
	} else {
		response = await apiUpdate({
			endPoint: `iuran/${input.value.id}`,
			data,
			confirm: true,
			notify: true,
			loading: loadingCrud,
		});
	}
	if (response) {
		document.getElementById('btn-close').click();
		emit('successSubmit', response?.iuran);
	}
};

const del = async (id) => {
	const result = await apiDelete({
		endPoint: `iuran/${id}`,
		loading: loadingCrud,
	});
	if (result) {
		document.getElementById('btn-close').click();
		emit('successDelete');
	}
};
</script>
