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
					<select-sifat-izin
						v-model="input.sifat"
						class="q-mt-sm"
						:rules="[(val) => !!val || 'Harus diisi!']"
					/>
					<q-input
						dense
						:hint="
							isDate(input.dari_tgl)
								? formatDateFull(input.dari_tgl)
								: ''
						"
						class="q-mt-sm"
						outlined
						label="Tanggal (M)*"
						v-model="input.dari_tgl"
						type="date"
						:rules="[(val) => !!val || 'Harus diisi!']"
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
					<select-keperluan-izin
						v-model="input.keperluan"
						class="q-mt-sm"
						label="Keperluan *"
						:rules="[(val) => !!val || 'Harus diisi!']"
					/>

					<select-keterangan-izin
						v-model="input.keterangan"
						class="q-mt-sm"
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
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import apiPost from 'src/api/api-post';
import apiUpdate from 'src/api/api-update';
import apiDelete from 'src/api/api-delete';
import { isDate, formatDateFull } from 'src/utils/format-date';
import ToolbarForm from 'src/components/ToolbarForm.vue';
import InputSelectSantriId from 'src/components/InputSelectSantriId.vue';
import SelectSifatIzin from 'src/components/select-list/SelectSifatIzin.vue';
import SelectKeperluanIzin from 'src/components/select-list/SelectKeperluanIzin.vue';
import SelectKeteranganIzin from 'src/components/select-list/SelectKeteranganIzin.vue';

const props = defineProps({
	isNew: Boolean,
	data: Object,
});
const router = useRouter();
const input = ref({ tujuan: 'Sesuai alamat rumah' });
const loadingCrud = ref(false);
async function onSubmit() {
	const data = {
		santri_id: input.value.santri_id,
		sifat: input.value.sifat,
		dari_tgl: input.value.dari_tgl,
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
	Object.assign(input.value, props.data);
});
</script>
<style lang=""></style>
