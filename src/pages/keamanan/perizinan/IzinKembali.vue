<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="setBack">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<div class="text-subtitle1">Tetapkan Tanggal Kembali</div>
			</q-card-section>
			<q-card-section class="q-pa-sm" style="height: 40vh">
				<div v-if="loading">
					<q-dialog v-model="loading" persistent="">
						<q-spinner-cube
							color="green-12"
							size="8em"
							class="flex q-ma-lg q-mx-auto"
						/>
					</q-dialog>
				</div>
				<q-input
					dense
					:hint="
						isDate(input.kembali_m)
							? formatDateFull(input.kembali_m)
							: ''
					"
					class="q-mt-sm"
					outlined
					label="Tanggal (M)*"
					v-model="input.kembali_m"
					type="datetime-local"
					@change="
						isDate(input.kembali_m)
							? (input.kembali_h = m2h(input.kembali_m))
							: ''
					"
					:rules="[(val) => !!val || 'Harus diisi!']"
					error-color="negative"
				/>
				<q-input
					dense
					:hint="
						input.kembali_h?.length
							? bacaHijri(input.kembali_h)
							: ''
					"
					class="q-mt-sm"
					outlined
					label="Tanggal (H)*"
					v-model="input.kembali_h"
					mask="####-##-##"
					:rules="[
						(val) => !!val || 'Harus diisi!',
						(val) => val?.length == 8 || '8 digit angka!',
					]"
					error-color="negative"
				/>
			</q-card-section>
			<q-card-actions class="bg-green-6 text-green-11 q-pa-sm">
				<q-btn
					label="Belum Kembali"
					no-caps
					class="q-px-sm text-red-1"
					color="negative"
					@click="setNotBack"
				/>
				<q-space />
				<q-btn
					label="Tutup"
					no-caps
					class="q-px-sm"
					color="green-4"
					v-close-popup
				/>
				<q-btn
					label="Simpan"
					no-caps
					class="q-px-sm"
					color="green-10"
					type="submit"
				/>
			</q-card-actions>
			<!-- {{ input }} -->
		</q-form>
	</q-card>
</template>
<script setup>
import apiUpdate from 'src/api/api-update';
import {
	formatDateFull,
	isDate,
	formatDateTimeHtmlToSql,
} from 'src/utils/format-date';
import { bacaHijri, m2h } from 'src/utils/hijri';
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
	data: Object,
});
const emit = defineEmits(['successSubmit']);

const input = ref({});
const loading = ref(false);

async function setBack() {
	const updated = await apiUpdate({
		endPoint: `izin-pesantren/${input.value.id}/set-kembali`,
		loading,
		data: {
			kembali_m: input.value.kembali_m,
			kembali_h: input.value.kembali_h,
		},
		message: 'Tetapkan sudah kembali ke pesantren pada tanggal ini?',
	});
	if (updated) emit('successSubmit');
	// console.log('back');
}

async function setNotBack() {
	const updated = await apiUpdate({
		endPoint: `izin-pesantren/${input.value.id}/set-kembali`,
		loading,
		data: {
			kembali_m: null,
			kembali_h: null,
		},
		message: 'Tetapkan belum kembali ke pesantren?',
	});
	if (updated) emit('successSubmit');
	// console.log('not back');
}

onMounted(() => {
	input.value = props.data;
	// console.log(input.value);
});

watch(
	() => input.value.kembali_h,
	(newValue, oldValue) => {
		if (newValue !== oldValue) {
			input.value.kembali_h = newValue?.replace(/-/g, '');
		}
	},
);
watch(
	() => input.value.kembali_m,
	(newValue) => {
		input.value.kembali_m = formatDateTimeHtmlToSql(newValue);
	},
);
</script>
<style lang=""></style>
