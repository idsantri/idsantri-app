<template>
	<q-card>
		<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
			<div class="flex items-center">
				<div class="text-subtitle2">{{ title }}</div>
				<q-space />
			</div>
		</q-card-section>
		<q-card-section class="q-pa-sm">
			<div class="row">
				<div class="col-4 q-pr-sm">
					<q-img :src="image" :ratio="3 / 4" alt="santri" />
					<slot name="button" />
				</div>
				<div class="col">
					<div v-for="(value, key) in props.data" :key="key">
						<div class="text-caption text-italic">{{ key }}</div>
						<div class="q-mb-sm">{{ value }}</div>
					</div>
				</div>
			</div>
		</q-card-section>
	</q-card>
</template>
<script setup>
const props = defineProps({
	title: String,
	data: Object,
	image: String,
});
</script>
