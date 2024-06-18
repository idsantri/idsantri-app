<template>
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<toolbar-form @emit-button="null">
					{{ props.title }} &mdash;
					<em>{{ input.id ? 'edit' : 'baru' }}</em>
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
					label="Urut"
					v-model="input.urut"
					hint="Nomor urut tampil"
				/>
				<q-input
					class="q-mt-sm"
					dense
					outlined
					label="Kode/ID Mapel"
					v-model="input.id"
					hint="Format: tingkat_id—kode_mapel (ibt-qur)"
				/>
				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Tingkat Pendidikan"
					emit-value
					map-options
					v-model="input.tingkat_id"
					:options="lists['tingkat-pendidikan']"
					:loading="loading['tingkat-pendidikan']"
					clearable
					behavior="menu"
					option-value="val0"
					option-label="val1"
				/>
				<q-input
					dense
					class="q-mt-sm"
					outlined
					label="Mata Pelajaran"
					v-model="input.mapel"
					hint="Hanya huruf dan spasi"
				/>
				<q-input
					dense
					class="q-mt-sm"
					outlined
					label="Mata Pelajaran (Alias)"
					v-model="input.mata_pelajaran"
				/>
				<q-select
					dense
					class="q-mt-sm"
					outlined
					label="Kategori Fan"
					emit-value
					map-options
					v-model="input.category"
					:options="['Fan Pokok', 'Fan Dasar', 'Fan Tambahan']"
					behavior="menu"
				/>
				<q-card bordered flat class="q-px-sm q-mt-sm">
					Tampilkan:
					<q-toggle
						v-model="input.show"
						color="green"
						:true-value="1"
						:false-value="0"
					/>
				</q-card>
			</q-card-section>
			<q-card-actions class="flex bg-green-6">
				<q-btn
					v-show="input.id"
					label="Hapus"
					class="bg-red text-red-1"
					no-caps=""
					@click="handleDelete"
				/>
				<q-space />
				<q-btn
					label="Tutup"
					v-close-popup
					class="bg-green-11"
					no-caps=""
					id="btn-close-crud"
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
import apiUpdate from 'src/api/api-update';
import apiPost from 'src/api/api-post';
import apiDelete from 'src/api/api-delete';
import { getListsKey } from 'src/api/api-get-lists';

const props = defineProps({
	data: { type: Object, required: true },
	title: { type: String, default: () => 'Input' },
});
const emit = defineEmits(['successSubmit', 'successDelete']);

const input = ref({ category: 'Fan Dasar', show: 1 });
const lists = ref([]);
const loading = ref([]);
const loadingCrud = ref(false);

onMounted(async () => {
	Object.assign(input.value, props.data);
	await getListsKey({
		key: 'tingkat-pendidikan',
		loading,
		lists,
		sort: true,
	});
	// console.log(input.value);
});

const onSubmit = async () => {
	// console.log(input.value.id);
	// return;
	const data = {
		urut: input.value.urut,
		id: input.value.id.toLowerCase(),
		tingkat_id: input.value.tingkat_id,
		mapel: input.value.mapel,
		mata_pelajaran: input.value.mata_pelajaran,
		category: input.value.category,
		show: input.value.show,
	};
	// console.log(data);
	// return;
	let response = null;
	if (props.data.id) {
		response = await apiUpdate({
			endPoint: `mapel/${props.data.id}`,
			data,
			confirm: true,
			notify: true,
			loading: loadingCrud,
		});
	} else {
		response = await apiPost({
			endPoint: 'mapel',
			data,
			loading: loadingCrud,
		});
	}
	if (response) {
		document.getElementById('btn-close-crud').click();
		emit('successSubmit');
	}
};

const handleDelete = async () => {
	const result = await apiDelete({
		endPoint: `mapel/${props.data.id}`,
		loading: loadingCrud,
		rerender: false,
	});
	if (result) {
		document.getElementById('btn-close-crud').click();
		emit('successDelete');
	}
};
</script>
