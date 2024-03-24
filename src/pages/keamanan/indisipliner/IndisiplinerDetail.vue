<template lang="">
	<q-page class="q-pa-sm">
		<q-card class="" style="max-width: 600px">
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
				<card-head-santri :data="indisipliner" :loading="loading" />
				<q-card bordered flat class="q-mt-sm">
					<q-card-section
						class="q-pa-sm text-subtitle1 bg-green-11 flex"
					>
						Pelanggaran
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
										formatDateFull(indisipliner.tgl_kasus) +
										' | ' +
										m2hBacaHijri(indisipliner.tgl_kasus)
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
										m2hBacaHijri(indisipliner.tgl_sidang)
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
		<q-dialog v-model="crudShow">
			<indisipliner-crud :is-new="false" :data="indisipliner" />
		</q-dialog>

		<!-- <pre>{{ izin }}</pre> -->
	</q-page>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { formatDateFull } from 'src/utils/format-date';
import { m2hBacaHijri } from 'src/utils/hijri';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import IndisiplinerCrud from 'src/pages/keamanan/indisipliner/IndisiplinerCrud.vue';
import CardHeadSantri from 'src/components/CardHeadSantri.vue';

const route = useRoute();
const indisipliner = ref({});
const loading = ref(false);
const crudShow = ref(false);

async function loadData() {
	const data = await apiGet({
		endPoint: `indisipliner/${route.params.id}`,
		loading,
	});
	indisipliner.value = data.indisipliner;
	// console.log(indisipliner.value);
	const img = await apiGet({
		endPoint: `images/santri/${indisipliner.value.santri_id}`,
	});
	indisipliner.value.image = img.image_url;
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
