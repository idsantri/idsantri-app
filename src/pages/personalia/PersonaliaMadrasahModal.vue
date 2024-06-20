<template>
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="submit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<toolbar-form @emit-button="null">
					Jabatan Madrasiyah &mdash;
					<em>{{ isNew ? 'baru' : 'edit' }}</em>
				</toolbar-form>
			</q-card-section>
			<div v-if="loadingCrud">
				<q-spinner-cube
					color="green-12"
					size="8em"
					class="flex q-ma-lg q-mx-auto"
				/>
			</div>

			<q-card-section v-else>
				<q-input
					dense
					outlined
					label="Nama"
					:model-value="input?.nama + ' (' + input?.aparatur_id + ')'"
					disable=""
					filled=""
				/>

				<select-jabatan-madrasah
					v-model="input.jabatan"
					class="q-mt-sm"
					:rules="[(val) => !!val || 'Harus diisi!']"
				/>
				<select-tahun-ajaran
					v-model="input.th_ajaran_h"
					class="q-mt-sm"
					:rules="[(val) => !!val || 'Harus diisi!']"
					:hint="hintTahun()"
				/>

				<select-tingkat-pendidikan
					v-model="input.tingkat_id"
					class="q-mt-sm"
					:rules="[(val) => !!val || 'Harus diisi!']"
					:hint="hintTingkat()"
				/>
				<select-kelas v-model="input.kelas" class="q-mt-sm" />

				<q-input
					dense
					class="q-mt-sm"
					outlined
					label="Ruang"
					v-model="input.ruang"
				/>
				<q-input
					dense
					class="q-mt-sm"
					outlined
					label="Keterangan"
					v-model="input.keterangan"
					autogrow=""
				/>
			</q-card-section>
			<q-card-actions class="flex bg-green-6">
				<q-btn
					v-show="!props.isNew"
					label="Hapus"
					class="bg-red text-red-1"
					no-caps=""
					@click="deleteData(input.id)"
				/>
				<q-space />
				<q-btn
					label="Tutup"
					v-close-popup
					class="bg-green-11"
					no-caps=""
					id="btn-close-santri-crud"
				/>
				<q-btn
					type="submit"
					label="Simpan"
					class="bg-green-10 text-green-11"
					no-caps=""
				/>
			</q-card-actions>
		</q-form>
		<!-- <pre>{{ input }}</pre> -->
	</q-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import listsStore from 'src/stores/lists-store';
import apiDelete from 'src/api/api-delete';
import apiPost from 'src/api/api-post';
import apiUpdate from 'src/api/api-update';
import ToolbarForm from 'src/components/ToolbarForm.vue';
import SelectJabatanMadrasah from 'src/components/select-list/SelectJabatanMadrasah.vue';
import SelectTahunAjaran from 'src/components/select-list/SelectTahunAjaran.vue';
import SelectTingkatPendidikan from 'src/components/select-list/SelectTingkatPendidikan.vue';
import SelectKelas from 'src/components/select-list/SelectKelas.vue';

const props = defineProps({
	data: { type: Object, required: true },
	isNew: { type: Boolean, default: true },
});

const emit = defineEmits(['successSubmit', 'successDelete']);

const input = ref({});
const loadingCrud = ref(false);
const tingkat = ref([]);
const tahunAjaran = ref([]);

onMounted(async () => {
	// input.value = props.data;  // menjadi reactive
	Object.assign(input.value, props.data);
	tahunAjaran.value = listsStore().tahunAjaranGet();
	tingkat.value = listsStore().tingkatPendidikanGet();
});

const hintTahun = () =>
	input.value.th_ajaran_h?.length == 9
		? tahunAjaran.value?.find((th) => th.val0 === input.value.th_ajaran_h)
				?.val1
		: '';

const hintTingkat = () => {
	if (input.value.tingkat_id) {
		const t = tingkat.value?.find(
			(tk) => tk?.val0 === input.value.tingkat_id,
		);
		return 'Tingkat ID: ' + t.val0 || '';
	} else {
		return 'Tingkat Pendidikan';
	}
};

const submit = async () => {
	const data = {
		id: input.value.id,
		aparatur_id: input.value.aparatur_id,
		jabatan: input.value.jabatan,
		th_ajaran_h: input.value.th_ajaran_h,
		tingkat_id: input.value.tingkat_id,
		kelas: input.value.kelas,
		ruang: input.value.ruang,
		keterangan: input.value.keterangan,
	};

	let response = null;
	if (props.isNew) {
		response = await apiPost({
			endPoint: 'aparatur-madrasah',
			data,
			loading: loadingCrud,
		});
	} else {
		response = await apiUpdate({
			endPoint: `aparatur-madrasah/${data.id}`,
			data,
			confirm: true,
			loading: loadingCrud,
		});
	}
	if (response) emit('successSubmit');
};

const deleteData = async (id) => {
	const deleted = await apiDelete({
		endPoint: `aparatur-madrasah/${id}`,
		loading: loadingCrud,
	});
	if (deleted) emit('successDelete');
};
</script>
