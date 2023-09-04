<template>
	halo... lists
	<div v-show="spinner">Loading</div>
	<pre>{{ lists }}</pre>
	<pre>{{ listsTitleCase }}</pre>

	<q-spinner-cube
		v-show="spinner"
		color="blue-10"
		size="14em"
		class="absolute-center"
	/>
</template>
<script setup>
import { reactive, ref } from 'vue';
import fetchData from 'src/api/fetch-data.js';
import { kebabToTitleCase } from 'src/utils/format-text.js';
const spinner = ref(false);
const { lists } = await fetchData('lists', spinner);

const listsTitleCase = reactive([]);
lists.forEach((item) => {
	listsTitleCase.push(kebabToTitleCase(item));
});
</script>
