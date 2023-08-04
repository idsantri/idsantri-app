<template>
	<div class="q-pa-xs" style="height: 12rem"></div>
	<q-spinner-cube
		v-show="showSpinner"
		color="teal-12"
		size="14em"
		class="absolute-center"
	/>
</template>
<script setup>
import { useQuasar } from 'quasar';
import authState from '../../stores/auth-store';
import { ref } from 'vue';
import { apiTokened } from 'src/api';
import { useRouter } from 'vue-router';

const emit = defineEmits(['title', 'errors']);
emit('title', 'Keluar');
emit('errors', []);

const showSpinner = ref(true);
const router = useRouter();

(() => {
	useQuasar()
		.dialog({
			title: 'Konfirmasi',
			message: 'Keluar dari Aplikasi?',
			cancel: true,
			persistent: true,
		})
		.onOk(async () => {
			await apiTokened.post('logout');
			authState().$reset();
			router.push('/login');
		})
		.onOk(() => {
			// useRouter().push('/login')
			// console.log('Keluar dari dari Aplikasi..')
		})
		.onCancel(() => {
			router.go(-1);
		})
		.onDismiss(() => {
			showSpinner.value = false;
		});
})();
</script>
src/api/api
