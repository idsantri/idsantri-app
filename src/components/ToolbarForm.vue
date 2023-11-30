<template lang="">
	<q-toolbar class="q-px-sm" style="min-height: 0">
		<q-toolbar-title class="text-subtitle1">
			<slot></slot>
		</q-toolbar-title>
		<q-btn
			flat
			round
			dense
			icon="settings"
			@click="$router.push('/settings/lists')"
		/>
	</q-toolbar>
</template>
<script>
export default {};
</script>
<style lang=""></style>
