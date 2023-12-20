<template>
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="submit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<toolbar-form @emit-button="null">
					{{ props.title }} &mdash;
					<em>{{ isNew ? 'baru' : 'edit' }}</em>
				</toolbar-form>
			</q-card-section>
			<q-card-section>
				<div v-if="loadingCrud">
					<q-dialog v-model="loadingCrud" persistent="">
						<q-spinner-cube
							color="green-12"
							size="8em"
							class="flex q-ma-lg q-mx-auto"
						/>
					</q-dialog>
				</div>
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
					id="btn-close"
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
import ToolbarForm from 'src/components/ToolbarForm.vue';
import { getLists, getListsKey } from 'src/api/api-get-lists';
import apiPost from 'src/api/api-post';
import apiUpdate from 'src/api/api-update';
import apiDelete from 'src/api/api-delete';

const props = defineProps({
	data: { type: Object, required: true },
	isNew: { type: Boolean, default: true },
	title: { type: String, default: () => 'Input' },
});

const emit = defineEmits(['successSubmit', 'successDelete']);

const input = ref({});
const lists = ref([]);
const loading = ref([]);
const loadingCrud = ref(false);

onMounted(async () => {
	Object.assign(input.value, props.data);

	await getListsKey({
		key: 'tahun-ajaran',
		loading,
		lists,
		sort: false,
	});
	await getListsKey({
		key: 'tingkat-pendidikan',
		loading,
		lists,
		sort: true,
	});
	await getLists({ key: 'kelas', loading, lists, sort: true });
});

const submit = async () => {
	const data = {
		santri_id: input.value.santri_id,
		th_ajaran_h: input.value.th_ajaran_h,
		tingkat_id: input.value.tingkat_id,
		kelas: input.value.kelas,
		no_absen: input.value.no_absen,
		keterangan: input.value.keterangan,
	};

	let response = null;
	if (props.isNew) {
		response = await apiPost({
			endPoint: 'kelas',
			data,
			loading: loadingCrud,
		});
	} else {
		response = await apiUpdate({
			endPoint: `kelas/${input.value.id}`,
			data,
			confirm: true,
			notify: true,
			loading: loadingCrud,
		});
	}
	if (response) {
		document.getElementById('btn-close').click();
		emit('successSubmit');
	}
};

const deleteData = async (id) => {
	const data = {
		endPoint: `kelas/${id}`,
		loading: loadingCrud,
	};
	const del = await apiDelete(data);
	if (del) {
		document.getElementById('btn-close').click();
		emit('successDelete');
	}
};
</script>
