<template lang="">
	<q-markup-table flat>
		<thead>
			<tr>
				<th rowspan="2" class="text-center">No.</th>
				<th rowspan="2" class="text-center">ID Santri</th>
				<th rowspan="2" class="text-center">ID Kelas</th>
				<th rowspan="2" class="text-left">Nama</th>

				<th colspan="4" class="bg-grey-1">Pekan-1</th>
				<th colspan="4" class="bg-green-1">Pekan-2</th>
				<th colspan="4" class="bg-grey-1">Pekan-3</th>
				<th colspan="4" class="bg-green-1">Pekan-4</th>
				<th colspan="4" class="bg-grey-1">Pekan-5</th>
				<th colspan="4" class="bg-green-2">Sebulan</th>
			</tr>
			<tr>
				<!-- pekan-1 -->
				<th class="bg-grey-1">S</th>
				<th class="bg-grey-1">I</th>
				<th class="bg-grey-1">A</th>
				<th class="bg-grey-1">T</th>

				<!-- pekan-2 -->
				<th class="bg-green-1">S</th>
				<th class="bg-green-1">I</th>
				<th class="bg-green-1">A</th>
				<th class="bg-green-1">T</th>

				<!-- pekan-3 -->
				<th class="bg-grey-1">S</th>
				<th class="bg-grey-1">I</th>
				<th class="bg-grey-1">A</th>
				<th class="bg-grey-1">T</th>

				<!-- pekan-4 -->
				<th class="bg-green-1">S</th>
				<th class="bg-green-1">I</th>
				<th class="bg-green-1">A</th>
				<th class="bg-green-1">T</th>

				<!-- pekan-5 -->
				<th class="bg-grey-1">S</th>
				<th class="bg-grey-1">I</th>
				<th class="bg-grey-1">A</th>
				<th class="bg-grey-1">T</th>

				<!-- sebulan -->
				<th class="bg-green-2">S</th>
				<th class="bg-green-2">I</th>
				<th class="bg-green-2">A</th>
				<th class="bg-green-2">T</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(abs, index) in absensi" :key="index">
				<td class="text-center">
					{{
						abs.no_absen
							? abs.no_absen.toString().padStart(2, 0)
							: ''
					}}
				</td>
				<td class="text-center">{{ abs.santri_id }}</td>
				<td class="text-center">
					<q-btn
						flat
						dense
						no-caps
						class="text-green-10 bg-green-11 q-px-sm"
						@click="
							$router.push(
								`/madrasah/kelas/${abs.kelas_id}/riwayat`
							)
						"
						><small> {{ abs.kelas_id }}</small></q-btn
					>
				</td>
				<td class="text-left">{{ abs.nama }}</td>

				<!-- pekan 1 -->
				<td class="bg-grey-1">
					<q-input
						outlined
						dense
						v-model="abs.p1s"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-grey-1">
					<q-input
						outlined
						dense
						v-model="abs.p1i"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-grey-1">
					<q-input
						outlined
						dense
						v-model="abs.p1a"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-grey-1">
					<q-input
						outlined
						dense
						v-model="abs.p1t"
						input-class="text-center"
						mask="##"
					/>
				</td>

				<!-- pekan 2 -->
				<td class="bg-green-1">
					<q-input
						outlined
						dense
						v-model="abs.p2s"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-green-1">
					<q-input
						outlined
						dense
						v-model="abs.p2i"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-green-1">
					<q-input
						outlined
						dense
						v-model="abs.p2a"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-green-1">
					<q-input
						outlined
						dense
						v-model="abs.p2t"
						input-class="text-center"
						mask="##"
					/>
				</td>

				<!-- pekan 3 -->
				<td class="bg-grey-1">
					<q-input
						outlined
						dense
						v-model="abs.p3s"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-grey-1">
					<q-input
						outlined
						dense
						v-model="abs.p3i"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-grey-1">
					<q-input
						outlined
						dense
						v-model="abs.p3a"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-grey-1">
					<q-input
						outlined
						dense
						v-model="abs.p3t"
						input-class="text-center"
						mask="##"
					/>
				</td>

				<!-- pekan 4 -->
				<td class="bg-green-1">
					<q-input
						outlined
						dense
						v-model="abs.p4s"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-green-1">
					<q-input
						outlined
						dense
						v-model="abs.p4i"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-green-1">
					<q-input
						outlined
						dense
						v-model="abs.p4a"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-green-1">
					<q-input
						outlined
						dense
						v-model="abs.p4t"
						input-class="text-center"
						mask="##"
					/>
				</td>

				<!-- pekan 5 -->
				<td class="bg-grey-1">
					<q-input
						outlined
						dense
						v-model="abs.p5s"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-grey-1">
					<q-input
						outlined
						dense
						v-model="abs.p5i"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-grey-1">
					<q-input
						outlined
						dense
						v-model="abs.p5a"
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-grey-1">
					<q-input
						outlined
						dense
						v-model="abs.p5t"
						input-class="text-center"
						mask="##"
					/>
				</td>

				<!-- sebulan -->
				<td class="bg-green-2">
					<q-input
						outlined
						dense
						:model-value="
							Number(abs.p1s) +
							Number(abs.p2s) +
							Number(abs.p3s) +
							Number(abs.p4s) +
							Number(abs.p5s)
						"
						readonly
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-green-2">
					<q-input
						outlined
						dense
						:model-value="
							Number(abs.p1i) +
							Number(abs.p2i) +
							Number(abs.p3i) +
							Number(abs.p4i) +
							Number(abs.p5i)
						"
						readonly
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-green-2">
					<q-input
						outlined
						dense
						:model-value="
							Number(abs.p1a) +
							Number(abs.p2a) +
							Number(abs.p3a) +
							Number(abs.p4a) +
							Number(abs.p5a)
						"
						readonly
						input-class="text-center"
						mask="##"
					/>
				</td>
				<td class="bg-green-2">
					<q-input
						outlined
						dense
						:model-value="
							Number(abs.p1t) +
							Number(abs.p2t) +
							Number(abs.p3t) +
							Number(abs.p4t) +
							Number(abs.p5t)
						"
						class="text-center"
						readonly
						input-class="text-center"
						mask="##"
					/>
				</td>
			</tr>
		</tbody>
		<tfoot></tfoot>
	</q-markup-table>
	<q-separator />
	<q-separator class="q-mt-xs" />
	<div class="flex q-mt-sm">
		<div class="text-caption text-italic q-pa-sm">
			S=Sakit; I=Izin; A=Alpa; T=Terlambat
		</div>
		<q-space />
		<q-btn no-caps @click="submitAbsensi" label="Kirim" color="green-10" />
	</div>
	<!-- <pre>{{ params }}</pre> -->
	<!-- <pre>{{ spinner }}</pre> -->
	<!-- <pre>{{ absensi }}</pre> -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import postData from 'src/api/api-post.js';
const spinner = ref(false);
const route = useRoute();
const router = useRouter();
const murid = ref([]);
const filter = ref('');
const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
	kelas: route.params.kelas,
	tbu: route.params.tbu,
};

function submitAbsensi() {
	console.log(absensi.value);
}

const absensi = ref([]);
onMounted(async () => {
	if (params.thAjaranH && params.tingkatId && params.kelas && params.tbu) {
		const post = await postData({
			endPoint: 'absensi',
			data: {
				th_ajaran_h: params.thAjaranH,
				tingkat_id: params.tingkatId,
				kelas: params.kelas,
				tbu: params.tbu,
			},
			needNotify: false,
			loading: spinner,
		});
		absensi.value = post.absensi;
	}
});
</script>

<style scoped lang="scss">
td {
	padding: 4px;
	min-width: 44px;
}
th {
	padding: 4px;
	min-width: 44px;
}
// others on app.scss
</style>
