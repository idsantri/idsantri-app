<template lang="">
	<q-page class="q-pa-sm">
		<q-card>
			<q-card-section
				class="q-pa-sm bg-green-8 text-green-11 text-subtitle1"
			>
				Pengaturan Alamat
			</q-card-section>
			<q-card-section
				class="no-padding full-width row no-wrap justify-start items-start content-start scroll"
			>
				<TableProvinsi
					class="q-ma-sm"
					style="min-width: 400px; max-width: 400px"
					@on-select="selectProvinsi"
				/>
				<TableKabupaten
					class="q-ma-sm"
					style="min-width: 400px; max-width: 400px"
					@on-select="selectKabupaten"
					:provinsi="provinsi"
				/>
				<TableKecamatan
					class="q-ma-sm"
					style="min-width: 400px; max-width: 400px"
					@on-select="selectKecamatan"
					:kabupaten="kabupaten"
				/>
				<TableDesa
					class="q-ma-sm"
					style="min-width: 400px; max-width: 400px"
					:kecamatan="kecamatan"
				/>
			</q-card-section>
		</q-card>
	</q-page>
</template>
<script setup>
import TableProvinsi from './DataProvinsi.vue';
import TableKabupaten from './DataKabupaten.vue';
import TableKecamatan from './DataKecamatan.vue';
import TableDesa from './DataDesa.vue';
import { ref } from 'vue';

const provinsi = ref({});
const kabupaten = ref({});
const kecamatan = ref({});

function selectProvinsi(v) {
	provinsi.value = v;
	kabupaten.value = {};
	kecamatan.value = {};
}

function selectKabupaten(v) {
	kabupaten.value = v;
	kecamatan.value = {};
}

function selectKecamatan(v) {
	kecamatan.value = v;
}
</script>
<style lang=""></style>
