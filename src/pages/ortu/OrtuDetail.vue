<template>
	<q-card class="q-ma-sm">
		<q-card-section class="bg-green-8 text-green-11 q-pa-sm">
			<div class="flex items-center">
				<div class="text-subtitle1">Data Orang Tua</div>
				<q-space />
				<q-btn
					label="Cari"
					@click="searchOrtu = true"
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
					@click="editOrtu"
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
					<card-column
						:data="dataAyah"
						title="Data Ayah"
						class="q-mb-sm"
					/>
					<card-column
						:data="dataIbu"
						title="Data Ibu"
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
	<!-- <pre>{{ ortu }}</pre> -->
</template>
<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { apiTokened } from 'src/api';
import CardColumn from '../../components/CardColumn.vue';
import CardListSantri from 'src/components/CardListSantri.vue';
import ortuStore from 'src/stores/ortu-store.js';
import { toArray } from 'src/utils/array-object';
import { notifyError } from 'src/utils/notify';
import dialogStore from 'src/stores/dialog-store';

const ortu = reactive({});
const route = useRoute();
const ortuId = route.params.id;

const dialog = dialogStore();
const { searchOrtu, crudOrtu } = toRefs(dialog);

async function fetchData() {
	try {
		const { data } = await apiTokened.get(`ortu/${ortuId}`);
		Object.assign(ortu, data.ortu);
	} catch (error) {
		toArray(error.response.data.message).forEach((message) => {
			notifyError(message);
		});
	}
}

const identity = ref({});
const dataAyah = ref({});
const dataIbu = ref({});
const santri = ref({});
await fetchData();
// identity
identity.value = {
	ID: ortu.id,
	'Jumlah Anak': ortu.jumlah_anak,
};
// ayah
dataAyah.value = {
	Ayah: ortu.ayah?.toUpperCase(),
	NIK: ortu.a_nik,
	Hidup: ortu.a_hidup ? 'Ya' : 'Tidak',
};
// ibu
dataIbu.value = {
	Ibu: ortu.ibu?.toUpperCase(),
	NIK: ortu.i_nik,
	Hidup: ortu.i_hidup ? 'Ya' : 'Tidak',
};

// santri
santri.value = ortu.santri;
ortuStore().setOrtu(ortu);
onMounted(async () => {});
/**
 * send to modal edit
 */
function editOrtu() {
	ortuStore().setEdit();
	crudOrtu.value = true;
}
</script>
src/api/api.js
