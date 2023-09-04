<template>
	<q-card class="q-ma-sm">
		<q-card-section class="bg-green-8 text-green-11 q-pa-sm">
			<div class="flex items-center">
				<div class="text-subtitle1">Data Wali</div>
				<q-space />
				<q-btn
					label="Cari"
					@click="searchWali = true"
					size="sm"
					color="green-2"
					class="text-green-10 q-mr-sm"
					icon="search"
				/>
				<q-btn
					no-caps
					size="sm"
					color="green-2"
					class="text-green-10"
					icon="edit"
					label="Edit"
					@click="editWali"
				/>
			</div>
		</q-card-section>
		<q-card-section class="no-padding">
			<div class="row" style="max-width: 1024px">
				<div class="col-12 col-md-6 q-pa-sm">
					<card-column
						:data="identity"
						title="Identitas"
						class="q-mb-sm"
					/>
				</div>
				<div class="col-12 col-md-6 q-pa-sm">
					<card-list-santri
						:data="santri"
						title="Data Santri (Anak)"
						class="q-mb-sm"
					/>
				</div>
			</div>
		</q-card-section>
	</q-card>
	<!-- <pre>{{ wali }}</pre> -->
</template>
<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { apiTokened } from 'src/api';
import { formatDateFull } from '../../utils/format-date';
import CardColumn from '../../components/CardColumn.vue';
import CardListSantri from 'src/components/CardListSantri.vue';
import waliStore from 'src/stores/wali-store';
import { formatAlamatLengkap } from 'src/utils/format-text';
import { toArray } from 'src/utils/array-object';
import { notifyError } from 'src/utils/notify';
import dialogStore from 'src/stores/dialog-store';

const wali = reactive({});
const route = useRoute();
const waliId = route.params.id;

const dialog = dialogStore();
const { searchWali, crudWali } = toRefs(dialog);

async function fetchData() {
	try {
		const { data } = await apiTokened.get(`wali/${waliId}`);
		Object.assign(wali, data.wali);
	} catch (error) {
		toArray(error.response.data.message).forEach((message) => {
			notifyError(message);
		});
	}
}

const identity = ref({});
const santri = ref([]);
await fetchData();
// identity
identity.value = {
	ID: wali.id,
	Nama: `${wali.nama.toUpperCase()} (${wali.sex.toUpperCase()})`,
	NIK: wali.nik || '-',
	Alamat: formatAlamatLengkap(
		wali.jl,
		wali.rt,
		wali.rw,
		wali.desa,
		wali.kecamatan,
		wali.kabupaten,
		wali.provinsi,
		wali.kode_pos
	),
	Kelahiran: `${wali.tmp_lahir || '-'}, ${formatDateFull(wali.tgl_lahir)}`,
	Pekerjaan: wali.pekerjaan || '-',
	Kontak: (wali.telepon || '-') + '; ' + (wali.email || '-'),
};

// santri
santri.value = wali.santri;
waliStore().setWali(wali);
onMounted(async () => {});

/**
 * send to modal edit
 */
function editWali() {
	waliStore().setEdit();
	crudWali.value = true;
}
</script>
src/api/api.js
