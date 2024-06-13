<template lang="">
	<q-page class="q-pa-sm">
		<q-card style="max-width: 600px">
			<q-tabs
				v-model="tab"
				align="left"
				inline-label
				class="bg-green-7 text-green-11"
			>
				<q-tab
					name="by-date"
					icon="calendar_month"
					label="by Tanggal"
					no-caps
				/>
				<q-tab
					name="advanced"
					icon="read_more"
					label="Advanced"
					no-caps
				/>
				<q-tab
					name="pivot"
					icon="pivot_table_chart"
					label="Pivot"
					no-caps
					disable
				/>
			</q-tabs>

			<q-tab-panels v-model="tab" animated swipeable infinite>
				<q-tab-panel class="no-padding" name="by-date">
					<export-by-date class="" />
				</q-tab-panel>

				<q-tab-panel class="no-padding" name="advanced">
					<export-advanced class="" />
				</q-tab-panel>
				<q-tab-panel class="no-padding" name="pivot">
					<p
						class="text-center q-pa-xl text-negative text-subtitle2 no-margin"
					>
						Belum Selesai
					</p>
				</q-tab-panel>
			</q-tab-panels>
		</q-card>
	</q-page>
</template>
<script setup>
import ExportByDate from './ExportByDate';
import ExportAdvanced from './ExportAdvanced';
import { ref } from 'vue';

const tab = ref('by-date');
</script>
