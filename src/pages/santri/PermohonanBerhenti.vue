<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<toolbar-form @emit-button="null">
					Permohonan Berhenti
				</toolbar-form>
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<div v-if="loadingForm">
					<q-dialog v-model="loadingForm" persistent="">
						<q-spinner-cube
							color="green-12"
							size="8em"
							class="flex q-ma-lg q-mx-auto"
						/>
					</q-dialog>
				</div>

				<q-input
					dense
					class=""
					outlined
					label="Santri ID"
					v-model="santri.id"
					filled
					disable
				/>
				<q-input
					dense
					class="q-mt-sm"
					outlined
					label="Nama"
					v-model="santri.nama"
					filled
					disable
				/>
				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Tunggakan*"
					v-model="input.tunggakan"
					:options="['Lunas', 'Belum Lunas']"
					clearable
					use-input
					new-value-mode="add"
					behavior="menu"
				/>
				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Jenis Permohonan*"
					v-model="input.jenis_permohonan"
					:options="['Berhenti', 'Cuti/Istirahat']"
					clearable
					use-input
					new-value-mode="add"
					behavior="menu"
				/>
				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Alasan*"
					emit-value
					map-options
					v-model="input.alasan"
					:options="lists['keterangan-status']"
					:loading="loading['keterangan-status']"
					use-input=""
					new-value-mode="add"
					clearable
					behavior="menu"
				/>

				<q-card class="q-mt-sm" flat bordered>
					<q-card-section class="q-pa-sm">
						<div class="text-subtitle2">
							Identitas Pemohon (Wali)
						</div>
						<q-input
							dense
							class=""
							outlined
							label="Nama*"
							v-model="input.wali_nama"
						/>
						<q-input
							dense
							class="q-mt-sm"
							outlined
							label="Nomor Telepon"
							v-model="input.wali_no_telepon"
						/>
						<q-select
							dense
							class="q-mt-sm"
							outlined
							label="Bukti Diri"
							v-model="input.wali_bukti_diri"
							:options="['KTP', 'SIM']"
							clearable
							use-input
							new-value-mode="add"
							behavior="menu"
						/>
						<q-input
							dense
							class="q-mt-sm"
							outlined
							label="Nomor / ID Bukti Diri"
							v-model="input.wali_bukti_diri_id"
						/>
						<q-select
							dense
							class="q-mt-sm"
							outlined
							label="Status*"
							v-model="input.wali_status"
							:options="['Wali', 'Wakil Wali']"
							clearable
							use-input
							new-value-mode="add"
							behavior="menu"
						/>
						<q-select
							dense
							class="q-mt-sm"
							outlined
							label="Hubungan*"
							emit-value
							map-options
							v-model="input.wali_hubungan"
							:options="lists['hubungan-wali']"
							:loading="loading['hubungan-wali']"
							use-input=""
							new-value-mode="add"
							clearable
							behavior="menu"
						/>
					</q-card-section>
				</q-card>
			</q-card-section>

			<q-card-actions class="flex bg-green-6">
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
					label="Proses"
					class="bg-green-10 text-green-11"
					no-caps=""
				/>
			</q-card-actions>
			<!-- <pre>{{ input }}</pre> -->
		</q-form>
	</q-card>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue';
import ToolbarForm from 'src/components/ToolbarForm.vue';
import santriStore from 'src/stores/santri-store';
import { getLists } from 'src/api/api-get-lists';
import apiDownload from 'src/api/api-download';
import { notifyError } from 'src/utils/notify';

const input = ref({ jenis_permohonan: 'Berhenti', tunggakan: 'Lunas' });
const { santri } = reactive(santriStore());
const lists = ref([]);
const loading = ref([]);
const loadingForm = ref(false);

onMounted(async () => {
	await getLists({
		loading,
		lists,
		sort: true,
		key: 'keterangan-status',
	});
	await getLists({
		loading,
		lists,
		sort: true,
		key: 'hubungan-wali',
	});
});
async function onSubmit() {
	const obj = JSON.parse(JSON.stringify(input.value));
	if (
		!obj.tunggakan ||
		!obj.jenis_permohonan ||
		!obj.alasan ||
		!obj.wali_nama ||
		!obj.wali_status ||
		!obj.wali_hubungan
	) {
		return notifyError('Isian tidak lengkap');
	}
	obj.id = santri.id;
	const download = await apiDownload({
		confirm: false,
		url: `/reports/santri/permohonan-berhenti/download`,
		params: obj,
		fileName: 'permohonan-berhenti-' + obj.id,
		loading: loadingForm,
	});
	if (download) {
		document.getElementById('btn-close').click();
	}
}
</script>
<style lang=""></style>
