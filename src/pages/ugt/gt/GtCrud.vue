<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<toolbar-form @emit-button="null">
					Input Data GT &mdash;
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
					<q-select
						class="q-mt-sm"
						dense
						outlined
						label="PJGT ID*"
						v-model="input.pjgt_id"
						:options="pjgtList"
						emit-value
						map-options
						option-value="id"
						option-label="id"
						error-color="negative"
						:loading="pjgtLoading"
						use-input
						clearable=""
						@update:model-value="onInputPjgt"
					>
						<template v-slot:option="scope">
							<q-item v-bind="scope.itemProps">
								<q-item-section>
									<q-item-label
										>{{ scope.opt.id }} &mdash;
										{{ scope.opt.nama }}
									</q-item-label>
									<q-item-label caption>{{
										scope.opt.wilayah
									}}</q-item-label>
								</q-item-section>
							</q-item>
						</template>
					</q-select>
					<q-input
						dense
						:hint="input.pjgt_wilayah"
						class="q-mt-sm"
						outlined
						label="Nama PJGT"
						v-model="input.pjgt_nama"
						disable
						filled
					/>
					<q-select
						dense
						:hint="
							input.th_ajaran_h?.length == 9
								? lists['tahun-ajaran']?.find(
										(item) =>
											item.val0 === input.th_ajaran_h
								  )?.val1
								: ''
						"
						class="q-mt-sm"
						outlined
						label="Tahun Ajaran*"
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

					<q-input
						dense
						hint="08123456789"
						class="q-mt-sm"
						outlined
						label="Telepon"
						v-model="input.telepon"
						:rules="[
							(val) => !val || !isNaN(val) || 'Hanya angka!',
						]"
						error-color="negative"
					/>
					<q-input
						dense
						class="q-mt-sm"
						outlined
						label="Email GT"
						v-model="input.email"
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
					id="btn-close-crud"
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
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import ToolbarForm from 'src/components/ToolbarForm.vue';
import InputSelectSantriId from 'src/components/InputSelectSantriId.vue';
import apiPost from 'src/api/api-post';
import apiUpdate from 'src/api/api-update';
import apiDelete from 'src/api/api-delete';
import { useRouter } from 'vue-router';
import { getListsKey } from 'src/api/api-get-lists';

const props = defineProps({
	isNew: Boolean,
	data: Object,
});
const emit = defineEmits(['successSubmit', 'successDelete']);

const router = useRouter();
const input = ref({});
const loadingCrud = ref(false);
const lists = ref([]);
const loading = ref([]);
const pjgtList = ref([]);
const pjgtLoading = ref(false);

function onInputPjgt(val) {
	input.value.pjgt_nama = pjgtList.value.find(
		(o) => o.id == input.value?.pjgt_id
	)?.nama;
	input.value.pjgt_wilayah = pjgtList.value.find(
		(o) => o.id == input.value?.pjgt_id
	)?.wilayah;
}

async function onSubmit() {
	// console.log(input.value);
	const data = {
		pjgt_id: input.value.pjgt_id,
		santri_id: input.value.santri_id,
		th_ajaran_h: input.value.th_ajaran_h,
		telepon: input.value.telepon,
		email: input.value.email,
		keterangan: input.value.keterangan,
	};
	// console.log(data);
	// return;
	let response = null;
	if (props.isNew) {
		response = await apiPost({
			endPoint: 'ugt/gt',
			data,
			loading: loadingCrud,
		});
	} else {
		response = await apiUpdate({
			endPoint: `ugt/gt/${input.value.id}`,
			data,
			confirm: true,
			notify: true,
			loading: loadingCrud,
		});
	}
	if (response) {
		document.getElementById('btn-close-crud').click();
		emit('successSubmit', response?.gt);
	}
}

const handleDelete = async () => {
	const result = await apiDelete({
		endPoint: `ugt/gt/${input.value.id}`,
		loading: loadingCrud,
		rerender: false,
	});
	if (result) {
		document.getElementById('btn-close-crud').click();
		emit('successDelete');
	}
};

onMounted(async () => {
	// console.log(props.data);
	Object.assign(input.value, props.data);
	await getListsKey({
		key: 'tahun-ajaran',
		loading,
		lists,
		sort: false,
	});
	const data = await apiGet({ endPoint: 'ugt/pjgt', loading: pjgtLoading });
	pjgtList.value = data.pjgt;
	// console.log(pjgtList.value);
});
</script>
<style lang=""></style>
