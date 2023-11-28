<template lang="">
	<q-card class="q-mx-sm">
		<q-card-section class="bg-green-8 no-padding">
			<q-toolbar class="no-padding no-margin">
				<q-toolbar-title class="text-subtitle1 q-ml-sm text-green-11">
					Jabatan
				</q-toolbar-title>
				<q-btn
					dense
					class="q-px-md q-mr-sm text-green-10"
					label="Tambah"
					no-caps=""
					icon="add"
					color="green-2"
				/>
			</q-toolbar>
		</q-card-section>
		<q-card-section class="q-pa-sm">
			data jabatan
			<!-- <pre>{{ personalia }}</pre> -->
		</q-card-section>
	</q-card>
</template>
<script setup>
import getData from 'src/api/api-get';
import { formatDateFull } from 'src/utils/format-date';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const loading = ref(false);
onMounted(async () => {});
</script>
<style lang=""></style>
