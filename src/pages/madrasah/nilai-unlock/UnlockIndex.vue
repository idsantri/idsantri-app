<template lang="">
	<q-page class="q-pa-sm">
		<q-card class="" style="max-width: 600px">
			<q-card-section>
				<div class="text-subtitle1">
					Nilai dan Absensi yang Terkunci
				</div>
				<div class="text-caption text-italic">
					Data ini terbuat secara otomatis ketika Rapor dan/atau
					Ijazah dicetak.
				</div>
				<div class="text-overline">Akses Admin</div>
				<q-btn
					@click="$router.go(-1)"
					outline
					round
					icon="arrow_back"
					class="absolute-top-right q-mt-md q-mr-md"
				/>
			</q-card-section>
			<q-separator />
			<q-card-section>
				<q-table
					:rows="lock"
					:columns="columns"
					row-key="id"
					:rows-per-page-options="[10, 25, 50, 100, 0]"
					flat
					bordered
				>
					<template v-slot:body="props">
						<q-tr :props="props">
							<q-td
								v-for="col in props.cols"
								:key="col.name"
								:props="props"
							>
								<span v-if="col.name == 'id'">
									<q-btn
										icon="delete"
										color="negative"
										dense
										outline
										class="q-px-md"
										@click="onDelete(col.value)"
									/>
								</span>
								<span v-else>
									{{ col.value }}
								</span>
							</q-td>
						</q-tr>
					</template>
				</q-table>
			</q-card-section>
		</q-card>
	</q-page>
</template>
<script setup>
import apiDelete from 'src/api/api-delete';
import apiGet from 'src/api/api-get';
import loadingStore from 'src/stores/loading-store';
import { onMounted, ref, toRefs } from 'vue';

const { loadingMain } = toRefs(loadingStore());
const lock = ref([{}]);

async function getData() {
	const data = await apiGet({
		endPoint: 'nilai-lock',
		loading: loadingMain,
	});
	lock.value = data.nilai_lock;
}

onMounted(async () => {
	await getData();
});

async function onDelete(id) {
	const del = await apiDelete({
		endPoint: `nilai-lock/${id}`,
		loading: loadingMain,
		message:
			'<span style="color: red" >Hapus data ini agar Nilai dan Absensi tidak terkunci!?</span>',
	});
	if (del) {
		await getData();
	}
}

const columns = [
	{
		name: 'th_ajaran_h',
		label: 'Tahun Ajaran',
		align: 'left',
		field: (row) => row.th_ajaran_h,
		sortable: true,
	},
	{
		name: 'tingkat',
		label: 'Tingkat',
		align: 'left',
		field: (row) => row.tingkat,
		sortable: true,
	},
	{
		name: 'kelas',
		label: 'Kelas',
		align: 'left',
		field: (row) => row.kelas,
		sortable: true,
	},
	{
		name: 'ujian_ke',
		label: 'Ujian Ke-?',
		align: 'left',
		field: (row) => row.ujian_ke,
		sortable: false,
	},
	{
		name: 'id',
		label: '❌',
		align: 'center',
		field: (row) => row.id,
		sortable: false,
	},
];
</script>
<style lang=""></style>
