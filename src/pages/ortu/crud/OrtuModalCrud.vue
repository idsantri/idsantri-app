<template>
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<div class="text-subtitle1">
					Input Data Orang Tua &mdash;
					<em> {{ isNew ? 'baru' : 'edit' }}</em>
				</div>
			</q-card-section>
			<q-card-section class="no-padding">
				<q-carousel
					v-model="slide"
					transition-prev="slide-right"
					transition-next="slide-left"
					animated
					control-color="primary"
					class="full-width"
					style="height: 70vh"
					swipeable
					infinite
				>
					<!-- identitas -->
					<q-carousel-slide
						:name="carousel.identitas.button"
						class="no-wrap flex-center"
					>
						<input-identity :title="carousel.identitas.title" />
					</q-carousel-slide>

					<!-- ayah -->
					<q-carousel-slide
						:name="carousel.ayah.button"
						class="no-wrap flex-center"
					>
						<input-ayah :title="carousel.ayah.title" />
					</q-carousel-slide>

					<!-- ibu -->
					<q-carousel-slide
						:name="carousel.ibu.button"
						class="no-wrap flex-center"
					>
						<input-ibu :title="carousel.ibu.title" />
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
					:label="isNew ? 'Reset' : 'Hapus'"
					class="bg-red text-red-1"
					no-caps=""
					@click="resetOrDelete"
				/>
				<q-space />
				<q-btn
					label="Tutup"
					v-close-popup
					class="bg-green-11"
					no-caps=""
					id="btn-close-ortu-crud"
				/>
				<q-btn
					type="submit"
					label="Simpan"
					class="bg-green-10 text-green-11"
					no-caps=""
				/>
			</q-card-actions>
		</q-form>
	</q-card>
</template>
<script setup>
import { reactive, ref, toRefs } from 'vue';
import { apiTokened } from 'src/api';
import InputIdentity from './OrtuModalCrudIdentity.vue';
import InputAyah from './OrtuModalCrudAyah.vue';
import InputIbu from './OrtuModalCrudIbu.vue';
import ortuStore from 'src/stores/ortu-store.js';
import { notifyError, notifySuccess } from 'src/utils/notify';
import { forceRerender } from 'src/utils/buttons-click';
import { toArray } from 'src/utils/array-object';
import { useRouter } from 'vue-router';
import dialogStore from 'src/stores/dialog-store';
import santriStore from 'src/stores/santri-store';
import deleteData from 'src/api/api-delete';

const { ortu } = reactive(ortuStore());
const { isNew } = reactive(ortuStore());
const { santri } = santriStore();
const { ortu_id } = toRefs(santri);

const onSubmit = async () => {
	const data = JSON.parse(JSON.stringify(ortu));
	try {
		let response = null;
		if (isNew) response = await apiTokened.post(`ortu`, data);
		else response = await apiTokened.put(`ortu/${ortu.id}`, data);

		// console.log("response", response);
		notifySuccess(response.data.message);
		dialogStore().toggleCrudOrtu(false);
		dialogStore().toggleSearchOrtu(false);
		if (isNew) {
			ortu_id.value = response.data.ortu.id;
		} else {
			forceRerender();
		}
	} catch (error) {
		// console.log("error", error);
		toArray(error.response.data.message).forEach((message) => {
			notifyError(message);
		});
	}
};

const carousel = {
	identitas: {
		title: 'Identitas',
		button: '1',
	},
	ayah: {
		title: 'Data Ayah',
		button: '2',
	},
	ibu: {
		title: 'Data Ibu',
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
		label: carousel.ayah.button,
		value: carousel.ayah.button,
	},
	{
		label: carousel.ibu.button,
		value: carousel.ibu.button,
	},
];

const router = useRouter();
const resetOrDelete = async () => {
	if (isNew) {
		ortuStore().setNull();
	} else {
		const result = await deleteData({
			endPoint: `ortu/${ortu.id}`,
			message: `<span style="color:'red'">Hapus Orang Tua?</span><br/><br/><hr/><em>Pastikan yang bersangkutan tidak memiliki anak!</em><hr/>`,
			rerender: false,
		});
		if (result) {
			router.push('/cari/ortu');
			dialogStore().toggleCrudOrtu(false);
		}
	}
};
</script>
