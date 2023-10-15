<template>
	<div v-if="selected.mode == 1">
		<ListsMode1 />
	</div>
	<div v-if="selected.mode == 2">
		<ListsMode2 />
	</div>

	<pre>{{ listKey }}</pre>
</template>
<script setup>
import { useRoute } from 'vue-router';
import listData from './list-data';
import { onMounted } from 'vue';
import { snakeToKebabCase, kebabToSnakeCase } from 'src/utils/format-text';
import ListsMode1 from 'src/pages/settings/ListsMode1.vue';
import ListsMode2 from 'src/pages/settings/ListsMode2.vue';

const route = useRoute();
const listKey = route.params.listKey;

const selected = listData.find(
	({ value }) => value == kebabToSnakeCase(listKey)
);
// console.log(selected);
</script>
<style lang=""></style>
