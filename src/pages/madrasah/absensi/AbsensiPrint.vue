<template lang="">
	<filter-kelas
		:showBulanUjian="false"
		start-url="/madrasah/absensi/print"
		@dataFilter="dataEmit"
	/>
	<h1>cetak absensi</h1>
	<h2>belum selesai</h2>
	<pre>{{ dataFilter }}</pre>
</template>
<script setup>
import FilterKelas from 'src/pages/madrasah/components/FilterKelas.vue';
import { ref } from 'vue';
const dataFilter = ref({});
function dataEmit(val) {
	dataFilter.value = val;
}
</script>
<style lang=""></style>
