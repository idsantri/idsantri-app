<template>
	<q-card>
		<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
			<div class="flex items-center">
				<div class="text-subtitle2">{{ title }}</div>
				<q-space />
				<slot name="button" />
			</div>
		</q-card-section>
		<q-card-section class="q-pa-sm">
			<div v-if="loading">
				<q-spinner-cube
					color="green-12"
					size="8em"
					class="flex q-ma-lg q-mx-auto"
				/>
			</div>
			<div v-else>
				<div class="row" v-for="(value, key) in data" :key="key">
					<div class="col-4 text-caption">{{ key }}</div>
					<div class="col">{{ value }}</div>
				</div>
			</div>
		</q-card-section>
	</q-card>
</template>
<script setup>
defineProps({
	title: String,
	data: Object,
	loading: Boolean,
});
</script>
