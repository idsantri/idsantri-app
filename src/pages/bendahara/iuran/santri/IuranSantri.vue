<template lang="">
	<q-card class="q-ma-sm" style="max-width: 600px">
		<q-card-section class="bg-green-8 no-padding">
			<q-toolbar class="no-padding no-margin">
				<q-toolbar-title class="text-subtitle1 q-ml-sm text-green-11">
					Data Iuran Santri
				</q-toolbar-title>
			</q-toolbar>
		</q-card-section>
		<q-card-section class="q-pa-sm">
			<card-head-santri :data="santri" :loading="loading" />
			<q-card bordered flat class="q-mt-sm">
				<q-card-section class="q-pa-sm text-subtitle1 bg-green-11 flex">
					Data Iuran
					<q-space />
					<q-btn
						dense
						class="q-px-md text-green-11"
						label="Tambah"
						no-caps=""
						icon="add"
						color="green-10"
						@click="crudShow = true"
					/>
				</q-card-section>
				<q-card-section class="no-padding">
					<div v-if="loading && !route.params.thAjaranH">
						<q-spinner-cube
							color="green-12"
							size="8em"
							class="flex q-ma-lg q-mx-auto"
						/>
					</div>
					<div v-if="!hasIuran()" class="q-ma-lg">
						<div class="text-body2 text-italic text-center">
							Tidak ada data untuk ditampilkan!
						</div>
						<hr />
						<div class="text-weight-thin text-italic text-center">
							Yang bersangkutan belum pernah melakuan pembayaran.
							<br />
							Silakan klik tombol tambah!
						</div>
					</div>

					<div v-else class="row">
						<div class="col bg-green-1" style="max-width: 90px">
							<q-tabs vertical dense="" align="left" no-caps>
								<div
									v-for="(th, index) in tahunIuran"
									:key="index"
								>
									<q-route-tab
										:name="th"
										:label="th"
										:to="`/bendahara/iuran/santri/${route.params.id}/${th}`"
									/>
								</div>
							</q-tabs>
						</div>

						<div class="col">
							<div v-if="!route.params.thAjaranH" class="q-ma-lg">
								<div class="text-italic text-center">
									Klik angka tahun disamping, atau tambahkan
									data!
								</div>
							</div>
							<div v-else :key="keyIuran">
								<iuran-santri-by-th />
							</div>
						</div>
					</div>
				</q-card-section>
			</q-card>
		</q-card-section>
	</q-card>
	<q-dialog v-model="crudShow">
		<iuran-santri-crud
			:is-new="true"
			title="Input Iuran"
			:dataSantri="santri"
			:dataIuran="dataIuran"
			@success-submit="keyIuran++"
			@success-delete="null"
		/>
	</q-dialog>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import CardHeadSantri from 'src/components/CardHeadSantri.vue';
import IuranSantriByTh from 'src/pages/bendahara/iuran/santri/IuranSantriByTh.vue';
import IuranSantriCrud from 'src/pages/bendahara/iuran/santri/IuranSantriCrud.vue';
const santri = ref({});
const iuran = ref([]);
const loading = ref(false);
const route = useRoute();
const tahunIuran = ref([]);
const crudShow = ref(false);
const dataIuran = ref({ th_ajaran_h: route.params.thAjaranH || '' });
const keyIuran = ref(0);
async function loadData() {
	const data = await apiGet({
		endPoint: `iuran/santri/${route.params.id}`,
		loading,
	});
	santri.value = data.santri;
	santri.value.santri_id = data.santri.id;
	iuran.value = data.iuran;
	tahunIuran.value = iuran.value.map((v) => v.th_ajaran_h);
	// console.log(iuran.value[0].th_ajaran_h);
}
onMounted(async () => {
	await loadData();
});

function hasIuran() {
	return iuran.value[0]?.th_ajaran_h ? true : false;
}
</script>
<style lang=""></style>
