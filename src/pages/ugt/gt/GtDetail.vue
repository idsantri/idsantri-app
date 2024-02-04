<template lang="">
	<div class="row" style="max-width: 1200px">
		<div class="col-12 col-md-6 q-pt-sm">
			<q-card class="q-mx-sm">
				<q-card-section class="bg-green-8 no-padding">
					<q-toolbar class="no-padding no-margin">
						<q-toolbar-title
							class="text-subtitle1 q-ml-sm text-green-11"
						>
							Data GT
						</q-toolbar-title>
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
					<div v-if="loadingGt">
						<q-spinner-cube
							color="green-12"
							size="8em"
							class="flex q-ma-lg q-mx-auto"
						/>
					</div>
					<div v-else>
						<q-markup-table flat class="text-green-10">
							<tbody>
								<tr>
									<td>ID</td>
									<td>{{ gt.id }}</td>
								</tr>
								<tr>
									<td>Tahun Ajaran</td>
									<td>{{ gt.th_ajaran_h }}</td>
								</tr>
								<tr>
									<td>Santri ID</td>
									<td>
										<div class="flex flex-center">
											<div>
												{{ gt.santri_id }}
											</div>

											<q-space />
											<q-btn
												class="bg-green-11"
												icon="info"
												glossy
												round
												dense
												:to="`/santri/${gt.santri_id}`"
											/>
										</div>
									</td>
								</tr>
								<tr>
									<td>Nama</td>
									<td>{{ gt.nama }}</td>
								</tr>
								<tr>
									<td>Data Akhir</td>
									<td>{{ gt.data_akhir }}</td>
								</tr>
								<tr>
									<td>No Telepon</td>
									<td>{{ gt.telepon }}</td>
								</tr>
								<tr>
									<td>Email</td>
									<td>{{ gt.email }}</td>
								</tr>
							</tbody>
						</q-markup-table>
					</div>
				</q-card-section>
				<q-card-actions class="bg-green-7" align="right">
					<q-btn
						label="Print"
						dense
						no-caps
						icon="print"
						color="green-11"
						class="q-px-md text-green-10"
						@click="suratTugas"
					/>
				</q-card-actions>
			</q-card>
		</div>
		<!-- pjgt -->
		<div class="col-12 col-md-6 q-pt-sm">
			<q-card class="q-mx-sm">
				<q-card-section class="bg-green-8 no-padding">
					<q-toolbar class="no-padding no-margin">
						<q-toolbar-title
							class="text-subtitle1 q-ml-sm text-green-11"
						>
							Data PJGT
						</q-toolbar-title>
						<!-- <q-btn
							dense
							class="q-px-md q-mr-sm text-green-10"
							label="Edit"
							no-caps=""
							icon="edit"
							color="green-2"
							@click="crudShow = true"
						/> -->
					</q-toolbar>
				</q-card-section>
				<q-card-section class="q-pa-sm">
					<div v-if="loadingGt">
						<q-spinner-cube
							color="green-12"
							size="8em"
							class="flex q-ma-lg q-mx-auto"
						/>
					</div>
					<div v-else>
						<q-markup-table flat class="text-green-10">
							<tbody>
								<tr>
									<td>PJGT ID</td>
									<td>
										<div class="flex flex-center">
											<div>
												{{ gt.pjgt_id }}
											</div>

											<q-space />
											<q-btn
												class="bg-green-11"
												icon="info"
												glossy
												round
												dense
												:to="`/ugt/pjgt/${gt.pjgt_id}`"
											/>
										</div>
									</td>
								</tr>
								<tr>
									<td>Nama</td>
									<td>{{ gt.pjgt_nama }}</td>
								</tr>
								<tr>
									<td>Alamat</td>
									<td>
										{{ gt.pjgt_alamat }}
									</td>
								</tr>
								<tr>
									<td>Wilayah</td>
									<td>{{ gt.pjgt_wilayah }}</td>
								</tr>
								<tr>
									<td>Lembaga</td>
									<td>{{ gt.pjgt_lembaga }}</td>
								</tr>
								<tr>
									<td>Administrasi</td>
									<td>
										Rp{{
											digitSeparator(
												gt.administrasi_nominal || 0
											)
										}}
										({{ gt.administrasi_count || 0 }}x)
									</td>
								</tr>
							</tbody>
						</q-markup-table>
					</div>
				</q-card-section>
			</q-card>
		</div>
	</div>
	<q-dialog persistent="" v-model="crudShow">
		<gt-crud
			:is-new="false"
			:data="gt"
			@success-submit="loadGt()"
			@success-delete="$router.go(-1)"
		/>
	</q-dialog>
	<!-- <pre>{{ gt }}</pre> -->
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { digitSeparator } from 'src/utils/format-number';
import { onMounted, ref, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import GtCrud from 'src/pages/ugt/gt/GtCrud.vue';
import apiDownload from 'src/api/api-download';
import loadingStore from 'src/stores/loading-store';

const { loadingMain } = toRefs(loadingStore());

const route = useRoute();
const id = route.params.id;
const loadingGt = ref(false);
const gt = ref({});
const crudShow = ref(false);

async function loadGt() {
	const data = await apiGet({
		endPoint: `ugt/gt/${id}`,
		loading: loadingGt,
	});
	gt.value = data.gt;
}

onMounted(async () => {
	await loadGt();
});

async function suratTugas() {
	// console.log(gt.value.id);
	await apiDownload({
		confirm: false,
		url: `/reports/ugt/surat-tugas/download`,
		fileName: 'surat-tugas-' + gt.value.id,
		params: { id: gt.value.id },
		loading: loadingMain,
	});
}
</script>
<style lang=""></style>
