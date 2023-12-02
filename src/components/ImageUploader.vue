<template>
	<my-upload
		field="image"
		langType="en"
		:langExt="translate"
		no-circle
		@crop-success="cropSuccess"
		@crop-upload-success="cropUploadSuccess"
		@crop-upload-fail="cropUploadFail"
		v-model="internalShowUploader"
		:width="450"
		:height="600"
		:url="apiTokened.defaults.baseURL + props.url"
		:params="paramsImage"
		:headers="{
			Authorization: apiTokened.defaults.headers.common.Authorization,
		}"
		withCredentials
		img-format="png"
	></my-upload>
</template>
<script setup>
import myUpload from 'vue-image-crop-upload';
import { forceRerender } from 'src/utils/buttons-click';
import { notifySuccess } from 'src/utils/notify';
import { onUpdated, ref, watch } from 'vue';
import { apiTokened } from 'src/api';

/**
 * communicate parents children
 * @props
 * @emits
 */
const props = defineProps({
	showUploader: { type: Boolean, default: false },
	url: { default: null },
	headers: { default: null },
});

const internalShowUploader = ref(false);
watch(
	() => props.showUploader,
	(newVal) => {
		internalShowUploader.value = newVal;
	}
);
const emit = defineEmits(['updateUploader']);
onUpdated(() => emit('updateUploader', internalShowUploader.value));

/**
 * uploader
 */
const translate = {
	hint: 'Klik atau tarik file gambar ke sini untuk upload',
	loading: 'Uploading…',
	noSupported: 'Browser is not supported, please use IE10+ or other browsers',
	success: 'Upload berhasil',
	fail: 'Upload gagal',
	preview: 'Preview',
	btn: {
		off: 'Gagal',
		close: 'Tutup',
		back: 'Kembali',
		save: 'Simpan',
	},
	error: {
		onlyImg: 'Hanya gambar',
		outOfSize: 'Gambar melebihi batas ukuran: ',
		lowestPx: 'Ukuran gambar terlalu rendah. Setidaknya diharapkan: ',
	},
};

const imgDataUrl = ref('');
const paramsImage = {};
const cropSuccess = (imgData, field) => {
	imgDataUrl.value = imgData;
	// console.log(imgData);
	// console.log(field);
};

const cropUploadSuccess = (jsonData, field) => {
	// console.log(jsonData);
	// console.log('field: ' + field);
	notifySuccess(jsonData.message);
	forceRerender();
};

/**
 * upload fail
 *
 * [param] status    server api return error status, like 500
 * [param] field
 */
const cropUploadFail = (status, field) => {
	console.log(status);
	console.log('field: ' + field);
};
</script>
