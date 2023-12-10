<template lang="">
	<pre>
		{{ input }}
	</pre
	>
	<h6>indisipliner</h6>
	<!-- <input-select-kota-lahir
		@emit-input="(val) => Object.assign(input, val)"
		:tmp_lahir="input"
	/> -->
</template>
<script setup>
import InputSelectKotaLahir from 'src/components/InputSelectKotaLahir.vue';
import { onMounted, ref } from 'vue';

const input = ref({ tmp_lahir: 'sampang' });
// onMounted(() => {
// 	input.value.tmp_lahir = 'Sampang';
// });
</script>
<style lang=""></style>
