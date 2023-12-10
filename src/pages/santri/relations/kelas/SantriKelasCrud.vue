<template>
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="submit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<toolbar-form @emit-button="handleEmitToolbar">
					{{ props.title }} &mdash;
					<em>{{ isNew ? 'baru' : 'edit' }}</em>
				</toolbar-form>
			</q-card-section>
			<q-card-section>
				<q-input
					dense
					outlined
					label="Nama"
					:model-value="input?.nama + ' (' + input?.santri_id + ')'"
					disable=""
					filled=""
				/>
				<q-select
					dense
					:hint="
						input.th_ajaran_h?.length == 9
							? lists['tahun-ajaran']?.find(
									(item) => item.val0 === input.th_ajaran_h
							  )?.val1
							: ''
					"
					class="q-mt-sm"
					outlined
					label="Tahun Ajaran"
					v-model="input.th_ajaran_h"
					:options="lists['tahun-ajaran']"
					option-value="val0"
					option-label="val0"
					emit-value
					map-options
					:rules="[(val) => !!val || 'Harus diisi!']"
					error-color="negative"
					:loading="loading['tahun-ajaran']"
				/>
				<q-select
					dense
					:hint="
						!isNaN(input.tingkat_id)
							? lists['tingkat-pendidikan']?.find(
									(item) => item.val0 == input.tingkat_id
							  )?.val1
							: 'Jenjang Pendidikan'
					"
					class="q-mt-sm"
					outlined
					label="Tingkat Pendidikan"
					v-model="input.tingkat_id"
					:options="lists['tingkat-pendidikan']"
					option-value="val0"
					option-label="val1"
					emit-value
					map-options
					:rules="[(val) => !!val || 'Harus diisi!']"
					error-color="negative"
					:loading="loading['tingkat-pendidikan']"
				/>
				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Kelas"
					emit-value
					map-options
					v-model="input.kelas"
					:options="lists['kelas']"
					:loading="loading['kelas']"
				/>
				<q-input
					dense
					class="q-mt-sm"
					outlined
					label="Nomor Absen"
					v-model="input.no_absen"
					type="number"
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
import { apiTokened } from 'src/api';
import { toArray } from 'src/utils/array-object';
import { rerenderSantriRelations } from 'src/utils/buttons-click';
import { fetchListAscKey, fetchLists } from 'src/api/fetch-list';
import { notifyError, notifySuccess } from 'src/utils/notify';
import { onMounted, ref } from 'vue';
import deleteById from 'src/api/api-delete';
import ToolbarForm from 'src/components/ToolbarForm.vue';

const props = defineProps({
	data: { type: Object, required: true },
	isNew: { type: Boolean, default: true },
	title: { type: String, default: () => 'Input' },
});

const emit = defineEmits(['successSubmit', 'successDelete']);

// eslint-disable-next-line vue/no-setup-props-destructure
const input = ref({});
const lists = ref([]);
const loading = ref([]);
onMounted(async () => {
	input.value = props.data;

	await fetchListAscKey({
		key: 'tahun-ajaran',
		loading,
		lists,
		ascending: false,
	});
	await fetchListAscKey({
		key: 'tingkat-pendidikan',
		loading,
		lists,
		ascending: true,
	});
	await fetchLists({ key: 'kelas', loading, lists });
});

const submit = async () => {
	const data = {
		id: input.value.id,
		santri_id: input.value.santri_id,
		th_ajaran_h: input.value.th_ajaran_h,
		tingkat_id: input.value.tingkat_id,
		kelas: input.value.kelas,
		no_absen: input.value.no_absen,
		keterangan: input.value.keterangan,
	};
	// console.log(data);
	// return;
	try {
		let response = null;
		if (props.isNew) response = await apiTokened.post(`kelas`, data);
		else response = await apiTokened.put(`kelas/${data.id}`, data);
		notifySuccess(response.data.message);
		// rerenderSantriRelations();
		emit('successSubmit');
	} catch (error) {
		toArray(error.response.data.message).forEach((message) => {
			notifyError(message);
		});
	}
};

const deleteData = async (id) => {
	const data = {
		endPoint: `kelas/${id}`,
	};
	const deleted = await deleteById(data);
	if (deleted) emit('successDelete');
};
</script>
