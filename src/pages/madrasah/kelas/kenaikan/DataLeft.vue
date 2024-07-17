<template lang="">
	<q-card class="">
		<q-card-section class="q-pa-sm bg-green-7">
			<q-toolbar class="no-padding text-green-11" style="min-height: 0">
				<q-toolbar-title class="text-subtitle1">
					Kelas Lama
				</q-toolbar-title>
				<q-btn
					icon="sync"
					dense
					flat
					class="q-mr-xs"
					@click="reload = !reload"
				/>
			</q-toolbar>
		</q-card-section>
		<q-card-section class="q-pa-sm">
			<HeadLeft :reload="reload" />
		</q-card-section>
		<q-separator />
		<q-card-section class="q-pa-sm">
			<q-markup-table flat bordered style="height: 500px">
				<thead>
					<tr>
						<th class="text-center">No.</th>
						<th class="text-left">Nama</th>
						<th class="text-left">Domisili</th>
						<th class="text-right">
							<q-btn
								icon="keyboard_double_arrow_right"
								dense
								color="green-10"
								glossy
								class="text-green-11"
								:disable="!muridFalse.length"
								@click="addAll"
							/>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in muridFalse" :key="index">
						<td class="text-center">
							{{
								item.no_absen
									? String(item.no_absen).padStart(2, '0')
									: ''
							}}
						</td>
						<td>
							{{ item.nama }}
						</td>
						<td>{{ item.domisili }}</td>
						<td class="text-right">
							<q-btn
								icon="arrow_right"
								dense
								outline
								color="green-10"
								glossy
								@click="kenaikan.prosesTrue(item.id)"
							/>
						</td>
					</tr>
				</tbody>
				<q-inner-loading :showing="loading">
					<q-spinner-bars size="4em" color="green" />
				</q-inner-loading>
			</q-markup-table>
		</q-card-section>
		<q-separator />
		<q-card-actions class="bg-green-1 text-caption text-italic">
			Total: {{ muridFalse.length }} murid<br />
			Hanya menampilkan murid dengan Kelas = Aktif dan Status = Aktif
		</q-card-actions>
		<!-- <pre>
			{{ muridFalse }}
		</pre
		>
		<pre>
			{{ dataFalse() }}
		</pre
		> -->
	</q-card>
</template>
<script setup>
import { computed, ref, watch } from 'vue';
import HeadLeft from './HeadLeft.vue';
import apiGet from 'src/api/api-get';
import kenaikanKelasStore from 'src/stores/kenaikan-kelas-store';
import { storeToRefs } from 'pinia';

const reload = ref(false);
const loading = ref(false);
const kenaikan = kenaikanKelasStore();
const { oldDataFilter } = storeToRefs(kenaikan);

const muridFalse = computed(() => kenaikan.getMuridFalse());

function addAll() {
	loading.value = true;
	const arrLength = muridFalse.value.length;
	let arrCount = 0;

	muridFalse.value.forEach((m) => {
		setTimeout(() => {
			kenaikan.prosesTrue(m.id);
			arrCount++;

			// Cek apakah semua proses sudah selesai
			if (arrCount === arrLength) {
				loading.value = false;
			}
		}, 500);
	});
}

watch(
	oldDataFilter,
	async (v) => {
		// console.log(val);
		kenaikan.resetMurid();
		if (v.th_ajaran_h && v.tingkat_id && v.kelas) {
			v.status = 'Aktif';
			v.aktif = true;
			const data = await apiGet({
				endPoint: 'kelas',
				params: v,
				loading,
			});
			kenaikan.addMurid(data.murid);
		}
	},
	{ deep: true },
);
</script>
<style lang=""></style>
