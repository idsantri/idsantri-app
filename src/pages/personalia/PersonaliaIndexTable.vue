<template lang="">
	<q-page class="q-pa-sm">
		<q-card class="">
			<q-card-section class="bg-green-8 no-padding">
				<q-toolbar class="no-padding no-margin">
					<q-toolbar-title
						class="text-subtitle1 q-ml-sm text-green-11"
					>
						Data Personalia
					</q-toolbar-title>

					<q-btn
						dense
						class="q-px-md q-mr-sm text-green-10"
						label="Tambah"
						no-caps=""
						icon="add"
						color="green-2"
						@click="crudShow = true"
					/>
				</q-toolbar>
			</q-card-section>
			<q-card-section class="no-padding">
				<q-table
					:rows="personalia"
					:loading="loading"
					:rows-per-page-options="[10, 25, 50, 100, 0]"
					class="dt q-px-sm"
					:columns="columns"
					:filter="filter"
					no-data-label="Tidak ada data untuk ditampilkan!"
					no-results-label="Tidak ditemukan kata kunci yang sesuai dengan pencarian Anda!"
					row-key="name"
					@row-click="
						(evt, row, index) =>
							$router.push(`/personalia/${row.id}`)
					"
				>
					<template v-slot:top-right>
						<q-input
							outlined
							dense
							debounce="300"
							v-model="filter"
							placeholder="Cari"
						>
							<template v-slot:append>
								<q-icon name="search" />
							</template>
						</q-input>
					</template>
				</q-table>
			</q-card-section>
		</q-card>
		<q-dialog persistent="" v-model="crudShow">
			<PersonaliaModal
				:is-new="true"
				:data-personalia="{}"
				@success-submit="handleEmit"
			/>
		</q-dialog>
		<!-- <pre>{{ personalia }}</pre> -->
	</q-page>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import apiGet from 'src/api/api-get';
import PersonaliaModal from 'src/pages/personalia/PersonaliaIdentitasModal.vue';

const loading = ref(false);
const personalia = ref([]);
const filter = ref('');
const crudShow = ref(false);
const router = useRouter();

function handleEmit(val) {
	crudShow.value = false;
	router.push(`/personalia/${val.id}`);
}

onMounted(async () => {
	const data = await apiGet({ endPoint: 'aparatur', loading });
	personalia.value = data.aparatur;
});

const columns = [
	{
		name: 'id',
		label: 'ID',
		align: 'center',
		field: 'id',
		sortable: true,
	},
	{
		name: 'nama',
		label: 'Nama',
		align: 'left',
		field: (row) => `${row.nama} (${row.sex})`,
		sortable: true,
	},
	{
		name: 'alamat',
		label: 'Alamat',
		align: 'left',
		field: 'alamat_pendek',
		sortable: true,
	},
	{
		name: 'kontak',
		label: 'Kontak',
		align: 'left',
		field: (row) => `${row.telepon || '-'}; ${row.email || '-'}`,
		sortable: true,
	},
];
</script>
<style lang=""></style>
