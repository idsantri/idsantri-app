<template lang="">
	<div class="q-ma-sm">
		<filter-kelas
			:showBulanUjian="false"
			:showKelas="false"
			start-url="/madrasah/aparatur"
			@dataFilter="dataEmit"
		/>
		<q-card class="q-mt-sm">
			<q-card-section
				class="bg-green-8 text-green-1 text-subtitle1 q-pa-sm flex flex-center"
			>
				<span v-html="dataFilter.display || ''"></span>
				<q-space />
				<q-btn
					dense=""
					class="q-px-md text-green-10"
					color="green-11"
					label="Data Pesonalia"
					no-caps
					icon="badge"
					to="/personalia"
				/>
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<router-view :key="$route.fullPath" />
			</q-card-section>
		</q-card>
	</div>
</template>
<script setup>
import FilterKelas from 'src/components/HeadFilterKelas.vue';
import { ref } from 'vue';

const dataFilter = ref({});
function dataEmit(val) {
	dataFilter.value = val;
}
</script>
<style lang=""></style>
