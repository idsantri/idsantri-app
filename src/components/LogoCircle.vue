<template lang="">
	<div
		class="container-logo"
		:style="{ width: `${size}px`, height: `${size}px` }"
	>
		<div>
			<img src="icons/icon-256x256.png" alt="logo/lambang" />
		</div>
	</div>
</template>
<script setup>
defineProps({
	size: {
		type: Number,
		default: 100,
	},
});
</script>
<style lang="scss">
.container-logo {
	overflow: hidden;
	border-radius: 50%;
	background-color: #b9f6ca;
	padding: 4px;

	div {
		background-color: transparent;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: 50%;
		border-style: solid;
		border-color: #1b5e20;
		border-width: 2px;

		img {
			scale: 1.25;
			width: 100%;
			height: 100%;
		}
	}
}
</style>
