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
				<span v-html="dataFilter.display || ''"></span>
				<q-space />
				<q-btn flat="" dense="" icon="cached" @click="keyReload++" />
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
