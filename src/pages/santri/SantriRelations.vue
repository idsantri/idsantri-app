<template>
	<q-card>
		<q-tabs
			v-model="tab"
			no-caps
			outside-arrows
			mobile-arrows
			class="bg-teal-7 text-teal-11 shadow-2"
			dense=""
			indicator-color="teal-13"
		>
			<q-tab name="wali" label="Wali" />
			<q-tab name="ortu" label="Ortu" />
			<q-tab name="status" label="Status" />
			<q-tab name="kelas" label="Kelas" />
			<q-tab name="domisili" label="Domisili" />
		</q-tabs>
		<q-card-section class="q-pa-sm">
			<q-tab-panels v-model="tab" animated="" swipeable="" infinite="">
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
			</q-tab-panels>
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
const tab = ref('wali');
</script>
