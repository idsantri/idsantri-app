<template lang="">
	<q-page class="q-pa-sm">
		<q-card class="" style="min-width: 1200px">
			<q-card-section class="bg-green-8 text-green-11 q-pa-sm">
				<q-toolbar
					class="no-padding text-green-11"
					style="min-height: 0"
				>
					<q-toolbar-title class="text-subtitle1">
						Modul Kenaikan Kelas
					</q-toolbar-title>
					<q-btn
						no-caps
						label="Kembali"
						icon="reply"
						dense
						class="q-px-md"
						outline
						@click="$router.go(-1)"
					/>
				</q-toolbar>
			</q-card-section>
			<q-card-section class="no-padding">
				<div class="row">
					<div class="col-6 q-pa-sm">
						<DataLeft />
					</div>
					<div class="col-6 q-pa-sm">
						<DataRight />
					</div>
				</div>
			</q-card-section>
		</q-card>
	</q-page>
</template>
<script setup>
import { onMounted } from 'vue';
import DataLeft from './DataLeft.vue';
import DataRight from './DataRight.vue';

onMounted(() => {
	// console.log(dataMurid.value);
	const toggle = document.getElementById('toggle-drawer');
	if (toggle) toggle.click();
});
</script>
<style lang=""></style>
