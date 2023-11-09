<template lang="">
	<q-markup-table>
		<thead>
			<tr>
				<th>No Absen</th>
				<th>ID Santri</th>
				<th>ID Kelas</th>
				<th>Nama</th>
				<th class="bg-grey-1">P1S</th>
				<th class="bg-grey-1">P1I</th>
				<th class="bg-grey-1">P1A</th>
				<th class="bg-grey-1">P1T</th>

				<th class="bg-green-1">P2S</th>
				<th class="bg-green-1">P2I</th>
				<th class="bg-green-1">P2A</th>
				<th class="bg-green-1">P2T</th>

				<th class="bg-grey-1">P3S</th>
				<th class="bg-grey-1">P3I</th>
				<th class="bg-grey-1">P3A</th>
				<th class="bg-grey-1">P3T</th>

				<th class="bg-green-1">P4S</th>
				<th class="bg-green-1">P4I</th>
				<th class="bg-green-1">P4A</th>
				<th class="bg-green-1">P4T</th>

				<th class="bg-grey-1">P5S</th>
				<th class="bg-grey-1">P5I</th>
				<th class="bg-grey-1">P5A</th>
				<th class="bg-grey-1">P5T</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(abs, index) in absensi" :key="index">
				<td>{{ abs.no_absen }}</td>
				<td>{{ abs.santri_id }}</td>
				<td>{{ abs.kelas_id }}</td>
				<td>{{ abs.nama }}</td>

				<!-- pekan 1 -->
				<td class="bg-grey-1">
					<q-input outlined dense v-model="abs.p1s" />
				</td>
				<td class="bg-grey-1">
					<q-input outlined dense v-model="abs.p1i" />
				</td>
				<td class="bg-grey-1">
					<q-input outlined dense v-model="abs.p1a" />
				</td>
				<td class="bg-grey-1">
					<q-input outlined dense v-model="abs.p1t" />
				</td>

				<!-- pekan 2 -->
				<td class="bg-green-1">
					<q-input outlined dense v-model="abs.p2s" />
				</td>
				<td class="bg-green-1">
					<q-input outlined dense v-model="abs.p2i" />
				</td>
				<td class="bg-green-1">
					<q-input outlined dense v-model="abs.p2a" />
				</td>
				<td class="bg-green-1">
					<q-input outlined dense v-model="abs.p2t" />
				</td>

				<!-- pekan 3 -->
				<td class="bg-grey-1">
					<q-input outlined dense v-model="abs.p3s" />
				</td>
				<td class="bg-grey-1">
					<q-input outlined dense v-model="abs.p3i" />
				</td>
				<td class="bg-grey-1">
					<q-input outlined dense v-model="abs.p3a" />
				</td>
				<td class="bg-grey-1">
					<q-input outlined dense v-model="abs.p3t" />
				</td>

				<!-- pekan 4 -->
				<td class="bg-green-1">
					<q-input outlined dense v-model="abs.p4s" />
				</td>
				<td class="bg-green-1">
					<q-input outlined dense v-model="abs.p4i" />
				</td>
				<td class="bg-green-1">
					<q-input outlined dense v-model="abs.p4a" />
				</td>
				<td class="bg-green-1">
					<q-input outlined dense v-model="abs.p4t" />
				</td>

				<!-- pekan 5 -->
				<td class="bg-grey-1">
					<q-input outlined dense v-model="abs.p5s" />
				</td>
				<td class="bg-grey-1">
					<q-input outlined dense v-model="abs.p5i" />
				</td>
				<td class="bg-grey-1">
					<q-input outlined dense v-model="abs.p5a" />
				</td>
				<td class="bg-grey-1">
					<q-input outlined dense v-model="abs.p5t" />
				</td>
			</tr>
		</tbody>
		<button type="submit" @click="submitAbsensi">Kirim</button>
	</q-markup-table>
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
			endPoint: 'absensi-kelas',
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
<style scoped>
td {
	padding: 4px;
}
td input {
	min-width: 150px;
}
</style>
