<template lang="">
	<q-card class="q-ma-sm">
		<q-card-section class="bg-green-8 text-green-11 q-pa-sm">
			<div class="flex items-center">
				<div class="text-subtitle1">Data Murid</div>
			</div>
		</q-card-section>
		<q-card-section class="no-padding">
			<div class="row" style="max-width: 1200px">
				<div class="col-12 col-md-6 q-pa-sm">
					<q-card>
						<div v-if="spinnerKelas" class="q-pa-lg">
							<q-spinner-cube
								color="green-12"
								size="8em"
								class="flex q-mx-auto"
							/>
						</div>
						<div v-else>
							<q-card-section class="q-pa-sm">
								<q-toolbar class="bg-green-1">
									<q-toolbar-title>Identitas</q-toolbar-title>
								</q-toolbar>
								<q-list dense>
									<q-item
										clickable
										v-ripple
										@click="
											$router.push(`/santri/${santri.id}`)
										"
									>
										<q-item-section avatar>
											<q-avatar class="d-flex">
												<img
													src="https://cdn.quasar.dev/img/boy-avatar.png"
												/>
											</q-avatar>
										</q-item-section>

										<q-item-section>
											<q-item-label overline class="flex">
												Santri
												<q-space />
												{{ santri.id }}
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
									</q-item>
									<q-separator inset="item" />

									<q-item
										clickable
										v-ripple
										@click="
											$router.push(
												`/wali/${santri.wali_id}`
											)
										"
									>
										<q-item-section top avatar>
											<q-avatar> </q-avatar>
										</q-item-section>

										<q-item-section>
											<q-item-label overline class="flex">
												Wali <q-space />
												{{
													santri.wali_id
												}}</q-item-label
											>
											<q-item-label
												>{{ santri.wali_nama }} ({{
													santri.wali_sex
												}};
												{{
													santri.wali_status
												}})</q-item-label
											>
										</q-item-section>
									</q-item>
									<q-separator inset="item" />
									<q-item
										clickable
										v-ripple
										@click="
											$router.push(
												`/ortu/${santri.ortu_id}`
											)
										"
									>
										<q-item-section top avatar>
											<q-avatar> </q-avatar>
										</q-item-section>

										<q-item-section>
											<q-item-label overline class="flex">
												Orang Tua
												<q-space />{{ santri.ortu_id }}
											</q-item-label>
											<q-item-label
												>{{ santri.ayah }} |
												{{ santri.ibu }}
											</q-item-label>
										</q-item-section>
									</q-item>
								</q-list>
							</q-card-section>
							<q-separator />
							<q-card-section class="q-pa-sm">
								<q-toolbar class="bg-green-1">
									<q-toolbar-title>Kelas</q-toolbar-title>
									<q-btn flat round dense icon="edit" />
								</q-toolbar>
								<div>
									<div
										v-for="(value, key) in kelasObj"
										:key="key"
									>
										<div class="row q-pa-sm">
											<div class="col-4 text-caption">
												{{ key }}
											</div>
											<div class="col">{{ value }}</div>
										</div>
										<q-separator />
									</div>
								</div>
							</q-card-section>
						</div>
					</q-card>
				</div>
				<div class="col-12 col-md-6 q-pa-sm">
					<q-card>
						<div v-if="spinnerKelas" class="q-pa-lg">
							<q-spinner-cube
								color="green-12"
								size="8em"
								class="flex q-mx-auto"
							/>
						</div>
						<div v-else>
							<q-card-section class="q-pa-sm">
								<q-tabs
									v-model="tab"
									no-caps
									outside-arrows
									mobile-arrows
									class="bg-green-7 text-green-11"
								>
									<q-tab name="riwayat" label="Riwayat" />
									<q-tab name="nilai" label="Nilai" />
								</q-tabs>

								<q-tab-panels v-model="tab" animated>
									<q-tab-panel
										class="q-pa-none q-pt-sm"
										name="riwayat"
									>
										<q-list
											v-for="(
												kelas, index
											) in riwayatKelas"
											:key="index"
										>
											<q-item
												clickable
												v-ripple
												@click="
													$router.push(
														`/madrasah/kelas/${kelas.id}`
													)
												"
											>
												<q-item-section>
													<q-item-label
														overline
														class="flex"
													>
														{{ kelas.th_ajaran_h }}
														|
														{{ kelas.th_ajaran_m }}
														<q-space />
														{{ kelas.id }}
													</q-item-label>
													<q-item-label>
														{{ kelas.kelas }}
														{{ kelas.tingkat }}

														{{
															kelas.no_absen
																? '(' +
																  String(
																		'0' +
																			kelas.no_absen
																  ).slice(-2) +
																  ')'
																: ''
														}}
													</q-item-label>
													<q-item-label
														caption
														class="text-italic"
													>
														{{
															kelas.keterangan
																? kelas.keterangan
																: '-'
														}}
													</q-item-label>
												</q-item-section>
											</q-item>
											<q-separator />
										</q-list>

										<!-- <pre>{{ riwayatKelas }}</pre> -->
									</q-tab-panel>

									<q-tab-panel
										class="q-py-sm q-px-none"
										name="nilai"
									>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Lorem, ipsum dolor sit
										amet consectetur adipisicing elit.
										Distinctio quaerat quo fuga, temporibus
										expedita quas labore molestias
										consectetur possimus praesentium
										suscipit iste ad maxime aliquid
										voluptatibus eveniet facere atque
										fugiat. Deleniti, cupiditate a natus
										reprehenderit asperiores nisi
										necessitatibus repellendus doloribus
										labore ipsum ipsam maiores optio
										veritatis dolorum nam, animi maxime!
										Nihil autem aliquid eligendi?
										Voluptatibus doloribus doloremque
										voluptates ipsum unde.
									</q-tab-panel>
								</q-tab-panels>
							</q-card-section>
						</div>
					</q-card>
				</div>
			</div>

			<!-- <pre>{{ kelas }}</pre> -->

			<!-- <pre>{{ santri }}</pre> -->
		</q-card-section>
	</q-card>

	<!-- <pre>{{ santri }}</pre>
	<pre>{{ kelas }}</pre>
	<pre>{{ riwayatKelas }}</pre> -->
</template>
<script setup>
import getData from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id;
const kelas = ref({});
const kelasObj = ref({});
const santri = ref({});
const riwayatKelas = ref([]);
const spinnerKelas = ref(false);
const spinnerRiwayat = ref(false);
const tab = ref('riwayat');

onMounted(async () => {
	const dataKelas = await getData({
		endPoint: `kelas/${id}`,
		spinner: spinnerKelas,
	});
	kelas.value = dataKelas.kelas;
	santri.value = dataKelas.santri;

	const dataRiwayat = await getData({
		endPoint: `santri/${kelas.value.santri_id}/kelas`,
		spinner: spinnerRiwayat,
	});
	riwayatKelas.value = dataRiwayat.kelas;

	kelasObj.value = {
		'Tahun Ajaran':
			kelas.value.th_ajaran_h + ' | ' + kelas.value.th_ajaran_m,
		Tingkat: kelas.value.tingkat,
		Kelas: kelas.value.kelas,
		'No. Absen': kelas.value.no_absen,
		Aktif: kelas.value.aktif ? 'Ya' : 'Tidak',
		Keterangan: kelas.value.keterangan || '-',
	};
});
</script>
<style lang=""></style>
