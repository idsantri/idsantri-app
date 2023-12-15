<template>
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
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
				<q-input
					dense
					outlined
					label="Nama"
					:model-value="input?.nama + ' (' + input?.santri_id + ')'"
					disable=""
					filled=""
				/>
				<q-input
					dense
					class="q-mt-sm"
					outlined
					label="Data Kelas"
					:model-value="
						input?.th_ajaran_h +
						' | ' +
						input?.tingkat_id +
						' | ' +
						input?.kelas
					"
					disable=""
					filled=""
				/>
				<q-input
					dense
					:hint="
						isDate(input.tgl_m) ? formatDateFull(input.tgl_m) : ''
					"
					class="q-mt-sm"
					outlined
					label="Tanggal (M)*"
					v-model="input.tgl_m"
					type="date"
					@change="
						isDate(input.tgl_m)
							? (input.tgl_h = m2h(input.tgl_m))
							: ''
					"
					:rules="[(val) => !!val || 'Harus diisi!']"
					error-color="negative"
				/>
				<q-input
					dense
					:hint="input.tgl_h?.length ? bacaHijri(input.tgl_h) : ''"
					class="q-mt-sm"
					outlined
					label="Tanggal (H)*"
					v-model="input.tgl_h"
					mask="####-##-##"
					:rules="[
						(val) => !!val || 'Harus diisi!',
						(val) => val?.length == 8 || '8 digit angka!',
					]"
					error-color="negative"
				/>
				<q-input
					dense
					hint=""
					class="q-mt-sm"
					outlined
					label="Durasi (hari)*"
					v-model="input.durasi"
					:rules="[
						(val) => !!val || 'Harus diisi!',
						(val) => !val || !isNaN(val) || 'Hanya angka',
					]"
					error-color="negative"
				/>
				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Keperluan*"
					emit-value
					map-options
					v-model="input.keperluan"
					:options="lists['keperluan-izin']"
					:loading="loading['keperluan-izin']"
					:rules="[(val) => !!val || 'Harus diisi!']"
				/>
				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Keterangan"
					emit-value
					map-options
					v-model="input.keterangan"
					:options="lists['keterangan-izin']"
					:loading="loading['keterangan-izin']"
					clearable
				/>
				<q-input
					dense
					class="q-mt-sm"
					outlined
					label="Catatan"
					v-model="input.catatan"
					autogrow=""
				/>
			</q-card-section>
			<q-card-actions class="flex bg-green-6">
				<q-btn
					v-show="!props.isNew"
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
		</q-form>
		<!-- <pre>{{ input }}</pre> -->
	</q-card>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';
import ToolbarForm from 'src/components/ToolbarForm.vue';
import { bacaHijri, m2h } from 'src/utils/hijri';
import { formatDateFull, isDate } from 'src/utils/format-date';
import apiUpdate from 'src/api/api-update';
import apiPost from 'src/api/api-post';
import apiDelete from 'src/api/api-delete';
import { getLists } from 'src/api/api-get-lists';

const props = defineProps({
	data: { type: Object, required: true },
	isNew: { type: Boolean, default: true },
	title: { type: String, default: () => 'Input' },
});
const emit = defineEmits(['successSubmit', 'successDelete']);

const input = ref({ keperluan: 'Sakit', durasi: 1 });
const lists = ref([]);
const loading = ref([]);
const loadingCrud = ref(false);

onMounted(async () => {
	Object.assign(input.value, props.data);
	await getLists({ key: 'keperluan-izin', loading, lists, sort: true });
	await getLists({ key: 'keterangan-izin', loading, lists, sort: true });
});

const onSubmit = async () => {
	// console.log(input.value.id);
	// return;
	const data = {
		kelas_id: input.value.kelas_id,
		tgl_m: input.value.tgl_m,
		tgl_h: input.value.tgl_h,
		durasi: input.value.durasi,
		keperluan: input.value.keperluan,
		keterangan: input.value.keterangan,
		catatan: input.value.catatan,
	};
	// console.log(data);
	// return;
	let response = null;
	if (props.isNew) {
		// console.log(data);
		// return;
		response = await apiPost({
			endPoint: 'izin-madrasah',
			data,
			loading: loadingCrud,
		});
	} else {
		response = await apiUpdate({
			endPoint: `izin-madrasah/${input.value.id}`,
			data,
			confirm: true,
			notify: true,
			loading: loadingCrud,
		});
	}
	if (response) {
		document.getElementById('btn-close-crud').click();
		emit('successSubmit');
	}
};

const handleDelete = async () => {
	const result = await apiDelete({
		endPoint: `izin-madrasah/${input.value.id}`,
		loading: loadingCrud,
		rerender: false,
	});
	if (result) {
		document.getElementById('btn-close-crud').click();
		emit('successDelete');
	}
};

watch(
	() => input.value.tgl_h,
	(newValue, oldValue) => {
		if (newValue !== oldValue) {
			input.value.tgl_h = newValue.replace(/-/g, '');
		}
	}
);
</script>
