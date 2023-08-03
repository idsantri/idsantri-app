<template>
	<q-card :key="keySantriRelations">
		<button
			@click="keySantriRelations++"
			id="btn-rerender-santri-relations"
			style="display: none"
		>
			rerender
		</button>
		<!--
		TODO:
		url tidak berubah jika pindah dengan swipe
		-->

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
			<!-- <q-tab-panels v-model="tab" animated="" swipeable="" infinite="">
				<q-tab-panel class="no-padding" name="wali">
					<suspense>
						<template #default>
							<santri-wali :santri-id="santriId" />
						</template>
						<template #fallback>
							<q-spinner-cube
								color="teal-12"
								size="8em"
								class="flex q-mx-auto"
							/>
						</template>
					</suspense>
				</q-tab-panel>
				<q-tab-panel class="no-padding" name="ortu">
					<suspense>
						<template #default>
							<santri-ortu :santri-id="santriId" />
						</template>
						<template #fallback>
							<q-spinner-cube
								color="teal-12"
								size="8em"
								class="flex q-mx-auto"
							/>
						</template>
					</suspense>
				</q-tab-panel>
				<q-tab-panel class="no-padding" name="status">
					<suspense>
						<template #default>
							<santri-status :santri-id="santriId" />
						</template>
						<template #fallback>
							<q-spinner-cube
								color="teal-12"
								size="8em"
								class="flex q-mx-auto"
							/>
						</template>
					</suspense>
				</q-tab-panel>
				<q-tab-panel class="no-padding" name="kelas">
					<suspense>
						<template #default>
							<santri-kelas :santri-id="santriId" />
						</template>
						<template #fallback>
							<q-spinner-cube
								color="teal-12"
								size="8em"
								class="flex q-mx-auto"
							/>
						</template>
					</suspense>
				</q-tab-panel>
				<q-tab-panel class="no-padding" name="domisili">
					<suspense>
						<template #default>
							<santri-domisili :santri-id="santriId" />
						</template>
						<template #fallback>
							<q-spinner-cube
								color="teal-12"
								size="8em"
								class="flex q-mx-auto"
							/>
						</template>
					</suspense>
				</q-tab-panel>
			</q-tab-panels> -->
		</q-card-section>
	</q-card>
</template>
<script setup>
import { ref } from 'vue';
import SantriWali from 'src/views/santri-wali/SantriWali.vue';
import SantriOrtu from 'src/views/santri-ortu/SantriOrtu.vue';
import SantriStatus from 'src/views/santri-status/SantriStatus.vue';
import SantriKelas from 'src/views/santri-kelas/SantriKelas.vue';
import SantriDomisili from 'src/views/santri-domisili/SantriDomisili.vue';

const props = defineProps({ santriId: { default: null } });
const tab = ref('kelas');

const keySantriRelations = ref(0);
</script>
