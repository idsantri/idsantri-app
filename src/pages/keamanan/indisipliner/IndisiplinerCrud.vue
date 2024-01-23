<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<toolbar-form @emit-button="null">
					Input Santri Indisipliner &mdash;
					<em> {{ $props.isNew ? 'baru' : 'edit' }}</em>
				</toolbar-form>
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<div v-if="loadingCrud">
					<q-dialog v-model="loadingCrud" persistent="">
						<q-spinner-cube
							color="green-12"
							size="8em"
							class="flex q-ma-lg q-mx-auto"
						/>
					</q-dialog>
				</div>
				<div>
					<InputSelectSantriId
						:active-only="true"
						@emit-input="(val) => Object.assign(input, val)"
						:data="props.data"
					/>
					<q-input
						dense
						:hint="
							isDate(input.tgl_kasus_m)
								? formatDateFull(input.tgl_kasus_m) +
								  ' | ' +
								  bacaHijri(m2h(input.tgl_kasus_m))
								: ''
						"
						class="q-mt-sm"
						outlined
						label="Tanggal Kasus*"
						v-model="input.tgl_kasus_m"
						type="date"
						:rules="[(val) => !!val || 'Harus diisi!']"
						error-color="negative"
					/>

					<q-input
						dense
						:hint="
							isDate(input.tgl_sidang_m)
								? formatDateFull(input.tgl_sidang_m) +
								  ' | ' +
								  bacaHijri(m2h(input.tgl_sidang_m))
								: ''
						"
						class="q-mt-sm"
						outlined
						label="Tanggal Sidang*"
						v-model="input.tgl_sidang_m"
						type="date"
						:rules="[(val) => !!val || 'Harus diisi!']"
						error-color="negative"
					/>
					<q-select
						dense
						v-model="input.kategori"
						class="q-mt-sm"
						outlined
						label="Kategori*"
						:options="categoryOptions"
						emit-value
						map-options
						:rules="[(val) => !!val || 'Harus diisi!']"
						error-color="negative"
						behavior="menu"
					>
						<template v-slot:after>
							<q-rating
								class=""
								name="kategori"
								v-model="input.kategori"
								max="5"
								color="red"
								icon="thumb_down"
								icon-selected="thumb_down"
								size="1em"
							/>
						</template>
					</q-select>
					<q-select
						dense
						hint=""
						class="q-mt-sm"
						outlined
						label="Pasal dilanggar"
						v-model="input.pasal"
						:rules="[(val) => !!val || 'Harus diisi!']"
						error-color="negative"
						:options="optionsTatib"
						:loading="loading['tatib-santri']"
						multiple
						behavior="menu"
						clearable
					>
					</q-select>
					<q-input
						dense
						class="q-mt-sm"
						outlined
						label="Deskripsi"
						v-model="input.deskripsi"
						autogrow=""
					/>
					<q-input
						dense
						class="q-mt-sm"
						outlined
						label="Eksekutor"
						v-model="input.eksekutor"
						:rules="[(val) => !!val || 'Harus diisi!']"
						error-color="negative"
					/>
					<q-input
						dense
						class="q-mt-sm"
						outlined
						label="Saksi"
						v-model="input.saksi"
					/>

					<q-select
						dense
						class="q-mt-sm"
						outlined
						label="Takzir"
						v-model="input.takzir"
						:options="lists['takzir-santri']"
						:loading="loading['takzir-santri']"
						multiple
						behavior="menu"
						clearable
					/>
					<q-input
						dense
						class="q-mt-sm"
						outlined
						label="Keterangan"
						v-model="input.keterangan"
						autogrow=""
					/>
				</div>
			</q-card-section>

			<q-card-actions class="flex bg-green-6">
				<q-btn
					v-show="!$props.isNew"
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
				/>
				<q-btn
					type="submit"
					label="Simpan"
					class="bg-green-10 text-green-11"
					no-caps=""
				/>
			</q-card-actions>
			<!-- <pre>{{ input }}</pre> -->
		</q-form>
	</q-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import ToolbarForm from 'src/components/ToolbarForm.vue';
import InputSelectSantriId from 'src/components/InputSelectSantriId.vue';
import { m2h, bacaHijri } from 'src/utils/hijri';
import { isDate, formatDateFull } from 'src/utils/format-date';
import apiPost from 'src/api/api-post';
import apiUpdate from 'src/api/api-update';
import apiDelete from 'src/api/api-delete';
import { useRouter } from 'vue-router';
import { getLists, getListsKey } from 'src/api/api-get-lists';

const props = defineProps({
	isNew: Boolean,
	data: Object,
});
const router = useRouter();
const input = ref({ kategori: 3 });
const loadingCrud = ref(false);
const lists = ref([]);
const loading = ref([]);
const optionsTatib = ref([]);

async function onSubmit() {
	// console.log('input', input.value);
	// console.log('input', input.value.pasal);
	// return;
	const data = {
		santri_id: input.value.santri_id,
		tgl_kasus_m: input.value.tgl_kasus_m,
		tgl_sidang_m: input.value.tgl_sidang_m,
		kategori: input.value.kategori,
		pasal: input.value.pasal?.join('; '),
		deskripsi: input.value.deskripsi,
		eksekutor: input.value.eksekutor,
		saksi: input.value.saksi,
		takzir: input.value.takzir?.join('; '),
		keterangan: input.value.keterangan,
	};
	// console.log(data);
	// return;
	let response = null;
	if (props.isNew) {
		response = await apiPost({
			endPoint: 'indisipliner',
			data,
			loading: loadingCrud,
		});
	} else {
		response = await apiUpdate({
			endPoint: `indisipliner/${input.value.id}`,
			data,
			confirm: true,
			notify: true,
			loading: loadingCrud,
			rerender: true,
		});
	}
	if (response) {
		router.push(`/keamanan/indisipliner/${response.indisipliner.id}`);
	}
}

const handleDelete = async () => {
	const result = await apiDelete({
		endPoint: `indisipliner/${input.value.id}`,
		loading: loadingCrud,
		rerender: false,
	});
	if (result) {
		router.go(-1);
	}
};

onMounted(async () => {
	Object.assign(input.value, props.data);
	// console.log(input.value);
	if (input.value.pasal) {
		input.value.pasal = input.value.pasal.split(',');
	}
	if (input.value.takzir) {
		input.value.takzir = input.value.takzir.split(',');
	}

	await getListsKey({
		key: 'tatib-santri',
		loading,
		lists,
		sort: true,
	});
	optionsTatib.value = lists.value['tatib-santri']
		.filter((d) => d.val0.length != 1)
		.map((d) => `[${d.val0}] ${d.val1}`);
	// console.log(optionsTatib.value);

	await getLists({ key: 'takzir-santri', loading, lists, sort: true });
});

const categoryOptions = [
	{ value: 1, label: 'Sangat Ringan' },
	{ value: 2, label: 'Ringan' },
	{ value: 3, label: 'Sedang' },
	{ value: 4, label: 'Berat' },
	{ value: 5, label: 'Sangat Berat' },
];
</script>
<style lang=""></style>
