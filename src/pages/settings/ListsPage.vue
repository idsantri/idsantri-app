<template>
	<pre>{{ lists }}</pre>
	<pre>{{ listsTitleCase }}</pre>
</template>
<script setup>
import { reactive } from 'vue';
import getData from 'src/api/get-data.js';
import { kebabToTitleCase } from 'src/utils/format-text.js';

const { lists } = await getData({ endPoint: 'lists' });

const listsTitleCase = reactive([]);
lists.forEach((item) => {
	listsTitleCase.push(kebabToTitleCase(item));
});
</script>
