<template lang="">
	<filter-kelas
		:showBulanUjian="false"
		start-url="/madrasah/absensi/penomoran"
		@dataFilter="dataEmit"
	/>
	<q-card class="q-mt-sm">
		<q-card-section
			class="bg-green-7 text-green-1 text-subtitle1 q-pa-sm flex"
		>
			<span v-html="dataFilter.display || 'Tentukan filter!'"></span>
			<!-- <q-space />
			<q-btn flat="" dense icon="cached" disable /> -->
		</q-card-section>
		<q-card-section class="no-padding">
			<q-table
				:rows="murid"
				:columns="columns"
				:loading="loading"
				:rows-per-page-options="[0]"
				class="dt q-pa-sm"
				no-data-label="Silakan tentukan Tahun ajaran, tingkat pendidikan, dan kelas!"
				row-key="name"
				flat
				hide-pagination
			>
				<template v-slot:top-left>
					<div class="text-h6 text-green-10">Data Murid</div>
				</template>
				<template v-slot:top-right>
					<q-btn
						label="Isi Otomatis"
						dense
						no-caps
						class="q-px-md text-green-10"
						color="green-11"
						icon="auto_fix_high"
						@click="automate"
						:disable="murid.length == 0 ? true : false"
						title="Isi otomatis nomor absen"
					/>
				</template>
				<template v-slot:body="props">
					<q-tr :props="props">
						<q-td key="id" :props="props" class="kelas-id">
							<q-btn
								flat
								dense
								no-caps
								class="text-green-10 bg-green-11 q-px-sm"
								style="min-width: 50px"
								@click="
									$router.push(
										`/madrasah/kelas/${props.row.id}/riwayat`
									)
								"
								><small> {{ props.row.id }}</small></q-btn
							>

							<!-- {{ props.row.id }} -->
						</q-td>
						<q-td key="santri_id" :props="props">
							{{ props.row.santri_id }}
						</q-td>
						<q-td key="no_absen" :props="props">
							<q-input
								outlined
								dense
								v-model="props.row.no_absen"
								input-class="text-center"
								mask="##"
							/>
						</q-td>
						<q-td key="nama" :props="props">
							{{ props.row.nama }} ({{ props.row.sex }})
						</q-td>
						<q-td key="domisili" :props="props">
							{{ props.row.domisili }}
						</q-td>
						<q-td
							key="alamat_pendek"
							:props="props"
							:title="props.row.alamat_pendek"
						>
							{{
								props.row.alamat_pendek.length > 30
									? props.row.alamat_pendek.substr(0, 30) +
									  '&mldr;'
									: props.row.alamat_pendek
							}}
						</q-td>
					</q-tr>
				</template>
			</q-table>
		</q-card-section>
		<q-card-actions
			class="bg-green-6 text-green-11 text-subtitle1 q-pa-sm flex"
			align="right"
		>
			<q-btn
				dense
				label="Kirim"
				no-caps
				color="green-11"
				class="text-green-10 q-px-md"
				@click="updateNoAbsen"
			/>
		</q-card-actions>
	</q-card>
</template>
<script setup>
import getData from 'src/api/api-get';
import updateData from 'src/api/api-update';
import FilterKelas from 'src/pages/madrasah/components/FilterKelas.vue';
import { notifyConfirm, notifyWarning, notifySuccess } from 'src/utils/notify';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const loading = ref(false);
const route = useRoute();
const murid = ref([]);
const dataFilter = ref({});
const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
	kelas: route.params.kelas,
};

function dataEmit(val) {
	dataFilter.value = val;
}

async function automate() {
	const confirm = await notifyConfirm('Isi nomor Absen secara otomatis');
	if (!confirm) return;

	const td = document.getElementsByClassName('kelas-id');
	const tdArray = [...td];

	let no = 1;
	tdArray.forEach((kelasId) => {
		const id = kelasId.innerText;
		const objIndex = murid.value.findIndex((obj) => obj.id == id);
		murid.value[objIndex].no_absen = no;
		no++;
	});

	notifyWarning(
		'Isi otomatis berhasil! <br/>Data belum diupdate sampai Anda menekan tombol kirim!'
	);
}

async function updateNoAbsen() {
	const absen = murid.value.map(({ id, no_absen }) => {
		return {
			id,
			no_absen,
		};
	});

	const updated = await updateData({
		endPoint: 'kelas/no-absen',
		data: absen,
		loading,
		confirm: true,
		// message: 'Update nomor absen?',
	});

	if (updated) murid.value = updated.murid;
}

onMounted(async () => {
	if (params.thAjaranH && params.tingkatId && params.kelas) {
		const data = await getData({
			endPoint: `murid/${params.thAjaranH}/${params.tingkatId}/${params.kelas}`,
			loading,
		});
		murid.value = data.murid;
	} else {
		murid.value = [];
	}
	// console.log(murid.value);
});

const columns = [
	{
		name: 'id',
		label: 'ID Kelas',
		align: 'left',
		field: 'id',
		sortable: true,
	},
	{
		name: 'santri_id',
		label: 'ID Santri',
		align: 'left',
		field: 'santri_id',
		sortable: true,
	},
	{
		name: 'no_absen',
		label: 'No Absen',
		align: 'center',
		field: 'no_absen',
		sortable: true,
		style: 'width:44px',
		classes: 'text-center',
	},
	{
		name: 'nama',
		label: 'Nama',
		align: 'left',
		field: 'nama',
		sortable: true,
	},
	{
		name: 'domisili',
		label: 'Dom.',
		align: 'left',
		field: 'domisili',
		sortable: true,
	},
	{
		name: 'alamat_pendek',
		label: 'Alamat',
		align: 'left',
		field: 'alamat_pendek',
		sortable: true,
		classes: 'alamat',
	},
];
</script>
<style lang="scss" scoped>
.q-table__top {
	padding: 0;
}
</style>
