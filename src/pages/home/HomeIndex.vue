<template>
	<q-page class="q-pa-sm">
		<div style="margin-top: 50px">
			<div class="text-subtitle1 text-center">Selamat Datang</div>
		</div>
		<logo-circle :size="150" class="q-mx-auto" />
	</q-page>
</template>
<script setup>
import { onMounted } from 'vue';
import LogoCircle from 'components/LogoCircle.vue';

onMounted(async () => {});
</script>

<style lang="scss" scoped></style>
