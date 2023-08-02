<template>
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="submit">
			<q-card-section class="bg-teal-7 text-teal-11 q-pa-sm">
				<div class="text-subtitle1">
					{{ props.title }} &mdash;
					<em>{{ isNew ? 'baru' : 'edit' }}</em>
				</div>
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
					class="q-mt-sm"
					outlined
					label="Domisili"
					emit-value
					map-options
					v-model="input.domisili"
					:options="lists['domisili']"
					:loading="loading['domisili']"
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
			<q-card-actions class="flex bg-teal-6">
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
					class="bg-teal-11"
					no-caps=""
					id="btn-close-santri-crud"
				/>
				<q-btn
					type="submit"
					label="Simpan"
					class="bg-teal-10 text-teal-11"
					no-caps=""
				/>
			</q-card-actions>
		</q-form>
		<!-- <pre>{{ input }}</pre> -->
	</q-card>
</template>
<script setup>
import { useQuasar } from 'quasar';
import { apiTokened } from 'src/config/api';
import { toArray } from 'src/utils/array-object';
import {
	forceRerender,
	rerenderSantriRelations,
} from 'src/utils/buttons-click';
import { fetchLists } from 'src/utils/fetch-list';
import { notifyError, notifySuccess } from 'src/utils/notify';
import { onMounted, ref } from 'vue';
import { deleteById } from 'src/api/delete';
const props = defineProps({
	data: { type: Object, required: true },
	isNew: { type: Boolean, default: true },
	title: { type: String, default: () => 'Input' },
});

// eslint-disable-next-line vue/no-setup-props-destructure
const input = ref({});
const lists = ref([]);
const loading = ref([]);
onMounted(async () => {
	input.value = props.data;
	await fetchLists({ key: 'domisili', loading, lists });
});

const submit = async () => {
	const data = {
		id: input.value.id,
		santri_id: input.value.santri_id,
		domisili: input.value.domisili,
		keterangan: input.value.keterangan,
	};
	// console.log(data);
	// return;
	try {
		let response = null;
		if (props.isNew) response = await apiTokened.post(`domisili`, data);
		else response = await apiTokened.put(`domisili/${data.id}`, data);
		notifySuccess(response.data.message);
		rerenderSantriRelations();
	} catch (error) {
		toArray(error.response.data.message).forEach((message) => {
			notifyError(message);
		});
	}
};

const deleteData = async (id) => {
	const data = {
		endPoint: 'domisili',
		id: id,
		rerender: true,
	};
	await deleteById(data);
};
</script>
<style></style>
