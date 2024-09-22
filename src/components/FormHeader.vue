<template lang="">
	<q-card-section class="bg-green-7 text-green-11 q-pa-sm">
		<q-toolbar class="q-px-sm" style="min-height: 0">
			<q-toolbar-title class="text-subtitle1">
				{{ title }}
				<span v-if="slot" class="text-white">
					&mdash;
					<em>{{ isNew ? 'baru' : 'edit' }}</em>
				</span>
			</q-toolbar-title>
			<slot></slot>
			<span
				v-if="!slot"
				class="text-white text-italic text-weight-light text-subtitle2"
			>
				status:
				<span class="text-weight-medium">
					{{ isNew ? 'baru' : 'edit' }}
				</span>
			</span>
		</q-toolbar>
	</q-card-section>
</template>
<script setup>
/**
	@example
	<FormHeader
		title="Input Desa/Kelurahan"
		:is-new="props.data?.id ? false : true"
	/>
  **/

import { onMounted, ref, useSlots } from 'vue';

defineProps({
	title: { type: String, default: 'Input' },
	isNew: { type: Boolean, default: () => true },
});

const slot = ref(false);
const checkSlotUsage = () =>
	useSlots().default ? (slot.value = true) : (slot.value = false);

onMounted(() => {
	checkSlotUsage();
});
</script>
<style lang=""></style>
