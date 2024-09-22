<template lang="">
	<q-toolbar class="q-px-sm" style="min-height: 0">
		<q-toolbar-title class="text-subtitle1">
			<slot></slot>
		</q-toolbar-title>
		<q-btn flat round dense icon="settings" @click="buttonSetting" />
	</q-toolbar>
</template>
<script setup>
/**
 * @deprecated
 */
import { useRouter } from 'vue-router';

const emit = defineEmits(['emitButton']);
const router = useRouter();
function buttonSetting() {
	emit('emitButton');
	router.push('/settings/lists');
}
</script>
<style lang=""></style>
