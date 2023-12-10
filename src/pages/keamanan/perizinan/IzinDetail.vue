<template lang="">
	<q-card class="q-ma-sm" style="max-width: 600px">
		<q-card-section class="bg-green-8 no-padding">
			<q-toolbar class="no-padding no-margin">
				<q-toolbar-title class="text-subtitle1 q-ml-sm text-green-11">
					Data Perizinan
				</q-toolbar-title>
				<q-btn
					dense
					class="q-px-md q-mr-sm text-green-10"
					label="Cetak"
					no-caps=""
					icon="print"
					color="green-11"
					disable
				/>
				<q-btn
					dense
					class="q-px-md q-mr-sm text-green-10"
					label="Edit"
					no-caps=""
					icon="edit"
					color="green-2"
					@click="crudShow = true"
				/>
			</q-toolbar>
		</q-card-section>
		<q-card-section class="q-pa-sm">
			<div v-if="loading">
				<q-spinner-cube
					color="green-12"
					size="8em"
					class="flex q-ma-lg q-mx-auto"
				/>
			</div>
			<div v-else class="row">
				<div class="col-4 q-pr-sm">
					<q-img
						:src="izin?.image || '/user-default.png'"
						:ratio="3 / 4"
						alt="santri"
					/>
				</div>
				<div class="col">
					<q-card bordered flat>
						<q-card-section
							class="q-pa-sm text-subtitle1 bg-green-11 flex"
						>
							Data Santri
							<q-space />
							<q-btn
								round
								flat
								dense
								icon="info"
								no-caps
								color="green-12"
								class="q-px-sm bg-green-8"
								@click="
									$router.push(`/santri/${izin.santri_id}`)
								"
							/>
						</q-card-section>

						<q-card-section class="q-pa-sm">
							<div class="">
								<div class="text-overline">
									{{ izin.nama?.toUpperCase() }} ({{
										izin.santri_id
									}})
								</div>
								<div class="text-caption">
									{{ izin.data_akhir }}
								</div>
								<div class="">
									{{ izin.alamat_pendek }}
								</div>
							</div>
						</q-card-section>
					</q-card>
					<q-card bordered flat class="q-mt-sm">
						<q-card-section
							class="q-pa-sm text-subtitle1 bg-green-11 flex"
						>
							Data Izin
							<q-space />
							<q-btn
								dense
								label="Kembali"
								icon="manage_history"
								no-caps
								class="q-px-sm bg-green-10 text-green-12"
								@click="showKembali = true"
							/>
						</q-card-section>
						<q-card-section class="q-pa-sm">
							<table>
								<tr>
									<td class="text-italic">Sifat Izin:</td>
									<td>{{ izin.sifat }}</td>
								</tr>
								<tr>
									<td class="text-italic">Tanggal:</td>
									<td>
										{{
											formatDateFull(izin.tgl_m) +
											' | ' +
											bacaHijri(izin.tgl_h)
										}}
									</td>
								</tr>
								<tr>
									<td class="text-italic">Durasi:</td>
									<td>
										{{ izin.durasi + ' hari' }}
									</td>
								</tr>

								<tr>
									<td class="text-italic">Keperluan:</td>
									<td>
										{{ izin.keperluan }}
										{{
											izin.keterangan
												? ' (' + izin.keterangan + ')'
												: ''
										}}
									</td>
								</tr>
								<tr>
									<td class="text-italic">Tujuan:</td>
									<td>
										{{ izin.tujuan }}
									</td>
								</tr>
								<tr>
									<td class="text-italic">Catatan:</td>
									<td>
										{{ izin.catatan || '-' }}
									</td>
								</tr>
								<tr>
									<td colspan="2">
										<q-separator color="green-8" />
									</td>
								</tr>
								<tr>
									<td class="text-italic">Kembali:</td>
									<td>
										{{
											formatDateFull(izin.kembali_m) +
											' | ' +
											bacaHijri(izin.kembali_h)
										}}
									</td>
								</tr>
								<tr>
									<td class="text-italic">Status:</td>
									<td>
										{{
											izin.status
												? replaceDynamicText(
														izin.status
												  )
												: ''
										}}
									</td>
								</tr>
							</table>
						</q-card-section>
					</q-card>
				</div>
			</div>
		</q-card-section>
	</q-card>
	<q-dialog v-model="crudShow">
		<izin-crud :is-new="false" :data="izin" />
	</q-dialog>
	<q-dialog v-model="showKembali">
		<izin-kembali
			:data="{
				id: izin.id,
				kembali_m: izin.kembali_m,
				kembali_h: izin.kembali_h,
			}"
			@success-submit="submitSetBack"
		/>
	</q-dialog>
	<!-- <pre>{{ izin }}</pre> -->
</template>
<script setup>
import getData from 'src/api/api-get';
import { formatDateFull, isDate } from 'src/utils/format-date';
import { bacaHijri, m2h, m2hBacaHijri } from 'src/utils/hijri';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import IzinCrud from 'src/pages/keamanan/perizinan/IzinCrud.vue';
import IzinKembali from 'src/pages/keamanan/perizinan/IzinKembali.vue';

const route = useRoute();
const izin = ref({});
const loading = ref(false);
const crudShow = ref(false);
const showKembali = ref(false);

async function loadData() {
	const data = await getData({
		endPoint: `izin-pesantren/${route.params.id}`,
		loading,
	});
	izin.value = data.izin_pesantren;
}

async function submitSetBack() {
	showKembali.value = false;
	await loadData();
}

onMounted(async () => {
	if (route.params.id) await loadData();
});

function replaceDynamicText(inputString) {
	// Menggunakan regular expression untuk mencari pola "(+angka)"
	const regex = /\(\+(\d+)\)/g;
	// Menggantikan setiap pola dengan "(terlambat angka hari)"
	const result = inputString.replace(regex, (match, number) => {
		return `(terlambat ${number} hari)`;
	});

	return result;
}
</script>
<style lang=""></style>
