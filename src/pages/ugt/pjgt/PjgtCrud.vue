<template>
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<toolbar-form @emit-button="null">
					Input Data PJGT &mdash;
					<em> {{ $props.isNew ? 'baru' : 'edit' }}</em>
				</toolbar-form>
			</q-card-section>
			<q-card-section class="no-padding">
				<q-carousel
					v-model="slide"
					transition-prev="slide-right"
					transition-next="slide-left"
					animated
					control-color="primary"
					class="full-width"
					style="height: 60vh"
					swipeable
					infinite
				>
					<!-- identitas -->
					<q-carousel-slide
						:name="carousel.identitas.button"
						class="no-wrap flex-center"
					>
						<div class="text-subtitle2">
							{{ carousel.identitas.title }}
						</div>
						<q-input
							dense
							:hint="
								isNew
									? 'Kosongkan jika ingin diisi otomatis!'
									: ''
							"
							class="q-mt-sm"
							outlined
							label="ID"
							v-model="input.id"
							:rules="[
								(val) => !val || !isNaN(val) || 'Hanya angka!',
							]"
							error-color="negative"
						/>
						<q-input
							dense
							hint=""
							class="q-mt-sm"
							outlined
							label="Nama*"
							v-model="input.nama"
							:rules="[
								(val) => !!val || 'Harus diisi!',
								(val) =>
									val?.length >= 5 || 'Setidaknya 5 huruf!',
							]"
							error-color="negative"
							autocapitalize="words"
						/>

						<q-select
							dense
							:hint="
								input.sex == 'L'
									? 'Laki-Laki'
									: input.sex == 'P'
									? 'Perempuan'
									: ''
							"
							class="q-mt-sm"
							outlined
							label="Jenis Kelamin"
							v-model="input.sex"
							:options="['L', 'P']"
							emit-value
							map-options
							error-color="negative"
							behavior="menu"
						/>
						<q-select
							dense
							hint=""
							class="q-mt-sm"
							outlined
							label="Jenis Lembaga"
							emit-value
							map-options
							v-model="input.jenis_lembaga"
							:options="lists['jenis_lembaga']"
							:loading="loading['jenis_lembaga']"
							use-input=""
							new-value-mode="add"
							clearable
							behavior="menu"
						/>
						<q-input
							dense
							hint=""
							class="q-mt-sm"
							outlined
							label="Nama Lembaga"
							v-model="input.nama_lembaga"
							:rules="[(val) => !!val || 'Harus diisi!']"
							error-color="negative"
							autocapitalize="words"
						/>
					</q-carousel-slide>

					<!-- alamat -->
					<q-carousel-slide
						:name="carousel.alamat.button"
						class="no-wrap flex-center"
					>
						<carousel-alamat
							@emit-input="(val) => Object.assign(input, val)"
							:data="input"
						/>
					</q-carousel-slide>

					<!-- lain-lain -->
					<q-carousel-slide
						:name="carousel.others.button"
						class="no-wrap flex-center"
					>
						<div class="text-subtitle2">
							{{ carousel.others.title }}
						</div>
						<q-select
							dense
							hint=""
							class="q-mt-sm"
							outlined
							label="Wilayah PJGT"
							emit-value
							map-options
							v-model="input.wilayah"
							:options="lists['wilayah']"
							:loading="loading['wilayah']"
							use-input=""
							new-value-mode="add"
							clearable
							behavior="menu"
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
							hint=""
							class="q-mt-sm"
							outlined
							label="Email"
							v-model="input.email"
						/>
					</q-carousel-slide>
				</q-carousel>
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<div class="row justify-center">
					<q-btn-toggle
						toggle-color="green-10"
						text-color="text-green-11"
						no-caps=""
						glossy
						v-model="slide"
						:options="toggleOptions"
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
		</q-form>
		<!-- <pre>{{ $props.isNew }}</pre>
		<pre>{{ $props.dataPersonalia }}</pre> -->
	</q-card>
</template>
<script setup>
import { onMounted, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ToolbarForm from 'src/components/ToolbarForm.vue';
import CarouselAlamat from 'src/components/CarouselAlamat.vue';
import apiDelete from 'src/api/api-delete';
import apiUpdate from 'src/api/api-update';
import apiPost from 'src/api/api-post';
import { getListsCustom } from 'src/api/api-get-lists';
import loadingStore from 'src/stores/loading-store';

const loadingState = loadingStore();
const { loadingMain } = toRefs(loadingState);

const props = defineProps({
	data: Object,
	isNew: Boolean,
});
const emit = defineEmits(['successSubmit', 'successDelete']);

const router = useRouter();
const route = useRoute();
const input = ref({});

const lists = ref([]);
const loading = ref([]);
onMounted(async () => {
	Object.assign(input.value, props.data);

	await getListsCustom({
		url: `ugt/pjgt/lists/jenis-lembaga`,
		lists,
		key: 'jenis_lembaga',
		loading,
	});
	await getListsCustom({
		url: `ugt/pjgt/lists/wilayah`,
		lists,
		key: 'wilayah',
		loading,
	});
	// console.log(lists.value);
});

const onSubmit = async () => {
	// console.log(input.value);
	const data = JSON.parse(JSON.stringify(input.value));
	// console.log(data);
	// return;

	let response = null;
	if (props.isNew) {
		response = await apiPost({
			endPoint: 'ugt/pjgt',
			data,
			loading: loadingMain,
		});
	} else {
		response = await apiUpdate({
			endPoint: `ugt/pjgt/${route.params.id}`,
			data,
			confirm: true,
			notify: true,
			loading: loadingMain,
		});
	}

	if (response) {
		document.getElementById('btn-close-crud').click();
		emit('successSubmit', response?.pjgt);
	}
};

const handleDelete = async () => {
	const result = await apiDelete({
		endPoint: `ugt/pjgt/${route.params.id}`,
		loading: loadingMain,
		rerender: false,
	});
	if (result) {
		document.getElementById('btn-close-crud').click();
		emit('successDelete');
	}
};

const carousel = {
	identitas: {
		title: 'Identitas Diri',
		button: '1',
	},
	alamat: {
		title: 'Data Alamat',
		button: '2',
	},
	others: {
		title: 'Lain-Lain',
		button: '3',
	},
};
const slide = ref(carousel.identitas.button);
const toggleOptions = [
	{
		label: carousel.identitas.button,
		value: carousel.identitas.button,
	},
	{
		label: carousel.alamat.button,
		value: carousel.alamat.button,
	},
	{
		label: carousel.others.button,
		value: carousel.others.button,
	},
];
</script>
