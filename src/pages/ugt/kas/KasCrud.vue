<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<toolbar-form @emit-button="null">
					Input Kas UGT &mdash;
					<em> {{ $props.isNew ? 'baru' : 'edit' }}</em>
				</toolbar-form>
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<div v-if="loadingCrud">
					<q-dialog v-model="loadingCrud" persistent="">
						<q-spinner-cube
							color="green-12"
							size="8em"
							class="flex q-ma-lg q-mx-auto"
						/>
					</q-dialog>
				</div>
				<div>
					<q-input
						dense
						hint="Diisi oleh sistem"
						class=""
						outlined
						label="ID"
						v-model="input.id"
						disable
						filled
					/>
					<q-card class="q-mt-sm" flat bordered>
						<q-card-section class="q-pa-sm">
							<div class="text-caption">
								Jika terkait dengan administrasi GT
							</div>
							<q-input
								dense
								class="q-mt-sm"
								outlined
								label="GT ID"
								v-model="input.gt_id"
							/>
							<q-input
								dense
								class="q-mt-sm"
								outlined
								label="Nama GT"
								v-model="gt.nama"
								disable
								filled
								:loading="loadingGt"
							/>
							<q-input
								dense
								class="q-mt-sm"
								outlined
								label="Nama PJGT"
								v-model="gt.pjgt_nama"
								disable
								filled
								:loading="loadingGt"
							/>
						</q-card-section>
					</q-card>
					<q-input
						dense
						class="q-mt-sm"
						outlined
						label="Keperluan"
						v-model="input.keperluan"
					/>
					<q-select
						dense
						class="q-mt-sm"
						outlined
						label="Kas Masuk/Keluar"
						v-model="input.flag"
						:options="[
							{ value: '+', label: 'Masuk' },
							{ value: '-', label: 'Keluar' },
						]"
						emit-value
						map-options
						error-color="negative"
						behavior="menu"
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
						label="Keterangan"
						v-model="input.keterangan"
						autogrow
					/>
				</div>
			</q-card-section>
			<!-- <pre>{{ input }}</pre> -->
			<q-card-actions class="flex bg-green-6">
				<q-btn
					v-show="!$props.isNew"
					label="Hapus"
					class="bg-red text-red-1"
					no-caps=""
					@click="handleDelete"
				/>
				<q-space />
				<q-btn
					label="Tutup"
					v-close-popup
					class="bg-green-11"
					no-caps=""
					id="btn-close-crud"
				/>
				<q-btn
					type="submit"
					label="Simpan"
					class="bg-green-10 text-green-11"
					no-caps=""
				/>
			</q-card-actions>
			<!-- <pre>{{ input }}</pre> -->
		</q-form>
	</q-card>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref, watch, watchEffect } from 'vue';
import ToolbarForm from 'src/components/ToolbarForm.vue';
import InputSelectSantriId from 'src/components/InputSelectSantriId.vue';
import apiPost from 'src/api/api-post';
import apiUpdate from 'src/api/api-update';
import apiDelete from 'src/api/api-delete';
import { useRouter } from 'vue-router';
import { getListsKey } from 'src/api/api-get-lists';
import CurrencyInput from 'src/components/CurrencyInput.vue';

const props = defineProps({
	data: Object,
	isNew: Boolean,
});
const emit = defineEmits(['successSubmit', 'successDelete']);
const input = ref({
	keperluan: 'Biaya Administrasi GT',
	keterangan: 'Lunas',
	flag: '+',
});
const loadingCrud = ref(false);
const loadingGt = ref(false);
const gt = ref({});

async function loadGt(id) {
	return await apiGet({
		endPoint: `ugt/gt/${id}`,
		loading: loadingGt,
	});
}

onMounted(async () => {
	Object.assign(input.value, props.data);

	if (input.value.gt_id) {
		const response = await loadGt(input.value.gt_id);
		if (response) {
			gt.value = response.gt;
		} else {
			gt.value.nama = 'Data tidak ditemukan';
			gt.value.pjgt_nama = 'Data tidak ditemukan';
		}
	}
});

async function onSubmit() {
	// console.log(input.value);
	const data = JSON.parse(JSON.stringify(input.value));
	delete data.id;

	// console.log(data);
	// return;

	let response = null;
	if (props.isNew) {
		response = await apiPost({
			endPoint: 'ugt/kas',
			data,
			loading: loadingCrud,
		});
	} else {
		response = await apiUpdate({
			endPoint: `ugt/kas/${input.value.id}`,
			data,
			confirm: true,
			notify: true,
			loading: loadingCrud,
		});
	}
	if (response) {
		document.getElementById('btn-close-crud').click();
		emit('successSubmit', response?.gt);
	}
}

const handleDelete = async () => {
	const result = await apiDelete({
		endPoint: `ugt/kas/${input.value.id}`,
		loading: loadingCrud,
		rerender: false,
	});
	if (result) {
		document.getElementById('btn-close-crud').click();
		emit('successDelete');
	}
};

watch(
	() => input.value.gt_id,
	async (newValue, oldValue) => {
		gt.value.nama = '';
		gt.value.pjgt_nama = '';
		if (newValue != oldValue && typeof oldValue != 'undefined') {
			const response = await loadGt(newValue);
			if (response) {
				gt.value = response.gt;
			} else {
				gt.value.nama = 'Data tidak ditemukan';
				gt.value.pjgt_nama = 'Data tidak ditemukan';
			}
		}
	}
);
</script>
<style lang=""></style>
