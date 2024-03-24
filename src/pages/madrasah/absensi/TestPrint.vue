<template>
	<div>
		<div id="pdf-element">
			<table>
				<tbody>
					<tr v-for="(item, index) in props.dataMurid" :key="index">
						<td>{{ item.no_absen }}</td>
						<td>{{ item.nama }}</td>
						<td>{{ item.ayah }}</td>
						<td>{{ item.wali_nama }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<q-dialog v-model="showPdf">
		<q-card style="width: 600px; height: 800px">
			<q-card-section style="width: 100%; height: 100%" class="q-pa-sm">
				<iframe
					:src="srcPdf"
					style="height: 100%; width: 100%"
					frameborder="0"
					loading="lazy"
					scrolling="no"
					seamless="seamless"
				></iframe>
			</q-card-section>
		</q-card>
	</q-dialog>
</template>
<script setup>
import { ref, toRefs, watchEffect } from 'vue';
import html2pdf from 'html2pdf.js';
import { notifyError } from 'src/utils/notify';
import loadingStore from 'src/stores/loading-store';

const props = defineProps({
	dataMurid: Array,
});
// console.log(props.dataMurid);
const srcPdf = ref();
const showPdf = ref(false);
const { loadingMain } = toRefs(loadingStore());

watchEffect(() => {
	if (props.dataMurid.length > 0) {
		createPDF();
	}
});

async function createPDF() {
	loadingMain.value = true;
	showPdf.value = false;
	const targetElement = document.getElementById('pdf-element');

	if (targetElement) {
		targetElement.style.overflow = 'linebreak';
		const options = {
			margin: [5, 5, 5, 5],
			html2canvas: { scale: 10 },
			jsPDF: {
				format: 'a4',
				orientation: 'p',
			},
		};
		const html2PdfSetup = html2pdf().set(options).from(targetElement);
		const createPdf = await html2PdfSetup.outputPdf();
		if (!createPdf) {
			notifyError('Report gagal dibuat');
			return;
		}
		srcPdf.value = `data:application/pdf;base64,${btoa(createPdf)}`;
		loadingMain.value = false;
		showPdf.value = true;
	}
}
</script>
<style lang=""></style>
