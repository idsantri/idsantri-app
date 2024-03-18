<template lang="">
	<q-card style="width: 100%; height: 90%">
		<q-card-section style="width: 100%; height: 100%" class="q-pa-sm">
			<iframe
				:src="apiTokened.defaults.baseURL + '/' + props.url"
				style="height: 100%; width: 100%"
				frameborder="0"
				loading="lazy"
				scrolling="no"
				seamless="seamless"
			>
			</iframe>
		</q-card-section>
	</q-card>
</template>
<script setup>
import { apiTokened } from 'src/api';
const props = defineProps({ url: String });
</script>
<style lang=""></style>
