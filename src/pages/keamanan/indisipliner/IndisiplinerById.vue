<template lang="">
	<q-page class="">
		<div class="row" style="max-width: 1200px">
			<div class="col-xs-12 col-sm-6">
				<q-card class="q-ma-sm">
					<q-card-section class="bg-green-8 no-padding">
						<q-toolbar class="no-padding no-margin">
							<q-toolbar-title
								class="text-subtitle1 q-ml-sm text-green-11"
							>
								Data Santri Indisipliner
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
						<card-head-santri
							:data="indisipliner"
							:loading="loading"
						/>
						<q-card bordered flat class="q-mt-sm">
							<q-card-section
								class="q-pa-sm text-subtitle1 bg-green-11 flex"
							>
								Data Pelanggaran
								<q-space />
							</q-card-section>
							<q-card-section class="q-pa-sm">
								<div v-if="loading">
									<q-spinner-cube
										color="green-12"
										size="8em"
										class="flex q-ma-lg q-mx-auto"
									/>
								</div>
								<table v-else>
									<tr>
										<td class="text-italic">Kategori:</td>
										<td>
											{{ indisipliner.kategori_text }}
											&mdash;
											<q-rating
												name="kategori"
												:model-value="
													indisipliner.kategori || 0
												"
												max="5"
												color="red"
												icon="thumb_down"
												icon-selected="thumb_down"
												readonly
											/>
										</td>
									</tr>
									<tr>
										<td class="text-italic">Kasus</td>
										<td>
											{{
												formatDateFull(
													indisipliner.tgl_kasus,
												) +
												' | ' +
												m2hBacaHijri(
													indisipliner.tgl_kasus,
												)
											}}
										</td>
									</tr>
									<tr>
										<td class="text-italic">Sidang:</td>
										<td>
											{{
												formatDateFull(
													indisipliner.tgl_sidang,
												) +
												' | ' +
												m2hBacaHijri(
													indisipliner.tgl_sidang,
												)
											}}
										</td>
									</tr>

									<tr>
										<td class="text-italic">Pasal:</td>
										<td>
											{{ indisipliner.pasal }}
										</td>
									</tr>
									<tr>
										<td class="text-italic">Deskripsi:</td>
										<td>
											{{ indisipliner.deskripsi }}
										</td>
									</tr>
									<tr>
										<td class="text-italic">Eksekutor:</td>
										<td>
											{{ indisipliner.eksekutor }}
										</td>
									</tr>
									<tr>
										<td class="text-italic">Saksi:</td>
										<td>
											{{ indisipliner.saksi }}
										</td>
									</tr>
									<tr>
										<td class="text-italic">Takzir:</td>
										<td>
											{{ indisipliner.takzir }}
										</td>
									</tr>
									<tr>
										<td class="text-italic">Keterangan:</td>
										<td>
											{{ indisipliner.keterangan }}
										</td>
									</tr>
								</table>
							</q-card-section>
						</q-card>
					</q-card-section>
				</q-card>
			</div>
			<div class="col-xs-12 col-sm-6">
				<IndisiplinerRiwayat class="q-ma-sm" :santri_id="santri_id" />
			</div>
		</div>

		<q-dialog v-model="crudShow">
			<indisipliner-crud
				:data="indisipliner"
				@success-delete="$router.go(-1)"
				@success-submit="loadData"
			/>
		</q-dialog>
	</q-page>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import apiGet from 'src/api/api-get';
import { formatDateFull } from 'src/utils/format-date';
import { m2hBacaHijri } from 'src/utils/hijri';
import IndisiplinerCrud from 'src/pages/keamanan/indisipliner/IndisiplinerCrud.vue';
import CardHeadSantri from 'src/components/CardHeadSantri.vue';
import IndisiplinerRiwayat from './IndisiplinerRiwayat.vue';

const route = useRoute();
const indisipliner = ref({});
const loading = ref(false);
const crudShow = ref(false);
const santri_id = ref();

async function loadData() {
	santri_id.value = null;

	const data = await apiGet({
		endPoint: `indisipliner/${route.params.id}`,
		loading,
	});
	indisipliner.value = data.indisipliner;

	if (indisipliner.value) {
		santri_id.value = indisipliner.value.santri_id;
		const img = await apiGet({
			endPoint: `images/santri/${indisipliner.value.santri_id}`,
		});
		indisipliner.value.image = img.image_url;
	}
}

onMounted(async () => {
	if (route.params.id) await loadData();
});
</script>
<style scoped>
td {
	vertical-align: top;
}
</style>
