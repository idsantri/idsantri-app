<template>
	<q-btn @click="createPDF">generate pdf</q-btn>

	<div id="pdf-element">
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
			distinctio at ipsa numquam possimus deserunt, debitis explicabo
			corrupti eos sint! Assumenda provident impedit corrupti velit in
			dolore saepe eaque pariatur.
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
import { ref } from 'vue';
import html2pdf from 'html2pdf.js';
const srcPdf = ref();
const showPdf = ref(false);
const createPDF = async () => {
	const targetElement = document.getElementById('pdf-element');

	if (targetElement) {
		const clonedElement = targetElement.cloneNode(true);
		clonedElement.style.overflow = 'linebreak';
		const options = {
			margin: [5, 5, 5, 5],
			html2canvas: { scale: 10 },
			jsPDF: {
				format: 'a4',
				orientation: 'p',
			},
		};
		const html2PdfSetup = html2pdf().set(options).from(clonedElement);
		const createPdf = await html2PdfSetup.outputPdf();
		if (!createPdf) {
			return console.log('error pdf');
		}
		srcPdf.value = `data:application/pdf;base64,${btoa(createPdf)}`;
		showPdf.value = true;
	}
};
</script>
<style lang=""></style>
