<template>
	<div class="q-pa-sm">
		<q-toolbar class="bg-teal-8 text-teal-11 shadow-2 rounded-borders">
			<!-- <q-btn flat label="Homepage" /> -->
			<div class="text-subtitle1">Cari &hellip;</div>
			<q-space />

			<q-tabs shrink stretch class="text-teal-11">
				<q-route-tab name="santri" label="Santri" to="santri" exact />
				<q-route-tab name="wali" label="Wali" to="wali" exact />
				<q-route-tab name="ortu" label="Ortu" to="ortu" exact />
			</q-tabs>
		</q-toolbar>

		<router-view class="q-mt-sm" />
		<!-- <q-tab-panels
			animated
			v-model="tab"
			class="bg-teal-1 rounded-borders q-card--bordered q-pa-sm"
		>
			<q-tab-panel name="santri" class="no-padding">
				<santri-search />
			</q-tab-panel>

			<q-tab-panel name="wali" class="no-padding">
				<wali-search />
			</q-tab-panel>

			<q-tab-panel name="ortu" class="no-padding">
				<ortu-search />
			</q-tab-panel>
		</q-tab-panels> -->
	</div>
</template>

<script setup>
import SantriSearch from './SantriSearch.vue';
import WaliSearch from './WaliSearch.vue';
import OrtuSearch from './OrtuSearch.vue';
import { ref } from 'vue';

const tab = ref('santri');
</script>
