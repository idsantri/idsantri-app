<template lang="">
	<div>rekap ujian</div>

	<pre>{{ params }}</pre>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const params = {
	thAjaranH: route.params.thAjaranH,
	tingkatId: route.params.tingkatId,
	kelas: route.params.kelas,
	tbu: route.params.tbu,
};
</script>
<style lang=""></style>
