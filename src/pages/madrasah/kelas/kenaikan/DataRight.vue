<template lang="">
	<q-card class="">
		<q-card-section class="q-pa-sm bg-green-7">
			<q-toolbar class="no-padding text-green-11" style="min-height: 0">
				<q-toolbar-title class="text-subtitle1">
					Kelas Baru
				</q-toolbar-title>
				<q-btn
					icon="sync"
					dense
					flat
					class="q-mr-xs"
					@click="resetRight"
				/>
			</q-toolbar>
		</q-card-section>
		<q-card-section class="q-pa-sm">
			<HeadRight />
		</q-card-section>
		<q-separator />
		<q-card-section class="q-pa-sm">
			<q-markup-table flat bordered style="height: 500px">
				<thead>
					<tr>
						<th class="text-left">
							<q-btn
								icon="keyboard_double_arrow_left"
								dense
								color="green-10"
								glossy
								class="text-green-11"
								:disable="!muridTrue.length"
								@click="addAll"
							/>
						</th>
						<th class="text-left">Nama</th>
						<th class="text-left">Domisili</th>
						<th class="text-left">Tingkat</th>
						<th class="text-left">Kelas</th>
						<th class="text-right">
							<q-btn
								icon="edit"
								dense
								flat
								disable
								color="green-10"
							/>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in muridTrue" :key="index">
						<td class="text-left">
							<q-btn
								icon="arrow_left"
								dense
								outline
								color="green-10"
								glossy
								@click="kenaikan.prosesFalse(item.id)"
							/>
						</td>
						<td>{{ item.nama }}</td>
						<td>{{ item.domisili }}</td>
						<td>
							{{ item.newTingkat }}
						</td>
						<td>
							{{ item.newKelas }}
						</td>
						<td class="text-right">
							<q-btn icon="edit" dense flat color="green-10" />
						</td>
					</tr>
				</tbody>
				<q-inner-loading :showing="loading">
					<q-spinner-bars size="4em" color="green" />
				</q-inner-loading>
			</q-markup-table>
		</q-card-section>
		<q-separator />
		<q-card-actions class="bg-green-1">
			<div class="text-caption text-italic">
				Total: {{ muridTrue.length }} murid<br />
				Pastikan data sudah benar-benar valid (kesalahan akan sulit
				diperbaiki).
			</div>
			<q-space />
			<div>
				<q-btn
					label="Simpan"
					no-caps
					icon="save"
					color="green-10"
					class="text-green-11"
					:disable="!muridTrue.length > 0"
				/>
			</div>
		</q-card-actions>
	</q-card>
</template>
<script setup>
import { computed, ref } from 'vue';
import HeadRight from './HeadRight.vue';
import kenaikanKelasStore from 'src/stores/kenaikan-kelas-store';

const kenaikan = kenaikanKelasStore();
const muridTrue = computed(() => kenaikan.getMuridTrue());
const loading = ref(false);

function addAll() {
	loading.value = true;
	const arrLength = muridTrue.value.length;
	let arrCount = 0;

	muridTrue.value.forEach((m) => {
		setTimeout(() => {
			kenaikan.prosesFalse(m.id);
			arrCount++;

			// Cek apakah semua proses sudah selesai
			if (arrCount === arrLength) {
				loading.value = false;
			}
		}, 500);
	});
}

function resetRight() {
	kenaikan.resetNewFilter();
	addAll();
}
</script>
<style lang=""></style>
