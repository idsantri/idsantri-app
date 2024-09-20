<template lang="">
	<div class="text-subtitle2">Alamat</div>

	<q-select
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Provinsi"
		emit-value
		map-options
		v-model="input.provinsi"
		:options="listsPro"
		:loading="loadingPro"
		behavior="menu"
		clearable
	>
		<template v-slot:after>
			<DropDown
				@sync-click="fetchProvinsi()"
				@route-click="$emit('emitClose')"
			/>
		</template>
	</q-select>

	<q-select
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Kabupaten/Kota"
		emit-value
		map-options
		v-model="input.kabupaten"
		:options="listsKab"
		:loading="loadingKab"
		behavior="menu"
		clearable
	>
		<template v-slot:after>
			<DropDown
				@sync-click="fetchKabupaten(input.provinsi)"
				@route-click="$emit('emitClose')"
			/>
		</template>
	</q-select>

	<q-select
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Kecamatan"
		emit-value
		map-options
		v-model="input.kecamatan"
		:options="listsKec"
		:loading="loadingKec"
		behavior="menu"
		clearable
	>
		<template v-slot:after>
			<DropDown
				@sync-click="fetchKecamatan(input.provinsi, input.kabupaten)"
				@route-click="$emit('emitClose')"
			/>
		</template>
	</q-select>

	<q-select
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Desa/Keluarahan"
		emit-value
		map-options
		v-model="input.desa"
		:options="listsDes"
		:loading="loadingDes"
		use-input=""
		new-value-mode="add"
		behavior="menu"
		clearable
	>
		<template v-slot:after>
			<DropDown
				@sync-click="
					fetchDesa(input.provinsi, input.kabupaten, input.kecamatan)
				"
				@route-click="$emit('emitClose')"
			/>
		</template>
	</q-select>

	<div class="row">
		<q-input
			dense
			hint=""
			class="q-mt-sm col q-mr-sm"
			outlined
			label="RT"
			v-model="input.rt"
			type="number"
		/>

		<q-input
			dense
			hint=""
			class="q-mt-sm col q-ml-sm"
			outlined
			label="RW"
			v-model="input.rw"
			type="number"
		/>
	</div>

	<q-input
		dense
		hint="Dusun, kampung, jalan, gang, nomor rumah ..."
		class="q-mt-sm"
		outlined
		label="Dusun"
		v-model="input.jl"
		autogrow=""
	/>

	<q-input
		dense
		hint=""
		class="q-mt-sm"
		outlined
		label="Kode Pos"
		v-model="input.kode_pos"
		:rules="[
			(val) =>
				!val || (val?.length == 5 && !isNaN(val)) || '5 digit angka!',
		]"
		error-color="negative"
	/>
</template>
<script setup>
/**
 * @example
<carousel-alamat
	@emit-input="(val) => Object.assign(santri, val)"
	@emit-close="closeModal"
	:data="santri"
	/>
 */
import apiGet from 'src/api/api-get';
import alamatStore from 'src/stores/alamat-store';
import { onMounted, ref, watch, watchEffect } from 'vue';
import DropDown from './CarouselAlamatDropDown.vue';

const props = defineProps({
	data: { type: Object },
});
const emit = defineEmits(['emitInput', 'emitClose']);

const alamat = alamatStore();
const input = ref({});
const listsPro = ref([]);
const loadingPro = ref(false);
const listsKab = ref([]);
const loadingKab = ref(false);
const listsKec = ref([]);
const loadingKec = ref(false);
const listsDes = ref([]);
const loadingDes = ref(false);

onMounted(async () => {
	Object.assign(input.value, props.data);
	await getProvinsi();
	if (input.value.provinsi) {
		await getKabupaten(input.value.provinsi);
	}
	if (input.value.provinsi && input.value.kabupaten) {
		await getKecamatan(input.value.provinsi, input.value.kabupaten);
	}
	if (
		input.value.provinsi &&
		input.value.kabupaten &&
		input.value.kecamatan
	) {
		await getDesa(
			input.value.provinsi,
			input.value.kabupaten,
			input.value.kecamatan,
		);
	}
});

async function fetchProvinsi() {
	const data = await apiGet({ endPoint: 'alamat', loading: loadingPro });
	if (data) {
		alamat.setProvinsi(data.provinsi);
		listsPro.value = alamat.getProvinsiArr();
	}
}

async function getProvinsi() {
	const provinsi = alamat.getProvinsiArr();
	if (provinsi.length > 0) {
		listsPro.value = provinsi;
	} else {
		await fetchProvinsi();
	}
}

async function fetchKabupaten(provinsi) {
	const data = await apiGet({
		endPoint: 'alamat',
		loading: loadingKab,
		params: { provinsi },
	});
	if (data) {
		alamat.setKabupaten(data.kabupaten, provinsi);
		listsKab.value = alamat.getKabupatenArr(provinsi);
	}
}
async function getKabupaten(provinsi) {
	const kabupaten = alamat.getKabupatenArr(provinsi);
	if (kabupaten.length > 0) {
		listsKab.value = kabupaten;
	} else {
		await fetchKabupaten(provinsi);
	}
}

async function fetchKecamatan(provinsi, kabupaten) {
	const data = await apiGet({
		endPoint: 'alamat',
		loading: loadingKec,
		params: { provinsi, kabupaten },
	});
	if (data) {
		alamat.setKecamatan(data.kecamatan, provinsi, kabupaten);
		listsKec.value = alamat.getKecamatanArr(provinsi, kabupaten);
	}
}

async function getKecamatan(provinsi, kabupaten) {
	const kecamatan = alamat.getKecamatanArr(provinsi, kabupaten);
	if (kecamatan.length > 0) {
		listsKec.value = kecamatan;
	} else {
		await fetchKecamatan(provinsi, kabupaten);
	}
}

async function fetchDesa(provinsi, kabupaten, kecamatan) {
	const data = await apiGet({
		endPoint: 'alamat',
		loading: loadingDes,
		params: { provinsi, kabupaten, kecamatan },
	});
	if (data) {
		alamat.setDesa(data.desa, provinsi, kabupaten, kecamatan);
		listsDes.value = alamat.getDesaArr(provinsi, kabupaten, kecamatan);
	}
}

async function getDesa(provinsi, kabupaten, kecamatan) {
	const desa = alamat.getDesaArr(provinsi, kabupaten, kecamatan);
	if (desa.length > 0) {
		listsDes.value = desa;
	} else {
		await fetchDesa(provinsi, kabupaten, kecamatan);
	}
}

watchEffect(() => {
	emit('emitInput', input.value);
});

watch(
	() => input.value.provinsi,
	async (newProvinsi, oldProvinsi) => {
		if (newProvinsi != oldProvinsi && typeof oldProvinsi != 'undefined') {
			input.value.kabupaten = '';
			input.value.kecamatan = '';
			input.value.desa = '';
			await getKabupaten(newProvinsi);
		}
	},
);

watch(
	() => input.value.kabupaten,
	async (newValue, oldValue) => {
		if (newValue != oldValue && typeof oldValue != 'undefined') {
			input.value.kecamatan = '';
			input.value.desa = '';
			await getKecamatan(input.value.provinsi, newValue);
		}
	},
);

watch(
	() => input.value.kecamatan,
	async (newValue, oldValue) => {
		if (newValue != oldValue && typeof oldValue != 'undefined') {
			input.value.desa = '';
			await getDesa(
				input.value.provinsi,
				input.value.kabupaten,
				newValue,
			);
		}
	},
);
</script>

<style lang=""></style>
