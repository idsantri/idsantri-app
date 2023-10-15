<template>
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
				<div class="text-subtitle1">
					Input Data Wali &mdash;
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

					<!-- alamat -->
					<q-carousel-slide
						:name="carousel.alamat.button"
						class="no-wrap flex-center"
					>
						<input-alamat :title="carousel.alamat.title" />
					</q-carousel-slide>

					<!-- pendidikan -->
					<q-carousel-slide
						:name="carousel.others.button"
						class="no-wrap flex-center"
					>
						<input-others :title="carousel.others.title" />
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
					id="btn-close-wali-crud"
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
import InputIdentity from './WaliModalCrudIdentity.vue';
import InputAlamat from './WaliModalCrudAlamat.vue';
import InputOthers from './WaliModalCrudOthers.vue';
import waliStore from 'src/stores/wali-store';
import { notifyError, notifySuccess } from 'src/utils/notify';
import { forceRerender } from 'src/utils/buttons-click';
import { toArray } from 'src/utils/array-object';
import { useRouter } from 'vue-router';
import dialogStore from 'src/stores/dialog-store';
import santriStore from 'src/stores/santri-store';
import deleteData from 'src/api/api-delete';

const { wali } = reactive(waliStore());
const { isNew } = reactive(waliStore());
const { santri } = santriStore();
const { wali_id } = toRefs(santri);

const onSubmit = async () => {
	const data = JSON.parse(JSON.stringify(wali));
	try {
		let response = null;
		if (isNew) response = await apiTokened.post(`wali`, data);
		else response = await apiTokened.put(`wali/${wali.id}`, data);

		// console.log("response", response);
		notifySuccess(response.data.message);
		dialogStore().toggleCrudWali(false);
		dialogStore().toggleSearchWali(false);
		if (isNew) {
			wali_id.value = response.data.wali.id;
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

const router = useRouter();
const resetOrDelete = async () => {
	if (isNew) {
		waliStore().setNull();
	} else {
		const result = await deleteData({
			endPoint: `wali/${wali.id}`,
			message: `<span style="color:'red'">Hapus Wali?</span><br/><br/><hr/><em>Pastikan yang bersangkutan tidak memiliki anak!</em><hr/>`,
			rerender: false,
		});
		if (result) {
			router.push('/cari/wali');
			dialogStore().toggleCrudWali(false);
		}
	}
};
</script>
