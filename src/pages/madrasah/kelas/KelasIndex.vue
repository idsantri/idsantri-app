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
											{{ santri.nama }} ({{ santri.sex }})
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
										$router.push(`/wali/${santri.wali_id}`)
									"
								>
									<q-item-section top avatar>
										<q-avatar> </q-avatar>
									</q-item-section>

									<q-item-section>
										<q-item-label overline class="flex">
											Wali <q-space />
											{{ santri.wali_id }}</q-item-label
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
										$router.push(`/ortu/${santri.ortu_id}`)
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
									name="nilai"
									label="Nilai"
									:to="`/madrasah/kelas/${kelas.id}/nilai`"
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
</template>
<script setup>
import getData from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import SantriKelasCrud from 'src/pages/santri/relations/kelas/SantriKelasCrud.vue';

const keyRoute = ref(0);
const route = useRoute();
const id = route.params.id;
const kelas = ref({});
const kelasObj = ref({});
const santri = ref({});
const spinner = ref(false);
const crudShow = ref(false);
const dataObj = ref({});

function Submitted() {
	crudShow.value = false;
	fetchData();
	keyRoute.value++;
}

function editKelas(id) {
	dataObj.value = kelas.value;
	dataObj.value.santri_id = santri.value.id;
	dataObj.value.nama = santri.value.nama;
	crudShow.value = true;
}

async function fetchData() {
	const data = await getData({
		endPoint: `kelas/${id}`,
		loading: spinner,
	});
	kelas.value = data.kelas;
	santri.value = data.santri;

	kelasObj.value = {
		'Tahun Ajaran':
			kelas.value.th_ajaran_h + ' | ' + kelas.value.th_ajaran_m,
		Tingkat: kelas.value.tingkat,
		Kelas: kelas.value.kelas,
		'No. Absen': kelas.value.no_absen,
		Aktif: kelas.value.aktif ? 'Ya' : 'Tidak',
		Keterangan: kelas.value.keterangan || '-',
	};
}
onMounted(async () => {
	await fetchData();
});
</script>
<style lang=""></style>
