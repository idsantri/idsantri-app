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
					:model-value="
						input?.nama + ' (' + input?.personalia_id + ')'
					"
					disable=""
					filled=""
				/>
				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Jabatan"
					v-model="input.jabatan"
					:options="lists['jabatan-madrasah']"
					option-value="val0"
					option-label="val0"
					emit-value
					map-options
					:rules="[(val) => !!val || 'Harus diisi!']"
					error-color="negative"
					:loading="loading['jabatan-madrasah']"
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
					clearable=""
				/>

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
import ToolbarForm from 'src/components/ToolbarForm.vue';
import { fetchListAscKey, fetchLists } from 'src/api/fetch-list';
import { onMounted, ref } from 'vue';
import apiDelete from 'src/api/api-delete';
import apiPost from 'src/api/api-post';
import apiUpdate from 'src/api/api-update';

const props = defineProps({
	data: { type: Object, required: true },
	isNew: { type: Boolean, default: true },
});

const emit = defineEmits(['successSubmit', 'successDelete']);

const input = ref({});
const lists = ref([]);
const loading = ref([]);
const loadingCrud = ref(false);
onMounted(async () => {
	// input.value = props.data;  // menjadi reactive
	Object.assign(input.value, props.data);

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
	await fetchLists({ key: 'kelas', loading, lists, ascending: true });
	await fetchLists({
		key: 'jabatan-madrasah',
		loading,
		lists,
		ascending: true,
	});
});

const submit = async () => {
	const data = {
		id: input.value.id,
		personalia_id: input.value.personalia_id,
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
			endPoint: `personalia-madrasah`,
			data,
			loading: loadingCrud,
		});
	} else {
		response = await apiUpdate({
			endPoint: `personalia-madrasah/${data.id}`,
			data,
			confirm: true,
			loading: loadingCrud,
		});
	}
	if (response) emit('successSubmit');
};

const deleteData = async (id) => {
	const deleted = await apiDelete({
		endPoint: `personalia-madrasah/${id}`,
		loading: loadingCrud,
	});
	if (deleted) emit('successDelete');
};
</script>
