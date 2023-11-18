<template lang="">
	<FilterSelect
		:showBulanUjian="true"
		start-url="/madrasah/test"
		@dataFilter="dataEmit"
	/>
	<div>test</div>
</template>
<script setup>
import FilterSelect from './components/FilterKelas.vue';

function dataEmit(val) {
	console.log(val);
}
</script>
<style lang=""></style>
