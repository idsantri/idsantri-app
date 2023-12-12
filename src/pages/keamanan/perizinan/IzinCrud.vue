<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<toolbar-form @emit-button="null">
					Input Izin Santri &mdash;
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
					<InputSelectSantriId
						:active-only="true"
						@emit-input="(val) => Object.assign(input, val)"
						:data="props.data"
					/>
					<q-select
						dense
						class="q-mt-sm"
						outlined
						label="Sifat Izin*"
						emit-value
						map-options
						v-model="input.sifat"
						:options="lists['sifat-izin']"
						:loading="loading['sifat-izin']"
						:rules="[(val) => !!val || 'Harus diisi!']"
					/>
					<q-input
						dense
						:hint="
							isDate(input.tgl_m)
								? formatDateFull(input.tgl_m)
								: ''
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
						:hint="
							input.tgl_h?.length ? bacaHijri(input.tgl_h) : ''
						"
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
						label="Tujuan"
						v-model="input.tujuan"
						autogrow=""
					/>
					<q-input
						dense
						class="q-mt-sm"
						outlined
						label="Catatan"
						v-model="input.catatan"
						autogrow=""
					/>
				</div>
			</q-card-section>

			<q-card-actions class="flex bg-green-6">
				<q-btn
					dense
					v-show="!$props.isNew"
					label="Hapus"
					class="bg-red text-red-1"
					no-caps=""
					@click="handleDelete"
				/>
				<q-space />
				<q-btn
					dense
					label="Tutup"
					v-close-popup
					class="bg-green-11"
					no-caps=""
				/>
				<q-btn
					dense
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
import { onMounted, ref, watch } from 'vue';
import ToolbarForm from 'src/components/ToolbarForm.vue';
import InputSelectSantriId from 'src/components/InputSelectSantriId.vue';
import { fetchLists } from 'src/api/fetch-list';
import { m2h, bacaHijri } from 'src/utils/hijri';
import { isDate, formatDateFull } from 'src/utils/format-date';
import apiPost from 'src/api/api-post';
import apiUpdate from 'src/api/api-update';
import apiDelete from 'src/api/api-delete';
import { useRouter } from 'vue-router';

const props = defineProps({
	isNew: Boolean,
	data: Object,
});
const router = useRouter();
const input = ref({ tujuan: 'Sesuai alamat rumah' });
const loadingCrud = ref(false);
const lists = ref([]);
const loading = ref([]);
async function onSubmit() {
	const data = {
		santri_id: input.value.santri_id,
		sifat: input.value.sifat,
		tgl_m: input.value.tgl_m,
		tgl_h: input.value.tgl_h,
		durasi: input.value.durasi,
		keperluan: input.value.keperluan,
		keterangan: input.value.keterangan,
		tujuan: input.value.tujuan,
		catatan: input.value.catatan,
	};
	// console.log(data);
	// return;
	let response = null;
	if (props.isNew) {
		response = await apiPost({
			endPoint: 'izin-pesantren',
			data,
			loading: loadingCrud,
		});
	} else {
		response = await apiUpdate({
			endPoint: `izin-pesantren/${input.value.id}`,
			data,
			confirm: true,
			notify: true,
			loading: loadingCrud,
			rerender: true,
		});
	}
	if (response) {
		router.push(`/keamanan/izin-pesantren/${response.izin_pesantren.id}`);
	}
}

const handleDelete = async () => {
	const result = await apiDelete({
		endPoint: `izin-pesantren/${input.value.id}`,
		loading: loadingCrud,
		rerender: false,
	});
	if (result) {
		// router.push('/keamanan/izin-pesantren');
		router.go(-1);
	}
};

onMounted(async () => {
	// input.value = props.data;
	// console.log(props.data);
	Object.assign(input.value, props.data);
	await fetchLists({ key: 'sifat-izin', loading, lists });
	await fetchLists({ key: 'keperluan-izin', loading, lists });
	await fetchLists({ key: 'keterangan-izin', loading, lists });
});

watch(
	() => input.value.tgl_h,
	(newValue, oldValue) => {
		if (newValue !== oldValue) {
			input.value.tgl_h = newValue.replace(/-/g, '');
		}
	}
);
</script>
<style lang=""></style>
