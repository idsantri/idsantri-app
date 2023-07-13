<template>
	<q-card class="q-ma-sm">
		<q-card-section class="bg-teal-8 text-teal-11 q-pa-sm">
			<div class="text-subtitle1">Data Santri</div>
		</q-card-section>
		<q-card-section class="no-padding">
			<div class="row" style="max-width: 1024px">
				<div class="col-12 col-md-6 q-pa-sm">
					<!-- registrasi -->
					<q-card class="q-mb-sm">
						<q-card-section class="bg-teal-6 text-teal-11 q-pa-sm">
							<div class="flex items-center">
								<div class="text-subtitle2">Registrasi</div>
								<q-space />
								<q-btn
									no-caps
									size="sm"
									color="teal-2"
									class="text-teal-10"
									icon="info"
									disabled
								/>
							</div>
						</q-card-section>
						<q-card-section class="q-pa-sm">
							<div class="row">
								<div class="col-4 text-italic">ID</div>
								<div class="col">
									{{ santri.id }}
								</div>
							</div>
							<div class="row">
								<div class="col-4 text-italic">Tanggal</div>
								<div class="col">
									{{ fullDate(santri.tgl_daftar_m) }}
								</div>
							</div>
						</q-card-section>
					</q-card>

					<!-- identitas -->
					<q-card>
						<q-card-section class="bg-teal-6 text-teal-11 q-pa-sm">
							<div class="flex items-center">
								<div class="text-subtitle2">Identitas</div>
								<q-space />
								<q-btn
									no-caps
									size="sm"
									color="teal-2"
									class="text-teal-10"
									icon="info"
									disabled
								/>
							</div>
						</q-card-section>
						<q-card-section class="q-pa-sm">
							<div class="row">
								<div class="col-4 text-italic">Nama</div>
								<div class="col">
									{{ santri.nama }} ({{ santri.sex }})
								</div>
							</div>
							<div class="row">
								<div class="col-4 text-italic">Kelahiran</div>
								<div class="col">
									{{ santri.tmp_lahir }},
									{{ fullDate(santri.tgl_lahir) }}
								</div>
							</div>
							<div class="row">
								<div class="col-4 text-italic">Alamat</div>
								<div class="col">
									{{ alamatLengkap }}
								</div>
							</div>
						</q-card-section>
					</q-card>
				</div>

				<div class="col-12 col-md-6 q-pa-sm">
					<!-- orang tua -->
					<q-card class="q-mb-sm">
						<q-card-section class="bg-teal-6 text-teal-11 q-pa-sm">
							<div class="flex items-center">
								<div class="text-subtitle2">Orang Tua</div>
								<q-space />
								<q-btn
									no-caps
									size="sm"
									color="teal-2"
									class="text-teal-10"
									icon="info"
								/>
							</div>
						</q-card-section>
						<q-card-section class="q-pa-sm">
							<div class="row">
								<div class="col-4 text-italic">Ayah</div>
								<div class="col">
									<!-- {{ santri.ortu.ayah }} -->
								</div>
							</div>
							<div class="row">
								<div class="col-4 text-italic">Ibu</div>
								<!-- <div class="col">{{ santri.ortu.ibu }}</div> -->
							</div>
						</q-card-section>
					</q-card>

					<!-- wali -->
					<q-card>
						<q-card-section class="bg-teal-6 text-teal-11 q-pa-sm">
							<div class="flex items-center">
								<div class="text-subtitle2">Wali</div>
								<q-space />
								<q-btn
									no-caps
									size="sm"
									color="teal-2"
									class="text-teal-10"
									icon="info"
								/>
							</div>
						</q-card-section>
						<q-card-section class="q-pa-sm">
							<div class="row">
								<div class="col-4 text-italic">Nama</div>
								<div class="col">
									{{ santri.wali.nama }} ({{
										santri.wali.sex
									}})
								</div>
							</div>
							<div class="row">
								<div class="col-4 text-italic">Status</div>
								<div class="col">{{ santri.wali_status }}</div>
							</div>
						</q-card-section>
					</q-card>
				</div>
			</div>
		</q-card-section>
		<q-card-actions class="bg-teal-7">
			<q-btn label="Edit" color="teal-6" />
		</q-card-actions>
	</q-card>
	<pre>{{ santri }}</pre>
</template>
<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { apiTokened } from 'src/config/api.js';
import { fullDate } from '../../utils/format-date';

const santri = reactive({});
const route = useRoute();
const santriId = route.params.id;
let alamatLengkap = '';

const fetchData = async () => {
	try {
		const { data } = await apiTokened.get(`santri/${santriId}`);
		Object.assign(santri, data.santri);
	} catch (error) {
		console.log(error);
	}

	alamatLengkap = `${santri.jl} RT ${String(santri.rt).padStart(
		3,
		0
	)} RW ${String(santri.rw).padStart(3, '0')} ${santri.desa} ${
		santri.kecamatan
	} ${santri.kabupaten} ${santri.provinsi} ${santri.kode_pos}`;
	alamatLengkap.replace(/\s\s+/g, ' ');
	santri.nama = santri.nama.toUpperCase();
};

fetchData();
</script>
