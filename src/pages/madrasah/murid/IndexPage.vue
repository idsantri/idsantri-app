<template>
	<div class="q-ma-sm">
		<filter-kelas
			:showBulanUjian="false"
			start-url="/madrasah/murid"
			@dataFilter="dataEmit"
		/>
		<q-card class="q-mt-sm">
			<q-card-section
				class="bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"
			>
				<span
					v-html="
						dataFilter.thAjaranH
							? `➡️ Tahun Ajaran: <strong>` +
							  dataFilter.thAjaranH +
							  `</strong>`
							: ''
					"
				></span
				>&nbsp;&nbsp;
				<span
					v-html="
						dataFilter.tingkat
							? ` ➡️ Tingkat: <strong>` +
							  dataFilter.tingkat +
							  `</strong>`
							: ''
					"
				></span
				>&nbsp;&nbsp;
				<span
					v-html="
						dataFilter.kelas
							? ` ➡️ Kelas: <strong>` +
							  dataFilter.kelas +
							  `</strong>`
							: ''
					"
				></span
				>&nbsp;<span
					v-html="
						dataFilter.kelasJumlahMurid
							? `(${dataFilter.kelasJumlahMurid} murid)`
							: ''
					"
				></span>

				<q-space />
				<q-btn flat="" icon="cached" @click="keyReload++" />
			</q-card-section>
			<q-card-section class="q-pa-sm" :key="keyReload">
				<router-view :key="$route.fullPath" />
			</q-card-section>
		</q-card>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import FilterKelas from 'src/pages/madrasah/components/FilterKelas.vue';

const keyReload = ref(0);

const dataFilter = ref({});
function dataEmit(val) {
	dataFilter.value = val;
}
</script>
