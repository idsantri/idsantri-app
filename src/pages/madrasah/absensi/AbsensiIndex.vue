<template>
	<div class="q-ma-sm">
		<q-card>
			<q-card-section class="bg-green-8 text-green-11 q-px-sm q-py-none">
				<q-toolbar class="no-padding no-margin">
					<q-toolbar-title class="text-subtitle1">
						Absensi: {{ $route.name }}
					</q-toolbar-title>

					<q-btn
						v-if="showButton(`madrasah/absensi/print`)"
						dense
						class="q-px-md q-mr-sm text-green-10"
						label="Cetak"
						no-caps=""
						icon="print"
						@click="$router.push(`/madrasah/absensi/print`)"
						color="green-2"
					/>
					<q-btn-dropdown
						flat
						round
						dense
						dropdown-icon="more_vert"
						class="q-pl-sm"
						color="green-11"
					>
						<q-list>
							<!-- input -->
							<q-item
								v-if="
									showButton(`madrasah/absensi-sekolah/input`)
								"
								clickable
								v-close-popup
								to="/madrasah/absensi-sekolah/input"
							>
								<q-item-section avatar>
									<q-icon color="green" name="edit_square" />
								</q-item-section>
								<q-item-section>Input Sekolah</q-item-section>
							</q-item>
							<q-item
								v-if="
									showButton(
										`madrasah/absensi-musyawarah/input`
									)
								"
								clickable
								v-close-popup
								to="/madrasah/absensi-musyawarah/input"
							>
								<q-item-section avatar>
									<q-icon color="green" name="edit_square" />
								</q-item-section>
								<q-item-section
									>Input Musyawarah</q-item-section
								>
							</q-item>

							<!-- rekap ujian -->
							<q-item
								v-if="
									showButton(
										`madrasah/absensi-sekolah/rekap-ujian`
									)
								"
								clickable
								v-close-popup
								to="/madrasah/absensi-sekolah/rekap-ujian"
							>
								<q-item-section avatar>
									<q-icon color="green" name="summarize" />
								</q-item-section>
								<q-item-section>Rekap Sekolah</q-item-section>
							</q-item>
							<q-item
								v-if="
									showButton(
										`madrasah/absensi-musyawarah/rekap-ujian`
									)
								"
								clickable
								v-close-popup
								to="/madrasah/absensi-musyawarah/rekap-ujian"
							>
								<q-item-section avatar>
									<q-icon color="green" name="summarize" />
								</q-item-section>
								<q-item-section
									>Rekap Musyawarah</q-item-section
								>
							</q-item>

							<!-- nomor absen -->
							<q-item
								v-if="showButton(`madrasah/absensi/penomoran`)"
								clickable
								v-close-popup
								to="/madrasah/absensi/penomoran"
							>
								<q-item-section avatar>
									<q-icon
										color="green"
										name="format_list_numbered"
									/>
								</q-item-section>
								<q-item-section
									>Atur Nomor Absen</q-item-section
								>
							</q-item>

							<!-- setting -->
							<q-item
								v-if="showButton(`madrasah/absensi/setting`)"
								clickable
								v-close-popup
								to="/madrasah/absensi/setting"
							>
								<q-item-section avatar>
									<q-icon color="green" name="settings" />
								</q-item-section>
								<q-item-section
									>Pengaturan Absensi</q-item-section
								>
							</q-item>
						</q-list>
					</q-btn-dropdown>
				</q-toolbar>
			</q-card-section>

			<q-card-section class="q-pa-sm">
				<router-view :key="$route.fullPath" />
			</q-card-section>
		</q-card>
	</div>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
function showButton(param) {
	return route.fullPath.search(param) > 0 ? false : true;
}
</script>

<style lang="scss" scoped></style>
