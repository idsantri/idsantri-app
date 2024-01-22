<template>
	<q-card bordered flat>
		<q-card-section
			class="q-pa-sm text-subtitle1 bg-green-11 flex flex-center"
		>
			Data Santri
			<q-space />
			<q-btn
				round
				flat
				dense
				icon="info"
				no-caps
				color="green-12"
				class="q-px-sm bg-green-8"
				:to="`/santri/${props.data.santri_id}`"
			/>
		</q-card-section>

		<q-card-section class="q-pa-sm">
			<div v-if="props.loading">
				<q-spinner-cube
					color="green-12"
					size="4em"
					class="flex q-mx-auto"
				/>
			</div>
			<q-list v-else>
				<q-item class="no-padding">
					<q-item-section avatar>
						<q-img
							:src="props.data?.image || '/user-default.png'"
							:ratio="3 / 4"
							alt="santri"
						/>
					</q-item-section>
					<q-item-section>
						<q-item-label overline>
							{{ props.data.nama?.toUpperCase() }}
							({{ props.data.santri_id }})
						</q-item-label>
						<q-item-label>
							{{ props.data.data_akhir }}
						</q-item-label>
						<q-item-label caption>
							{{ props.data.alamat_pendek }}
						</q-item-label>
					</q-item-section>
				</q-item>
			</q-list>
		</q-card-section>
	</q-card>
</template>
<script setup>
const props = defineProps({
	data: Object,
	loading: Boolean,
});
</script>
<style lang=""></style>
