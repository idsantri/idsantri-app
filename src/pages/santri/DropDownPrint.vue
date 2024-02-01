<template lang="">
	<q-btn-dropdown
		color="green-10"
		label="Cetak"
		icon="print"
		no-caps
		class="text-green-11 q-px-md"
		size="sm"
	>
		<q-list>
			<q-item
				clickable
				v-close-popup
				@click="
					apiDownload({
						message: 'Download data registrasi?',
						url: `/reports/santri/registrasi/download?id=${route.params.id}`,
						fileName: 'registrasi-' + route.params.id,
					})
				"
			>
				<q-item-section>
					<q-item-label>Registrasi</q-item-label>
				</q-item-section>
			</q-item>
			<q-item
				clickable
				v-close-popup
				@click="
					apiDownload({
						message: 'Download standbook?',
						url: `/reports/santri/standbook/download?id=${route.params.id}`,
						fileName: 'standbook-' + route.params.id,
					})
				"
			>
				<q-item-section>
					<q-item-label>Standbook</q-item-label>
				</q-item-section>
			</q-item>

			<q-item clickable v-close-popup @click="showDialog = true">
				<q-item-section>
					<q-item-label>Permohonan Berhenti</q-item-label>
				</q-item-section>
			</q-item>

			<q-item
				clickable
				v-close-popup
				@click="
					apiDownload({
						message: 'Download Keterangan Berhenti',
						url: `/reports/santri/keterangan-berhenti/download?id=${route.params.id}`,
						fileName: 'keterangan-berhenti-' + route.params.id,
					})
				"
			>
				<q-item-section>
					<q-item-label>Keterangan Berhenti</q-item-label>
				</q-item-section>
			</q-item>
		</q-list>
	</q-btn-dropdown>

	<q-dialog v-model="showDialog">
		<PermohonanBerhenti />
	</q-dialog>
</template>
<script setup>
import apiDownload from 'src/api/api-download';
import PermohonanBerhenti from './PermohonanBerhenti.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const showDialog = ref(false);
</script>
<style lang=""></style>
