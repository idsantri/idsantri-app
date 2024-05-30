<template lang="">
	<q-page class="q-pa-sm">
		<q-card class="">
			<q-card-section class="bg-green-8 text-green-11 q-pa-sm">
				<div class="flex items-center">
					<div class="text-subtitle1">Data Murid</div>
				</div>
			</q-card-section>
			<q-card-section class="no-padding">
				<div class="row" style="max-width: 1200px">
					<div class="col-12 col-md-6 q-pa-sm">
						<q-card>
							<!-- santri -->
							<q-card-section class="q-pa-sm">
								<q-toolbar class="bg-green-1">
									<q-toolbar-title>Identitas</q-toolbar-title>
									<q-btn
										round
										dense
										flat
										icon="sync"
										@click="fetchData"
									/>
								</q-toolbar>
								<div v-if="spinner" class="q-pa-md">
									<q-spinner-cube
										color="green-12"
										size="8em"
										class="flex q-mx-auto"
									/>
								</div>
								<q-list v-else dense>
									<q-item>
										<q-item-section avatar>
											<q-avatar class="d-flex">
												<img
													:src="
														santri?.image ||
														'/user-default.png'
													"
													:ratio="3 / 4"
												/>
											</q-avatar>
										</q-item-section>

										<q-item-section>
											<q-item-label overline>
												Santri
											</q-item-label>
											<q-item-label>
												{{ santri.nama }} ({{
													santri.sex
												}})
											</q-item-label>
											<q-item-label
												caption
												lines="1"
												class="text-italic"
											>
												{{ santri.data_akhir }}
											</q-item-label>
										</q-item-section>
										<q-item-section avatar>
											<q-btn
												outline
												color="green"
												@click="
													$router.push(
														`/santri/${santri.id}`,
													)
												"
											>
												<small>
													{{ santri.id }}
												</small>
											</q-btn>
										</q-item-section>
									</q-item>
									<q-separator inset="item" />

									<q-item>
										<q-item-section top avatar>
											<q-avatar> </q-avatar>
										</q-item-section>

										<q-item-section>
											<q-item-label overline>
												Wali
											</q-item-label>
											<q-item-label>
												{{ santri.wali_nama }} ({{
													santri.wali_sex
												}}; {{ santri.wali_status }})
											</q-item-label>
										</q-item-section>
										<q-item-section avatar>
											<q-btn
												outline
												color="green"
												@click="
													$router.push(
														`/wali/${santri.wali_id}`,
													)
												"
											>
												<small>
													{{ santri.wali_id }}
												</small>
											</q-btn>
										</q-item-section>
									</q-item>
									<q-separator inset="item" />
									<q-item>
										<q-item-section top avatar>
											<q-avatar> </q-avatar>
										</q-item-section>

										<q-item-section>
											<q-item-label overline>
												Orang Tua
											</q-item-label>
											<q-item-label>
												{{ santri.ayah }} |
												{{ santri.ibu }}
											</q-item-label>
										</q-item-section>
										<q-item-section avatar>
											<q-btn
												outline
												color="green"
												@click="
													$router.push(
														`/ortu/${santri.ortu_id}`,
													)
												"
											>
												<small>
													{{ santri.ortu_id }}
												</small>
											</q-btn>
										</q-item-section>
									</q-item>
								</q-list>
							</q-card-section>
							<q-separator />

							<!-- kelas -->
							<q-card-section class="q-pa-sm">
								<q-toolbar class="bg-green-1">
									<q-toolbar-title>Kelas</q-toolbar-title>
									<q-btn
										flat
										round
										dense
										icon="edit"
										@click="editKelas"
									/>
								</q-toolbar>
								<div v-if="spinner" class="q-pa-md">
									<q-spinner-cube
										color="green-12"
										size="8em"
										class="flex q-mx-auto"
									/>
								</div>

								<div v-else>
									<q-markup-table flat>
										<tbody>
											<tr
												v-for="(
													value, index
												) in kelasObj"
												:key="index"
											>
												<td>
													{{ index }}
												</td>
												<td>
													<span
														v-if="index == 'Aktif'"
													>
														<q-toggle
															v-model="kelasAktif"
															color="green"
															@update:model-value="
																updateAktif
															"
														/>
													</span>
													<span v-else>
														{{ value }}
													</span>
												</td>
											</tr>
										</tbody>
									</q-markup-table>
								</div>
							</q-card-section>
						</q-card>
					</div>

					<!-- router view -->
					<div class="col-12 col-md-6 q-pa-sm" :key="keyRoute">
						<q-card>
							<q-card-section class="q-pa-sm">
								<q-tabs
									no-caps
									outside-arrows
									mobile-arrows
									class="bg-green-7 text-green-11"
								>
									<q-route-tab
										name="riwayat"
										label="Riwayat"
										:to="`/madrasah/kelas/${kelas.id}/riwayat`"
									/>
									<q-route-tab
										name="izin"
										label="Izin"
										:to="`/madrasah/kelas/${kelas.id}/izin`"
									/>
									<q-route-tab
										name="nilai"
										label="Nilai"
										:to="`/madrasah/kelas/${kelas.id}/nilai`"
										disable
									/>
								</q-tabs>
							</q-card-section>
							<q-card-section class="q-pa-sm">
								<router-view />
							</q-card-section>
						</q-card>
					</div>
				</div>
			</q-card-section>
		</q-card>
		<q-dialog v-model="crudShow">
			<santri-kelas-crud
				:data="dataObj"
				:is-new="false"
				title="Input Kelas"
				@success-submit="Submitted"
				@success-delete="$router.go(-1)"
			/>
		</q-dialog>
	</q-page>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import SantriKelasCrud from 'src/pages/santri/relations/kelas/SantriKelasCrud.vue';
import apiUpdate from 'src/api/api-update';

const keyRoute = ref(0);
const route = useRoute();
const id = route.params.id;
const kelas = ref({});
const kelasObj = ref({});
const santri = ref({});
const spinner = ref(false);
const crudShow = ref(false);
const dataObj = ref({});
const kelasAktif = ref(false);

function Submitted() {
	crudShow.value = false;
	fetchData();
	keyRoute.value++;
}

function editKelas() {
	dataObj.value = kelas.value;
	dataObj.value.santri_id = santri.value.id;
	dataObj.value.nama = santri.value.nama;
	crudShow.value = true;
}

async function updateAktif(val) {
	const updated = await apiUpdate({
		endPoint: `kelas/${id}/set-active`,
		data: { aktif: val },
		confirm: false,
	});
	if (!updated) {
		val == true ? (kelasAktif.value = false) : (kelasAktif.value = true);
	}
}

async function fetchData() {
	const data = await apiGet({
		endPoint: `kelas/${id}`,
		loading: spinner,
	});
	kelas.value = data.kelas;
	santri.value = data.santri;
	// console.log(santri.value);
	// console.log(kelas.value);
	kelasAktif.value = kelas.value.aktif ? true : false;

	kelasObj.value = {
		'Tahun Ajaran':
			kelas.value.th_ajaran_h + ' | ' + kelas.value.th_ajaran_m,
		Tingkat: kelas.value.tingkat,
		Kelas: kelas.value.kelas,
		'No. Absen': kelas.value.no_absen,
		Aktif: kelas.value.aktif,
		Keterangan: kelas.value.keterangan || '-',
	};

	const img = await apiGet({
		endPoint: `images/santri/${santri.value.id}`,
	});
	santri.value.image = img.image_url;
}
onMounted(async () => {
	await fetchData();
});
</script>
<style lang=""></style>
