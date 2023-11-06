<template lang="">
	<q-card class="q-ma-sm">
		<q-card-section class="bg-green-8 text-green-11 q-pa-sm">
			<div class="flex items-center">
				<div class="text-subtitle1">Data Murid</div>
				<q-space />
				<q-btn
					no-caps
					size="sm"
					color="green-2"
					class="text-green-10"
					icon="edit"
					label="Edit"
				/>
			</div>
		</q-card-section>
		<q-card-section class="q-pa-sm">
			<div v-if="spinner" class="q-pa-lg">
				<q-spinner-cube
					color="green-12"
					size="8em"
					class="flex q-mx-auto"
				/>
			</div>
			<div v-else>
				<q-card style="max-width: 480px" >
					<q-card-section class="q-pa-sm" >
						<q-toolbar class="bg-green-1">
							<q-toolbar-title>Identitas</q-toolbar-title>
						</q-toolbar>
						<q-list dense>
							<q-item
								clickable
								v-ripple
								@click="$router.push(`/santri/${santri.id}`)"
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
								@click="$router.push(`/wali/${santri.wali_id}`)"
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
										{{ santri.wali_status }})</q-item-label
									>
								</q-item-section>
							</q-item>
							<q-separator inset="item" />
							<q-item
								clickable
								v-ripple
								@click="$router.push(`/ortu/${santri.ortu_id}`)"
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
										>{{ santri.ayah }} | {{ santri.ibu }}
									</q-item-label>
								</q-item-section>
							</q-item>
						</q-list>
					</q-card-section>
					<q-separator/>
						<q-card-section class="q-pa-sm">
							
						<q-toolbar class="bg-green-1">
							<q-toolbar-title>Kelas</q-toolbar-title>
							<q-btn flat round dense icon="edit" />
						</q-toolbar>
						<div>
							<div v-for="(value, key) in kelasObj" :key="key">
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
				<!-- <pre>{{ kelas }}</pre> -->

				<!-- <pre>{{ santri }}</pre> -->
			</div>
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
const spinner = ref(false);
onMounted(async () => {
	const dataKelas = await getData({
		endPoint: `kelas/${id}`,
		spinner,
	});
	kelas.value = dataKelas.kelas;
	santri.value = dataKelas.santri;

	const dataRiwayat = await getData({
		endPoint: `santri/${kelas.value.santri_id}/kelas`,
		spinner,
	});
	riwayatKelas.value = dataRiwayat.kelas;

	kelasObj.value = {
		'Tahun Ajaran':
			kelas.value.th_ajaran_h + ' | ' + kelas.value.th_ajaran_m,
		Tingkat: kelas.value.tingkat,
		Kelas: kelas.value.kelas,
		'No. Absen': kelas.value.no_absen,
		'Aktif': kelas.value.aktif?'Ya':"Tidak",
		Keterangan: kelas.value.keterangan || '-',
	};
});
</script>
<style lang=""></style>
