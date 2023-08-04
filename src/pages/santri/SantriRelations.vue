<template>
	<q-card :key="keySantriRelations">
		<button
			@click="keySantriRelations++"
			id="btn-rerender-santri-relations"
			style="display: none"
		>
			rerender
		</button>
		<q-tabs
			no-caps
			outside-arrows
			mobile-arrows
			class="bg-teal-7 text-teal-11 shadow-2"
			dense=""
			indicator-color="teal-13"
		>
			<q-route-tab
				name="wali"
				label="Wali"
				:to="'/santri/' + props.santriId + '/wali'"
			/>
			<q-route-tab
				name="ortu"
				label="Ortu"
				:to="'/santri/' + props.santriId + '/ortu'"
			/>
			<q-route-tab
				name="status"
				label="Status"
				:to="'/santri/' + props.santriId + '/status'"
			/>
			<q-route-tab
				name="kelas"
				label="Kelas"
				:to="'/santri/' + props.santriId + '/kelas'"
			/>
			<q-route-tab
				name="domisili"
				label="Domisili"
				:to="'/santri/' + props.santriId + '/domisili'"
			/>
		</q-tabs>
		<q-card-section class="q-pa-sm">
			<!-- swipe tak jalan -->
			<suspense>
				<template #default>
					<router-view />
				</template>
				<template #fallback>
					<q-spinner-cube
						color="teal-12"
						size="8em"
						class="flex q-mx-auto"
					/>
				</template>
			</suspense>
		</q-card-section>
	</q-card>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({ santriId: { default: null } });
const keySantriRelations = ref(0);
</script>
